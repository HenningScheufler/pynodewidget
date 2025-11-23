import marimo

__generated_with = "0.18.0"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    # Workflow Progress Visualization Demo

    This notebook demonstrates real-time progress visualization in PyNodeWidget nodes.

    ## Features:
    - **Progress bar field** - Custom field type that displays visual progress
    - **Real-time updates** - Python updates sync to frontend automatically
    - **Multi-node workflow** - Simulate a data processing pipeline
    - **Thread-based execution** - Non-blocking progress updates
    """)
    return


@app.cell
def _():
    from pydantic import BaseModel, Field
    from pynodewidget import NodeFlowWidget, JsonSchemaNodeWidget
    import time
    import threading
    return (
        BaseModel,
        Field,
        JsonSchemaNodeWidget,
        NodeFlowWidget,
        threading,
        time,
    )


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    ## Define Workflow Nodes with Progress Fields

    Each node has a `progress` field with `json_schema_extra={"type": "progress"}` to use the custom progress bar renderer.
    """)
    return


@app.cell
def _(BaseModel, Field):
    class DataLoaderParams(BaseModel):
        """Parameters for data loading node."""
        source: str = Field(default="database", description="Data source")
        batch_size: int = Field(default=100, ge=1, le=1000, description="Batch size")
        progress: int = Field(
            default=0,
            ge=0,
            le=100,
            description="Loading progress",
            json_schema_extra={"type": "progress"}
        )


    class ProcessorParams(BaseModel):
        """Parameters for data processing node."""
        algorithm: str = Field(default="transform", description="Processing algorithm")
        workers: int = Field(default=4, ge=1, le=16, description="Number of workers")
        progress: int = Field(
            default=0,
            ge=0,
            le=100,
            description="Processing progress",
            json_schema_extra={"type": "progress"}
        )


    class AnalyzerParams(BaseModel):
        """Parameters for analysis node."""
        method: str = Field(default="statistical", description="Analysis method")
        confidence: float = Field(default=0.95, ge=0, le=1, description="Confidence level")
        progress: int = Field(
            default=0,
            ge=0,
            le=100,
            description="Analysis progress",
            json_schema_extra={"type": "progress"}
        )


    class OutputParams(BaseModel):
        """Parameters for output node."""
        format: str = Field(default="json", description="Output format")
        compress: bool = Field(default=False, description="Compress output")
        progress: int = Field(
            default=0,
            ge=0,
            le=100,
            description="Export progress",
            json_schema_extra={"type": "progress"}
        )
    return AnalyzerParams, DataLoaderParams, OutputParams, ProcessorParams


