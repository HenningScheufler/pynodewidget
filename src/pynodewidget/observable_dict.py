"""Observable dictionary that automatically triggers callbacks on mutations.

This module provides ObservableDict, a dict subclass that notifies a callback
whenever it's mutated, enabling automatic sync with traitlets without manual
reassignment.
"""

from typing import Any, Callable, Optional
import traitlets as t


class ObservableDict(dict):
    """A dictionary that triggers a callback on any mutation.
    
    Wraps a standard dict and intercepts all mutation operations to trigger
    a callback, enabling automatic sync with traitlets without manual reassignment.
    
    Nested dicts are automatically wrapped to enable recursive observation.
    """
    
    def __init__(self, *args, callback: Optional[Callable[[], None]] = None, **kwargs):
        """Initialize an ObservableDict.
        
        Args:
            *args: Positional arguments passed to dict constructor
            callback: Optional callback function to call on mutations
            **kwargs: Keyword arguments passed to dict constructor
        """
        super().__init__(*args, **kwargs)
        # Store callback in __dict__ to avoid triggering __setitem__
        object.__setattr__(self, '_callback', callback)
        
        # Wrap any existing nested dicts
        for key, value in list(self.items()):
            if isinstance(value, dict) and not isinstance(value, ObservableDict):
                super().__setitem__(key, ObservableDict(value, callback=callback))
    
    def _notify(self):
        """Trigger the callback if set."""
        callback = object.__getattribute__(self, '_callback')
        if callback:
            callback()
    
    def _rewrap_with_callback(self, callback: Callable[[], None]):
        """Recursively rewrap self and all nested dicts with a new callback.
        
        This is needed when ObservableDict is deserialized by traitlets and
        needs to be reconnected to the widget.
        """
        object.__setattr__(self, '_callback', callback)
        for key, value in list(self.items()):
            if isinstance(value, ObservableDict):
                value._rewrap_with_callback(callback)
            elif isinstance(value, dict):
                super().__setitem__(key, ObservableDict(value, callback=callback))
    
    def __setitem__(self, key: Any, value: Any) -> None:
        """Set an item and trigger callback. Wraps nested dicts."""
        if isinstance(value, dict) and not isinstance(value, ObservableDict):
            callback = object.__getattribute__(self, '_callback')
            value = ObservableDict(value, callback=callback)
        super().__setitem__(key, value)
        self._notify()
    
    def __delitem__(self, key: Any) -> None:
        """Delete an item and trigger callback."""
        super().__delitem__(key)
        self._notify()
    
    def update(self, *args, **kwargs) -> None:
        """Update dict and trigger callback. Wraps nested dicts."""
        callback = object.__getattribute__(self, '_callback')
        if args:
            other = args[0]
            if isinstance(other, dict):
                for key, value in other.items():
                    if isinstance(value, dict) and not isinstance(value, ObservableDict):
                        other[key] = ObservableDict(value, callback=callback)
        for key, value in kwargs.items():
            if isinstance(value, dict) and not isinstance(value, ObservableDict):
                kwargs[key] = ObservableDict(value, callback=callback)
        super().update(*args, **kwargs)
        self._notify()
    
    def pop(self, *args) -> Any:
        """Remove and return an item, triggering callback."""
        result = super().pop(*args)
        self._notify()
        return result
    
    def popitem(self) -> tuple:
        """Remove and return an arbitrary item, triggering callback."""
        result = super().popitem()
        self._notify()
        return result
    
    def clear(self) -> None:
        """Remove all items and trigger callback."""
        super().clear()
        self._notify()
    
    def setdefault(self, key: Any, default: Any = None) -> Any:
        """Get item or set default, triggering callback if key doesn't exist."""
        if key not in self:
            if isinstance(default, dict) and not isinstance(default, ObservableDict):
                callback = object.__getattribute__(self, '_callback')
                default = ObservableDict(default, callback=callback)
            self._notify()
        return super().setdefault(key, default)
    
    def __reduce_ex__(self, protocol):
        """Support for pickling - return as regular dict."""
        return (dict, (dict(self),))


class ObservableDictTrait(t.TraitType):
    """A traitlet that maintains ObservableDict with automatic callback rewiring.
    
    Ensures values are wrapped in ObservableDict and callbacks are preserved
    across serialization/deserialization.
    """
    
    info_text = 'an ObservableDict'
    default_value = {}
    
    def __init__(self, default_value=t.Undefined, **kwargs):
        if default_value is t.Undefined:
            default_value = {}
        super().__init__(default_value=default_value, **kwargs)
    
    def validate(self, obj, value):
        """Validate and wrap value in ObservableDict."""
        callback = lambda: obj.notify_change({'name': self.name, 'type': 'change'})
        if isinstance(value, ObservableDict):
            value._rewrap_with_callback(callback)
            return value
        elif isinstance(value, dict):
            return ObservableDict(value, callback=callback)
        else:
            self.error(obj, value)
