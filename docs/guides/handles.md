# Handle Configuration

Configure connection points (handles) for node inputs and outputs.

## Overview

**Handles** are connection points on nodes that allow data flow between nodes. PyNodeWidget supports three handle types with different visual styles and behaviors:

- **Base handles**: Simple connection points (default)
- **Button handles**: Prominent button-style handles
- **Labeled handles**: Handles with visible labels and optional icons

## Simple Handle Definition

### Basic Inputs and Outputs

Define handles as lists of dictionaries:

```python
from pynodewidget import JsonSchemaNodeWidget

class DataProcessor(JsonSchemaNodeWidget):
    label = "Data Processor"
    parameters = ProcessorParams
    
    inputs = [{"id": "data", "label": "Input Data"}]
    outputs = [{"id": "result", "label": "Processed Data"}]
```

### Multiple Handles

Add multiple connection points:

```python
class JoinNode(JsonSchemaNodeWidget):
    label = "Join"
    parameters = JoinParams
    
    # Two inputs
    inputs = [
        {"id": "left", "label": "Left Dataset"},
        {"id": "right", "label": "Right Dataset"}
    ]
    
    # Single output
    outputs = [{"id": "joined", "label": "Joined Data"}]
```

### Source and Sink Nodes

**Source nodes** (no inputs):

```python
class DataSource(JsonSchemaNodeWidget):
    label = "Data Source"
    parameters = SourceParams
    
    inputs = []  # No inputs
    outputs = [{"id": "data", "label": "Data"}]
```

**Sink nodes** (no outputs):

```python
class DataSink(JsonSchemaNodeWidget):
    label = "Data Sink"
    parameters = SinkParams
    
    inputs = [{"id": "data", "label": "Data"}]
    outputs = []  # No outputs - terminal node
```

## Handle Types

### Base Handles (default)

Simple connection points:

```python
class SimpleNode(JsonSchemaNodeWidget):
    label = "Simple"
    parameters = Params
    handle_type = "base"  # Default
    
    inputs = [{"id": "in", "label": "Input"}]
    outputs = [{"id": "out", "label": "Output"}]
```

**Characteristics:**
- Minimal visual footprint
- Small circular connection points
- Labels not always visible
- Best for simple workflows

### Button Handles

Prominent button-style handles:

```python
class ProcessingNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    handle_type = "button"
    
    inputs = [{"id": "data", "label": "Process"}]
    outputs = [{"id": "result", "label": "Result"}]
```

**Characteristics:**
- Larger, more visible
- Button-like appearance
- Clear affordance for connection
- Good for processing/action nodes

### Labeled Handles

Handles with visible labels and optional icons:

```python
class LabeledNode(JsonSchemaNodeWidget):
    label = "Labeled Node"
    parameters = Params
    handle_type = "labeled"
    
    inputs = [{"id": "data", "label": "Input Data"}]
    outputs = [
        {"id": "result", "label": "Result"},
        {"id": "metadata", "label": "Metadata"}
    ]
```

**Characteristics:**
- Labels always visible
- Optional icons
- Clear handle identification
- Best for complex nodes with many handles

## Advanced Handle Specs

Use `HandleSpec` from protocols for fine-grained control:

```python
from pynodewidget import JsonSchemaNodeWidget
from pynodeflow.protocols import HandleSpec

class AdvancedNode(JsonSchemaNodeWidget):
    label = "Advanced Node"
    parameters = Params
    
    inputs = [
        HandleSpec(
            id="data",
            label="Data Input",
            handle_type="labeled"
        )
    ]
    
    outputs = [
        HandleSpec(
            id="primary",
            label="Primary Output",
            handle_type="labeled"
        ),
        HandleSpec(
            id="secondary",
            label="Secondary Output",
            handle_type="base"
        )
    ]
```

**HandleSpec attributes:**
- `id`: Unique identifier (required)
- `label`: Display name (required)
- `handle_type`: Visual style (`"base"`, `"button"`, `"labeled"`)

