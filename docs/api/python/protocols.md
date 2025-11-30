# Protocols

Type protocols and metadata utilities for node registration.

::: pynodewidget.protocols.NodeFactory

::: pynodewidget.protocols.HandleSpec

::: pynodewidget.protocols.NodeMetadata

## Overview

PyNodeWidget uses **Protocols** to define interfaces for node classes without requiring inheritance. This provides flexibility for creating custom nodes while maintaining type safety.

## NodeFactory Protocol

Defines the interface that node classes must implement to be registered with the widget.

### Purpose

The `NodeFactory` protocol specifies:

- **Required attributes**: Minimum properties every node must have
- **Optional attributes**: Additional customization options
- **Required methods**: Functions nodes must implement
- **Optional methods**: Extra functionality nodes can provide

### Required Attributes

Every node class must define:

```python
from typing import Protocol, ClassVar, Type
from pydantic import BaseModel

class NodeFactory(Protocol):
    # Required
    type: ClassVar[str]  # Unique identifier
    category: ClassVar[str]  # Organization category
    label: ClassVar[str]  # Display name
    FieldsModel: Type[BaseModel]  # Pydantic model for parameters
```

### Optional Attributes

Additional customization:

```python
class NodeFactory(Protocol):
    # Optional
    description: ClassVar[str]  # Tooltip description
    icon: ClassVar[str]  # Lucide icon name or emoji
    color: ClassVar[str]  # Tailwind color class
    
    # Connection points
    inputs: ClassVar[list[str]]  # Input handle names
    outputs: ClassVar[list[str]]  # Output handle names
    
    # Advanced handle configuration
    input_specs: ClassVar[list[HandleSpec]]
    output_specs: ClassVar[list[HandleSpec]]
    
    # Styling
    use_custom_header: ClassVar[bool]
    use_custom_footer: ClassVar[bool]
    header_class: ClassVar[str]
    footer_class: ClassVar[str]
    body_class: ClassVar[str]
    
    # Validation
    shadow_on_error: ClassVar[str]
    errors_at: ClassVar[str]
```

### Required Methods

Nodes must implement:

```python
@classmethod
def get_default_values(cls) -> dict:
    """Return default field values."""
    return cls.FieldsModel().model_dump()
```

### Optional Methods

Additional functionality:

```python
@classmethod
def process(cls, inputs: dict, field_values: dict) -> dict:
    """Process node computation."""
    pass

@classmethod
def validate_inputs(cls, inputs: dict) -> bool:
    """Validate input data."""
    pass

@classmethod
def render_custom_header(cls, field_values: dict) -> str:
    """Generate custom header content."""
    pass

@classmethod
def render_custom_footer(cls, field_values: dict) -> str:
    """Generate custom footer content."""
    pass
```

## HandleSpec

Pydantic model for defining connection point specifications.

### Fields

```python
class HandleSpec(BaseModel):
    name: str  # Handle identifier
    label: str  # Display name
    type: Literal["base", "button", "labeled"] = "base"  # Visual style
    position: Literal["left", "right", "top", "bottom"] = "left"  # Location
    color: str = "gray"  # Tailwind color
    icon: str | None = None  # Lucide icon name
    description: str | None = None  # Tooltip
```

### Usage

```python
from pynodeflow.protocols import HandleSpec

input_specs = [
    HandleSpec(
        name="data",
        label="Data Input",
        type="labeled",
        position="left",
        color="blue",
        icon="database",
        description="Connect data source"
    ),
    HandleSpec(
        name="trigger",
        label="Trigger",
        type="button",
        position="top",
        color="green",
        icon="play"
    )
]
```

### Handle Types

**base**: Standard connection point

```python
HandleSpec(name="input", label="Input", type="base")
```

**button**: Prominent button-style handle

```python
HandleSpec(name="execute", label="Execute", type="button", color="green")
```

**labeled**: Handle with visible label

```python
HandleSpec(
    name="data",
    label="Data",
    type="labeled",
    icon="database"
)
```

## NodeMetadata

Utility class for extracting metadata from node classes.

### Purpose

`NodeMetadata` inspects a node class and:

- Extracts all attributes defined by NodeFactory protocol
- Generates JSON schema from FieldsModel
- Provides serializable metadata for JavaScript
- Handles missing optional attributes gracefully

### Usage

```python
from pynodeflow.protocols import NodeMetadata

class MyNode:
    type = "my-node"
    category = "data"
    label = "My Node"
    
    class FieldsModel(BaseModel):
        value: int = 0

# Extract metadata
metadata = NodeMetadata.from_class(MyNode)

# Serialize to dict
data = metadata.model_dump()
# {
#     "type": "my-node",
#     "category": "data",
#     "label": "My Node",
#     "fields_schema": {...},
#     "default_values": {"value": 0},
#     ...
# }
```

### Fields

All attributes from NodeFactory protocol, plus:

