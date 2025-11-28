"""Node builder utilities for creating configured nodes from Python.

This module provides helper functions to create commonly-used node configurations
without writing custom JavaScript. All configurations are pure Python dictionaries
that get serialized and passed to the JsonSchemaNode component.

Example:
    >>> from pynodewidget import JsonSchemaNodeWidget
    >>> from pynodewidget.node_builder import create_minimal_node, create_form_node
    >>> 
    >>> # Create a minimal node
    >>> config = create_minimal_node("Process")
    >>> node = JsonSchemaNodeWidget.from_pydantic(
    ...     MyModel,
    ...     **config
    ... )
"""

from typing import Dict, Any, List, Optional, Literal


# Type aliases for clarity
FieldValue = str | int | float | bool | None
HandleType = Literal["base", "button", "labeled"]
ShadowSize = Literal["sm", "md", "lg", "xl", "none"]
ErrorPosition = Literal["inline", "tooltip", "footer"]
ConditionOperator = Literal["equals", "notEquals", "greaterThan", "lessThan", "contains"]


def create_minimal_node(
    label: str,
    layout_type: str = "compact",
    min_width: str = "150px"
) -> Dict[str, Any]:
    """Create a minimal node configuration (no header, compact layout).
    
    Args:
        label: Node display label
        layout_type: Layout to use (default: "compact")
        min_width: Minimum node width (default: "150px")
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "layout_type": layout_type,
        "header": {"show": False},
        "style": {
            "minWidth": min_width,
            "shadow": "sm",
            "className": "border",
        },
    }


def create_debug_node(label: str = "Debug") -> Dict[str, Any]:
    """Create a debug/inspector node (shows all internal state).
    
    Args:
        label: Node display label (default: "Debug")
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "header": {
            "show": True,
            "icon": "🔍",
            "className": "bg-yellow-500 text-yellow-950",
        },
        "footer": {
            "show": True,
            "text": "Debug mode enabled",
            "className": "bg-yellow-50 text-yellow-800 border-yellow-200",
        },
        "style": {
            "className": "border-yellow-400",
            "shadow": "lg",
        },
        "validation": {
            "showErrors": True,
            "errorPosition": "inline",
            "validateOnChange": True,
        },
    }


def create_form_node(
    label: str,
    min_width: str = "300px",
    max_width: str = "500px"
) -> Dict[str, Any]:
    """Create a form-heavy node (optimized for many input fields).
    
    Args:
        label: Node display label
        min_width: Minimum node width (default: "300px")
        max_width: Maximum node width (default: "500px")
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "layout_type": "vertical",
        "header": {
            "show": True,
            "className": "bg-blue-600 text-white",
        },
        "style": {
            "minWidth": min_width,
            "maxWidth": max_width,
            "shadow": "md",
        },
        "validation": {
            "showErrors": True,
            "errorPosition": "inline",
        },
    }


def create_processing_node(
    label: str,
    icon: str = "⚙️",
    handle_type: HandleType = "button"
) -> Dict[str, Any]:
    """Create a compact processing node (minimal UI, focus on I/O).
    
    Args:
        label: Node display label
        icon: Icon emoji (default: "⚙️")
        handle_type: Type of handles to use (default: "button")
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "layout_type": "horizontal",
        "handle_type": handle_type,
        "header": {
            "show": True,
            "icon": icon,
            "className": "bg-gray-700 text-white",
        },
        "style": {
            "minWidth": "180px",
            "shadow": "md",
        },
    }


def create_source_node(
    label: str,
    icon: str = "📥",
    handle_type: HandleType = "labeled"
) -> Dict[str, Any]:
    """Create a data source node (emphasis on outputs).
    
    Args:
        label: Node display label
        icon: Icon emoji (default: "📥")
        handle_type: Type of handles to use (default: "labeled")
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "layout_type": "vertical",
        "handle_type": handle_type,
        "header": {
            "show": True,
            "icon": icon,
            "className": "bg-green-600 text-white",
        },
        "style": {
            "minWidth": "200px",
            "shadow": "md",
            "className": "border-green-500",
        },
    }


def create_sink_node(
    label: str,
    icon: str = "📤",
    handle_type: HandleType = "labeled"
) -> Dict[str, Any]:
    """Create a data sink node (emphasis on inputs).
    
    Args:
        label: Node display label
        icon: Icon emoji (default: "📤")
        handle_type: Type of handles to use (default: "labeled")
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "layout_type": "vertical",
        "handle_type": handle_type,
        "header": {
            "show": True,
            "icon": icon,
            "className": "bg-red-600 text-white",
        },
        "style": {
            "minWidth": "200px",
            "shadow": "md",
            "className": "border-red-500",
        },
    }