## Mixed Handle Types

Different types for inputs vs. outputs:

```python
from pynodewidget import JsonSchemaNodeWidget

class MixedNode(JsonSchemaNodeWidget):
    label = "Mixed Handles"
    parameters = Params
    
    # Override global handle_type per handle
    inputs = [
        {"id": "data", "label": "Data", "type": "labeled"},
        {"id": "config", "label": "Config", "type": "base"}
    ]
    
    outputs = [
        {"id": "result", "label": "Result", "type": "button"}
    ]
```

Or use factory method with separate types:

```python
from pynodeflow.json_schema_node import JsonSchemaNodeWidget

node = JsonSchemaNodeWidget.from_pydantic(
    ConfigModel,
    label="Mixed Node",
    inputs=[{"id": "in", "label": "Input"}],
    outputs=[{"id": "out", "label": "Output"}],
    input_handle_type="labeled",   # Inputs use labeled
    output_handle_type="button"    # Outputs use button
)
```

## Pydantic-Based Handles

Define handles using Pydantic models for type safety:

```python
from pydantic import BaseModel, Field

class DataLoaderInputs(BaseModel):
    """No inputs - source node."""
    pass

class DataLoaderOutputs(BaseModel):
    """Typed outputs."""
    data: str = Field(description="Loaded data")
    metadata: str = Field(description="File metadata")

class DataLoader(JsonSchemaNodeWidget):
    label = "Data Loader"
    parameters = LoaderParams
    
    # Use Pydantic models
    inputs = DataLoaderInputs    # Empty = no inputs
    outputs = DataLoaderOutputs  # Auto-generates handles
```

The widget automatically converts Pydantic fields to handle configurations:
- Field name → handle ID
- Field title/name → handle label
- Field description → tooltip (if supported)

## Real-World Examples

### Data Pipeline Node

```python
class DataPipeline(JsonSchemaNodeWidget):
    label = "Data Pipeline"
    parameters = PipelineParams
    handle_type = "labeled"
    
    inputs = [
        {"id": "raw_data", "label": "📥 Raw Data"},
        {"id": "config", "label": "⚙️ Configuration"}
    ]
    
    outputs = [
        {"id": "processed", "label": "✅ Processed Data"},
        {"id": "errors", "label": "❌ Errors"},
        {"id": "stats", "label": "📊 Statistics"}
    ]
```

### ML Training Node

```python
class MLTrainer(JsonSchemaNodeWidget):
    label = "ML Trainer"
    parameters = TrainerParams
    handle_type = "labeled"
    
    inputs = [
        {"id": "train_data", "label": "Training Data"},
        {"id": "train_labels", "label": "Training Labels"},
        {"id": "val_data", "label": "Validation Data"},
        {"id": "val_labels", "label": "Validation Labels"}
    ]
    
    outputs = [
        {"id": "model", "label": "Trained Model"},
        {"id": "metrics", "label": "Training Metrics"},
        {"id": "predictions", "label": "Predictions"}
    ]
```

### Conditional Output Node

Different outputs based on condition:

```python
class Classifier(JsonSchemaNodeWidget):
    label = "Classifier"
    parameters = ClassifierParams
    handle_type = "labeled"
    
    inputs = [
        {"id": "data", "label": "Input Data"}
    ]
    
    outputs = [
        {"id": "class_a", "label": "Class A"},
        {"id": "class_b", "label": "Class B"},
        {"id": "uncertain", "label": "Uncertain"}
    ]
    
    def execute(self, inputs):
        data = inputs.get("data")
        config = self.get_values()
        
        # Classify data
        classification = self._classify(data, config)
        
        # Route to appropriate output
        if classification["confidence"] > config["threshold"]:
            if classification["class"] == "A":
                return {"class_a": data}
            else:
                return {"class_b": data}
        else:
            return {"uncertain": data}
```

### Aggregator Node

