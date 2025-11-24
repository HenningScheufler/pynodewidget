#%%
from pynodewidget import NodeFlowWidget

#%%
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
    icon="⚙️",
    inputs=[
        {"id": "input1", "label": "First Input"},
        {"id": "input2", "label": "Second Input"}
    ],
    outputs=[
        {"id": "output1", "label": "Result"},
        {"id": "output2", "label": "Stats"}
    ]
)
w1
# %%
