# Conditional Fields

Show or hide fields dynamically based on other field values.

## Overview

Conditional fields allow you to create adaptive UIs where certain configuration options only appear when relevant. This reduces clutter and guides users through complex configurations.

**Use cases:**
- Show advanced options only when "Advanced Mode" is enabled
- Display authentication fields only when authentication type is selected
- Show file format options based on selected file type
- Reveal connection settings only when custom endpoint is chosen

## Basic Conditional Fields

### Using node_builder

The simplest approach uses `create_conditional_field()`:

```python
from pynodeflow.node_builder import create_conditional_field

# Show "api_key" field only when "use_auth" is True
field_config = create_conditional_field(
    trigger_field="use_auth",
    trigger_value=True,
    operator="equals"
)

# Result: {"showWhen": {"field": "use_auth", "operator": "equals", "value": True}}
```

### In Node Configuration

Apply to node templates:

```python
from pynodewidget import NodeFlowWidget
from pynodeflow.node_builder import create_form_node, create_conditional_field

# Create base node
config = create_form_node(
    type_name="api-client",
    label="API Client",
    fields={
        "use_auth": {"type": "boolean", "default": False, "title": "Use Authentication"},
        "api_key": {"type": "string", "default": "", "title": "API Key"}
    }
)

# Add conditional visibility
config["field_configs"] = {
    "api_key": create_conditional_field("use_auth", True)
}

# Register node
flow = NodeFlowWidget()
flow.add_node_type_from_schema(
    json_schema=config.get("parameters", {}),
    type_name="api-client",
    label="API Client"
)
```

## Multiple Conditional Fields

Use `make_fields_conditional()` to set up multiple fields at once:

```python
from pynodeflow.node_builder import make_fields_conditional

# Show multiple fields when mode is "advanced"
field_configs = make_fields_conditional(
    trigger_field="mode",
    trigger_value="advanced",
    dependent_fields=["timeout", "retry_count", "max_connections"],
    operator="equals"
)

# Result: All three fields get the same showWhen condition
```

### Complete Example

```python
from pynodewidget import NodeFlowWidget
from pynodeflow.node_builder import create_form_node, make_fields_conditional

config = create_form_node(
    type_name="processor",
    label="Data Processor",
    fields={
        "mode": {
            "type": "string",
            "enum": ["simple", "advanced"],
            "default": "simple",
            "title": "Processing Mode"
        },
        # Simple mode fields (always visible)
        "input_file": {"type": "string", "default": "", "title": "Input File"},
        
        # Advanced mode fields (conditional)
        "chunk_size": {"type": "integer", "default": 1000, "title": "Chunk Size"},
        "parallel": {"type": "boolean", "default": False, "title": "Parallel Processing"},
        "cache_results": {"type": "boolean", "default": True, "title": "Cache Results"}
    }
)

# Hide advanced fields until mode is "advanced"
config["field_configs"] = make_fields_conditional(
    trigger_field="mode",
    trigger_value="advanced",
    dependent_fields=["chunk_size", "parallel", "cache_results"]
)
```

## Condition Operators

Available comparison operators:

### equals

Field value equals trigger value:

```python
create_conditional_field("mode", "advanced", operator="equals")
# Shows field when: mode == "advanced"
```

### notEquals

Field value does not equal trigger value:

```python
create_conditional_field("status", "disabled", operator="notEquals")
# Shows field when: status != "disabled"
```

### greaterThan

Field value is greater than trigger value:

```python
create_conditional_field("count", 10, operator="greaterThan")
# Shows field when: count > 10
```

### lessThan

Field value is less than trigger value:

```python
create_conditional_field("threshold", 0.5, operator="lessThan")
# Shows field when: threshold < 0.5
```

### contains

Field value (string or list) contains trigger value:

```python
create_conditional_field("tags", "experimental", operator="contains")
# Shows field when: "experimental" in tags
```

## Common Patterns

### Authentication Fields

Show credentials based on auth type:

```python
from pynodeflow.node_builder import create_form_node

config = create_form_node(
    type_name="auth-client",
    label="Authenticated Client",
    fields={
        "auth_type": {
            "type": "string",
            "enum": ["none", "api_key", "oauth", "basic"],
            "default": "none",
            "title": "Authentication Type"
        },
        # API Key auth
        "api_key": {"type": "string", "default": "", "title": "API Key"},
        
        # OAuth auth
        "client_id": {"type": "string", "default": "", "title": "Client ID"},
        "client_secret": {"type": "string", "default": "", "title": "Client Secret"},
        
        # Basic auth
        "username": {"type": "string", "default": "", "title": "Username"},
        "password": {"type": "string", "default": "", "title": "Password"}
    }
)

# Show relevant fields based on auth type
config["field_configs"] = {
    "api_key": create_conditional_field("auth_type", "api_key"),
    "client_id": create_conditional_field("auth_type", "oauth"),
    "client_secret": create_conditional_field("auth_type", "oauth"),
    "username": create_conditional_field("auth_type", "basic"),
    "password": create_conditional_field("auth_type", "basic")
}
```

