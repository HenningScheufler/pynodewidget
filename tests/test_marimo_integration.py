"""Integration tests for marimo notebooks using Playwright.

These tests start a marimo server and use Playwright to interact with
the notebook UI in a real browser.
"""
import subprocess
import time
import pytest
from pathlib import Path
from playwright.sync_api import Page, expect


# Path to test fixture
FIXTURES_DIR = Path(__file__).parent / "fixtures"
TEST_SIMPLE_SLIDER = FIXTURES_DIR / "test_pynodewidget_numberfield.py"


# Mark all tests in this module as integration tests
pytestmark = pytest.mark.integration


@pytest.fixture(scope="module")
def simple_slider_server():
    """Start a marimo server for simple slider testing."""
    process = subprocess.Popen(
        ["marimo", "run", str(TEST_SIMPLE_SLIDER), "--headless", "--port", "2719", "--no-token"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    # Wait longer for server to start
    time.sleep(8)
    # Check if process exited early
    if process.poll() is not None:
        stderr = process.stderr.read().decode() if process.stderr else None
        raise RuntimeError(f"Marimo server failed to start. Stderr:\n{stderr}")
    yield "http://localhost:2719"
    process.terminate()
    process.wait(timeout=5)


@pytest.fixture(scope="function")
def simple_page(simple_slider_server, playwright):
    """Create a new browser page for simple slider tests."""
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto(simple_slider_server)
    page.wait_for_load_state("networkidle")
    yield page
    context.close()
    browser.close()


def test_simple_slider_works(simple_page: Page):
    """Test that the simple slider is visible, can be moved, and updates the display."""
    # slider = simple_page.locator('input[type="range"]').first
    slider = simple_page.get_by_role("slider").first
    expect(slider).to_be_visible(timeout=10000)

    # Check initial value
    value = slider.get_attribute("value")
    assert value == "25", f"Expected initial value 25, got {value}"

    # Move the slider to ~50
    box = slider.bounding_box()
    assert box is not None, "Could not get slider bounding box"
    x = box["x"] + box["width"] * 0.5
    y = box["y"] + box["height"] / 2
    simple_page.mouse.click(x, y)
    time.sleep(0.5)
    new_value = slider.get_attribute("value")
    assert new_value is not None
    assert 45 <= int(new_value) <= 55, f"Expected value ~50, got {new_value}"

    # Check that the displayed text updated
    expect(simple_page.locator(f"text=/Current value:.*{new_value}/")).to_be_visible(timeout=5000)
"""Integration tests for marimo notebooks using Playwright.

These tests start a marimo server and use Playwright to interact with
the notebook UI in a real browser.
"""
import subprocess
import time
import pytest
from pathlib import Path
from playwright.sync_api import Page, expect



# Path to test fixture
FIXTURES_DIR = Path(__file__).parent / "fixtures"
TEST_SIMPLE_SLIDER = FIXTURES_DIR / "test_pynodewidget_numberfield.py"


# Mark all tests in this module as integration tests
pytestmark = pytest.mark.integration


@pytest.fixture(scope="module")
def simple_slider_server():
    """Start a marimo server for simple slider testing."""
    process = subprocess.Popen(
        ["marimo", "run", str(TEST_SIMPLE_SLIDER), "--headless", "--port", "2719", "--no-token"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    # Wait longer for server to start
    time.sleep(8)
    # Check if process exited early
    if process.poll() is not None:
        stderr = process.stderr.read().decode() if process.stderr else None
        raise RuntimeError(f"Marimo server failed to start. Stderr:\n{stderr}")
    yield "http://localhost:2719"
    process.terminate()
    process.wait(timeout=5)


@pytest.fixture(scope="function")
def simple_page(simple_slider_server, playwright):
    """Create a new browser page for simple slider tests."""
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto(simple_slider_server)
    page.wait_for_load_state("networkidle")
    yield page
    context.close()
    browser.close()


def test_simple_slider_works(simple_page: Page):
    """Test that the simple slider is visible, can be moved, and updates the display."""
    # slider = simple_page.locator('input[type="range"]').first
    slider = simple_page.get_by_role("slider").first
    expect(slider).to_be_visible(timeout=10000)

    # Check initial value
    value = slider.get_attribute("value")
    assert value == "25", f"Expected initial value 25, got {value}"

    # Move the slider to ~50
    box = slider.bounding_box()
    assert box is not None, "Could not get slider bounding box"
    x = box["x"] + box["width"] * 0.5
    y = box["y"] + box["height"] / 2
    simple_page.mouse.click(x, y)
    time.sleep(0.5)
    new_value = slider.get_attribute("value")
    assert new_value is not None
    assert 45 <= int(new_value) <= 55, f"Expected value ~50, got {new_value}"

    # Check that the displayed text updated
    expect(simple_page.locator(f"text=/Current value:.*{new_value}/")).to_be_visible(timeout=5000)

