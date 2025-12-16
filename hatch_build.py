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
            ["bun", "run", "vite", "build", "--config", "vite.config.standalone.ts"],
            cwd=js_dir,
            check=True,
        )

        # Create static directory if it doesn't exist
        static_dir.mkdir(parents=True, exist_ok=True)

        # Copy built assets (all JS and CSS files to handle code splitting)
        print("Copying built assets to package...")
        for file in dist_dir.glob("*.js"):
            shutil.copy2(file, static_dir / file.name)
            print(f"  Copied {file.name}")
        
        for file in dist_dir.glob("*.css"):
            shutil.copy2(file, static_dir / file.name)
            print(f"  Copied {file.name}")

        print("JavaScript build complete!")