```python
class NodeMetadata(BaseModel):
    # Core
    type: str
    category: str
    label: str
    fields_schema: dict  # JSON Schema from FieldsModel
    default_values: dict  # From get_default_values()
    
    # Optional
    description: str | None
    icon: str | None
    color: str | None
    
    # Handles
    inputs: list[str]
    outputs: list[str]
    input_specs: list[HandleSpec]
    output_specs: list[HandleSpec]
    
    # Styling
    use_custom_header: bool
    use_custom_footer: bool
    header_class: str | None
    footer_class: str | None
    body_class: str | None
    
    # Validation
    shadow_on_error: str | None
    errors_at: str | None
```

### From Class

```python
metadata = NodeMetadata.from_class(MyNodeClass)
```

Extracts all available attributes and generates schema.

### To Dict

```python
data = metadata.model_dump()
```

Returns serializable dictionary suitable for JSON transmission to JavaScript.

## Creating Nodes with Protocols

### Minimal Node

```python
from pydantic import BaseModel

class MinimalNode:
    """Implements required attributes only."""
    
    type = "minimal"
    category = "basic"
    label = "Minimal Node"
    
    class FieldsModel(BaseModel):
        value: str = ""
    
    @classmethod
    def get_default_values(cls):
        return cls.FieldsModel().model_dump()
```

### Full-Featured Node

```python
from pydantic import BaseModel, Field
from pynodeflow.protocols import HandleSpec

class FullNode:
    """Implements all protocol attributes."""
    
    # Required
    type = "full-node"
    category = "processing"
    label = "Full Node"
    
    # Optional metadata
    description = "A fully-featured node example"
    icon = "box"
    color = "blue"
    
    # Simple handles
    inputs = ["input"]
    outputs = ["output", "error"]
    
    # Advanced handle specs
    input_specs = [
        HandleSpec(
            name="input",
            label="Data Input",
            type="labeled",
            color="blue",
            icon="database"
        )
    ]
    
    output_specs = [
        HandleSpec(
            name="output",
            label="Success",
            type="labeled",
            color="green",
            icon="check"
        ),
        HandleSpec(
            name="error",
            label="Error",
            type="labeled",
            color="red",
            icon="x-circle"
        )
    ]
    
    # Styling
    use_custom_header = True
    header_class = "bg-gradient-to-r from-blue-500 to-purple-500"
    body_class = "bg-gray-50"
    
    # Validation
    shadow_on_error = "xl"
    errors_at = "bottom"
    
    # Fields
    class FieldsModel(BaseModel):
        threshold: float = Field(0.5, ge=0.0, le=1.0)
        mode: str = Field("auto", pattern="^(auto|manual)$")
    
    # Required method
    @classmethod
    def get_default_values(cls):
        return cls.FieldsModel().model_dump()
    
    # Optional methods
    @classmethod
    def process(cls, inputs: dict, field_values: dict):
        """Process input data."""
        data = inputs.get("input")
        threshold = field_values["threshold"]
        
        if data is None:
            return {"error": "No input data"}
        
        try:
            result = data * threshold
            return {"output": result}
        except Exception as e:
            return {"error": str(e)}
    
    @classmethod
    def validate_inputs(cls, inputs: dict):
        """Validate inputs before processing."""
        return "input" in inputs and inputs["input"] is not None
    
    @classmethod
    def render_custom_header(cls, field_values: dict):
        """Generate custom header HTML."""
        mode = field_values.get("mode", "auto")
        return f'<div class="text-white font-bold">Mode: {mode.upper()}</div>'
```

### Registration

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()

# Register nodes
flow.register_node(MinimalNode)
flow.register_node(FullNode)

# Nodes are now available in the sidebar
```

## Type Checking

Use protocols for type safety:

```python
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from pynodeflow.protocols import NodeFactory

def register_custom_node(node_class: type[NodeFactory]):
    """Type-safe node registration."""
    # node_class is guaranteed to have required attributes
    print(f"Registering {node_class.label}")
    
# Type checker verifies protocol compliance
register_custom_node(MinimalNode)  # ✓ OK
register_custom_node(FullNode)  # ✓ OK
register_custom_node(dict)  # ✗ Type error
```

## Advanced Usage

### Dynamic Handle Specs

Generate handles programmatically:

```python
from pynodeflow.protocols import HandleSpec

class DynamicNode:
    type = "dynamic"
    category = "advanced"
    label = "Dynamic Node"
    
    @classmethod
    def get_input_specs(cls, num_inputs: int):
        """Generate input specs dynamically."""
        return [
            HandleSpec(
                name=f"input_{i}",
                label=f"Input {i+1}",
                type="labeled",
                color="blue"
            )
            for i in range(num_inputs)
        ]
    
    # Set during initialization
    input_specs: list[HandleSpec] = []
    
    class FieldsModel(BaseModel):
        num_inputs: int = Field(2, ge=1, le=10)
    
    @classmethod
    def get_default_values(cls):
        return cls.FieldsModel().model_dump()

