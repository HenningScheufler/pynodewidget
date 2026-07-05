"""Hatchling build hook to automatically build JavaScript assets with bun."""

import subprocess
import shutil
from pathlib import Path
from hatchling.builders.hooks.plugin.interface import BuildHookInterface


class BunBuildHook(BuildHookInterface):
    """Build hook that runs bun build before packaging."""

    def initialize(self, version, build_data):
        """Run bun build and copy assets to the package."""
        if self.target_name not in ["wheel", "sdist"]:
            return

        root = Path(self.root)
        js_dir = root / "js"
        dist_dir = js_dir / "dist"
        static_dir = root / "src" / "pynodewidget" / "static"

        # Check if bun is available
        if not shutil.which("bun"):
            raise RuntimeError(
                "bun is required to build this package. "
                "Install it from https://bun.sh"
            )

        # Run bun install
        print("Installing JavaScript dependencies with bun...")
        subprocess.run(
            ["bun", "install"],
            cwd=js_dir,
            check=True,
        )

        # Start from a clean dist: the vite configs share the directory with
        # emptyOutDir disabled, so stale artifacts from earlier builds would
        # otherwise be copied into the package.
        if dist_dir.exists():
            shutil.rmtree(dist_dir)

        # Run bun build
        print("Building JavaScript assets with bun...")
        subprocess.run(
            ["bun", "run", "build"],
            cwd=js_dir,
            check=True,
        )

        # Run bun build for standalone bundle
        print("Building standalone IIFE bundle with bun...")
        subprocess.run(
            ["bun", "run", "build:standalone"],
            cwd=js_dir,
            check=True,
        )

        # The widget and its HTML export load these exact files; fail the
        # build early if a config change breaks the expected names.
        required = [
            "index.js",
            "index.css",
            "json_schema_node_entry.js",
            "standalone.iife.js",
            "standalone.css",
        ]
        missing = [name for name in required if not (dist_dir / name).exists()]
        if missing:
            raise RuntimeError(
                f"JavaScript build did not produce expected files: {missing}"
            )

        # Create static directory if it doesn't exist
        static_dir.mkdir(parents=True, exist_ok=True)

        # Copy built assets (JS, CSS, and sourcemaps so shipped maps match
        # the shipped bundles)
        print("Copying built assets to package...")
        for pattern in ("*.js", "*.css", "*.js.map"):
            for file in dist_dir.glob(pattern):
                shutil.copy2(file, static_dir / file.name)
                print(f"  Copied {file.name}")

        print("JavaScript build complete!")