Many inputs, single output:

```python
class Aggregator(JsonSchemaNodeWidget):
    label = "Data Aggregator"
    parameters = AggregatorParams
    handle_type = "labeled"
    
    inputs = [
        {"id": "source1", "label": "Source 1"},
        {"id": "source2", "label": "Source 2"},
        {"id": "source3", "label": "Source 3"},
        {"id": "source4", "label": "Source 4"}
    ]
    
    outputs = [
        {"id": "combined", "label": "Combined Data"}
    ]
    
    def execute(self, inputs):
        # Combine all non-None inputs
        sources = [v for k, v in inputs.items() if v is not None]
        combined = self._aggregate(sources, self.get_values())
        return {"combined": combined}
```

### Splitter Node

Single input, many outputs:

```python
class DataSplitter(JsonSchemaNodeWidget):
    label = "Data Splitter"
    parameters = SplitterParams
    handle_type = "labeled"
    
    inputs = [
        {"id": "dataset", "label": "Full Dataset"}
    ]
    
    outputs = [
        {"id": "train", "label": "Training Set"},
        {"id": "val", "label": "Validation Set"},
        {"id": "test", "label": "Test Set"}
    ]
    
    def execute(self, inputs):
        dataset = inputs.get("dataset")
        config = self.get_values()
        
        # Split dataset
        train, val, test = self._split(
            dataset,
            train_ratio=config["train_ratio"],
            val_ratio=config["val_ratio"],
            random_seed=config["seed"]
        )
        
        return {
            "train": train,
            "val": val,
            "test": test
        }
```

## Node Builder Helpers

Use factory functions with handle configuration:

### Source Node

```python
from pynodeflow.node_builder import create_source_node

config = create_source_node(
    label="Data Source",
    icon="📁"
)

# Modify outputs
config["outputs"] = [
    {"id": "data", "label": "Data"},
    {"id": "metadata", "label": "Metadata"}
]
```

### Sink Node

```python
from pynodeflow.node_builder import create_sink_node

config = create_sink_node(
    label="Data Sink",
    icon="💾"
)

# Modify inputs
config["inputs"] = [
    {"id": "data", "label": "Data to Save"}
]
```

### Processing Node

```python
from pynodeflow.node_builder import create_processing_node

config = create_processing_node(
    label="Processor",
    icon="⚙️",
    handle_type="button"
)

# Add handles
config["inputs"] = [{"id": "in", "label": "Input"}]
config["outputs"] = [{"id": "out", "label": "Output"}]
```

## Handle Labels

### Using Emojis

Add visual clarity with emojis:

```python
inputs = [
    {"id": "data", "label": "📥 Data Input"},
    {"id": "config", "label": "⚙️ Configuration"}
]

outputs = [
    {"id": "success", "label": "✅ Success"},
    {"id": "error", "label": "❌ Error"},
    {"id": "warning", "label": "⚠️ Warning"}
]
```

**Common emojis:**
- 📥 Input/download
- 📤 Output/upload
- ⚙️ Configuration
- 🔗 Connection
- ✅ Success
- ❌ Error
- ⚠️ Warning
- 📊 Data/statistics
- 🤖 ML/AI
- 📁 File

### Descriptive Names

Clear, action-oriented labels:

```python
# ❌ Vague
inputs = [{"id": "in", "label": "In"}]

# ✅ Clear
inputs = [{"id": "dataset", "label": "Training Dataset"}]

# ❌ Cryptic
outputs = [{"id": "out1", "label": "Output 1"}]

# ✅ Descriptive
outputs = [{"id": "predictions", "label": "Model Predictions"}]
```

## Handle Validation

### Check Required Inputs

In `execute()` method:

```python
def execute(self, inputs):
    # Validate required inputs exist
    required = ["data", "config"]
    missing = [r for r in required if r not in inputs or inputs[r] is None]
    
    if missing:
        return {"error": f"Missing required inputs: {', '.join(missing)}"}
    
    # Process
    ...
```

