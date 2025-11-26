#%%
from pynodewidget import NodeFlowWidget
from pynodewidget.grid_layouts import (
    create_horizontal_grid_layout,
    create_vertical_grid_layout,
    create_sidebar_grid_layout,
    create_compact_grid_layout,
    create_two_column_grid_layout
)

#%%
# Example 1: Horizontal Grid Layout (Classic: inputs | parameters | outputs)
w1 = NodeFlowWidget()
w1.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "name": {"type": "string", "title": "Name", "default": "processor"},
            "count": {"type": "number", "title": "Count", "default": 10},
            "enabled": {"type": "boolean", "title": "Enabled", "default": True}
        },
        "required": ["name"]
    },
    type_name="horizontal_node",
    label="Horizontal Layout",
    icon="↔️",
    inputs=[
        {"id": "input1", "label": "First Input"},
        {"id": "input2", "label": "Second Input"}
    ],
    outputs=[
        {"id": "output1", "label": "Result"},
        {"id": "output2", "label": "Stats"}
    ],
    grid_layout=create_horizontal_grid_layout(),
    handle_type="base",
    header={
        "show": True,
        "bgColor": "#3b82f6",
        "textColor": "#ffffff"
    }
)
w1

#%%
# Example 2: Vertical Grid Layout (Stacked: inputs / parameters / outputs)
w2 = NodeFlowWidget()
w2.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "temperature": {"type": "number", "title": "Temperature", "default": 0.7},
            "max_tokens": {"type": "integer", "title": "Max Tokens", "default": 1000},
            "model": {"type": "string", "title": "Model", "default": "gpt-4"}
        }
    },
    type_name="vertical_node",
    label="Vertical Layout",
    icon="↕️",
    inputs=[{"id": "prompt", "label": "Prompt"}],
    outputs=[{"id": "response", "label": "Response"}],
    grid_layout=create_vertical_grid_layout(),
    handle_type="button",
    header={
        "show": True,
        "bgColor": "#10b981",
        "textColor": "#ffffff"
    }
)
w2

#%%
# Example 3: Compact Grid Layout (Parameters only, no handles)
w3 = NodeFlowWidget()
w3.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "title": {"type": "string", "title": "Title", "default": "Configuration"},
            "value": {"type": "number", "title": "Value", "default": 42}
        }
    },
    type_name="compact_node",
    label="Compact Layout",
    icon="⬜",
    grid_layout=create_compact_grid_layout(),
    handle_type="labeled",
    header={
        "show": True,
        "bgColor": "#8b5cf6",
        "textColor": "#ffffff"
    }
)
w3

#%%
# Example 4: Sidebar Grid Layout (Fixed sidebars with flexible center)
w4 = NodeFlowWidget()
w4.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "input_path": {"type": "string", "title": "Input Path", "default": "/data/input"},
            "output_path": {"type": "string", "title": "Output Path", "default": "/data/output"},
            "batch_size": {"type": "integer", "title": "Batch Size", "default": 32}
        }
    },
    type_name="sidebar_node",
    label="Sidebar Layout",
    icon="📊",
    inputs=[
        {"id": "data", "label": "Data"},
        {"id": "config", "label": "Config"}
    ],
    outputs=[
        {"id": "processed", "label": "Processed"},
        {"id": "metrics", "label": "Metrics"}
    ],
    grid_layout=create_sidebar_grid_layout(sidebar_width="80px"),
    handle_type="base",
    header={
        "show": True,
        "bgColor": "#ef4444",
        "textColor": "#ffffff"
    },
    style={
        "minWidth": "400px"
    }
)
w4

#%%
# Example 5: Two-Column Grid Layout (Handles on top, parameters below)
w5 = NodeFlowWidget()
w5.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "workers": {"type": "integer", "title": "Workers", "default": 4},
            "timeout": {"type": "number", "title": "Timeout (s)", "default": 30.0},
            "retry": {"type": "boolean", "title": "Auto Retry", "default": True}
        }
    },
    type_name="two_column_node",
    label="Two-Column Layout",
    icon="⚡",
    inputs=[{"id": "in1", "label": "Input"}],
    outputs=[{"id": "out1", "label": "Output"}],
    grid_layout=create_two_column_grid_layout(),
    handle_type="button",
    header={
        "show": True,
        "bgColor": "#f59e0b",
        "textColor": "#ffffff"
    }
)
w5

#%%
# Example 6: Multiple nodes in one widget showing different layouts
w_all = NodeFlowWidget(height="800px")

# Add all layouts to one widget
w_all.add_node_type_from_schema(
    json_schema={"type": "object", "properties": {
        "value": {"type": "number", "title": "Value", "default": 1}
    }},
    type_name="horizontal",
    label="Horizontal",
    icon="↔️",
    inputs=[{"id": "in", "label": "In"}],
    outputs=[{"id": "out", "label": "Out"}],
    grid_layout=create_horizontal_grid_layout(),
    header={"show": True, "bgColor": "#3b82f6", "textColor": "#fff"}
)

w_all.add_node_type_from_schema(
    json_schema={"type": "object", "properties": {
        "value": {"type": "number", "title": "Value", "default": 2}
    }},
    type_name="vertical",
    label="Vertical",
    icon="↕️",
    inputs=[{"id": "in", "label": "In"}],
    outputs=[{"id": "out", "label": "Out"}],
    grid_layout=create_vertical_grid_layout(),
    header={"show": True, "bgColor": "#10b981", "textColor": "#fff"}
)

w_all.add_node_type_from_schema(
    json_schema={"type": "object", "properties": {
        "value": {"type": "number", "title": "Value", "default": 3}
    }},
    type_name="compact",
    label="Compact",
    icon="⬜",
    grid_layout=create_compact_grid_layout(),
    header={"show": True, "bgColor": "#8b5cf6", "textColor": "#fff"}
)

w_all
# %%
