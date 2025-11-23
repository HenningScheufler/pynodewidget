# Node Builder Utilities

Helper functions for creating common node configurations without writing custom JavaScript.

::: pynodewidget.node_builder

## Overview

The `node_builder` module provides pure Python utilities for configuring nodes. Instead of writing JavaScript or complex configuration dictionaries, you use these helper functions to create common node patterns.

All functions return configuration dictionaries that can be passed to `JsonSchemaNodeWidget.from_pydantic()`.

## Philosophy

- **Configuration over code**: Use functions and dictionaries instead of writing code
- **Composable**: Combine multiple configuration functions
- **Type-safe**: Literal types for valid options
- **No JavaScript required**: Everything in Python

## Factory Functions

### Node Templates

Pre-configured node templates for common use cases:

#### create_minimal_node()

```python
from pynodeflow.node_builder import create_minimal_node

config = create_minimal_node("Process")
# Returns: {label, layout_type="compact", no header, minimal styling}
```

Perfect for simple nodes with few parameters.

#### create_form_node()

```python
config = create_form_node("Configuration", min_width="300px", max_width="500px")
```

Optimized for nodes with many input fields. Vertical layout with spacious design.

#### create_processing_node()

```python
config = create_processing_node("Filter", icon="🔍", handle_type="button")
```

Compact node for data processing. Horizontal layout with emphasis on I/O handles.

#### create_source_node()

```python
config = create_source_node("Data Loader", icon="📥", handle_type="labeled")
```

Data source node with emphasis on outputs. Vertical layout, labeled handles.

#### create_sink_node()

```python
config = create_sink_node("Save Results", icon="📤", handle_type="labeled")
```

Data sink node with emphasis on inputs. Vertical layout, labeled handles.

#### create_visualization_node()

```python
config = create_visualization_node("Chart", min_width="400px")
```

Large node for visualizations. Vertical layout with generous space.

#### create_readonly_node()

```python
config = create_readonly_node("Display")
```

Read-only node for displaying information. Styled to indicate non-editable state.

#### create_debug_node()

```python
config = create_debug_node("Inspector")
```

Debug node with validation enabled and visual indicators.

## Configuration Modifiers

### with_custom_header()

Add or modify node header:

```python
from pynodeflow.node_builder import with_custom_header

config = create_minimal_node("My Node")
config = with_custom_header(
    config,
    icon="✨",
    bg_color="#3b82f6",
    text_color="#ffffff",
    class_name="font-bold",
    show=True
)
```

**Parameters:**
- `icon`: Emoji or Unicode character
- `bg_color`: CSS color string
- `text_color`: CSS color string  
- `class_name`: Tailwind CSS classes
- `show`: Whether to display header

### with_footer()

Add footer to node:

```python
from pynodeflow.node_builder import with_footer

config = with_footer(config, text="v1.0.0", class_name="text-xs text-gray-500")
```

### with_style()

Modify node styling:

```python
from pynodeflow.node_builder import with_style

config = with_style(
    config,
    min_width="300px",
    max_width="600px",
    border_radius="12px",
    shadow="lg",
    class_name="border-2 border-blue-500"
)
```

**Shadow sizes**: `"sm"`, `"md"`, `"lg"`, `"xl"`, `"none"`

### with_validation()

Configure validation behavior:

```python
from pynodeflow.node_builder import with_validation

config = with_validation(
    config,
    show_errors=True,
    error_position="inline",  # or "tooltip", "footer"
    validate_on_change=True
)
```

## Field Configuration

### Conditional Fields

#### create_conditional_field()

Create a single conditional field:

```python
from pynodeflow.node_builder import create_conditional_field

field_config = create_conditional_field(
    trigger_field="mode",
    trigger_value="advanced",
    operator="equals"
)
# Returns: {"showWhen": {"field": "mode", "operator": "equals", "value": "advanced"}}
```

**Operators**: `"equals"`, `"notEquals"`, `"greaterThan"`, `"lessThan"`, `"contains"`

#### make_fields_conditional()

Make multiple fields conditional on a trigger:

```python
from pynodeflow.node_builder import make_fields_conditional

fieldConfigs = make_fields_conditional(
    trigger_field="mode",
    trigger_value="advanced",
    dependent_fields=["threshold", "iterations", "epsilon"]
)
# All three fields only show when mode == "advanced"
```

#### make_field_readonly()

Make a field read-only:

```python
from pynodeflow.node_builder import make_field_readonly

fieldConfigs = make_field_readonly("computed_value")
# Returns: {"computed_value": {"readonly": True}}
```

#### make_field_hidden()

Hide a field:

```python
from pynodeflow.node_builder import make_field_hidden

fieldConfigs = make_field_hidden("internal_state")
# Returns: {"internal_state": {"hidden": True}}
```

### merge_configs()

Merge multiple configuration dictionaries:

```python
from pynodeflow.node_builder import merge_configs

config1 = create_processing_node("Node")
config2 = with_style(config1, min_width="300px")
config3 = with_validation(config2, show_errors=True)

# Or combine in one call
final_config = merge_configs(
    create_processing_node("Node"),
    {"style": {"minWidth": "300px"}},
    {"validation": {"showErrors": True}}
)
```

Nested dictionaries (`header`, `footer`, `style`, `validation`, `fieldConfigs`) are merged recursively.

