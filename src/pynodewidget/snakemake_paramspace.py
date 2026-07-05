"""Parameter space for generated Snakemake sweep workflows.

A sweep is described by two files:

- ``sweep.csv`` — the flat combination table. One row per *case*; the case
  column holds the case name (the primary ``{case}`` wildcard) and every other
  column names a parameter *block* for one dimension (e.g. ``mesh``, ``solver``).
- ``params.yaml`` — named, reusable parameter blocks per dimension::

      mesh:
        fine:   {nx: 200, ny: 200}
        coarse: {nx: 50,  ny: 50}
      solver:
        fast:  {tol: 1.0e-3}
        exact: {tol: 1.0e-9}

:class:`YamlParamSpace` ties both together with an API compatible with
``snakemake.utils.Paramspace`` (``wildcard_pattern``, ``instance_patterns``,
``instance``) and can *materialize* the resolved configuration of each
``(case, rule)`` pair as ``configs/{case}/{rule}.json``. Materialized files are
only rewritten when their content changes, so downstream rules that declare
them as inputs re-run exactly when their parameters change.

Blocks may be validated against pydantic models (one model per dimension).

This module is imported by the generated Snakefile at workflow *runtime*, so it
deliberately avoids any widget/anywidget imports: stdlib + pydantic only, with
PyYAML imported lazily.
"""

from __future__ import annotations

import csv
import json
from pathlib import Path
from typing import Any, Dict, List, Mapping, Optional, Sequence, Type, Union

__all__ = [
    "YamlParamSpace",
    "read_sweep_csv",
    "write_sweep_csv",
    "read_params_yaml",
    "write_params_yaml",
]

DEFAULT_CASE_COL = "case"


def _yaml():
    """Import PyYAML lazily (optional dependency)."""
    try:
        import yaml
    except ImportError as e:
        raise ImportError(
            "PyYAML is required for params.yaml support. "
            "Install it with: pip install pyyaml"
        ) from e
    return yaml


# ---------------------------------------------------------------------------
# File I/O
# ---------------------------------------------------------------------------

def read_sweep_csv(
    path: Union[str, Path], case_col: str = DEFAULT_CASE_COL
) -> List[Dict[str, str]]:
    """Read the sweep combination table.

    Args:
        path: Path to the CSV file.
        case_col: Name of the case-name column.

    Returns:
        One dict per row (column -> cell), in file order.

    Raises:
        ValueError: If the case column is missing or case names repeat.
    """
    with open(path, newline="") as fh:
        reader = csv.DictReader(fh)
        fieldnames = reader.fieldnames or []
        if case_col not in fieldnames:
            raise ValueError(
                f"sweep table {path} is missing the '{case_col}' column "
                f"(found: {fieldnames})"
            )
        rows = [{k: (v or "").strip() for k, v in row.items()} for row in reader]

    seen: set = set()
    for row in rows:
        case = row[case_col]
        if case in seen:
            raise ValueError(f"sweep table {path}: duplicate case name '{case}'")
        seen.add(case)
    return rows


def write_sweep_csv(
    path: Union[str, Path],
    rows: List[Dict[str, str]],
    columns: Optional[List[str]] = None,
    case_col: str = DEFAULT_CASE_COL,
) -> None:
    """Write the sweep combination table (deterministic column order).

    Args:
        path: Destination CSV path.
        rows: One dict per row (column -> cell).
        columns: Explicit column order; defaults to the case column followed by
            the remaining columns sorted by name.
        case_col: Name of the case-name column.
    """
    if columns is None:
        others = sorted({k for row in rows for k in row} - {case_col})
        columns = [case_col] + others
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=columns)
        writer.writeheader()
        writer.writerows(rows)


def read_params_yaml(path: Union[str, Path]) -> Dict[str, Dict[str, dict]]:
    """Read the named parameter blocks: ``{dimension: {block_name: params}}``.

    Raises:
        ValueError: If the file is not a mapping of mappings.
    """
    data = _yaml().safe_load(Path(path).read_text())
    if not isinstance(data, dict):
        raise ValueError(f"params file {path}: expected a mapping at the top level")
    for dim, blocks in data.items():
        if not isinstance(blocks, dict):
            raise ValueError(
                f"params file {path}: dimension '{dim}' must map block names "
                f"to parameter dicts"
            )
    return data


def write_params_yaml(
    path: Union[str, Path], blocks: Dict[str, Dict[str, dict]]
) -> None:
    """Write the named parameter blocks (deterministic key order)."""
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(_yaml().safe_dump(blocks, sort_keys=True))


def _write_if_changed(path: Path, text: str) -> bool:
    """Write ``text`` to ``path`` only if the content differs.

    This is the provenance primitive behind :meth:`YamlParamSpace.materialize`:
    unchanged configs keep their mtime, so Snakemake does not re-run their jobs.

    Returns:
        True if the file was (re)written.
    """
    if path.exists() and path.read_text() == text:
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text)
    return True


