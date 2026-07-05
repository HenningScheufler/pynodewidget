"""Pydantic models for the snakeflow example.

Each model validates one parameter *dimension*: the named blocks in
``params.yaml`` (e.g. ``mesh.fine``) must parse into these models. The
generated Snakefile imports this module at workflow runtime.
"""

from pydantic import BaseModel


class MeshCfg(BaseModel):
    nx: int = 100
    ny: int = 100


class SolverCfg(BaseModel):
    tol: float = 1e-6
    scheme: str = "implicit"


class MaterialCfg(BaseModel):
    density: float = 1000.0
    viscosity: float = 1e-3
