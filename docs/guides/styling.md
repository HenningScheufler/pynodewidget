# Styling Nodes

Customize node appearance with headers, footers, colors, and layouts.

## Overview

PyNodeWidget provides multiple ways to style nodes:

1. **Class attributes**: Set styling properties directly on node classes
2. **Node builder helpers**: Use `with_*` functions for common styling patterns
3. **Tailwind CSS classes**: Apply utility classes for fine-grained control
4. **Custom headers/footers**: Add branded or informative sections

## Basic Styling with Class Attributes

### Icons

Add visual identifiers with emojis or Lucide icon names:

```python
from pynodewidget import JsonSchemaNodeWidget

class DataLoader(JsonSchemaNodeWidget):
    label = "Data Loader"
    parameters = LoaderParams
    icon = "📁"  # Emoji

class ImageProcessor(JsonSchemaNodeWidget):
    label = "Image Processor"
    parameters = ProcessorParams
    icon = "image"  # Lucide icon name
```

**Popular Lucide icons:**
- `"database"` - Database operations
- `"cpu"` - Processing
- `"bar-chart"` - Visualization
- `"file-text"` - Text/documents
- `"filter"` - Filtering
- `"git-merge"` - Merging/combining
- `"upload"` - Input/upload
- `"download"` - Output/download

