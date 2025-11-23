# Creating Custom Nodes

Learn how to create custom nodes with Pydantic models for type-safe configuration.

## Overview

PyNodeWidget provides two main approaches for creating custom nodes:

1. **Class-based nodes** (Recommended): Inherit from `JsonSchemaNodeWidget` and define node behavior using class attributes
2. **Factory functions**: Use helper functions from `node_builder` for quick node creation

Both approaches use **Pydantic models** to define node parameters with automatic validation and JSON schema generation.

## Class-Based Nodes (Recommended)

### Minimal Node

The simplest node requires just three things:

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget

class MyParams(BaseModel):
    """Configuration parameters for the node."""
    name: str = Field(default="default", description="Name parameter")
    value: int = Field(default=42, description="Numeric value")

class MyNode(JsonSchemaNodeWidget):
    """A minimal custom node."""
    label = "My Node"
    parameters = MyParams
```

**Required attributes:**

- `label`: Display name shown in the node
- `parameters`: Pydantic `BaseModel` class defining configuration fields

### Full-Featured Node

Add optional attributes for more functionality:

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget

class ProcessingParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0.0, le=1.0)
    mode: str = Field(default="auto", pattern="^(auto|manual|advanced)$")
    enabled: bool = Field(default=True)

class ProcessingNode(JsonSchemaNodeWidget):
    # Required
    label = "Image Processor"
    parameters = ProcessingParams
    
    # Optional metadata
    icon = "🖼️"
    category = "processing"
    description = "Process images with configurable settings"
    
    # Optional connection points
    inputs = [{"id": "image", "label": "Input Image"}]
    outputs = [
        {"id": "processed", "label": "Processed Image"},
        {"id": "metadata", "label": "Metadata"}
    ]
    
    # Optional layout
    layout_type = "horizontal"  # or "vertical"
    handle_type = "base"  # or "button", "labeled"
```

**Optional attributes:**

- `icon`: Emoji or Lucide icon name (e.g., `"image"`, `"⚙️"`)
- `category`: Organization category (e.g., `"input"`, `"processing"`, `"output"`)
- `description`: Tooltip text shown on hover
- `inputs`: List of input handles (connection points)
- `outputs`: List of output handles
- `layout_type`: Field layout (`"horizontal"` or `"vertical"`)
- `handle_type`: Handle style (`"base"`, `"button"`, or `"labeled"`)

## Using Pydantic Models

### Field Types

Pydantic supports many field types with automatic validation:

```python
from pydantic import BaseModel, Field
from typing import Literal

class NodeParams(BaseModel):
    # Strings
    name: str = Field(default="", description="Name")
    mode: Literal["auto", "manual"] = "auto"  # Dropdown
    
    # Numbers
    count: int = Field(default=10, ge=1, le=100)  # Integer with range
    threshold: float = Field(default=0.5, ge=0.0, le=1.0)  # Float with range
    
    # Booleans
    enabled: bool = True
    
    # Complex types
    tags: list[str] = Field(default_factory=list)
    config: dict[str, Any] = Field(default_factory=dict)
```

### Field Constraints

Use Pydantic's validation features:

```python
from pydantic import BaseModel, Field, field_validator

class ValidatedParams(BaseModel):
    email: str = Field(pattern=r"^[\w\.-]+@[\w\.-]+\.\w+$")
    age: int = Field(ge=0, le=120)
    score: float = Field(ge=0.0, le=1.0, multiple_of=0.1)
    
    @field_validator("email")
    def validate_email(cls, v):
        if not "@" in v:
            raise ValueError("Invalid email address")
        return v.lower()
```

### Field Descriptions

Add descriptions for better UI and documentation:

```python
class DocumentedParams(BaseModel):
    threshold: float = Field(
        default=0.5,
        ge=0.0,
        le=1.0,
        description="Detection threshold (higher = stricter)"
    )
    mode: str = Field(
        default="auto",
        description="Processing mode: auto, manual, or advanced"
    )
```

Descriptions appear as:
- Tooltips in the UI
- Documentation in generated docs
- Help text for users

## Registering Nodes

