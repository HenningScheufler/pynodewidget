# Examples

Working examples demonstrating PyNodeWidget features. All examples are runnable Python scripts in the [`examples/`](https://github.com/HenningScheufler/pynodewidget/tree/main/examples) directory.

## Quick Reference

| Example | Features | File |
|---------|----------|------|
| **Node Classes** | Pydantic models, class-based nodes | `node_class_example.py` |
| **Custom Fields** | Color pickers, date selectors, custom inputs | `custom_fields_example.py` |
| **Labeled Handles** | Named inputs/outputs, multiple handles | `labeled_handles_example.py` |
| **Widget Registration** | Bulk node registration, workflow setup | `widget_registration_example.py` |
| **Icons** | Emoji icons, visual node types | `icon_example.py` |
| **Demo Workflows** | Complete workflows in Jupyter/Marimo | `pynodewidget_demo.py`, `*.ipynb` |

---

## Node Class Example

**File:** `node_class_example.py`

Demonstrates the modern class-based API using Pydantic models:

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget

class ProcessorParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0.0, le=1.0)
    mode: str = Field(default="auto")

class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    icon = "⚙️"
    inputs = [{"id": "in"}]
    outputs = [{"id": "out"}]
```

**Key concepts:** Pydantic validation, type hints, automatic JSON schema generation.

---

## Custom Fields Example

**File:** `custom_fields_example.py`

Shows how to register custom field types (color pickers, date selectors, textareas):

```python
class StyledBoxParams(BaseModel):
    background: str = Field(default="#3498db", json_schema_extra={"type": "color"})
    border: str = Field(default="#ffffff", json_schema_extra={"type": "color"})
    opacity: int = Field(default=100, json_schema_extra={"type": "slider"})
```

**JavaScript:**
```typescript
import { fieldRegistry } from 'pynodewidget';

fieldRegistry.register("color", ({ value, onChange }) => (
  <input type="color" value={value} onChange={(e) => onChange(e.target.value)} />
));
```

**Key concepts:** Field registry, custom renderers, `json_schema_extra` override.

---

## Labeled Handles Example

**File:** `labeled_handles_example.py`

Multiple named inputs/outputs with labels:

```python
widget.add_node_type_from_schema(
    json_schema={...},
    type_name="join",
    label="Join",
    icon="🔗",
    inputs=[
        {"id": "left", "label": "Left Data"},
        {"id": "right", "label": "Right Data"}
    ],
    outputs=[
        {"id": "merged", "label": "Merged Data"},
        {"id": "stats", "label": "Statistics"}
    ]
)
```

**Key concepts:** Multiple handles, labeled connections, data flow.

---

## Widget Registration Example

**File:** `widget_registration_example.py`

Bulk registration of multiple node classes:

```python
from pynodewidget import NodeFlowWidget

widget = NodeFlowWidget(
    nodes=[
        DataSourceNode,
        FilterNode,
        AggregateNode,
        VisualizationNode
    ],
    height="700px"
)
```

**Key concepts:** Batch registration, workflow setup, node reuse.

---

## Icon Example

**File:** `icon_example.py`

Using emoji and Unicode icons for visual node types:

```python
widget.add_node_type_from_schema(
    json_schema={...},
    type_name="data_source",
    label="Data Source",
    icon="📁",  # Folder emoji
    ...
)
```

**Common icons:** 📁 (files), ⚙️ (processing), 📊 (visualization), 🔗 (join), 📤 (output)

---

## Demo Workflows

### Jupyter Notebook
**File:** `pynodewidget_demo.ipynb`

Interactive workflow in Jupyter with live updates.

### Marimo
**File:** `pynodewidget_demo_marimo.py`

Reactive workflow in Marimo with automatic execution.

**Key concepts:** Jupyter integration, reactive programming, AnyWidget communication.

---

## Running Examples

### Basic Usage

```bash
# Run any example
python examples/node_class_example.py

# Or in Jupyter
jupyter notebook examples/pynodewidget_demo.ipynb

# Or in Marimo
marimo edit examples/pynodewidget_demo_marimo.py
```

### Custom Fields

Custom fields require JavaScript registration. See [Field Registry](../developer/field-registry.md) for setup.

---

## Example Structure

Most examples follow this pattern:

1. **Define Parameters** - Pydantic models with Field validators
2. **Define Nodes** - Classes extending `JsonSchemaNodeWidget`
3. **Create Widget** - `NodeFlowWidget(nodes=[...])`
4. **Display** - Show in Jupyter/Marimo

---

## Complete Example

```python
from pydantic import BaseModel, Field
from pynodewidget import NodeFlowWidget, JsonSchemaNodeWidget

# 1. Define parameters
class InputParams(BaseModel):
    value: float = Field(default=1.0, description="Input value")

class ProcessParams(BaseModel):
    multiplier: float = Field(default=2.0, ge=0, description="Multiplier")

# 2. Define nodes
class InputNode(JsonSchemaNodeWidget):
    label = "Input"
    parameters = InputParams
    icon = "📥"
    outputs = [{"id": "out"}]

class ProcessNode(JsonSchemaNodeWidget):
    label = "Process"
    parameters = ProcessParams
    icon = "⚙️"
    inputs = [{"id": "in"}]
    outputs = [{"id": "out"}]

# 3. Create widget
widget = NodeFlowWidget(
    nodes=[InputNode, ProcessNode],
    height="600px"
)

# 4. Display (in Jupyter)
widget
```

---

## See Also

- [Custom Nodes Guide](../guides/custom-nodes.md) - Creating custom nodes
- [Field Registry](../developer/field-registry.md) - Custom field types
- [Handle System](../developer/handles.md) - Custom handles
- [GitHub Examples](https://github.com/HenningScheufler/pynodewidget/tree/main/examples) - Full source code