# Before registration, configure handles
DynamicNode.input_specs = DynamicNode.get_input_specs(3)
flow.register_node(DynamicNode)
```

### Conditional Handles

Show/hide handles based on field values:

```python
class ConditionalNode:
    type = "conditional"
    category = "advanced"
    label = "Conditional Node"
    
    inputs = ["input"]
    outputs = ["output"]
    
    # Additional optional output
    output_specs = [
        HandleSpec(name="output", label="Output"),
        HandleSpec(name="debug", label="Debug Output")
    ]
    
    class FieldsModel(BaseModel):
        enable_debug: bool = False
    
    @classmethod
    def get_default_values(cls):
        return cls.FieldsModel().model_dump()
    
    @classmethod
    def process(cls, inputs, field_values):
        result = {"output": inputs.get("input")}
        
        if field_values.get("enable_debug"):
            result["debug"] = {"raw_input": inputs}
        
        return result
```

### Metadata Inspection

```python
from pynodeflow.protocols import NodeMetadata

# Extract metadata
metadata = NodeMetadata.from_class(FullNode)

# Inspect fields
print(f"Node type: {metadata.type}")
print(f"Category: {metadata.category}")
print(f"Has custom header: {metadata.use_custom_header}")

# Access schema
schema = metadata.fields_schema
print(f"Required fields: {schema.get('required', [])}")

# Get defaults
defaults = metadata.default_values
print(f"Default values: {defaults}")

# Serialize for JavaScript
js_data = metadata.model_dump()
```

## Protocol Implementation Checklist

Use this checklist when creating custom nodes:

**Required** ✅:
- [ ] `type: str` - Unique identifier
- [ ] `category: str` - Organization category
- [ ] `label: str` - Display name
- [ ] `FieldsModel: Type[BaseModel]` - Pydantic model
- [ ] `get_default_values()` - Returns defaults dict

**Recommended** 📝:
- [ ] `description: str` - Tooltip text
- [ ] `icon: str` - Visual identifier
- [ ] `inputs: list[str]` or `input_specs: list[HandleSpec]`
- [ ] `outputs: list[str]` or `output_specs: list[HandleSpec]`

**Optional** 🎨:
- [ ] `color: str` - Tailwind color class
- [ ] `use_custom_header: bool` + `render_custom_header()`
- [ ] `use_custom_footer: bool` + `render_custom_footer()`
- [ ] `header_class: str` - Header styling
- [ ] `body_class: str` - Body styling
- [ ] `footer_class: str` - Footer styling
- [ ] `shadow_on_error: str` - Error shadow size
- [ ] `errors_at: str` - Error position

**Functional** ⚙️:
- [ ] `process()` - Computation logic
- [ ] `validate_inputs()` - Input validation

## Examples

### Data Processing Node

```python
from pydantic import BaseModel, Field
from pynodeflow.protocols import HandleSpec

class DataProcessor:
    type = "data-processor"
    category = "data"
    label = "Data Processor"
    description = "Process and transform data"
    icon = "cpu"
    
    input_specs = [
        HandleSpec(name="data", label="Data", type="labeled", color="blue")
    ]
    output_specs = [
        HandleSpec(name="result", label="Result", type="labeled", color="green")
    ]
    
    class FieldsModel(BaseModel):
        operation: str = Field("multiply", pattern="^(multiply|divide|add|subtract)$")
        factor: float = Field(1.0, description="Operation factor")
    
    @classmethod
    def get_default_values(cls):
        return cls.FieldsModel().model_dump()
    
    @classmethod
    def process(cls, inputs, field_values):
        data = inputs.get("data", 0)
        operation = field_values["operation"]
        factor = field_values["factor"]
        
        if operation == "multiply":
            result = data * factor
        elif operation == "divide":
            result = data / factor if factor != 0 else 0
        elif operation == "add":
            result = data + factor
        else:  # subtract
            result = data - factor
        
        return {"result": result}
```

### Visualization Node

```python
class ChartNode:
    type = "chart"
    category = "visualization"
    label = "Chart"
    description = "Display data as chart"
    icon = "bar-chart"
    color = "purple"
    
    inputs = ["data"]
    
    use_custom_footer = True
    footer_class = "bg-purple-100 p-2"
    
    class FieldsModel(BaseModel):
        chart_type: str = Field("bar", pattern="^(bar|line|pie)$")
        title: str = "Data Visualization"
    
    @classmethod
    def get_default_values(cls):
        return cls.FieldsModel().model_dump()
    
    @classmethod
    def render_custom_footer(cls, field_values):
        title = field_values.get("title", "Chart")
        chart_type = field_values.get("chart_type", "bar")
        return f'<div class="text-sm">📊 {title} ({chart_type})</div>'
```

## See Also

- **[Creating Custom Nodes](../../guides/custom-nodes.md)**: Guide on building nodes
- **[JsonSchemaNodeWidget](json-schema-node.md)**: Base class implementing protocol
- **[Handle Configuration](../../guides/handles.md)**: Working with HandleSpec
