"""Tests for the sweep.csv + params.yaml parameter space."""

import json
from pathlib import Path

import pytest
from pydantic import BaseModel

pytest.importorskip("yaml")

from pynodewidget.snakemake_paramspace import (
    YamlParamSpace,
    read_params_yaml,
    read_sweep_csv,
    write_params_yaml,
    write_sweep_csv,
)


class MeshCfg(BaseModel):
    nx: int = 100
    ny: int = 100


class SolverCfg(BaseModel):
    tol: float = 1e-6
    scheme: str = "implicit"


ROWS = [
    {"case": "caseA", "mesh": "fine", "solver": "fast"},
    {"case": "caseB", "mesh": "coarse", "solver": "exact"},
]

BLOCKS = {
    "mesh": {
        "fine": {"nx": 200, "ny": 200},
        "coarse": {"nx": 50, "ny": 50},
    },
    "solver": {
        "fast": {"tol": 1e-3, "scheme": "explicit"},
        "exact": {"tol": 1e-9, "scheme": "implicit"},
    },
}

MODELS = {"mesh": MeshCfg, "solver": SolverCfg}


@pytest.fixture
def sweep_files(tmp_path):
    """A valid sweep.csv + params.yaml pair on disk."""
    sweep = tmp_path / "sweep.csv"
    params = tmp_path / "params.yaml"
    write_sweep_csv(sweep, ROWS)
    write_params_yaml(params, BLOCKS)
    return sweep, params


def test_sweep_csv_roundtrip(tmp_path):
    """Rows written with write_sweep_csv read back identically."""
    path = tmp_path / "sweep.csv"
    write_sweep_csv(path, ROWS)
    assert read_sweep_csv(path) == ROWS
    # Deterministic column order: case first, then sorted dimensions.
    assert path.read_text().splitlines()[0] == "case,mesh,solver"


def test_sweep_csv_missing_case_column(tmp_path):
    path = tmp_path / "sweep.csv"
    path.write_text("name,mesh\nx,fine\n")
    with pytest.raises(ValueError, match="'case' column"):
        read_sweep_csv(path)


def test_sweep_csv_duplicate_case(tmp_path):
    path = tmp_path / "sweep.csv"
    path.write_text("case,mesh\na,fine\na,coarse\n")
    with pytest.raises(ValueError, match="duplicate case name 'a'"):
        read_sweep_csv(path)


def test_params_yaml_roundtrip_deterministic(tmp_path):
    """Blocks round-trip, and writing twice yields identical bytes."""
    path = tmp_path / "params.yaml"
    write_params_yaml(path, BLOCKS)
    first = path.read_text()
    assert read_params_yaml(path) == BLOCKS
    write_params_yaml(path, BLOCKS)
    assert path.read_text() == first


def test_params_yaml_rejects_non_mapping(tmp_path):
    path = tmp_path / "params.yaml"
    path.write_text("- just\n- a list\n")
    with pytest.raises(ValueError, match="mapping at the top level"):
        read_params_yaml(path)


def test_paramspace_api(sweep_files):
    """The Paramspace-compatible surface: pattern, instances, resolution."""
    space = YamlParamSpace(*sweep_files, models=MODELS)

    assert space.wildcard_pattern == "{case}"
    assert space.cases == ["caseA", "caseB"]
    assert space.instance_patterns == ["caseA", "caseB"]
    assert space.dims == ["mesh", "solver"]

    # instance() accepts a mapping or an attribute-style wildcards object.
    cfg = space.instance({"case": "caseA"})
    assert cfg == {"mesh": BLOCKS["mesh"]["fine"], "solver": BLOCKS["solver"]["fast"]}

    class Wildcards:
        case = "caseB"

    cfg_b = space.instance(Wildcards())
    assert cfg_b["mesh"] == BLOCKS["mesh"]["coarse"]


