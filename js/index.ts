// Anywidget entry point export - JsonSchema widget (for backward compatibility with Python)
// Note: This maintains compatibility with existing JsonSchemaNodeWidget Python class
export { default } from "./src/anywidget/JsonSchemaNodeWidget";

// Also export the main grid-based widget for direct use
export { default as GridWidget } from "./src/index";
