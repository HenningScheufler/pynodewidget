#%%
from pynodewidget import NodeFlowWidget
from pynodewidget.grid_layouts import create_three_column_grid
from pynodewidget.models import ButtonHandle, NumberField, LabeledHandle, TextField

# Create widget with v2.0 Simplified API
# NOTE: If you updated the code, restart the kernel to get the latest version
widget = NodeFlowWidget()

# Create grid layout using helper function
# Note: labels are now optional and default to the component id
# id="value" -> label="value", id="name" -> label="name", etc.
grid_layout = create_three_column_grid(
    left_components=[
        LabeledHandle(id="input", handle_type="input")
    ],
    center_components=[
        NumberField(id="value", value=50, min=0, max=100),
        TextField(id="name", value="Processor")
    ],
    right_components=[
        LabeledHandle(id="output", handle_type="output")
    ]
)

widget.add_node_type(
    type_name="processor",
    label="Processor",
    icon="⚙️",
    grid_layout=grid_layout
)
widget

#%%
# Understanding widget.nodes vs widget.values (v2.0 Simplified API)
# 
# widget.nodes   - Node metadata (id, type, position, measured size)
# widget.values  - Node field values (synced with UI components)
#
# After adding a node, both are automatically populated:
print("Node metadata:", widget.nodes)
print("Node values:", dict(widget.values))

# Modify values with Pythonic dict syntax (v2.0 API)
node_id = list(widget.nodes.keys())[0] if widget.nodes else None
if node_id:
    # Update a value
    widget.values[node_id]["value"] = 75
    print(f"\n✅ Updated value: {widget.values[node_id]['value']}")
    
    # Read a value
    current_value = widget.values[node_id].get("value", 50)
    print(f"✅ Current value: {current_value}")

# View all registered templates and their default values
print(f"\nRegistered templates:")
for template in widget.templates:
    print(f"  - {template['label']}: defaultValues = {template.get('defaultValues', {})}")
# %%
# For Marimo users: call notify_value_change() after batch updates
widget.values[node_id]["value"] = 60
widget.values[node_id]["name"] = "adfadsasdf"
widget.notify_value_change()  # Ensures frontend updates in Marimo
# %%