### File Format Options

Show format-specific options:

```python
config = create_form_node(
    type_name="file-loader",
    label="File Loader",
    fields={
        "format": {
            "type": "string",
            "enum": ["csv", "json", "parquet", "excel"],
            "default": "csv",
            "title": "File Format"
        },
        # CSV options
        "delimiter": {"type": "string", "default": ",", "title": "Delimiter"},
        "skip_rows": {"type": "integer", "default": 0, "title": "Skip Rows"},
        
        # JSON options
        "json_path": {"type": "string", "default": "$", "title": "JSON Path"},
        
        # Excel options
        "sheet_name": {"type": "string", "default": "Sheet1", "title": "Sheet Name"}
    }
)

config["field_configs"] = {
    "delimiter": create_conditional_field("format", "csv"),
    "skip_rows": create_conditional_field("format", "csv"),
    "json_path": create_conditional_field("format", "json"),
    "sheet_name": create_conditional_field("format", "excel")
}
```

### Advanced Mode Toggle

Simple/advanced mode switching:

```python
config = create_form_node(
    type_name="configurator",
    label="Configurator",
    fields={
        "mode": {
            "type": "string",
            "enum": ["simple", "advanced"],
            "default": "simple",
            "title": "Mode"
        },
        # Simple mode (always visible)
        "name": {"type": "string", "default": "", "title": "Name"},
        
        # Advanced mode (conditional)
        "timeout": {"type": "number", "default": 30, "title": "Timeout (seconds)"},
        "retry_count": {"type": "integer", "default": 3, "title": "Retry Count"},
        "debug": {"type": "boolean", "default": False, "title": "Debug Mode"},
        "log_level": {
            "type": "string",
            "enum": ["info", "debug", "warning", "error"],
            "default": "info",
            "title": "Log Level"
        }
    }
)

config["field_configs"] = make_fields_conditional(
    trigger_field="mode",
    trigger_value="advanced",
    dependent_fields=["timeout", "retry_count", "debug", "log_level"]
)
```

### Connection Settings

Custom vs. predefined endpoints:

```python
config = create_form_node(
    type_name="api-connector",
    label="API Connector",
    fields={
        "endpoint_type": {
            "type": "string",
            "enum": ["production", "staging", "custom"],
            "default": "production",
            "title": "Endpoint"
        },
        # Custom endpoint fields
        "custom_url": {"type": "string", "default": "", "title": "Custom URL"},
        "custom_port": {"type": "integer", "default": 443, "title": "Port"},
        "use_ssl": {"type": "boolean", "default": True, "title": "Use SSL"}
    }
)

config["field_configs"] = make_fields_conditional(
    trigger_field="endpoint_type",
    trigger_value="custom",
    dependent_fields=["custom_url", "custom_port", "use_ssl"]
)
```

## Complex Conditions

### Chaining Conditions

Multiple levels of conditional visibility:

```python
config = create_form_node(
    type_name="multi-level",
    label="Multi-Level Config",
    fields={
        "enable_feature": {"type": "boolean", "default": False},
        "feature_mode": {"type": "string", "enum": ["basic", "advanced"], "default": "basic"},
        "advanced_option": {"type": "string", "default": ""}
    }
)

config["field_configs"] = {
    # Show feature_mode only if enable_feature is True
    "feature_mode": create_conditional_field("enable_feature", True),
    
    # Show advanced_option only if feature_mode is "advanced"
    # (also requires enable_feature to be True)
    "advanced_option": create_conditional_field("feature_mode", "advanced")
}
```

### Threshold-Based

Show fields when value exceeds threshold:

```python
config = create_form_node(
    type_name="threshold-config",
    label="Threshold Config",
    fields={
        "sample_size": {"type": "integer", "default": 10, "title": "Sample Size"},
        "batch_processing": {"type": "boolean", "default": False, "title": "Batch Processing"},
        "batch_size": {"type": "integer", "default": 100, "title": "Batch Size"}
    }
)

config["field_configs"] = {
    # Show batch processing option when sample size > 100
    "batch_processing": create_conditional_field("sample_size", 100, operator="greaterThan"),
    
    # Show batch size when batch processing is enabled
    "batch_size": create_conditional_field("batch_processing", True)
}
```

### Multi-Value Conditions

Different fields for different selections:

```python
config = create_form_node(
    type_name="output-config",
    label="Output Config",
    fields={
        "output_format": {"type": "string", "enum": ["screen", "file", "api"], "default": "screen"},
        
        # File output options
        "file_path": {"type": "string", "default": ""},
        "overwrite": {"type": "boolean", "default": False},
        
        # API output options
        "api_endpoint": {"type": "string", "default": ""},
        "api_key": {"type": "string", "default": ""}
    }
)

config["field_configs"] = {
    # File options
    "file_path": create_conditional_field("output_format", "file"),
    "overwrite": create_conditional_field("output_format", "file"),
    
    # API options
    "api_endpoint": create_conditional_field("output_format", "api"),
    "api_key": create_conditional_field("output_format", "api")
}
```

