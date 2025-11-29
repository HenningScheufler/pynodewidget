# Marimo Integration Tests Setup

This guide explains how to set up and run integration tests for pynodewidget with marimo using Playwright.

## Prerequisites

1. Install development dependencies including Playwright:
   ```bash
   uv pip install -e ".[dev,notebooks]"
   ```

2. Install Playwright browsers:
   ```bash
   uv run playwright install chromium
   ```

## Running Tests

### Run all tests (including integration tests)
```bash
pytest
```

### Run only integration tests
```bash
pytest -m integration
```

### Run tests excluding integration tests
```bash
pytest -m "not integration"
```

### Run with verbose output
```bash
pytest -v tests/test_marimo_integration.py
```

### Run a specific test
```bash
pytest tests/test_marimo_integration.py::test_slider_initial_value -v
```

## Test Structure

- **Test fixture notebooks**: 
  - `tests/fixtures/test_slider.py` - A simple marimo notebook with a slider (value 50, range 0-100)
  - `tests/fixtures/test_pynodewidget_numberfield.py` - Another simple slider (value 25, range 0-100, labeled "Temperature")
- **Integration tests**: `tests/test_marimo_integration.py` - Playwright tests that interact with the notebooks

## How It Works

1. The `marimo_server` fixture starts a marimo server for the first test notebook in headless mode on port 2718
2. The `simple_slider_server` fixture starts another marimo server for the second test notebook on port 2719
3. Each test gets a fresh browser page that navigates to the respective notebook
4. Tests use Playwright to interact with UI elements (sliders, text) and verify behavior
5. The servers are automatically cleaned up after tests complete

### Test Examples

**Basic slider interaction:**
```python
def test_simple_slider_interaction(simple_page: Page):
    """Test that moving the slider updates the displayed value."""
    slider = simple_page.locator('input[type="range"]').first
    expect(slider).to_be_visible(timeout=10000)
    
    # Click at 50% of the slider
    box = slider.bounding_box()
    x = box["x"] + box["width"] * 0.5
    y = box["y"] + box["height"] / 2
    simple_page.mouse.click(x, y)
    
    # Verify value changed
    new_value = slider.get_attribute("value")
    assert 45 <= int(new_value) <= 55
```

**Checking displayed values:**
```python
def test_simple_slider_display(simple_page: Page):
    """Test that the displayed value matches the slider value."""
    simple_page.wait_for_selector("text=/Current value:/", timeout=10000)
    expect(simple_page.locator("text=/Current value:.*25/")).to_be_visible()
```

## Adding New Tests

To add a new integration test:

1. Create a test notebook in `tests/fixtures/` if needed
2. Add test functions to `test_marimo_integration.py` using the `page` fixture
3. Use Playwright selectors to find and interact with elements
4. Use `expect()` assertions to verify behavior

Example:
```python
def test_my_widget(page: Page):
    """Test my custom widget."""
    # Wait for element
    element = page.locator("#my-element")
    expect(element).to_be_visible(timeout=10000)
    
    # Interact with it
    element.click()
    
    # Verify result
    expect(page.locator(".result")).to_have_text("Expected output")
```

## Troubleshooting

### Server doesn't start
- Ensure marimo is installed: `uv pip install marimo`
- Check if ports 2718 or 2719 are already in use
- Increase the sleep time in the fixture if your system is slow

### Tests are flaky
- Increase timeout values in `expect()` calls
- Add explicit waits with `page.wait_for_selector()`
- Use `page.wait_for_load_state("networkidle")` before interactions

### Browser doesn't close
- Make sure pytest-playwright is installed
- Use `pytest --headed` to see the browser (useful for debugging)
- Check that no processes are hanging with `ps aux | grep chromium`

## CI/CD Integration

For CI/CD pipelines:

```yaml
- name: Setup Playwright
  run: |
    uv pip install -e ".[dev,notebooks]"
    uv run playwright install chromium --with-deps
    
- name: Run integration tests
  run: uv run pytest -m integration --headed=false
```