def create_visualization_node(
    label: str,
    min_width: str = "400px"
) -> Dict[str, Any]:
    """Create a visualization node (larger, emphasis on display).
    
    Args:
        label: Node display label
        min_width: Minimum node width (default: "400px")
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "layout_type": "vertical",
        "header": {
            "show": True,
            "icon": "📊",
            "className": "bg-purple-600 text-white",
        },
        "style": {
            "minWidth": min_width,
            "shadow": "lg",
        },
    }


def create_readonly_node(label: str) -> Dict[str, Any]:
    """Create a preset for readonly/display-only nodes.
    
    Args:
        label: Node display label
        
    Returns:
        Configuration dictionary for JsonSchemaNodeWidget
    """
    return {
        "label": label,
        "header": {
            "show": True,
            "icon": "📋",
            "className": "bg-slate-500 text-white",
        },
        "style": {
            "className": "opacity-90 border-slate-300",
            "shadow": "sm",
        },
    }


def with_custom_header(
    config: Dict[str, Any],
    icon: Optional[str] = None,
    bg_color: Optional[str] = None,
    text_color: Optional[str] = None,
    class_name: Optional[str] = None,
    show: bool = True
) -> Dict[str, Any]:
    """Add or modify header configuration.
    
    Args:
        config: Base configuration dictionary
        icon: Icon emoji to display
        bg_color: Background color (CSS color string)
        text_color: Text color (CSS color string)
        class_name: Custom CSS classes
        show: Whether to show the header
        
    Returns:
        Updated configuration dictionary
    """
    header_config = config.get("header", {})
    
    if icon is not None:
        header_config["icon"] = icon
    if bg_color is not None:
        header_config["bgColor"] = bg_color
    if text_color is not None:
        header_config["textColor"] = text_color
    if class_name is not None:
        header_config["className"] = class_name
    header_config["show"] = show
    
    return {**config, "header": header_config}


def with_footer(
    config: Dict[str, Any],
    text: str,
    class_name: Optional[str] = None
) -> Dict[str, Any]:
    """Add footer configuration.
    
    Args:
        config: Base configuration dictionary
        text: Footer text to display
        class_name: Custom CSS classes
        
    Returns:
        Updated configuration dictionary
    """
    footer_config = {
        "show": True,
        "text": text,
    }
    if class_name:
        footer_config["className"] = class_name
    
    return {**config, "footer": footer_config}


def with_style(
    config: Dict[str, Any],
    min_width: Optional[str] = None,
    max_width: Optional[str] = None,
    border_radius: Optional[str] = None,
    shadow: Optional[ShadowSize] = None,
    class_name: Optional[str] = None
) -> Dict[str, Any]:
    """Add or modify style configuration.
    
    Args:
        config: Base configuration dictionary
        min_width: Minimum width (e.g., "200px")
        max_width: Maximum width (e.g., "500px")
        border_radius: Border radius (e.g., "8px")
        shadow: Shadow size ("sm", "md", "lg", "xl", "none")
        class_name: Custom CSS classes
        
    Returns:
        Updated configuration dictionary
    """
    style_config = config.get("style", {})
    
    if min_width is not None:
        style_config["minWidth"] = min_width
    if max_width is not None:
        style_config["maxWidth"] = max_width
    if border_radius is not None:
        style_config["borderRadius"] = border_radius
    if shadow is not None:
        style_config["shadow"] = shadow
    if class_name is not None:
        style_config["className"] = class_name
    
    return {**config, "style": style_config}


def with_validation(
    config: Dict[str, Any],
    show_errors: bool = True,
    error_position: ErrorPosition = "inline",
    validate_on_change: bool = False
) -> Dict[str, Any]:
    """Add validation configuration.
    
    Args:
        config: Base configuration dictionary
        show_errors: Whether to show validation errors
        error_position: Where to display errors ("inline", "tooltip", "footer")
        validate_on_change: Validate as user types
        
    Returns:
        Updated configuration dictionary
    """
    return {
        **config,
        "validation": {
            "showErrors": show_errors,
            "errorPosition": error_position,
            "validateOnChange": validate_on_change,
        }
    }


def create_conditional_field(
    trigger_field: str,
    trigger_value: FieldValue,
    operator: ConditionOperator = "equals"
) -> Dict[str, Any]:
    """Create a field condition for conditional visibility.
    
    Args:
        trigger_field: Field name to watch
        trigger_value: Value to compare against
        operator: Comparison operator
        
    Returns:
        Field configuration with showWhen condition
    """
    return {
        "showWhen": {
            "field": trigger_field,
            "operator": operator,
            "value": trigger_value,
        }
    }


def make_field_readonly(field_key: str) -> Dict[str, Dict[str, Any]]:
    """Create readonly configuration for a field.
    
    Args:
        field_key: Field name to make readonly
        
    Returns:
        Field configurations dictionary
    """
    return {field_key: {"readonly": True}}


def make_field_hidden(field_key: str) -> Dict[str, Dict[str, Any]]:
    """Create hidden configuration for a field.
    
    Args:
        field_key: Field name to hide
        
    Returns:
        Field configurations dictionary
    """
    return {field_key: {"hidden": True}}


def make_fields_conditional(
    trigger_field: str,
    trigger_value: FieldValue,
    dependent_fields: List[str],
    operator: ConditionOperator = "equals"
) -> Dict[str, Dict[str, Any]]:
    """Create conditional visibility for multiple fields.
    
    All dependent fields will only show when the trigger field has the specified value.
    
    Args:
        trigger_field: Field name to watch
        trigger_value: Value that triggers visibility
        dependent_fields: List of field names to show conditionally
        operator: Comparison operator (default: "equals")
        
    Returns:
        Field configurations dictionary
    """
    configs = {}
    condition = create_conditional_field(trigger_field, trigger_value, operator)
    
    for field in dependent_fields:
        configs[field] = condition
    
    return configs


def merge_configs(*configs: Dict[str, Any]) -> Dict[str, Any]:
    """Merge multiple configuration dictionaries.
    
    Later configurations override earlier ones. Nested dictionaries like
    header, footer, style are merged recursively.
    
    Args:
        *configs: Configuration dictionaries to merge
        
    Returns:
        Merged configuration dictionary
    """
    result: dict[str, Any] = {}
    
    for config in configs:
        for key, value in config.items():
            if key in ("header", "footer", "style", "validation", "fieldConfigs"):
                # Merge nested dicts
                result[key] = {**result.get(key, {}), **value}
            else:
                result[key] = value
    
    return result
