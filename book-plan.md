# Plan: Add Jupyter Book-style Navigation to Site

**Goal**: Add full MyST/Jupyter Book navigation with left sidebar (site tree) and right sidebar (page TOC) to all pages except homepage, following Chris Holdgraf's layout.

## Current State
- Homepage (`index.md`): Clean landing page with blog post cards, no sidebars ✓
- All other pages: No sidebars (due to `"**": []` in `html_sidebars`)
- Using PyData Sphinx Theme + ABlog
- Has basic `toctree` structure in `index.md` (hidden)

## Desired State
- **Homepage (`index.md`)**: Keep clean with NO sidebars (landing page style)
- **All other pages** (about, projects, publications, talks, blog posts):
  - **Left sidebar**: Site navigation tree showing full structure (About, Projects, Publications, Talks, Blog with nested posts)
  - **Right sidebar**: Table of contents for current page (shows sections/headings)
- This matches the Jupyter Book / MyST Book layout

## Changes Required

### 1. Update `conf.py` - `html_theme_options`
**Current:**
```python
html_theme_options = {
    # ...
    "secondary_sidebar_items": [],  # Disables right sidebar globally
    "show_toc_level": 1,
    # ...
}
```

**Change to:**
```python
html_theme_options = {
    # ...
    # Remove the "secondary_sidebar_items": [] line to enable right TOC sidebar
    "show_toc_level": 2,  # Show 2 levels in TOC
    # ...
}
```

### 2. Update `conf.py` - `html_sidebars`
**Current:**
```python
html_sidebars = {
    "**": [],  # No sidebars on any page
    "blog": ["ablog/tagcloud.html", "ablog/archives.html"],
    "blog/**": ["ablog/postcard.html", "ablog/recentposts.html", "ablog/archives.html"],
}
```

**Change to:**
```python
html_sidebars = {
    # Homepage only: no sidebars (landing page style)
    "index": [],

    # Blog pages: ABlog widgets on left, default TOC on right
    "blog": ["ablog/tagcloud.html", "ablog/archives.html"],
    "blog/**": ["ablog/recentposts.html", "ablog/archives.html"],

    # All other pages: use default theme sidebars
    # (left: navigation tree, right: page TOC)
    # No "**": [] means defaults are used
}
```

### 3. Update `blog.md` Structure
**Current:**
```markdown
# Blog

Welcome to my blog...

```{postlist}
...
```
```

**Add toctree to include blog posts:**
```markdown
# Blog

Welcome to my blog where I share insights on atmospheric science, radar meteorology, machine learning, and open science practices.

## Recent Posts

```{postlist} 5
:date: %B %d, %Y
:format: {title}
:excerpts:
:list-style: none
```

```{toctree}
:hidden:
:maxdepth: 1

blog/2025-01-20-poder-compartir-datos
blog/2024-12-radar-scan-datasets
blog/2024-11-fm-301-radar-interoperability
blog/2024-10-untapped-promise-radar-data
```
```

This makes blog posts appear in the left navigation sidebar.

### 4. Verify `index.md` toctree
Ensure the main `index.md` toctree includes all main sections:
```markdown
```{toctree}
:hidden:
:maxdepth: 2

about
projects
publications
talks
blog
```
```

### 5. Test Configuration Changes
After making these changes:
1. Build: `uv run sphinx-build -b html . _build/html`
2. Verify:
   - Homepage (`index.html`): Should have NO sidebars ✓
   - About/Projects/etc pages: Should have left nav tree + right TOC ✓
   - Blog posts: Should have left nav tree (with blog posts) + right TOC (with post sections) ✓

## Expected Result

### Homepage (index)
- Clean landing page
- Profile photo and bio on left
- Quick links cards
- Recent blog posts cards
- **NO sidebars**

### Blog Posts & Other Pages
- **Left sidebar**: Full site navigation
  - Welcome
  - About me
  - Projects
  - Publications
  - Talks
  - Blog
    - El poder de compartir...
    - Radar Scan Datasets...
    - From Files to Datasets...
    - The Untapped Promise...
- **Main content**: The page content
- **Right sidebar**: Table of Contents
  - Section headings from current page
  - For blog posts: all H2/H3 sections

### Visual Layout
Matches Chris Holdgraf's site and your "Ciencia de Datos Hidrometeorológicos con Python" MyST book layout.

## Implementation Order
1. ✅ **First**: Commit current state (before making changes)
2. Update `conf.py` (both theme options and sidebars)
3. Update `blog.md` with toctree
4. Rebuild and test
5. Adjust if needed
6. Commit final working version

## Notes
- PyData Sphinx Theme (used by both Sphinx sites and Jupyter Book) provides the dual-sidebar layout
- The key is selectively disabling sidebars only on the homepage (`index`)
- All other pages automatically get the navigation tree + TOC sidebars
- ABlog integration continues to work within this structure