### Single Node Registration

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()
flow.register_node(MyNode)
```

### Batch Registration

Register multiple nodes at widget creation:

```python
flow = NodeFlowWidget(
    nodes=[
        DataLoaderNode,
        ProcessingNode,
        VisualizationNode
    ]
)
```

### Registration Validation

PyNodeWidget validates nodes during registration:

```python
# ✅ Valid node
class ValidNode(JsonSchemaNodeWidget):
    label = "Valid"
    parameters = ValidParams

flow.register_node(ValidNode)  # OK

# ❌ Invalid node (missing label)
class InvalidNode(JsonSchemaNodeWidget):
    parameters = ValidParams

flow.register_node(InvalidNode)  # Raises ValueError
```

## Node Instances

### Creating Instances

Create node instances with initial values:

```python
# With defaults
node = ProcessingNode()

# With custom values
node = ProcessingNode(threshold=0.75, mode="manual")

# Keyword arguments become field values
node = ProcessingNode(
    threshold=0.9,
    mode="advanced",
    enabled=False
)
```

### Getting Values

```python
# Get all values
values = node.get_values()
# {"threshold": 0.75, "mode": "manual", "enabled": True}

# Get single value
threshold = values["threshold"]
```

### Setting Values

```python
# Set multiple values
node.set_values({"threshold": 0.8, "mode": "auto"})

# Set single value
node.set_value("enabled", False)

# Direct attribute access (if using custom properties)
# Note: This doesn't sync to UI, use set_value instead
```

### Validation

```python
# Validate current configuration
is_valid = node.validate()

if is_valid:
    result = node.execute(inputs)
else:
    print("Invalid configuration")
```

## Connection Points (Handles)

### Simple Handles

Define handles as lists of dictionaries:

```python
class SimpleNode(JsonSchemaNodeWidget):
    label = "Simple"
    parameters = SimpleParams
    
    inputs = [{"id": "in", "label": "Input"}]
    outputs = [{"id": "out", "label": "Output"}]
```

### Multiple Handles

```python
class MultiHandleNode(JsonSchemaNodeWidget):
    label = "Multi-Handle"
    parameters = Params
    
    inputs = [
        {"id": "data", "label": "Data Input"},
        {"id": "config", "label": "Configuration"}
    ]
    outputs = [
        {"id": "result", "label": "Result"},
        {"id": "metadata", "label": "Metadata"},
        {"id": "errors", "label": "Errors"}
    ]
```

### Typed Handles with Pydantic

For type safety, use Pydantic models:

```python
from pydantic import BaseModel, Field

class DataLoaderInputs(BaseModel):
    """No inputs - source node."""
    pass

class DataLoaderOutputs(BaseModel):
    """Typed outputs."""
    data: str = Field(description="Loaded data")
    metadata: str = Field(description="File metadata")

class DataLoaderNode(JsonSchemaNodeWidget):
    label = "Data Loader"
    parameters = LoaderParams
    inputs = DataLoaderInputs  # Empty = no inputs
    outputs = DataLoaderOutputs  # Auto-generates handles
```

The widget automatically converts Pydantic models to handle configurations.

### Source and Sink Nodes

**Source nodes** (no inputs):

```python
class SourceNode(JsonSchemaNodeWidget):
    label = "Data Source"
    parameters = SourceParams
    inputs = []  # No inputs
    outputs = [{"id": "data", "label": "Data"}]
```

**Sink nodes** (no outputs):

```python
class SinkNode(JsonSchemaNodeWidget):
    label = "Data Output"
    parameters = OutputParams
    inputs = [{"id": "data", "label": "Data"}]
    outputs = []  # No outputs
```

## Node Execution

### The execute Method

Override `execute()` to add processing logic:

```python
class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    inputs = [{"id": "data", "label": "Data"}]
    outputs = [{"id": "result", "label": "Result"}]
    
    def execute(self, inputs: dict) -> dict:
        """Process input data."""
        # Get current configuration
        config = self.get_values()
        
        # Get input data
        data = inputs.get("data")
        
        if data is None:
            return {"result": None}
        
        # Process
        threshold = config["threshold"]
        result = data * threshold
        
        return {"result": result}
