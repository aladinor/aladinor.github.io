# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Alfonso Ladino-Rincon's academic website, built with **MyST Markdown** (MyST MD). The site uses the MyST book-theme for Jupyter Book-style navigation and is deployed to GitHub Pages.

**Important**: This project uses **MyST** (not Sphinx directly, though Sphinx may still be installed). All build commands should use `myst` CLI tools, not `sphinx-build`.

## Build System

### Primary Build Tool: MyST

```bash
# Install MyST globally (Node.js required)
npm install -g mystmd

# Build the site (outputs to _build/html)
myst build --html

# Start development server with live reload
myst start
# Visit http://localhost:3002
```

### Python Environment (Legacy/Fallback)

The repository contains Python dependencies (Sphinx, pydata-sphinx-theme, etc.) but the primary build system is MyST. Only use Python/Sphinx if explicitly required for specific tasks.

```bash
# Setup Python environment (if needed)
pip install -r requirements.txt
# OR
uv sync  # if using uv

# Alternative build (Sphinx) - use only if MyST fails
sphinx-build -b html . _build/html
```

## Site Configuration

### myst.yml

Main configuration file controlling:
- Project metadata (title, authors, ORCID, affiliations)
- Navigation structure (TOC)
- Site template (book-theme)
- Site options (logo, favicon, navigation links)

**Navigation structure**: The TOC in `myst.yml` defines the left sidebar navigation. Blog posts are listed as children under the Blog section.

### conf.py

Legacy Sphinx configuration (may be used by some MyST builds). Contains:
- Theme configuration (pydata_sphinx_theme)
- ABlog settings for blog functionality
- MyST parser extensions
- Sidebar configurations

## Content Structure

```
├── index.md              # Homepage (grid layout, profile, recent posts)
├── about.md              # About page
├── cv.md                 # CV page with download link
├── publications.md       # Publications list
├── talks.md             # Talks and presentations
├── projects.md          # Projects showcase
├── blog.md              # Blog landing page
├── blog/                # Blog posts (markdown files)
│   ├── 2025-01-20-poder-compartir-datos.md
│   ├── 2024-12-radar-scan-datasets.md
│   ├── 2024-11-fm-301-radar-interoperability.md
│   └── 2024-10-untapped-promise-radar-data.md
├── _static/             # Static assets
│   ├── profile.jpg      # Profile photo
│   ├── custom.css       # Custom styles
│   └── CV_ALR.pdf       # Downloadable CV
├── public/              # Public files served at root
└── _build/html/         # Build output (git-ignored)
```

## Adding Content

### Blog Posts

1. Create new `.md` file in `blog/` with format: `YYYY-MM-DD-title.md`
2. Include frontmatter:
   ```markdown
   ---
   date: 2025-01-15
   author: Alfonso Ladino-Rincon
   tags:
     - tag1
     - tag2
   ---

   # Post Title

   Content here...
   ```
3. Add the post to `myst.yml` under `project.toc` → Blog → `children`

### Pages

1. Create `.md` file in root directory
2. Add to `myst.yml` navigation structure under `project.toc`
3. Optionally add to `site.nav` for top navigation bar

## MyST Markdown Features

This site uses MyST Markdown which supports:
- **Grid layouts**: `::::{grid}` / `:::{grid-item}` for responsive layouts
- **Cards**: `:::{grid-item-card}` for linked cards with footers
- **Directives**: `` ```{directive} `` syntax (e.g., `{image}`, `{toctree}`)
- **Frontmatter**: YAML at top of files for metadata
- **Colon fences**: `:::` for nested content blocks

See homepage (index.md:9-126) for examples of grids and cards.

## Deployment

### Automatic Deployment

The site automatically deploys via GitHub Actions:

- **Deploy workflow** (`.github/workflows/deploy-myst.yml`):
  - Triggers on pushes to `main` branch
  - Builds with `myst build --html`
  - Deploys to GitHub Pages

- **Test workflow** (`.github/workflows/test-myst-build.yml`):
  - Triggers on all PRs and pushes
  - Weekly schedule (Mondays 9 AM UTC)
  - Creates preview deployments for PRs
  - Uploads build artifacts

### Manual Deployment

GitHub Pages is configured to deploy from GitHub Actions (not branch).

## Key Dependencies

### Node.js
- `mystmd` - Site builder and development server

### Python (Legacy/Fallback)
- `sphinx>=7.0` - Documentation builder
- `pydata-sphinx-theme>=0.15.0` - Theme
- `myst-parser>=2.0` - MyST Markdown parser for Sphinx
- `ablog>=0.11.0` - Blog functionality
- `sphinx-design>=0.5.0` - Grid and card components

## Development Workflow

1. **Make changes** to markdown files or configuration
2. **Test locally**: `myst start` (live reload at http://localhost:3002)
3. **Build**: `myst build --html` to verify build succeeds
4. **Commit and push** to branch
5. **Create PR**: Test workflow will create preview deployment
6. **Merge to main**: Auto-deploys to production

## Important Notes

- **Use MyST, not Sphinx**: Always prefer `myst` commands over `sphinx-build`
- **Git branch**: Currently on `book-navigation` branch; main branch is `main`
- **No emojis in content**: Avoid adding emojis unless explicitly requested
- **Profile photo**: Located at `_static/profile.jpg` (not `assets/images/`)
- **CV file**: Stored at `_static/CV_ALR.pdf`
- **Excluded from builds**: `README.md`, `GETTING_STARTED.md`, `plan.md`, `assets/**` (see conf.py:22-25)

## Inspiration

This site is inspired by Chris Holdgraf's personal website (https://github.com/choldgraf/choldgraf.github.io) and uses similar MyST book-theme patterns.