# Repository Guidelines

## Project Structure & Module Organization
Content lives in the project root as MyST Markdown pages (for example `index.md`, `about.md`, `cv.md`). Section-specific directories keep related assets close: `blog/` for posts, `_static/` for downloadable files and shared images, and `public/` for files served verbatim at the site root. Site-wide configuration sits in `myst.yml`, while `_config.yml` and `conf.py` fine-tune the build and theme. Generated HTML is written to `_build/html/`; the `_site/` directory holds the last published output. Keep handcrafted assets under `assets/` and add reusable templates in `_templates/`.

## Build, Test, and Development Commands
Use the MyST CLI for all local workflows. Install once if needed: `npm install -g mystmd`. Run `myst start` from the repository root to launch the live-reload preview at `http://localhost:3002`. Validate the site before committing with `myst build --html`, which mirrors the GitHub Actions build and catches broken links or syntax errors. To inspect the production artifact locally, open `_build/html/index.html` in a browser.

## Coding Style & Naming Conventions
Write pages in MyST Markdown, starting each file with a single level-one heading that matches the navigation title. Use YAML front matter for blog posts (date, author, tags) and keep filenames lowercase with hyphens (`project-update-2025.md`). Prefer MyST directives (`{figure}`, `{table}`) over raw HTML unless layout control is required. Keep line length reasonable (~100 characters) and indent nested lists or directives with two spaces. Place new images in `_static/` and reference them via relative paths.

## Testing Guidelines
Treat `myst build --html` as the canonical regression test; the CI pipelines run the same command on every push and pull request. Resolve warnings proactively—link-check and directive warnings often signal broken navigation. For sizeable content changes, follow up with a manual click-through of the affected pages in `myst start` to verify layout and embedded assets.

## Commit & Pull Request Guidelines
Commit messages follow concise sentence case (`Add homepage hero copy`, `Fix blog index metadata`) and focus on what changed. Group related edits together and avoid mixing content updates with build-system tweaks. When opening a pull request, include: (1) a short summary of the change, (2) references to any related issues, and (3) screenshots or GIFs for visual updates. Mention if you ran `myst build --html` and note any remaining warnings so reviewers know what to expect.

## Security & Configuration Notes
Secrets are managed by GitHub Actions; do not commit API keys or private data. Configuration files (`myst.yml`, `_config.yml`, `conf.py`) are shared resources—coordinate changes via pull request discussion and document new toggles inline so the automation remains predictable.