def test_config_for_restricts_dims(sweep_files):
    space = YamlParamSpace(*sweep_files)
    assert space.config_for("caseA", ["solver"]) == {
        "solver": BLOCKS["solver"]["fast"]
    }
    with pytest.raises(KeyError, match="unknown case"):
        space.config_for("nope")
    with pytest.raises(ValueError, match="unknown dimension"):
        space.config_for("caseA", ["nope"])


def test_unknown_block_raises(tmp_path):
    sweep = tmp_path / "sweep.csv"
    params = tmp_path / "params.yaml"
    write_sweep_csv(sweep, [{"case": "x", "mesh": "ultra"}])
    write_params_yaml(params, {"mesh": BLOCKS["mesh"]})
    with pytest.raises(ValueError, match="unknown block 'ultra' for dimension 'mesh'"):
        YamlParamSpace(sweep, params)


def test_missing_dimension_raises(tmp_path):
    sweep = tmp_path / "sweep.csv"
    params = tmp_path / "params.yaml"
    write_sweep_csv(sweep, [{"case": "x", "mesh": "fine"}])
    write_params_yaml(params, {"solver": BLOCKS["solver"]})
    with pytest.raises(ValueError, match="sweep column 'mesh'"):
        YamlParamSpace(sweep, params)


def test_pydantic_validation_error_names_block(tmp_path):
    sweep = tmp_path / "sweep.csv"
    params = tmp_path / "params.yaml"
    write_sweep_csv(sweep, [{"case": "x", "mesh": "bad"}])
    write_params_yaml(params, {"mesh": {"bad": {"nx": "not-a-number", "ny": 1}}})
    with pytest.raises(ValueError, match="'mesh.bad' failed validation against MeshCfg"):
        YamlParamSpace(sweep, params, models={"mesh": MeshCfg})


RULE_DIMS = {"simulate": ["mesh", "solver"], "analyze": ["solver"]}


def test_materialize_writes_per_rule_configs(sweep_files, tmp_path):
    space = YamlParamSpace(*sweep_files, models=MODELS)
    out = tmp_path / "configs"

    changed = space.materialize(RULE_DIMS, out_dir=out)
    assert sorted(p.relative_to(out).as_posix() for p in changed) == [
        "caseA/analyze.json",
        "caseA/simulate.json",
        "caseB/analyze.json",
        "caseB/simulate.json",
    ]

    # Each JSON holds only the rule's own dimensions.
    analyze_a = json.loads((out / "caseA" / "analyze.json").read_text())
    assert analyze_a == {"solver": BLOCKS["solver"]["fast"]}
    simulate_a = json.loads((out / "caseA" / "simulate.json").read_text())
    assert set(simulate_a) == {"mesh", "solver"}


def test_materialize_is_idempotent(sweep_files, tmp_path):
    """A second materialize with unchanged params writes nothing (mtimes keep)."""
    space = YamlParamSpace(*sweep_files)
    out = tmp_path / "configs"
    space.materialize(RULE_DIMS, out_dir=out)
    mtimes = {p: p.stat().st_mtime_ns for p in out.rglob("*.json")}

    changed = space.materialize(RULE_DIMS, out_dir=out)
    assert changed == []
    assert {p: p.stat().st_mtime_ns for p in out.rglob("*.json")} == mtimes


def test_materialize_rewrites_only_affected(sweep_files, tmp_path):
    """Changing one solver block only rewrites configs that contain it."""
    sweep, params = sweep_files
    space = YamlParamSpace(sweep, params)
    out = tmp_path / "configs"
    space.materialize(RULE_DIMS, out_dir=out)

    blocks = read_params_yaml(params)
    blocks["solver"]["fast"]["tol"] = 5e-4  # only caseA uses 'fast'
    write_params_yaml(params, blocks)

    changed = space.__class__(sweep, params).materialize(RULE_DIMS, out_dir=out)
    assert sorted(p.relative_to(out).as_posix() for p in changed) == [
        "caseA/analyze.json",
        "caseA/simulate.json",
    ]
