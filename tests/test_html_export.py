"""Tests for HTML export functionality."""

import pytest
import json
import tempfile
from pathlib import Path
from pynodewidget import NodeFlowWidget


class TestHTMLExport:
    """Test suite for HTML export functionality."""
    
    def test_basic_html_export(self):
        """Test basic HTML export with default settings."""
        widget = NodeFlowWidget()
        
        # Add a simple node type
        widget.add_node_type_from_schema(
            json_schema={
                "type": "object",
                "properties": {
                    "name": {"type": "string", "default": "test"}
                }
            },
            type_name="test_node",
            label="Test Node"
        )
        
        # Add a node
        widget.nodes = {
            "node-1": {
                "type": "test_node",
                "position": {"x": 100, "y": 100},
                "data": {}
            }
        }
        
        # Export to temporary file
        with tempfile.TemporaryDirectory() as tmpdir:
            output_path = Path(tmpdir) / "test.html"
            result = widget.export_html(str(output_path))
            
            # Verify file was created
            assert output_path.exists()
            assert result == str(output_path)
            
            # Verify HTML content
            html_content = output_path.read_text()
            assert "<!DOCTYPE html>" in html_content
            assert "<html" in html_content
            assert "pynodewidget-root" in html_content
            assert "pynodewidget-data" in html_content
    
    def test_html_export_with_custom_title(self):
        """Test HTML export with custom title."""
        widget = NodeFlowWidget()
        
        with tempfile.TemporaryDirectory() as tmpdir:
            output_path = Path(tmpdir) / "test.html"
            widget.export_html(
                str(output_path),
                title="My Custom Workflow"
            )
            
            html_content = output_path.read_text()
            assert "<title>My Custom Workflow</title>" in html_content
    
    def test_html_export_with_nodes_and_edges(self):
        """Test HTML export with nodes and edges."""
        widget = NodeFlowWidget()
        
        # Add node type
        widget.add_node_type_from_schema(
            json_schema={
                "type": "object",
                "properties": {
                    "value": {"type": "number", "default": 42}
                }
            },
            type_name="number_node",
            label="Number Node"
        )
        
        # Add nodes
        widget.nodes = {
            "node-1": {
                "type": "number_node",
                "position": {"x": 100, "y": 100},
                "data": {}
            },
            "node-2": {
                "type": "number_node",
                "position": {"x": 300, "y": 100},
                "data": {}
            }
        }
        
        # Add edge
        widget.edges = [{
            "id": "e1",
            "source": "node-1",
            "target": "node-2"
        }]
        
        # Set values
        widget.values["node-1"] = {"value": 100}
        widget.values["node-2"] = {"value": 200}
        
        # Export and verify
        with tempfile.TemporaryDirectory() as tmpdir:
            output_path = Path(tmpdir) / "test.html"
            widget.export_html(str(output_path))
            
            html_content = output_path.read_text()
            
            # Extract and parse embedded JSON data
            start = html_content.find('<script id="pynodewidget-data"')
            end = html_content.find('</script>', start)
            json_start = html_content.find('>', start) + 1
            json_data = html_content[json_start:end].strip()
            
            data = json.loads(json_data)
            
            # Verify structure
            assert "nodes" in data
            assert "edges" in data
            assert "node_templates" in data
            assert "node_values" in data
            
            # Verify nodes
            assert len(data["nodes"]) == 2
            assert "node-1" in data["nodes"]
            assert "node-2" in data["nodes"]
            
            # Verify edges
            assert len(data["edges"]) == 1
            assert data["edges"][0]["source"] == "node-1"
            assert data["edges"][0]["target"] == "node-2"
            
            # Verify values
            assert data["node_values"]["node-1"]["value"] == 100
            assert data["node_values"]["node-2"]["value"] == 200
    
    def test_html_export_interactive_flag(self):
        """Test HTML export with interactive flag."""
        widget = NodeFlowWidget()
        
        with tempfile.TemporaryDirectory() as tmpdir:
            # Export as interactive
            interactive_path = Path(tmpdir) / "interactive.html"
            widget.export_html(
                str(interactive_path),
                interactive=True
            )
            
            interactive_content = interactive_path.read_text()
            
            # Extract JSON to check interactive flag
            start = interactive_content.find('<script id="pynodewidget-data"')
            end = interactive_content.find('</script>', start)
            json_start = interactive_content.find('>', start) + 1
            json_data = interactive_content[json_start:end].strip()
            data = json.loads(json_data)
            
            assert data["interactive"] is True
            
            # Export as static
            static_path = Path(tmpdir) / "static.html"
            widget.export_html(
                str(static_path),
                interactive=False
            )
            
            static_content = static_path.read_text()
            
            # Extract JSON to check interactive flag
            start = static_content.find('<script id="pynodewidget-data"')
            end = static_content.find('</script>', start)
            json_start = static_content.find('>', start) + 1
            json_data = static_content[json_start:end].strip()
            data = json.loads(json_data)
            
            assert data["interactive"] is False
    
    def test_html_export_custom_height(self):
        """Test HTML export with custom height."""
        widget = NodeFlowWidget(height="500px")
        
        with tempfile.TemporaryDirectory() as tmpdir:
            # Use widget's default height
            path1 = Path(tmpdir) / "default_height.html"
            widget.export_html(str(path1))
            
            content1 = path1.read_text()
            start = content1.find('<script id="pynodewidget-data"')
            end = content1.find('</script>', start)
            json_start = content1.find('>', start) + 1
            json_data = content1[json_start:end].strip()
            data1 = json.loads(json_data)
            assert data1["height"] == "500px"
            
            # Override with custom height
            path2 = Path(tmpdir) / "custom_height.html"
            widget.export_html(str(path2), height="100vh")
            
            content2 = path2.read_text()
            start = content2.find('<script id="pynodewidget-data"')
            end = content2.find('</script>', start)
            json_start = content2.find('>', start) + 1
            json_data = content2[json_start:end].strip()
            data2 = json.loads(json_data)
            assert data2["height"] == "100vh"
    
    def test_html_export_embedded_assets(self):
        """Test HTML export with embedded vs separate assets."""
        widget = NodeFlowWidget()
        
        with tempfile.TemporaryDirectory() as tmpdir:
            # Export with embedded assets
            embedded_path = Path(tmpdir) / "embedded.html"
            widget.export_html(
                str(embedded_path),
                embed_assets=True
            )
            
            embedded_content = embedded_path.read_text()
            
            # Should contain inline script
            assert "<script>" in embedded_content
            # Should not reference external files
            assert 'src="standalone.iife.js"' not in embedded_content
            
            # Export with separate assets (if build exists)
            separate_path = Path(tmpdir) / "separate.html"
            try:
                widget.export_html(
                    str(separate_path),
                    embed_assets=False
                )
                
                separate_content = separate_path.read_text()
                
                # Should reference external files
                assert 'src="standalone.iife.js"' in separate_content
                
                # External files should be copied
                assert (Path(tmpdir) / "standalone.iife.js").exists()
            except FileNotFoundError:
                # Bundle not built yet - skip this part of test
                pytest.skip("Standalone bundle not built yet")
    
    def test_html_export_preserves_viewport(self):
        """Test that HTML export preserves viewport settings."""
        widget = NodeFlowWidget()
        
        # Set custom viewport
        widget.viewport = {"x": 100, "y": 50, "zoom": 1.5}
        
        with tempfile.TemporaryDirectory() as tmpdir:
            output_path = Path(tmpdir) / "test.html"
            widget.export_html(str(output_path))
            
            html_content = output_path.read_text()
            
            # Extract and verify viewport data
            start = html_content.find('<script id="pynodewidget-data"')
            end = html_content.find('</script>', start)
            json_start = html_content.find('>', start) + 1
            json_data = html_content[json_start:end].strip()
            data = json.loads(json_data)
            
            assert data["viewport"]["x"] == 100
            assert data["viewport"]["y"] == 50
            assert data["viewport"]["zoom"] == 1.5
    
    def test_export_method_supports_html(self):
        """Test that the generic export() method supports HTML format."""
        widget = NodeFlowWidget()
        
        with tempfile.TemporaryDirectory() as tmpdir:
            # Auto-detect from extension
            html_path = Path(tmpdir) / "workflow.html"
            result = widget.export(str(html_path))
            assert html_path.exists()
            assert result == str(html_path)
            
            # Explicit format
            html_path2 = Path(tmpdir) / "workflow2.xyz"
            result2 = widget.export(str(html_path2), format="html")
            assert html_path2.exists()
            assert result2 == str(html_path2)
    
    def test_html_export_with_complex_workflow(self):
        """Test HTML export with a more complex workflow."""
        widget = NodeFlowWidget()
        
        # Add multiple node types
        for i in range(3):
            widget.add_node_type_from_schema(
                json_schema={
                    "type": "object",
                    "properties": {
                        f"param{i}": {"type": "string", "default": f"value{i}"}
                    }
                },
                type_name=f"type_{i}",
                label=f"Type {i}",
                description=f"Node type {i}"
            )
        
        # Add multiple nodes
        widget.nodes = {
            f"node-{i}": {
                "type": f"type_{i % 3}",
                "position": {"x": i * 150, "y": i * 50},
                "data": {}
            }
            for i in range(5)
        }
        
        # Add multiple edges
        widget.edges = [
            {"id": f"e{i}", "source": f"node-{i}", "target": f"node-{i+1}"}
            for i in range(4)
        ]
        
        # Export and verify structure is preserved
        with tempfile.TemporaryDirectory() as tmpdir:
            output_path = Path(tmpdir) / "complex.html"
            widget.export_html(str(output_path))
            
            assert output_path.exists()
            
            html_content = output_path.read_text()
            start = html_content.find('<script id="pynodewidget-data"')
            end = html_content.find('</script>', start)
            json_start = html_content.find('>', start) + 1
            json_data = html_content[json_start:end].strip()
            data = json.loads(json_data)
            
            # Verify all nodes and edges were preserved
            assert len(data["nodes"]) == 5
            assert len(data["edges"]) == 4
            assert len(data["node_templates"]) == 3


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