@app.cell
def _(
    AnalyzerParams,
    DataLoaderParams,
    JsonSchemaNodeWidget,
    OutputParams,
    ProcessorParams,
):
    class DataLoaderNode(JsonSchemaNodeWidget):
        """Load data from source."""
        label = "Data Loader"
        parameters = DataLoaderParams
        icon = "📥"
        description = "Load data from various sources"
        outputs = [{"id": "data", "label": "Data"}]


    class ProcessorNode(JsonSchemaNodeWidget):
        """Process data with configurable algorithm."""
        label = "Processor"
        parameters = ProcessorParams
        icon = "⚙️"
        description = "Process data with selected algorithm"
        inputs = [{"id": "input", "label": "Input"}]
        outputs = [{"id": "output", "label": "Output"}]


    class AnalyzerNode(JsonSchemaNodeWidget):
        """Analyze processed data."""
        label = "Analyzer"
        parameters = AnalyzerParams
        icon = "📊"
        description = "Perform statistical analysis"
        inputs = [{"id": "data", "label": "Data"}]
        outputs = [{"id": "results", "label": "Results"}]


    class OutputNode(JsonSchemaNodeWidget):
        """Export results to file."""
        label = "Output"
        parameters = OutputParams
        icon = "💾"
        description = "Save results to file"
        inputs = [{"id": "results", "label": "Results"}]
    return AnalyzerNode, DataLoaderNode, OutputNode, ProcessorNode


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    ## Create the Workflow Widget

    Initialize the widget with all node types and create a sample workflow pipeline.
    """)
    return


@app.cell
def _(
    AnalyzerNode,
    DataLoaderNode,
    NodeFlowWidget,
    OutputNode,
    ProcessorNode,
    mo,
):
    # Create widget with all node types
    flow = NodeFlowWidget(
        nodes=[DataLoaderNode, ProcessorNode, AnalyzerNode, OutputNode],
        height="700px"
    )

    # Create a sample workflow with 4 nodes
    flow.nodes = [
        {
            "id": "loader-1",
            "type": "data_loader_node",
            "position": {"x": 50, "y": 100},
            "data": {
                "label": "Data Loader",
                "parameters": flow.node_templates[0]["defaultData"]["parameters"],
                "outputs": [{"id": "data", "label": "Data"}],
                "inputs": []
            }
        },
        {
            "id": "processor-1",
            "type": "processor_node",
            "position": {"x": 350, "y": 100},
            "data": {
                "label": "Processor",
                "parameters": flow.node_templates[1]["defaultData"]["parameters"],
                "inputs": [{"id": "input", "label": "Input"}],
                "outputs": [{"id": "output", "label": "Output"}]
            }
        },
        {
            "id": "analyzer-1",
            "type": "analyzer_node",
            "position": {"x": 650, "y": 100},
            "data": {
                "label": "Analyzer",
                "parameters": flow.node_templates[2]["defaultData"]["parameters"],
                "inputs": [{"id": "data", "label": "Data"}],
                "outputs": [{"id": "results", "label": "Results"}]
            }
        },
        {
            "id": "output-1",
            "type": "output_node",
            "position": {"x": 950, "y": 100},
            "data": {
                "label": "Output",
                "parameters": flow.node_templates[3]["defaultData"]["parameters"],
                "inputs": [{"id": "results", "label": "Results"}],
                "outputs": []
            }
        }
    ]

    # Connect the nodes
    flow.edges = [
        {
            "id": "e1-2",
            "source": "loader-1",
            "target": "processor-1",
            "sourceHandle": "data",
            "targetHandle": "input"
        },
        {
            "id": "e2-3",
            "source": "processor-1",
            "target": "analyzer-1",
            "sourceHandle": "output",
            "targetHandle": "data"
        },
        {
            "id": "e3-4",
            "source": "analyzer-1",
            "target": "output-1",
            "sourceHandle": "results",
            "targetHandle": "results"
        }
    ]

    # Manually populate node_values from nodes (observer might not fire before anywidget wrap)
    for node in flow.nodes:
        node_id = node['id']
        if node_id not in flow.node_values:
            default_values = {}
            parameters = node.get('data', {}).get('parameters', {})
            if parameters and 'properties' in parameters:
                for key, prop in parameters['properties'].items():
                    if 'default' in prop:
                        default_values[key] = prop['default']
            flow.node_values = {**flow.node_values, node_id: default_values}

    flow = mo.ui.anywidget(flow)
    flow
    return flow, node_id


@app.cell
def _(mo):
    # Use the convenience method to get node value
    worker_value = 5
    slider = mo.ui.slider(start=0,stop=20,step=1,value=worker_value)
    mo.vstack([
        mo.md("processor worker slider"),
        slider
    ])
    return (slider,)


@app.cell
def _(flow, slider):
    flow.node_values["processor-1"]["workers"] = slider.value
    return


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    ## Execute Workflow with Progress Updates

    Simulate workflow execution where each node updates its progress in real-time.
    """)
    return


@app.cell
def _(threading, time):
    def simulate_node_execution(flow_widget, node_id, duration=2.0, steps=20):
        """
        Simulate node execution by updating progress from 0 to 100.

        Args:
            flow_widget: NodeFlowWidget instance
            node_id: ID of the node to update
            duration: Total duration in seconds
            steps: Number of progress updates
        """
        step_duration = duration / steps
        for i in range(steps + 1):
            progress = int((i / steps) * 100)
            flow_widget.update_node_value(node_id, 'progress', progress)
            time.sleep(step_duration)


    def execute_workflow(flow_widget, sequential=True):
        """
        Execute the workflow by simulating each node's processing.

        Args:
            flow_widget: NodeFlowWidget instance
            sequential: If True, execute nodes one by one; if False, execute in parallel
        """
        # Reset all progress to 0
        for node in flow_widget.nodes:
            flow_widget.update_node_value(node["id"], 'progress', 0)

        print("🚀 Starting workflow execution...")

        if sequential:
            # Execute nodes sequentially
            node_ids = ["loader-1", "processor-1", "analyzer-1", "output-1"]
            node_names = ["Data Loader", "Processor", "Analyzer", "Output"]

            for node_id, node_name in zip(node_ids, node_names):
                print(f"  ▶️  Executing {node_name}...")
                simulate_node_execution(flow_widget, node_id, duration=2.0, steps=20)
                print(f"  ✅ {node_name} complete")
        else:
            # Execute nodes in parallel (simulating parallel processing)
            threads = []
            for node in flow_widget.nodes:
                thread = threading.Thread(
                    target=simulate_node_execution,
                    args=(flow_widget, node["id"], 3.0, 30)
                )
                threads.append(thread)
                thread.start()

            # Wait for all threads to complete
            for thread in threads:
                thread.join()

        print("🎉 Workflow execution complete!")
    return (execute_workflow,)


