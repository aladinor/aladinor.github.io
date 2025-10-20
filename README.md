# Alfonso Ladino-Rincon - Academic Website

This is my personal academic website, built with Sphinx and hosted on GitHub Pages.

## Local Development

### Setup
```bash
# Install dependencies
pip install -r requirements.txt
```

### Build the site
```bash
# Build HTML
sphinx-build -b html . _build/html

# Or use the Python http.server to preview
python -m http.server --directory _build/html 8000
```

Then visit http://localhost:8000

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## Adding Content

### Blog Posts

Create new blog posts in the `blog/` directory with the following front matter:

```markdown
---
date: 2025-01-15
author: Alfonso Ladino-Rincon
tags: tag1, tag2
---

# Post Title

Post content here...
```

### Profile Photo

Add your profile photo to `assets/images/profile.jpg`

## Structure

- `conf.py` - Sphinx configuration
- `index.md` - Homepage
- `about.md` - About page
- `publications.md` - Publications page
- `blog.md` - Blog landing page
- `blog/` - Blog posts (create this directory and add posts)
- `assets/` - Static assets (images, etc.)

## Built With

- [Sphinx](https://www.sphinx-doc.org/)
- [PyData Sphinx Theme](https://pydata-sphinx-theme.readthedocs.io/)
- [ABlog](https://ablog.readthedocs.io/) for blogging
- [MyST Parser](https://myst-parser.readthedocs.io/) for Markdown support