## With Pydantic Models

When using class-based nodes, apply conditions in JSON schema:

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget

class ProcessorParams(BaseModel):
    mode: str = Field(default="simple", pattern="^(simple|advanced)$")
    name: str = ""
    timeout: float = 30.0
    retry_count: int = 3

class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
        # Add conditional field configurations
        # This modifies the generated JSON schema
        if "parameters" in self.data:
            schema = self.data["parameters"]
            
            # Add showWhen to advanced fields
            if "properties" in schema:
                if "timeout" in schema["properties"]:
                    schema["properties"]["timeout"]["showWhen"] = {
                        "field": "mode",
                        "operator": "equals",
                        "value": "advanced"
                    }
                if "retry_count" in schema["properties"]:
                    schema["properties"]["retry_count"]["showWhen"] = {
                        "field": "mode",
                        "operator": "equals",
                        "value": "advanced"
                    }
```

**Note**: This approach is more verbose. Consider using factory functions for complex conditional logic.

## Real-World Example

Complete authenticated data loader:

```python
from pynodewidget import NodeFlowWidget
from pynodeflow.node_builder import create_processing_node, make_fields_conditional

config = create_processing_node(
    type_name="secure-loader",
    label="Secure Data Loader",
    icon="🔒"
)

# Define comprehensive fields
config["parameters"] = {
    "type": "object",
    "properties": {
        # Data source
        "source_type": {
            "type": "string",
            "enum": ["local", "remote"],
            "default": "local",
            "title": "Source Type"
        },
        
        # Local source
        "file_path": {
            "type": "string",
            "default": "",
            "title": "File Path"
        },
        
        # Remote source
        "url": {
            "type": "string",
            "default": "",
            "title": "URL"
        },
        "use_auth": {
            "type": "boolean",
            "default": False,
            "title": "Use Authentication"
        },
        
        # Authentication
        "auth_method": {
            "type": "string",
            "enum": ["bearer", "basic", "api_key"],
            "default": "bearer",
            "title": "Auth Method"
        },
        "token": {
            "type": "string",
            "default": "",
            "title": "Token"
        },
        "username": {
            "type": "string",
            "default": "",
            "title": "Username"
        },
        "password": {
            "type": "string",
            "default": "",
            "title": "Password"
        },
        "api_key": {
            "type": "string",
            "default": "",
            "title": "API Key"
        },
        
        # Advanced options
        "show_advanced": {
            "type": "boolean",
            "default": False,
            "title": "Show Advanced Options"
        },
        "timeout": {
            "type": "number",
            "default": 30,
            "title": "Timeout (seconds)"
        },
        "retry_attempts": {
            "type": "integer",
            "default": 3,
            "title": "Retry Attempts"
        }
    }
}

# Set up conditional visibility
from pynodeflow.node_builder import create_conditional_field

config["field_configs"] = {
    # Local source
    "file_path": create_conditional_field("source_type", "local"),
    
    # Remote source
    "url": create_conditional_field("source_type", "remote"),
    "use_auth": create_conditional_field("source_type", "remote"),
    
    # Authentication
    "auth_method": create_conditional_field("use_auth", True),
    
    # Auth method-specific fields
    "token": create_conditional_field("auth_method", "bearer"),
    "username": create_conditional_field("auth_method", "basic"),
    "password": create_conditional_field("auth_method", "basic"),
    "api_key": create_conditional_field("auth_method", "api_key"),
    
    # Advanced options
    "timeout": create_conditional_field("show_advanced", True),
    "retry_attempts": create_conditional_field("show_advanced", True)
}

# Register
flow = NodeFlowWidget()
flow.add_node_type_from_schema(
    json_schema=config["parameters"],
    type_name="secure-loader",
    label="Secure Data Loader"
)
```

## Best Practices

- **Clear triggers**: Use descriptive field names
- **Logical grouping**: Group related conditional fields
- **Sensible defaults**: Provide good defaults even for hidden fields
- **Avoid deep nesting**: Limit chains to 2-3 levels
- **Document dependencies**: Comment conditional relationships

## Troubleshooting

**Fields not showing/hiding**: Check trigger field name matches exactly.

**Condition not evaluating**: Verify operator matches value type (e.g., use `"equals"` for booleans, not `"contains"`).

**Complex conditions not working**: Break into simpler chained conditions.

## Next Steps

- **[Creating Custom Nodes](custom-nodes.md)**: Build custom nodes with conditional fields
- **[Styling Nodes](styling.md)**: Style conditional fields
