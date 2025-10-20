# Getting Started with Your New Sphinx Website

Your minimal Sphinx-based academic website is ready! Here's how to use it.

## Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Build the Site
```bash
sphinx-build -b html . _build/html
```

### 3. Preview Locally
```bash
python -m http.server --directory _build/html 8000
```

Visit http://localhost:8000 in your browser.

## Next Steps

### Add Your Profile Photo

Place a profile photo at `assets/images/profile.jpg`, then update `index.md` to include it:

```markdown
```{image} assets/images/profile.jpg
:width: 200px
:class: sd-m-auto
```
```

### Create Blog Posts

Create new markdown files in the `blog/` directory with this format:

```markdown
---
date: 2025-01-15
author: Alfonso Ladino-Rincon
tags: tag1, tag2, tag3
---

# Post Title

Your content here...
```

### Customize Colors and Styling

Edit `conf.py` to customize the PyData theme. See the [PyData Sphinx Theme documentation](https://pydata-sphinx-theme.readthedocs.io/) for options.

### Deploy to GitHub Pages

The site is configured to automatically deploy when you push to the `main` branch. Make sure to:

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Push your changes to the `main` branch

## File Structure

```
.
├── conf.py                 # Sphinx configuration
├── requirements.txt        # Python dependencies
├── index.md               # Homepage
├── about.md               # About page
├── publications.md        # Publications page
├── blog.md                # Blog landing page
├── blog/                  # Blog posts directory
│   └── 2025-01-15-welcome.md
├── assets/                # Static assets
│   └── images/
├── .github/
│   └── workflows/
│       └── sphinx.yml     # GitHub Actions deployment
└── _build/                # Generated site (git-ignored)
    └── html/
```

## Common Tasks

### Add a New Page

1. Create a new `.md` file in the root directory
2. Add it to the `toctree` in `index.md`:

```markdown
```{toctree}
:hidden:
:maxdepth: 2

about
publications
blog
your-new-page
```
```

### Update Site Metadata

Edit the following in `conf.py`:
- `project` - Your name
- `copyright` - Copyright year and name
- `html_title` - Site title
- `html_theme_options` - Theme customization

### Add Social Links

Edit the `icon_links` section in `conf.py`:

```python
"icon_links": [
    {
        "name": "GitHub",
        "url": "https://github.com/yourusername",
        "icon": "fa-brands fa-github",
    },
    # Add more links...
]
```

## Tips

- Keep blog posts organized by date in filenames: `YYYY-MM-DD-title.md`
- Use meaningful tags for blog posts to enable categorization
- Test builds locally before pushing to GitHub
- The site uses MyST Markdown, which supports rich features like admonitions, grids, and directives

## Need Help?

- [Sphinx Documentation](https://www.sphinx-doc.org/)
- [PyData Sphinx Theme](https://pydata-sphinx-theme.readthedocs.io/)
- [ABlog Documentation](https://ablog.readthedocs.io/)
- [MyST Parser](https://myst-parser.readthedocs.io/)