See [Lucide Icons](https://lucide.dev/icons/) for full list.

### Colors

Set node color with Tailwind color names:

```python
class InputNode(JsonSchemaNodeWidget):
    label = "Input"
    parameters = InputParams
    color = "blue"  # Blue theme

class ProcessingNode(JsonSchemaNodeWidget):
    label = "Processing"
    parameters = ProcessorParams
    color = "green"  # Green theme

class ErrorNode(JsonSchemaNodeWidget):
    label = "Error Handler"
    parameters = ErrorParams
    color = "red"  # Red theme
```

**Available colors:**
- `"gray"` - Neutral (default)
- `"blue"` - Information
- `"green"` - Success/processing
- `"yellow"` - Warning
- `"red"` - Error/danger
- `"purple"` - Special/advanced
- `"pink"` - Visualization
- `"indigo"` - Data

## Layout Types

Control field arrangement:

```python
class HorizontalNode(JsonSchemaNodeWidget):
    label = "Horizontal"
    parameters = Params
    layout_type = "horizontal"  # Fields in rows

class VerticalNode(JsonSchemaNodeWidget):
    label = "Vertical"  
    parameters = Params
    layout_type = "vertical"  # Fields in columns (more compact)
```

**When to use:**
- `"horizontal"`: Wide forms with labels on left, inputs on right
- `"vertical"`: Narrow nodes with stacked fields (default)

## Custom Headers

### Enable Custom Headers

```python
from pynodewidget import JsonSchemaNodeWidget

class BrandedNode(JsonSchemaNodeWidget):
    label = "Branded Node"
    parameters = Params
    
    # Enable custom header
    use_custom_header = True
    header_class = "bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-t"
```

### Header Styling Classes

Use Tailwind utilities:

```python
# Gradient background
header_class = "bg-gradient-to-r from-blue-500 to-purple-600 text-white"

# Solid color with shadow
header_class = "bg-indigo-600 text-white shadow-lg"

# Pattern background
header_class = "bg-gray-800 text-gray-100 border-b-4 border-blue-500"

# Custom padding and rounded corners
header_class = "bg-blue-600 text-white p-3 rounded-t-lg"
```

### Render Custom Header Content

Override `render_custom_header()` for dynamic content:

```python
class StatusNode(JsonSchemaNodeWidget):
    label = "Status Monitor"
    parameters = StatusParams
    use_custom_header = True
    header_class = "bg-gray-800 text-white p-2"
    
    @classmethod
    def render_custom_header(cls, field_values: dict) -> str:
        """Generate HTML for custom header."""
        status = field_values.get("status", "idle")
        color = {
            "idle": "gray",
            "running": "green",
            "error": "red"
        }.get(status, "gray")
        
        return f'''
        <div class="flex items-center justify-between">
            <span class="font-bold">{cls.label}</span>
            <span class="px-2 py-1 bg-{color}-500 rounded text-xs">
                {status.upper()}
            </span>
        </div>
        '''
```

## Custom Footers

### Enable Custom Footers

```python
class InfoNode(JsonSchemaNodeWidget):
    label = "Info Node"
    parameters = Params
    
    # Enable custom footer
    use_custom_footer = True
    footer_class = "bg-gray-100 p-2 text-sm text-gray-600 rounded-b"
```

### Footer Styling Classes

```python
# Info footer
footer_class = "bg-blue-50 border-t border-blue-200 p-2 text-xs text-blue-700"

# Warning footer
footer_class = "bg-yellow-50 border-t border-yellow-200 p-2 text-xs text-yellow-700"

# Success footer
footer_class = "bg-green-50 border-t border-green-200 p-2 text-xs text-green-700"
```

### Render Custom Footer Content

```python
class StatsNode(JsonSchemaNodeWidget):
    label = "Statistics"
    parameters = StatsParams
    use_custom_footer = True
    footer_class = "bg-gray-50 border-t p-2 text-xs"
    
    @classmethod
    def render_custom_footer(cls, field_values: dict) -> str:
        """Show statistics in footer."""
        sample_size = field_values.get("sample_size", 0)
        confidence = field_values.get("confidence", 0.95)
        
        return f'''
        <div class="flex justify-between text-gray-600">
            <span>Samples: {sample_size}</span>
            <span>Confidence: {confidence*100:.0f}%</span>
        </div>
        '''
```

## Body Styling

Customize the main content area:

```python
class CustomBodyNode(JsonSchemaNodeWidget):
    label = "Custom Body"
    parameters = Params
    
    # Style the body (where fields appear)
    body_class = "bg-gray-50 p-4 space-y-3"
```

**Common body classes:**

```python
# Light background
body_class = "bg-gray-50 p-3"

# Dark background
body_class = "bg-gray-800 text-white p-3"

# Tight spacing
body_class = "p-2 space-y-1"

# Loose spacing
body_class = "p-4 space-y-4"

# Bordered sections
body_class = "border-2 border-gray-300 p-3"
```

## Error Styling

### Shadow on Error

Add visual feedback for validation errors:

```python
from pynodewidget import JsonSchemaNodeWidget

class ValidatedNode(JsonSchemaNodeWidget):
    label = "Validated"
    parameters = ValidatedParams
    
    # Shadow size when errors occur
    shadow_on_error = "xl"  # "sm", "md", "lg", "xl", or "none"
```

**Shadow sizes:**
- `"sm"`: Subtle red shadow
- `"md"`: Medium red shadow (default)
- `"lg"`: Large red shadow
- `"xl"`: Extra large red shadow (very noticeable)
- `"none"`: No shadow on error

### Error Position

Control where validation errors appear:

```python
class ErrorNode(JsonSchemaNodeWidget):
    label = "Error Display"
    parameters = ErrorParams
    
    # Error message position
    errors_at = "bottom"  # "inline", "top", "bottom"
```

**Error positions:**
- `"inline"`: Show errors next to each field (default)
- `"top"`: Collect errors at top of node
- `"bottom"`: Collect errors at bottom of node

## Node Builder Helpers

Use helper functions for common styling patterns:

### with_custom_header

Add a custom header with colors:

```python
from pynodeflow.node_builder import create_minimal_node, with_custom_header

config = create_minimal_node(
    type_name="styled",
    label="Styled Node",
    fields={"value": "number"}
)

# Add custom header
config = with_custom_header(
    config,
    bg_color="#4F46E5",  # Indigo
    text_color="#FFFFFF",
    class_name="font-bold text-lg"
)
```

### with_footer

Add a footer section:

```python
from pynodeflow.node_builder import with_footer

config = with_footer(
    config,
    content="ℹ️ This node processes data",
    bg_color="#F3F4F6",  # Light gray
    text_color="#374151"
)
```

### with_style

Apply custom styles:

```python
from pynodeflow.node_builder import with_style

config = with_style(
    config,
    min_width="250px",
    max_width="400px",
    shadow="lg",
    border_color="#3B82F6",  # Blue
    border_width="2px"
)
```

**Style options:**
- `min_width`: Minimum node width
- `max_width`: Maximum node width  
- `shadow`: Shadow size (`"sm"`, `"md"`, `"lg"`, `"xl"`, `"none"`)
- `border_color`: Border color (CSS color)
- `border_width`: Border width (CSS size)
- `border_radius`: Corner rounding (CSS size)

## Complete Styling Examples

### Branded Input Node

```python
class BrandedInputNode(JsonSchemaNodeWidget):
    label = "Data Input"
    parameters = InputParams
    icon = "download"
    color = "blue"
    
    use_custom_header = True
    header_class = "bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 font-bold"
    
    body_class = "bg-blue-50 p-4 space-y-3"
    
    use_custom_footer = True
    footer_class = "bg-blue-100 border-t border-blue-300 p-2 text-xs text-blue-700"
    
    @classmethod
    def render_custom_footer(cls, field_values: dict) -> str:
        source = field_values.get("source", "unknown")
        return f'<div>📥 Source: {source}</div>'
```

### Status Indicator Node

```python
class StatusNode(JsonSchemaNodeWidget):
    label = "Process Status"
    parameters = StatusParams
    icon = "activity"
    
    use_custom_header = True
    header_class = "p-2"
    
    @classmethod
    def render_custom_header(cls, field_values: dict) -> str:
        status = field_values.get("status", "idle")
        
        status_colors = {
            "idle": ("gray", "⏸️"),
            "running": ("green", "▶️"),
            "error": ("red", "❌"),
            "complete": ("blue", "✅")
        }
        
        color, emoji = status_colors.get(status, ("gray", "⏸️"))
        
        return f'''
        <div class="bg-{color}-600 text-white p-2 rounded-t flex items-center justify-between">
            <span class="font-bold">{cls.label}</span>
            <span class="text-xl">{emoji}</span>
        </div>
        '''
```

### Warning Node

```python
class WarningNode(JsonSchemaNodeWidget):
    label = "Warning"
    parameters = WarningParams
    icon = "alert-triangle"
    color = "yellow"
    
    use_custom_header = True
    header_class = "bg-yellow-500 text-black p-2 font-bold"
    
    body_class = "bg-yellow-50 border-l-4 border-yellow-500 p-3"
    
    shadow_on_error = "xl"
    
    use_custom_footer = True
    footer_class = "bg-yellow-100 p-2 text-xs text-yellow-800"
    
    @classmethod
    def render_custom_footer(cls, field_values: dict) -> str:
        return '<div>⚠️ Review settings carefully before proceeding</div>'
```

### Compact Processing Node

```python
class CompactProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    icon = "cpu"
    color = "green"
    layout_type = "vertical"
    
    body_class = "p-2 space-y-2 text-sm"
    
    shadow_on_error = "md"
```

### Data Visualization Node

```python
class ChartNode(JsonSchemaNodeWidget):
    label = "Chart"
    parameters = ChartParams
    icon = "bar-chart"
    color = "purple"
    
    use_custom_header = True
    header_class = "bg-gradient-to-r from-purple-600 to-pink-500 text-white p-2"
    
    body_class = "bg-purple-50 p-3"
    
    use_custom_footer = True
    footer_class = "bg-purple-100 border-t border-purple-300 p-2"
    
    @classmethod
    def render_custom_header(cls, field_values: dict) -> str:
        chart_type = field_values.get("chart_type", "bar")
        return f'''
        <div class="flex items-center space-x-2">
            <span>📊</span>
            <span class="font-bold">{chart_type.title()} Chart</span>
        </div>
        '''
    
    @classmethod
    def render_custom_footer(cls, field_values: dict) -> str:
        title = field_values.get("title", "Untitled")
        return f'<div class="text-xs text-purple-700">Title: {title}</div>'
```

## Tailwind CSS Reference

PyNodeWidget uses Tailwind CSS. Common utilities:

- **Colors**: `bg-{color}-{shade}`, `text-{color}-{shade}` (shades 50-950)
- **Spacing**: `p-{size}`, `m-{size}`, `space-y-{size}` (sizes 0-64)
- **Layout**: `flex`, `grid`, `items-center`, `justify-between`
- **Borders**: `border`, `border-{size}`, `rounded`, `rounded-{size}`
- **Shadows**: `shadow-{sm|md|lg|xl}`
- **Text**: `text-{xs|sm|base|lg}`, `font-{bold|semibold}`
- **Gradients**: `bg-gradient-to-{r|b}`, `from-{color}`, `to-{color}`

Full reference: [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Best Practices

- **Consistent colors**: Group related nodes with similar colors
- **Meaningful icons**: Icons should clarify node purpose  
- **Concise headers**: Avoid cluttering with too much info
- **Accessible colors**: Ensure sufficient contrast
- **Test error states**: Verify error styling is visible

## Troubleshooting

**Styles not applying**: Check Tailwind class spelling.

**Header/footer not showing**: Enable with `use_custom_header = True` or `use_custom_footer = True`.

**Colors not changing**: Custom header classes override node-level `color` attribute.

**Gradients not working**: Use format `bg-gradient-to-r from-{color}-{shade} to-{color}-{shade}`.

## Next Steps

- **[Creating Custom Nodes](custom-nodes.md)**: Build custom nodes
- **[Conditional Fields](conditional-fields.md)**: Dynamic field visibility
- **[Handles Configuration](handles.md)**: Connection point styling