### Type Checking

```python
def execute(self, inputs):
    # Check input types
    data = inputs.get("data")
    
    if not isinstance(data, list):
        return {"error": "Input 'data' must be a list"}
    
    # Process
    ...
```

## Best Practices

### 1. Consistent Naming

Use clear, consistent handle IDs and labels:

```python
# ❌ Inconsistent
inputs = [
    {"id": "d", "label": "Data Input"},
    {"id": "configuration_parameters", "label": "Config"}
]

# ✅ Consistent
inputs = [
    {"id": "data", "label": "Input Data"},
    {"id": "config", "label": "Configuration"}
]
```

### 2. Meaningful Labels

Labels should describe data content:

```python
# ❌ Generic
outputs = [
    {"id": "out1", "label": "Output 1"},
    {"id": "out2", "label": "Output 2"}
]

# ✅ Specific
outputs = [
    {"id": "predictions", "label": "Model Predictions"},
    {"id": "confidence", "label": "Confidence Scores"}
]
```

### 3. Appropriate Handle Types

Choose handle type based on node complexity:

```python
# Simple node → base handles
class SimpleCalc(JsonSchemaNodeWidget):
    handle_type = "base"

# Complex data flow → labeled handles
class DataPipeline(JsonSchemaNodeWidget):
    handle_type = "labeled"

# Interactive processing → button handles
class Processor(JsonSchemaNodeWidget):
    handle_type = "button"
```

### 4. Limit Handle Count

Avoid too many handles on one node:

```python
# ❌ Too many handles (hard to use)
inputs = [f"input_{i}" for i in range(20)]

# ✅ Reasonable number (or use dynamic handles)
inputs = [
    {"id": "primary", "label": "Primary Input"},
    {"id": "secondary", "label": "Secondary Input"},
    {"id": "optional", "label": "Optional Input"}
]
```

### 5. Document Handle Purpose

Add descriptions for complex handles:

```python
from pynodeflow.protocols import HandleSpec

outputs = [
    HandleSpec(
        id="model",
        label="Trained Model",
        handle_type="labeled"
        # Future: description="Serialized model ready for inference"
    ),
    HandleSpec(
        id="metrics",
        label="Training Metrics",
        handle_type="labeled"
        # Future: description="Loss, accuracy, and other training metrics"
    )
]
```

## Troubleshooting

### Handles Not Appearing

Check handle definition syntax:

```python
# ❌ Invalid format
inputs = ["data", "config"]

# ✅ Valid format
inputs = [
    {"id": "data", "label": "Data"},
    {"id": "config", "label": "Config"}
]
```

### Handle IDs Conflict

Ensure unique IDs:

```python
# ❌ Duplicate IDs
outputs = [
    {"id": "result", "label": "Result A"},
    {"id": "result", "label": "Result B"}  # Same ID!
]

# ✅ Unique IDs
outputs = [
    {"id": "result_a", "label": "Result A"},
    {"id": "result_b", "label": "Result B"}
]
```

### Handle Type Not Working

Check spelling and options:

```python
# ❌ Invalid type
handle_type = "labeled-button"  # Not valid

# ✅ Valid types
handle_type = "base"     # ✓
handle_type = "button"   # ✓
handle_type = "labeled"  # ✓
```

### Pydantic Handles Not Converting

Ensure proper Pydantic model:

```python
# ❌ Not a BaseModel
class BadOutputs:
    data: str

# ✅ BaseModel subclass
from pydantic import BaseModel

class GoodOutputs(BaseModel):
    data: str = Field(description="Output data")
```

## Next Steps

- **[Creating Custom Nodes](custom-nodes.md)**: Build nodes with custom handles
- **[Working with Values](values.md)**: Handle data flow between nodes
- **[Protocols API](../api/python/protocols.md)**: HandleSpec documentation
- **[Node Builder API](../api/python/node-builder.md)**: Factory functions
