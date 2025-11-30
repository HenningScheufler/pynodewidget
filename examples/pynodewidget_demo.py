import marimo

__generated_with = "0.18.0"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _():
    from pynodewidget import NodeFlowWidget
    return (NodeFlowWidget,)


@app.cell
def _(NodeFlowWidget, mo):
    w1 = NodeFlowWidget()
    w1.add_node_type_from_schema(
        json_schema= {
                    "type": "object",
                    "properties": {
                        "name": {"type": "string", "title": "Name", "default": "processor"},
                        "count": {"type": "number", "title": "Count", "default": 10},
                        "enabled": {"type": "boolean", "title": "Enabled", "default": True}
                    },
                    "required": ["name"]
                },
        type_name="my_node",
        label="My Node",
        icon="⚙️"
    )
    w1 = mo.ui.anywidget(w1)
    w1
    return (w1,)


@app.cell
def _(w1):
    data = [node["data"]["values"] for node in w1.nodes]
    data
    return


@app.cell
def _(w1):
    w1.edges
    return


@app.cell
def _(NodeFlowWidget, mo):
    # Define node templates with JSON schemas
    node_templates = [
        {
            "type": "processor",
            "label": "Data Processor",
            "description": "Process data with configurable parameters",
            "defaultData": {
                "label": "Data Processor",
                "schema": {
                    "type": "object",
                    "properties": {
                        "name": {"type": "string", "title": "Name", "default": "processor"},
                        "count": {"type": "number", "title": "Count", "default": 10},
                        "enabled": {"type": "boolean", "title": "Enabled", "default": True}
                    },
                    "required": ["name"]
                },
                "inputs": ["input"],
                "outputs": ["output"]
            }
        },
        {
            "type": "filter",
            "label": "Filter Node",
            "description": "Filter data based on threshold",
            "defaultData": {
                "label": "Filter",
                "schema": {
                    "type": "object",
                    "properties": {
                        "threshold": {"type": "number", "title": "Threshold", "default": 0.5},
                        "filterType": {"type": "string", "title": "Filter Type", "enum": ["low", "high", "band"]}
                    }
                },
                "inputs": ["in"],
                "outputs": ["out"]
            }
        },
        {
            "type": "output",
            "label": "Output Node",
            "description": "Display or export results",
            "defaultData": {
                "label": "Output",
                "schema": {
                    "type": "object",
                    "properties": {
                        "format": {"type": "string", "title": "Format", "enum": ["json", "csv", "xml"]}
                    }
                },
                "inputs": ["data"]
            }
        }
    ]

    # Create widget with initial nodes and templates
    widget = mo.ui.anywidget(NodeFlowWidget(
        nodes=[
            {
                "id": "1",
                "type": "processor",
                "position": {"x": 50, "y": 50},
                "data": {
                    "label": "Data Processor",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string", "title": "Name", "default": "processor"},
                            "count": {"type": "number", "title": "Count", "default": 10}
                        }
                    },
                    "inputs": ["input"],
                    "outputs": ["output"]
                }
            }
        ],
        edges=[],
        node_templates=node_templates
    ))
    return (widget,)


@app.cell
def _(widget):
    widget
    return


@app.cell
def _():
    return


@app.cell
def _(widget):
    widget.get_flow_data()
    return


@app.cell
def _(NodeFlowWidget):
    # Create a widget
    widget2 = NodeFlowWidget(height="500px")

    # Example 1: Add node types with emoji icons
    widget2.add_node_type_from_schema(
        json_schema={
            "type": "object",
            "properties": {
                "filename": {"type": "string", "title": "File Path"},
                "format": {"type": "string", "enum": ["csv", "json", "parquet"]}
            }
        },
        type_name="data_source",
        label="Data Source",
        description="Load data from file",
        icon="📁",  # Folder icon
        inputs=[],
        outputs=["data"]
    )

    widget2.add_node_type_from_schema(
        json_schema={
            "type": "object",
            "properties": {
                "operation": {"type": "string", "enum": ["mean", "sum", "count"]},
                "column": {"type": "string"}
            }
        },
        type_name="transform",
        label="Transform",
        description="Apply data transformation",
        icon="⚙️",  # Gear icon
        inputs=["data"],
        outputs=["data"]
    )

    widget2.add_node_type_from_schema(
        json_schema={
            "type": "object",
            "properties": {
                "chart_type": {"type": "string", "enum": ["bar", "line", "scatter"]},
                "x_axis": {"type": "string"},
                "y_axis": {"type": "string"}
            }
        },
        type_name="visualization",
        label="Visualization",
        description="Create a chart",
        icon="📊",  # Chart icon
        inputs=["data"],
        outputs=[]
    )

    widget2.add_node_type_from_schema(
        json_schema={
            "type": "object",
            "properties": {
                "model_type": {"type": "string", "enum": ["linear", "logistic", "random_forest"]},
                "test_size": {"type": "number", "minimum": 0.1, "maximum": 0.5}
            }
        },
        type_name="ml_model",
        label="ML Model",
        description="Train a machine learning model",
        icon="🤖",  # Robot icon
        inputs=["training_data"],
        outputs=["model"]
    )

    widget2.add_node_type_from_schema(
        json_schema={
            "type": "object",
            "properties": {
                "output_path": {"type": "string"},
                "overwrite": {"type": "boolean"}
            }
        },
        type_name="save_output",
        label="Save Output",
        description="Save results to file",
        icon="💾",  # Floppy disk icon
        inputs=["data"],
        outputs=[]
    )

    # Additional examples with different icon styles:

    # Math/computation icons
    widget2.add_node_type_from_schema(
        json_schema={"type": "object", "properties": {"expression": {"type": "string"}}},
        type_name="calculator",
        label="Calculator",
        icon="🔢",
        inputs=["input"],
        outputs=["result"]
    )

    # Network/API icons
    widget2.add_node_type_from_schema(
        json_schema={"type": "object", "properties": {"url": {"type": "string"}}},
        type_name="api_call",
        label="API Call",
        icon="🌐",
        inputs=["params"],
        outputs=["response"]
    )

    # Filter/process icons
    widget2.add_node_type_from_schema(
        json_schema={"type": "object", "properties": {"condition": {"type": "string"}}},
        type_name="filter",
        label="Filter",
        icon="🔍",
        inputs=["data"],
        outputs=["filtered"]
    )

    # Database icons
    widget2.add_node_type_from_schema(
        json_schema={"type": "object", "properties": {"query": {"type": "string"}}},
        type_name="database",
        label="Database Query",
        icon="🗄️",
        inputs=["connection"],
        outputs=["results"]
    )

    # Display the widget2
    widget2
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
