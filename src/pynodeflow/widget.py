"""Core NodeFlowWidget implementation."""

import pathlib
import anywidget
import traitlets as t


class NodeFlowWidget(anywidget.AnyWidget):
    """A Jupyter widget wrapping ReactFlow for interactive node graph visualization."""
    
    _esm = pathlib.Path(__file__).parent / "static" / "index.js"
    _css = pathlib.Path(__file__).parent / "static" / "style.css"
    
    # Graph data
    nodes = t.List(trait=t.Dict()).tag(sync=True)
    edges = t.List(trait=t.Dict()).tag(sync=True)
    
    # Viewport state
    viewport = t.Dict(default_value={"x": 0, "y": 0, "zoom": 1}).tag(sync=True)
    
    # Configuration
    fit_view = t.Bool(default_value=True).tag(sync=True)
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
