# JsonSchemaNodeWidget

Base class for creating custom node types using Pydantic models.

::: pynodewidget.json_schema_node.JsonSchemaNodeWidget
    options:
      show_source: true
      members:
        - __init__
        - get_values
        - set_values
        - set_value
        - validate
        - execute
        - from_pydantic
        - from_schema

## Overview

`JsonSchemaNodeWidget` implements the NodeFactory protocol and provides a convenient base class for defining custom nodes. It automatically generates UI from Pydantic models and handles value synchronization.

## Basic Usage

### Creating a Node Class

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget

# 1. Define parameters with Pydantic
class ProcessorParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0, le=1)
    mode: str = "auto"
    enabled: bool = True

# 2. Create node class
class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    icon = "⚙️"
    category = "processing"
    description = "Process data with threshold"
    
    inputs = [{"id": "in", "label": "Input"}]
    outputs = [{"id": "out", "label": "Output"}]
    
    layout_type = "horizontal"
    handle_type = "button"
```

### Required Attributes

- **`label`**: Display name (string)
- **`parameters`**: Pydantic BaseModel class

### Optional Attributes

- **`icon`**: Emoji or Unicode symbol (default: "")
- **`category`**: Grouping category (default: "general")
- **`description`**: Help text (default: "")
- **`inputs`**: List of input handle configs (default: [])
- **`outputs`**: List of output handle configs (default: [])
- **`layout_type`**: Layout style - "horizontal", "vertical", "compact" (default: "horizontal")
- **`handle_type`**: Handle type - "base", "button", "labeled" (default: "base")

## Handle Configuration

### Input and Output Handles

```python
class MyNode(JsonSchemaNodeWidget):
    label = "My Node"
    parameters = MyParams
    
    inputs = [
        {"id": "data_in", "label": "Data"},
        {"id": "config_in", "label": "Config"}
    ]
    
    outputs = [
        {"id": "result", "label": "Result"},
        {"id": "metadata", "label": "Metadata"}
    ]
```

### Using Pydantic for Handles

```python
from pydantic import BaseModel

class InputHandles(BaseModel):
    data_in: str
    config_in: str

class OutputHandles(BaseModel):
    result: str
    metadata: str

class MyNode(JsonSchemaNodeWidget):
    label = "My Node"
    parameters = MyParams
    inputs = InputHandles
    outputs = OutputHandles
```

## Working with Values

### Getting Values

```python
# Inside node class
def execute(self, inputs):
    config = self.get_values()
    threshold = config["threshold"]
    mode = config["mode"]
    # ... use values

# From widget instance
node = ProcessorNode(threshold=0.8, enabled=True)
values = node.get_values()
# {"threshold": 0.8, "mode": "auto", "enabled": True}
```

### Setting Values

```python
# Set multiple values
node.set_values({"threshold": 0.9, "mode": "manual"})

# Set single value
node.set_value("threshold", 0.9)

# During initialization
node = ProcessorNode(threshold=0.7, mode="advanced")
```

### Validation

```python
# Check if current values are valid
if node.validate():
    print("Configuration is valid")
else:
    print("Invalid configuration")
```

## Execution Logic

### Implementing execute()

```python
class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    inputs = [{"id": "data_in", "label": "Data"}]
    outputs = [{"id": "data_out", "label": "Processed"}]
    
    def execute(self, inputs: Dict[str, Any]) -> Dict[str, Any]:
        """Process input data."""
        # Get configuration
        config = self.get_values()
        threshold = config["threshold"]
        
        # Get input data
        data = inputs.get("data_in", [])
        
        # Process
        filtered = [x for x in data if x >= threshold]
        
        # Return outputs
        return {"data_out": filtered}
```

### execute() Signature

```python
def execute(self, inputs: Dict[str, Any]) -> Dict[str, Any]:
    """Execute node logic.
    
    Args:
        inputs: Dictionary mapping input handle IDs to values
                e.g., {"data_in": [1, 2, 3], "config_in": {...}}
    
    Returns:
        Dictionary mapping output handle IDs to values
        e.g., {"data_out": [1, 2], "metadata": {...}}
    """
    pass
```

!!! note "Execution is Optional"
    PyNodeWidget provides the graph structure but doesn't enforce an execution model. Implement `execute()` if you plan to run workflows programmatically.

## Factory Methods

### from_pydantic()

Create a node without defining a full subclass:

```python
from pynodewidget import JsonSchemaNodeWidget
from pynodeflow.node_builder import with_style

# Quick node creation
node = JsonSchemaNodeWidget.from_pydantic(
    model_class=ProcessorParams,
    label="Quick Processor",
    icon="⚡",
    category="processing",
    inputs=[{"id": "in", "label": "Input"}],
    outputs=[{"id": "out", "label": "Output"}],
    initial_values={"threshold": 0.7}
)

# With styling
node = JsonSchemaNodeWidget.from_pydantic(
    model_class=ProcessorParams,
    label="Styled Processor",
    header={
        "show": True,
        "icon": "✨",
        "className": "bg-blue-600 text-white"
    },
    style={
        "minWidth": "300px",
        "shadow": "lg"
    }
)
```

### from_schema()

Create a node from raw JSON schema (legacy):

```python
schema = {
    "type": "object",
    "properties": {
        "threshold": {
            "type": "number",
            "default": 0.5,
            "minimum": 0,
            "maximum": 1
        }
    }
}

