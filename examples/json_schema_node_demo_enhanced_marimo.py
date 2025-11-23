"""Enhanced JsonSchemaNodeWidget Demo with NodeBuilder - Marimo version.

This Marimo app demonstrates the new NodeBuilder configuration system for
creating highly customized nodes without JavaScript.

Run with: marimo edit json_schema_node_demo_enhanced_marimo.py
"""

import marimo

__generated_with = "0.9.14"
app = marimo.App(width="medium")


@app.cell
def __():
    import marimo as mo
    return (mo,)


@app.cell
def __(mo):
    mo.md(
        """
        # JsonSchemaNodeWidget Demo - Enhanced with NodeBuilder

        This demo shows the **enhanced JsonSchemaNodeWidget** with the new **NodeBuilder** 
        configuration system. You'll learn how to:

        - Use pre-built node templates (minimal, debug, form, processing, etc.)
        - Customize node appearance (headers, footers, styles, colors)
        - Configure conditional field visibility
        - Apply validation settings
        - Merge configurations for complex nodes

        **All without writing any JavaScript!** 🎉

        ## What's New?
        - ✨ **Pre-built Templates** - Common node patterns ready to use
        - 🎨 **Full Styling Control** - Colors, icons, sizes, shadows from Python
        - 🔄 **Conditional Fields** - Show/hide fields based on values
        - ✅ **Validation Display** - Configure how errors are shown
        - 🔧 **Field-Level Config** - Readonly, hidden, tooltips per field
        - 📦 **Configuration Merging** - Combine multiple configs
        """
    )
    return


@app.cell
def __():
    from pydantic import BaseModel, Field
    from pynodewidget import JsonSchemaNodeWidget, node_builder
    return BaseModel, Field, JsonSchemaNodeWidget, node_builder


@app.cell
def __(mo):
    mo.md("## Example 1: Basic Usage (Unchanged)\n\nThe original API still works exactly the same way:")
    return


@app.cell
def __(BaseModel, Field, JsonSchemaNodeWidget):
    class BasicParams(BaseModel):
        """Basic parameters."""
        name: str = Field(default="Alice", description="Person's name")
        age: int = Field(default=30, ge=0, le=150, description="Person's age")
        is_student: bool = Field(default=False, description="Is a student?")

    # Create node the traditional way (still works!)
    basic_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        label="Basic Node",
        icon="👤"
    )

    basic_node
    return BasicParams, basic_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 2: Minimal Node Template

        Use pre-built templates for common patterns. The minimal template removes 
        the header and makes the node compact:
        """
    )
    return


@app.cell
def __(BasicParams, JsonSchemaNodeWidget, node_builder):
    # Create a minimal node configuration
    minimal_config = node_builder.create_minimal_node("Quick Process")

    minimal_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        **minimal_config,
        inputs=[{"id": "in", "label": "Input"}],
        outputs=[{"id": "out", "label": "Output"}]
    )

    minimal_node
    return minimal_config, minimal_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 3: Debug Node with Validation

        Debug nodes show validation errors inline and have a distinctive yellow theme:
        """
    )
    return


@app.cell
def __(BasicParams, JsonSchemaNodeWidget, node_builder):
    debug_config = node_builder.create_debug_node("Inspector")

    debug_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        **debug_config
    )

    debug_node
    return debug_config, debug_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 4: Processing Node with Custom Icon

        Processing nodes are compact with button-style handles and custom icons:
        """
    )
    return


@app.cell
def __(BaseModel, Field, JsonSchemaNodeWidget, node_builder):
    class ProcessingParams(BaseModel):
        """Processing parameters."""
        mode: str = Field(default="auto", description="Processing mode")
        threshold: float = Field(default=0.5, ge=0, le=1, description="Threshold")

    processing_config = node_builder.create_processing_node(
        "Data Transform",
        icon="🔄",
        handle_type="button"
    )

    processing_node = JsonSchemaNodeWidget.from_pydantic(
        ProcessingParams,
        **processing_config,
        inputs=[{"id": "data", "label": "Data"}],
        outputs=[{"id": "result", "label": "Result"}]
    )

    processing_node
    return ProcessingParams, processing_config, processing_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 5: Source and Sink Nodes

        Source nodes (green) emphasize outputs, sink nodes (red) emphasize inputs:
        """
    )
    return


