"""Custom exception classes for PyNodeWidget.

Provides structured error handling with descriptive error messages.
"""

from typing import List, Optional, Any


class PyNodeWidgetError(Exception):
    """Base exception class for all PyNodeWidget errors."""
    pass


class NodeNotFoundError(PyNodeWidgetError):
    """Raised when a node with the specified ID cannot be found."""
    
    def __init__(self, node_id: str, available_ids: Optional[List[str]] = None):
        self.node_id = node_id
        self.available_ids = available_ids or []
        
        if self.available_ids:
            msg = f"Node '{node_id}' not found. Available nodes: {', '.join(self.available_ids[:5])}"
            if len(self.available_ids) > 5:
                msg += f" (and {len(self.available_ids) - 5} more)"
        else:
            msg = f"Node '{node_id}' not found"
            
        super().__init__(msg)


class TemplateNotFoundError(PyNodeWidgetError):
    """Raised when a node template with the specified type cannot be found."""
    
    def __init__(self, template_type: str, available_types: Optional[List[str]] = None):
        self.template_type = template_type
        self.available_types = available_types or []
        
        if self.available_types:
            msg = f"Template '{template_type}' not found. Available types: {', '.join(self.available_types)}"
        else:
            msg = f"Template '{template_type}' not found"
            
        super().__init__(msg)


class ValidationError(PyNodeWidgetError):
    """Raised when data validation fails."""
    
    def __init__(
        self, 
        message: str, 
        field: Optional[str] = None, 
        value: Optional[Any] = None
    ):
        self.field = field
        self.value = value
        
        if field:
            msg = f"Validation error for field '{field}': {message}"
            if value is not None:
                msg += f" (value: {value!r})"
        else:
            msg = f"Validation error: {message}"
            
        super().__init__(msg)


class GridLayoutError(PyNodeWidgetError):
    """Raised when grid layout configuration is invalid."""
    pass


class ComponentError(PyNodeWidgetError):
    """Raised when component configuration or rendering fails."""
    pass


class HandleError(PyNodeWidgetError):
    """Raised when handle configuration or connection fails."""
    pass