# ---------------------------------------------------------------------------
# YamlParamSpace
# ---------------------------------------------------------------------------

class YamlParamSpace:
    """A parameter space backed by ``sweep.csv`` + ``params.yaml``.

    Mirrors the ``snakemake.utils.Paramspace`` surface (``wildcard_pattern``,
    ``instance_patterns``, ``instance``) while resolving name columns to nested
    YAML blocks and optionally validating them with pydantic models.

    Args:
        sweep_csv: Path to the combination table.
        params_yaml: Path to the named parameter blocks.
        models: Optional pydantic model per dimension; every referenced block is
            validated against its dimension's model at construction time.
        case_col: Name of the case-name column / wildcard.

    Raises:
        ValueError: On an empty sweep, a sweep column with no matching
            dimension in the params file, an unknown block name, or a block
            failing pydantic validation.
    """

    def __init__(
        self,
        sweep_csv: Union[str, Path],
        params_yaml: Union[str, Path],
        models: Optional[Mapping[str, Type]] = None,
        case_col: str = DEFAULT_CASE_COL,
    ) -> None:
        self.case_col = case_col
        self.rows = read_sweep_csv(sweep_csv, case_col)
        self.blocks = read_params_yaml(params_yaml)
        self.models = dict(models or {})
        if not self.rows:
            raise ValueError(f"sweep table {sweep_csv} has no rows")
        self.dims: List[str] = [k for k in self.rows[0] if k != case_col]
        self._by_case = {row[case_col]: row for row in self.rows}
        self._validate()

    def _validate(self) -> None:
        for dim in self.dims:
            if dim not in self.blocks:
                raise ValueError(
                    f"sweep column '{dim}' has no matching top-level key in the "
                    f"params file (found: {sorted(self.blocks)})"
                )
        for row in self.rows:
            case = row[self.case_col]
            for dim in self.dims:
                block = row[dim]
                if block not in self.blocks[dim]:
                    raise ValueError(
                        f"case '{case}': unknown block '{block}' for dimension "
                        f"'{dim}' (known: {sorted(self.blocks[dim])})"
                    )
        for dim, model in self.models.items():
            for block, params in self.blocks.get(dim, {}).items():
                try:
                    model.model_validate(params)
                except Exception as e:
                    raise ValueError(
                        f"params block '{dim}.{block}' failed validation "
                        f"against {model.__name__}: {e}"
                    ) from e

    # -- snakemake.utils.Paramspace-compatible surface ----------------------

    @property
    def wildcard_pattern(self) -> str:
        """The wildcard pattern identifying one instance (``"{case}"``)."""
        return f"{{{self.case_col}}}"

    @property
    def instance_patterns(self) -> List[str]:
        """The wildcard pattern of each instance — here, the case names."""
        return list(self.cases)

    def instance(self, wildcards) -> Dict[str, Any]:
        """The resolved parameters of one instance: ``{dim: block params}``.

        Args:
            wildcards: A Snakemake wildcards object (attribute access) or a
                plain mapping holding the case column.
        """
        if hasattr(wildcards, self.case_col):
            case = getattr(wildcards, self.case_col)
        else:
            case = wildcards[self.case_col]
        return self.config_for(case)

    # -- extras --------------------------------------------------------------

    @property
    def cases(self) -> List[str]:
        """The case names, in sweep-table order."""
        return [row[self.case_col] for row in self.rows]

    def config_for(
        self, case: str, dims: Optional[Sequence[str]] = None
    ) -> Dict[str, dict]:
        """The resolved parameter blocks of one case, restricted to ``dims``."""
        row = self._by_case.get(case)
        if row is None:
            raise KeyError(f"unknown case '{case}' (known: {self.cases})")
        use = self.dims if dims is None else list(dims)
        for dim in use:
            if dim not in self.dims:
                raise ValueError(
                    f"unknown dimension '{dim}' (sweep columns: {self.dims})"
                )
        return {dim: self.blocks[dim][row[dim]] for dim in use}

    def materialize(
        self,
        rule_dims: Mapping[str, Sequence[str]],
        out_dir: Union[str, Path] = "configs",
    ) -> List[Path]:
        """Write ``{out_dir}/{case}/{rule}.json`` for every (case, rule) pair.

        Each JSON holds only the rule's own dimensions, so editing a block
        rewrites only the configs of rules that use that dimension — and via
        :func:`_write_if_changed` only those whose content actually changed.

        Args:
            rule_dims: Dimensions used by each rule, e.g.
                ``{"simulate": ["mesh", "solver"], "analyze": ["solver"]}``.
            out_dir: Root directory for the materialized configs.

        Returns:
            The paths that were (re)written.
        """
        out_dir = Path(out_dir)
        changed: List[Path] = []
        for case in self.cases:
            for rule, dims in rule_dims.items():
                config = self.config_for(case, dims)
                text = json.dumps(config, sort_keys=True, indent=2) + "\n"
                path = out_dir / case / f"{rule}.json"
                if _write_if_changed(path, text):
                    changed.append(path)
        return changed