## Complete Examples

### Simple Processing Node

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget, NodeFlowWidget
from pynodeflow.node_builder import create_processing_node, with_style

class FilterParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0, le=1)
    enabled: bool = True

config = create_processing_node("Filter", icon="🔍")
config = with_style(config, min_width="250px", shadow="md")

node = JsonSchemaNodeWidget.from_pydantic(
    FilterParams,
    **config,
    inputs=[{"id": "data", "label": "Data"}],
    outputs=[{"id": "filtered", "label": "Filtered"}]
)

flow = NodeFlowWidget(nodes=[node])
```

### Form Node with Conditional Fields

```python
from pydantic import BaseModel, Field
from typing import Literal
from pynodeflow.node_builder import (
    create_form_node,
    make_fields_conditional,
    merge_configs
)

class AdvancedParams(BaseModel):
    mode: Literal["simple", "advanced"] = "simple"
    
    # These only show in advanced mode
    threshold: float = Field(default=0.5, ge=0, le=1)
    iterations: int = Field(default=10, ge=1, le=100)
    learning_rate: float = Field(default=0.01, ge=0.001, le=1.0)

# Create form node configuration
config = create_form_node("Advanced Settings", min_width="350px")

# Add conditional fields
fieldConfigs = make_fields_conditional(
    trigger_field="mode",
    trigger_value="advanced",
    dependent_fields=["threshold", "iterations", "learning_rate"]
)

# Merge configurations
final_config = merge_configs(config, {"fieldConfigs": fieldConfigs})

node = JsonSchemaNodeWidget.from_pydantic(AdvancedParams, **final_config)
```

### Styled Debug Node

```python
from pynodeflow.node_builder import (
    create_debug_node,
    with_custom_header,
    with_footer
)

config = create_debug_node("Inspector")
config = with_custom_header(
    config,
    icon="🔍",
    class_name="bg-yellow-600 text-white font-bold"
)
config = with_footer(
    config,
    text="Debug build: 2024-01-15",
    class_name="text-xs bg-yellow-50"
)

node = JsonSchemaNodeWidget.from_pydantic(DebugParams, **config)
```

### Source Node with Labeled Handles

```python
from pynodeflow.node_builder import create_source_node, with_style

class DataSourceParams(BaseModel):
    file_path: str = Field(default="", description="Path to data file")
    format: Literal["csv", "json", "parquet"] = "csv"
    skip_rows: int = Field(default=0, ge=0)

config = create_source_node("Data Loader", icon="📁")
config = with_style(config, min_width="280px", shadow="lg")

node = JsonSchemaNodeWidget.from_pydantic(
    DataSourceParams,
    **config,
    outputs=[
        {"id": "data", "label": "Dataset"},
        {"id": "metadata", "label": "Metadata"}
    ]
)
```

### Composed Configuration

```python
from pynodeflow.node_builder import (
    create_processing_node,
    with_style,
    with_validation,
    with_footer,
    make_field_readonly,
    merge_configs
)

# Start with a base template
config = create_processing_node("ML Model", icon="🤖")

# Add styling
config = with_style(config, min_width="320px", border_radius="16px", shadow="xl")

# Add validation
config = with_validation(config, show_errors=True, error_position="inline")

# Add footer
config = with_footer(config, "Trained on 2024-01-15")

# Make computed fields readonly
fieldConfigs = make_field_readonly("accuracy")

# Merge everything
final_config = merge_configs(config, {"fieldConfigs": fieldConfigs})

node = JsonSchemaNodeWidget.from_pydantic(MLModelParams, **final_config)
```

## Type Definitions

```python
# Field value types
FieldValue = str | int | float | bool | None

# Handle types
HandleType = Literal["base", "button", "labeled"]

# Shadow sizes
ShadowSize = Literal["sm", "md", "lg", "xl", "none"]

# Error display positions
ErrorPosition = Literal["inline", "tooltip", "footer"]

# Conditional operators
ConditionOperator = Literal["equals", "notEquals", "greaterThan", "lessThan", "contains"]
```

## Tips

### Start with Templates

Always start with a template function that matches your use case:

```python
# For simple nodes
config = create_minimal_node("Simple")

# For complex forms
config = create_form_node("Config")

# For data processing
config = create_processing_node("Transform")
```

### Chain Modifiers

Build up configuration by chaining modifiers:

```python
config = create_processing_node("Filter")
config = with_style(config, min_width="300px")
config = with_validation(config, show_errors=True)
```

### Use merge_configs() for Complex Configs

When combining many configurations:

```python
final = merge_configs(
    create_form_node("Settings"),
    {"fieldConfigs": field_configs},
    {"validation": validation_config},
    {"style": {"shadow": "lg"}}
)
```

### Leverage Conditional Fields

Create adaptive UIs that show/hide based on user input:

```python
fieldConfigs = make_fields_conditional(
    trigger_field="use_advanced",
    trigger_value=True,
    dependent_fields=["learning_rate", "batch_size", "epochs"]
)
```

## See Also

- **[JsonSchemaNodeWidget](json-schema-node.md)**: Base node class
- **[Styling Guide](../../guides/styling.md)**: Visual styling patterns
- **[Conditional Fields Guide](../../guides/conditional-fields.md)**: Advanced field visibility