```

**Method signature:**

- **Input**: `inputs` - dict mapping handle IDs to data
- **Output**: dict mapping output handle IDs to data

### Error Handling

```python
def execute(self, inputs: dict) -> dict:
    """Execute with error handling."""
    try:
        data = inputs.get("data")
        
        if data is None:
            raise ValueError("No input data")
        
        config = self.get_values()
        result = self._process(data, config)
        
        return {"result": result}
    
    except Exception as e:
        # Return error on error output
        return {
            "result": None,
            "error": str(e)
        }
```

### Validation Before Execution

```python
def execute(self, inputs: dict) -> dict:
    """Execute with input validation."""
    # Validate configuration
    if not self.validate():
        return {"error": "Invalid configuration"}
    
    # Validate inputs
    if not self._validate_inputs(inputs):
        return {"error": "Invalid inputs"}
    
    # Process
    return self._process(inputs)

def _validate_inputs(self, inputs: dict) -> bool:
    """Check if inputs are valid."""
    return (
        "data" in inputs and
        inputs["data"] is not None and
        isinstance(inputs["data"], (int, float))
    )
```

## Factory Functions

For quick prototyping, use factory functions:

```python
from pynodeflow.node_builder import (
    create_minimal_node,
    create_form_node,
    create_processing_node
)

# Minimal node
SimpleNode = create_minimal_node(
    type_name="simple",
    label="Simple Node",
    fields={"name": "string", "value": "integer"}
)

# Form node
FormNode = create_form_node(
    type_name="form",
    label="Form Node",
    fields={
        "name": {"type": "string", "default": ""},
        "age": {"type": "integer", "minimum": 0, "maximum": 120}
    }
)

# Processing node
ProcessorNode = create_processing_node(
    type_name="processor",
    label="Processor",
    input_names=["data"],
    output_names=["result"],
    fields={"threshold": {"type": "number", "default": 0.5}}
)
```

See **[Node Builder API](../api/python/node-builder.md)** for full details.

## Real-World Examples

### Data Loader

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget

class DataLoaderParams(BaseModel):
    file_path: str = Field(default="", description="Path to data file")
    format: Literal["csv", "json", "parquet"] = "csv"
    skip_rows: int = Field(default=0, ge=0)

class DataLoaderNode(JsonSchemaNodeWidget):
    label = "Data Loader"
    parameters = DataLoaderParams
    icon = "📁"
    category = "input"
    outputs = [
        {"id": "data", "label": "Data"},
        {"id": "metadata", "label": "Metadata"}
    ]
    
    def execute(self, inputs):
        config = self.get_values()
        
        # Load data based on format
        if config["format"] == "csv":
            data = self._load_csv(config["file_path"], config["skip_rows"])
        elif config["format"] == "json":
            data = self._load_json(config["file_path"])
        else:
            data = self._load_parquet(config["file_path"])
        
        return {
            "data": data,
            "metadata": {
                "path": config["file_path"],
                "format": config["format"],
                "rows": len(data)
            }
        }
```

### Data Transformer

```python
class TransformParams(BaseModel):
    operation: Literal["filter", "map", "reduce"] = "map"
    expression: str = Field(default="x", description="Transformation expression")

class TransformerNode(JsonSchemaNodeWidget):
    label = "Transformer"
    parameters = TransformParams
    icon = "⚙️"
    category = "processing"
    inputs = [{"id": "data", "label": "Input Data"}]
    outputs = [{"id": "result", "label": "Transformed Data"}]
    
    def execute(self, inputs):
        data = inputs.get("data", [])
        config = self.get_values()
        
        operation = config["operation"]
        expr = config["expression"]
        
        if operation == "filter":
            result = [x for x in data if eval(expr, {"x": x})]
        elif operation == "map":
            result = [eval(expr, {"x": x}) for x in data]
        else:  # reduce
            result = eval(f"reduce(lambda acc, x: {expr}, data, 0)", 
                         {"data": data, "reduce": __import__("functools").reduce})
        
        return {"result": result}
```

### Visualization

