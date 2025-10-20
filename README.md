# Alfonso Ladino-Rincon - Academic Website

This is my personal academic website, built with [MyST](https://mystmd.org/)!

It is inspired by [Chris Holdgraf's personal website](https://github.com/choldgraf/choldgraf.github.io) and uses the MyST book-theme for beautiful, Jupyter Book-style navigation. Thanks Chris!

## Build and Preview the Site

### Install MyST

```bash
# Install MyST globally
npm install -g mystmd
```

### Build the site

```bash
# Build HTML
myst build --html
```

This will build the site and output files to `_build/html`.

### Run a live webserver

```bash
# Start development server with live reload
myst start
```

Then visit http://localhost:3002 to see your site with live updates as you edit!

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### CI/CD Workflows

- **Test Build**: Runs on all pushes, PRs, and weekly (Mondays at 9 AM UTC) to ensure the site builds correctly
- **Deploy**: Automatically deploys to GitHub Pages on pushes to `main`

## Adding Content

### Blog Posts

Create new blog posts in the `blog/` directory with the following frontmatter:

```markdown
---
date: 2025-01-15
author: Alfonso Ladino-Rincon
tags:
  - tag1
  - tag2
---

# Post Title

Post content here...
```

Then add the post to the `myst.yml` file under the Blog section.

### Images and Static Files

- Profile photo: `_static/profile.jpg`
- Blog images: `public/images/blog/`
- Downloadable files (like CV): `_static/` or `public/`

## Structure

- `myst.yml` - MyST configuration (navigation, metadata, etc.)
- `index.md` - Homepage
- `about.md` - About page
- `cv.md` - CV page (with download link)
- `publications.md` - Publications page
- `talks.md` - Talks and presentations
- `projects.md` - Projects page
- `blog.md` - Blog landing page
- `blog/` - Blog posts
- `_static/` - Static assets (images, CSS, downloadable files)
- `public/` - Public files served at root (CV, images)
- `.github/workflows/` - CI/CD workflows

## Built With

- [MyST Markdown](https://mystmd.org/) - Modern, extensible markdown for scientific and technical content
- [MyST Book Theme](https://mystmd.org/guide/quickstart-jupyter-book-theme) - Beautiful Jupyter Book-style navigation
- [sphinx-design](https://sphinx-design.readthedocs.io/) - Grid and card components
- Inspired by [Chris Holdgraf's website](https://github.com/choldgraf/choldgraf.github.io)