@app.cell
def _(mo):
    # Execute the workflow sequentially
    run_sequential_button = mo.ui.run_button(
        label="▶️ Run Sequential Workflow"
    )

    run_sequential_button
    return (run_sequential_button,)


@app.cell
def _(execute_workflow, flow, run_sequential_button):
    if run_sequential_button.value:
        execute_workflow(flow, sequential=True)
    return


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    ## Execute in Parallel

    Run all nodes simultaneously to see parallel progress updates.
    """)
    return


@app.cell
def _(mo):
    # Execute all nodes in parallel
    run_parallel_button = mo.ui.run_button(
        label="▶️ Run Parallel Workflow"
    )
    run_parallel_button
    return (run_parallel_button,)


@app.cell
def _(execute_workflow, flow, run_parallel_button):
    if run_parallel_button.value:
        execute_workflow(flow, sequential=False)
    return


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    ## Manual Progress Control

    You can also manually update progress for individual nodes.
    """)
    return


@app.cell
def _(mo):
    loader_slider = mo.ui.slider(0, 100, value=0, label="Data Loader Progress")
    processor_slider = mo.ui.slider(0, 100, value=0, label="Processor Progress")
    analyzer_slider = mo.ui.slider(0, 100, value=0, label="Analyzer Progress")
    output_slider = mo.ui.slider(0, 100, value=0, label="Output Progress")


    mo.vstack([loader_slider, processor_slider, analyzer_slider, output_slider])
    return analyzer_slider, loader_slider, output_slider, processor_slider


@app.cell
def _(analyzer_slider, flow, loader_slider, output_slider, processor_slider):
    # Update progress based on sliders
    flow.update_node_value("loader-1", 'progress', loader_slider.value)
    flow.update_node_value("processor-1", 'progress', processor_slider.value)
    flow.update_node_value("analyzer-1", 'progress', analyzer_slider.value)
    flow.update_node_value("output-1", 'progress', output_slider.value)
    return


@app.cell
def _(mo):
    # Reset button
    reset_button = mo.ui.button(label="🔄 Reset All Progress")

    reset_button
    return (reset_button,)


@app.cell
def _(flow, reset_button):
    if reset_button.value:
        for n in flow.nodes:
            flow.update_node_value(n["id"], 'progress', 0)
        print("✓ All progress reset to 0")
    return


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    ## Inspect Current State

    Check the current progress values of all nodes.
    """)
    return


@app.cell
def _(flow, node_id):
    # Display current progress for all nodes from node_values
    for node_id1, values in flow.node_values.items():
        # Find node to get label
        n1 = next((n for n in flow.nodes if n['id'] == node_id), None)
        if n1:
            label = n1["data"]["label"]
            progress = values.get('progress', 0)
            print(f"{label} ({node_id1}): {progress}%")
    return


@app.cell(hide_code=True)
def _(mo):
    mo.md("""
    ## Background Execution Example

    Run workflow in a background thread to keep the notebook responsive.
    """)
    return


@app.cell
def _(execute_workflow, flow, mo, threading):
    def run_workflow_background():
        """Run workflow in background thread."""
        thread = threading.Thread(target=execute_workflow, args=(flow, True))
        thread.start()
        print("🔄 Workflow started in background...")
        return thread

    # Start workflow in background
    bg_button = mo.ui.run_button(label="🔄 Run in Background")

    bg_button
    return bg_button, run_workflow_background


@app.cell
def _(bg_button, run_workflow_background):
    if bg_button.value:
        bg_thread = run_workflow_background()
    return


if __name__ == "__main__":
    app.run()