```python
class ChartParams(BaseModel):
    chart_type: Literal["bar", "line", "scatter", "pie"] = "bar"
    title: str = Field(default="Chart", description="Chart title")
    x_label: str = "X"
    y_label: str = "Y"

class ChartNode(JsonSchemaNodeWidget):
    label = "Chart"
    parameters = ChartParams
    icon = "📊"
    category = "visualization"
    inputs = [{"id": "data", "label": "Chart Data"}]
    
    def execute(self, inputs):
        data = inputs.get("data", [])
        config = self.get_values()
        
        # Generate chart (simplified)
        chart = self._create_chart(
            data,
            config["chart_type"],
            config["title"],
            config["x_label"],
            config["y_label"]
        )
        
        # Display in notebook or save
        return {"chart": chart}
```

## Best Practices

### 1. Use Descriptive Names

```python
# ❌ Vague
class Node1(JsonSchemaNodeWidget):
    label = "Node"
    parameters = Params

# ✅ Clear
class ImageResizer(JsonSchemaNodeWidget):
    label = "Image Resizer"
    parameters = ResizerParams
```

### 2. Add Comprehensive Descriptions

```python
class Params(BaseModel):
    threshold: float = Field(
        default=0.5,
        ge=0.0,
        le=1.0,
        description="Detection confidence threshold. Higher values reduce false positives but may miss detections."
    )
```

### 3. Use Type Hints

```python
from typing import Literal

class Params(BaseModel):
    mode: Literal["auto", "manual", "advanced"] = "auto"  # Dropdown
    count: int = Field(ge=1, le=100)  # Validated integer
```

### 4. Validate Inputs

```python
def execute(self, inputs: dict) -> dict:
    # Check required inputs exist
    if "data" not in inputs:
        return {"error": "Missing required input 'data'"}
    
    # Validate input types
    data = inputs["data"]
    if not isinstance(data, list):
        return {"error": "Input must be a list"}
    
    # Proceed with processing
    ...
```

### 5. Handle Errors Gracefully

```python
def execute(self, inputs: dict) -> dict:
    try:
        result = self._process(inputs)
        return {"result": result}
    except ValueError as e:
        return {"error": f"Validation error: {e}"}
    except Exception as e:
        return {"error": f"Processing error: {e}"}
```

### 6. Use Sensible Defaults

```python
class Params(BaseModel):
    # Good defaults make nodes usable immediately
    threshold: float = 0.5
    enabled: bool = True
    mode: str = "auto"
```

### 7. Organize by Category

```python
# Input nodes
class DataLoader(JsonSchemaNodeWidget):
    category = "input"

# Processing nodes
class Transformer(JsonSchemaNodeWidget):
    category = "processing"

# Output nodes
class Exporter(JsonSchemaNodeWidget):
    category = "output"
```

## Troubleshooting

### Node Not Appearing

Check registration:

```python
# Ensure node is registered
flow.register_node(MyNode)

# Verify registration
print(flow.node_templates)
```

### Invalid Configuration

Ensure required attributes are present:

```python
class InvalidNode(JsonSchemaNodeWidget):
    # ❌ Missing 'label'
    parameters = Params

# Fix: Add required attributes
class ValidNode(JsonSchemaNodeWidget):
    label = "Valid Node"  # ✅
    parameters = Params
```

### Pydantic Validation Errors

Check field constraints:

```python
# ❌ Invalid: value outside range
node = MyNode(threshold=1.5)  # ge=0, le=1

# ✅ Valid: within constraints
node = MyNode(threshold=0.8)
```

### Values Not Updating

Use proper methods:

```python
# ❌ Direct assignment doesn't sync
node.threshold = 0.8

# ✅ Use set_value
node.set_value("threshold", 0.8)

# ✅ Or set_values for multiple
node.set_values({"threshold": 0.8, "enabled": False})
```

## Next Steps

- **[Styling Nodes](styling.md)**: Customize node appearance
- **[Handles Configuration](handles.md)**: Advanced handle setup
- **[Working with Values](values.md)**: Value management patterns
- **[Node Builder API](../api/python/node-builder.md)**: Factory function reference
- **[Protocols API](../api/python/protocols.md)**: NodeFactory protocol details