node = JsonSchemaNodeWidget.from_schema(
    schema=schema,
    label="Schema Node",
    icon="📋",
    inputs=[{"id": "in", "label": "Input"}],
    outputs=[{"id": "out", "label": "Output"}]
)
```

## Layout and Styling

### Layout Types

```python
# Horizontal: inputs left, outputs right
class HorizontalNode(JsonSchemaNodeWidget):
    layout_type = "horizontal"

# Vertical: inputs top, outputs bottom
class VerticalNode(JsonSchemaNodeWidget):
    layout_type = "vertical"

# Compact: minimal spacing
class CompactNode(JsonSchemaNodeWidget):
    layout_type = "compact"
```

### Handle Types

```python
# Base: small dot handles (default)
class BaseNode(JsonSchemaNodeWidget):
    handle_type = "base"

# Button: larger, interactive buttons
class ButtonNode(JsonSchemaNodeWidget):
    handle_type = "button"

# Labeled: handles with visible labels
class LabeledNode(JsonSchemaNodeWidget):
    handle_type = "labeled"
```

### Mixed Handle Types

```python
# Different types for inputs and outputs
node = JsonSchemaNodeWidget.from_pydantic(
    MyParams,
    label="Mixed Handles",
    input_handle_type="labeled",
    output_handle_type="button"
)
```

## Advanced Configuration

### Enhanced Styling

```python
from pynodeflow.node_builder import create_processing_node, with_style

# Using node builder utilities
config = create_processing_node("Advanced Node", icon="🚀")
config = with_style(config, 
    min_width="350px",
    max_width="600px",
    border_radius="12px",
    shadow="xl",
    class_name="border-2 border-blue-500"
)

node = JsonSchemaNodeWidget.from_pydantic(
    MyParams,
    **config
)
```

### Custom Header and Footer

```python
node = JsonSchemaNodeWidget.from_pydantic(
    MyParams,
    label="Custom Node",
    header={
        "show": True,
        "icon": "✨",
        "bgColor": "#3b82f6",
        "textColor": "#ffffff",
        "className": "font-bold"
    },
    footer={
        "show": True,
        "text": "v1.0.0",
        "className": "text-xs text-gray-500"
    }
)
```

### Conditional Fields

```python
from pynodeflow.node_builder import make_fields_conditional

fieldConfigs = make_fields_conditional(
    trigger_field="mode",
    trigger_value="advanced",
    dependent_fields=["threshold", "iterations"]
)

node = JsonSchemaNodeWidget.from_pydantic(
    MyParams,
    label="Conditional Node",
    fieldConfigs=fieldConfigs
)
```

### Validation Configuration

```python
node = JsonSchemaNodeWidget.from_pydantic(
    MyParams,
    label="Validated Node",
    validation={
        "showErrors": True,
        "errorPosition": "inline",  # or "tooltip", "footer"
        "validateOnChange": True
    }
)
```

## Complete Example

```python
from pydantic import BaseModel, Field
from typing import Literal
from pynodewidget import JsonSchemaNodeWidget, NodeFlowWidget

# Define parameters
class ImageProcessorParams(BaseModel):
    algorithm: Literal["blur", "sharpen", "edge"] = "blur"
    strength: float = Field(default=0.5, ge=0, le=1, description="Effect strength")
    preserve_alpha: bool = Field(default=True, description="Preserve transparency")
    iterations: int = Field(default=1, ge=1, le=10, description="Number of passes")

# Create node class
class ImageProcessorNode(JsonSchemaNodeWidget):
    """Image processing node with multiple algorithms."""
    
    label = "Image Processor"
    parameters = ImageProcessorParams
    icon = "🖼️"
    category = "image"
    description = "Apply various image processing algorithms"
    
    inputs = [
        {"id": "image", "label": "Image"},
        {"id": "mask", "label": "Mask (optional)"}
    ]
    outputs = [
        {"id": "result", "label": "Processed Image"},
        {"id": "metadata", "label": "Processing Info"}
    ]
    
    layout_type = "vertical"
    handle_type = "labeled"
    
    def execute(self, inputs):
        """Execute image processing."""
        config = self.get_values()
        image = inputs.get("image")
        mask = inputs.get("mask")
        
        # Processing logic here
        result = self._process_image(
            image,
            algorithm=config["algorithm"],
            strength=config["strength"],
            iterations=config["iterations"]
        )
        
        metadata = {
            "algorithm": config["algorithm"],
            "iterations": config["iterations"]
        }
        
        return {
            "result": result,
            "metadata": metadata
        }
    
    def _process_image(self, image, algorithm, strength, iterations):
        """Internal processing method."""
        # Your image processing code
        pass

# Use in workflow
flow = NodeFlowWidget(nodes=[ImageProcessorNode])
flow
```

## See Also

- **[NodeFlowWidget](widget.md)**: Main widget for workflows
- **[Node Builder](node-builder.md)**: Configuration utilities
- **[Protocols](protocols.md)**: NodeFactory protocol
- **[Custom Nodes Guide](../../guides/custom-nodes.md)**: Practical examples