@app.cell
def __(BasicParams, JsonSchemaNodeWidget, mo, node_builder):
    # Source node (green theme)
    source_config = node_builder.create_source_node("Data Source", icon="📥")
    source_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        **source_config,
        outputs=[
            {"id": "data", "label": "Data Stream"},
            {"id": "metadata", "label": "Metadata"}
        ]
    )

    # Sink node (red theme)
    sink_config = node_builder.create_sink_node("Data Export", icon="📤")
    sink_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        **sink_config,
        inputs=[
            {"id": "data", "label": "Data Stream"},
            {"id": "config", "label": "Config"}
        ]
    )

    mo.hstack([source_node, sink_node], justify="space-around")
    return sink_config, sink_node, source_config, source_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 6: Conditional Fields

        Show/hide fields based on other field values:
        """
    )
    return


@app.cell
def __(BaseModel, Field, JsonSchemaNodeWidget, node_builder):
    class ConditionalParams(BaseModel):
        """Parameters with conditional visibility."""
        enable_advanced: bool = Field(default=False, description="Enable advanced options")
        basic_option: str = Field(default="value", description="Basic option")
        advanced_option_1: str = Field(default="", description="Advanced option 1")
        advanced_option_2: int = Field(default=0, description="Advanced option 2")

    # Create field configurations for conditional visibility
    field_configs = node_builder.make_fields_conditional(
        trigger_field="enable_advanced",
        trigger_value=True,
        dependent_fields=["advanced_option_1", "advanced_option_2"]
    )

    conditional_config = node_builder.create_form_node("Advanced Settings")
    conditional_node = JsonSchemaNodeWidget.from_pydantic(
        ConditionalParams,
        **conditional_config,
        fieldConfigs=field_configs
    )

    conditional_node
    return (
        ConditionalParams,
        conditional_config,
        conditional_node,
        field_configs,
    )


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 7: Custom Header and Footer

        Fully customize header colors and add footer text:
        """
    )
    return


@app.cell
def __(BasicParams, JsonSchemaNodeWidget, node_builder):
    custom_config = node_builder.create_processing_node("Custom Styled")

    # Customize header with pink colors
    custom_config = node_builder.with_custom_header(
        custom_config,
        icon="✨",
        bg_color="#ec4899",  # Pink background
        text_color="#fdf2f8"   # Light pink text
    )

    # Add footer with version info
    custom_config = node_builder.with_footer(
        custom_config,
        text="Version 2.0 | Last updated: Nov 2025",
        class_name="text-xs italic"
    )

    custom_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        **custom_config
    )

    custom_node
    return custom_config, custom_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 8: Merged Configurations

        Combine multiple configurations for complex nodes:
        """
    )
    return


@app.cell
def __(BasicParams, JsonSchemaNodeWidget, node_builder):
    # Start with a processing node base
    base = node_builder.create_processing_node("Hybrid Node")

    # Add debug features (validation, footer)
    debug = node_builder.create_debug_node()

    # Add custom styling
    custom_style = {
        "style": {
            "minWidth": "350px",
            "maxWidth": "600px",
            "shadow": "xl",
            "className": "border-4 border-purple-500"
        }
    }

    # Merge all configurations
    merged_config = node_builder.merge_configs(base, debug, custom_style)

    merged_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        **merged_config
    )

    merged_node
    return base, custom_style, debug, merged_config, merged_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 9: Readonly Fields

        Make specific fields readonly while keeping others editable:
        """
    )
    return


@app.cell
def __(BasicParams, JsonSchemaNodeWidget, node_builder):
    readonly_config = node_builder.create_readonly_node("Display Only")

    # Make specific fields readonly
    readonly_field_configs = {
        **node_builder.make_field_readonly("name"),
        **node_builder.make_field_readonly("age"),
    }

    readonly_node = JsonSchemaNodeWidget.from_pydantic(
        BasicParams,
        **readonly_config,
        fieldConfigs=readonly_field_configs
    )

    readonly_node
    return readonly_config, readonly_field_configs, readonly_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Example 10: Visualization Node

        Large nodes optimized for displaying visualizations:
        """
    )
    return


@app.cell
def __(BaseModel, Field, JsonSchemaNodeWidget, node_builder):
    class VizParams(BaseModel):
        """Visualization parameters."""
        chart_type: str = Field(default="line", description="Chart type")
        width: int = Field(default=800, ge=100, le=2000, description="Width")
        height: int = Field(default=600, ge=100, le=1500, description="Height")
        show_legend: bool = Field(default=True, description="Show legend")

    viz_config = node_builder.create_visualization_node("Chart Display", min_width="500px")

    viz_node = JsonSchemaNodeWidget.from_pydantic(
        VizParams,
        **viz_config,
        inputs=[{"id": "data", "label": "Data Source"}]
    )

    viz_node
    return VizParams, viz_config, viz_node


@app.cell
def __(mo):
    mo.md(
        """
        ## Summary

        You've learned how to use the NodeBuilder system to create highly customized 
        nodes from pure Python!

        ### Pre-built Templates
        - `create_minimal_node()` - Compact, no header
        - `create_debug_node()` - Validation display, yellow theme
        - `create_form_node()` - Optimized for many fields
        - `create_processing_node()` - Compact with custom handles
        - `create_source_node()` - Green theme, output focus
        - `create_sink_node()` - Red theme, input focus
        - `create_visualization_node()` - Large, purple theme
        - `create_readonly_node()` - Display only

        ### Customization Helpers
        - `with_custom_header()` - Change colors, icons
        - `with_footer()` - Add footer text
        - `with_style()` - Customize sizing, shadows, borders
        - `make_fields_conditional()` - Conditional visibility
        - `make_field_readonly()` - Readonly fields
        - `merge_configs()` - Combine configurations

        ### Key Features
        ✅ No JavaScript required  
        ✅ Full styling control  
        ✅ Conditional fields  
        ✅ Validation display  
        ✅ Pre-built templates  
        ✅ Composable configs  

        For more examples, see:
        - `examples/node_builder_example.py`
        - `docs/NODE_BUILDER_GUIDE.md`
        """
    )
    return


if __name__ == "__main__":
    app.run()
