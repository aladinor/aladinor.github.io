# Configuration file for Sphinx academic website
# Alfonso Ladino-Rincon

# -- Project information -----------------------------------------------------
project = "Alfonso Ladino-Rincon"
copyright = "2025, Alfonso Ladino-Rincon"
author = "Alfonso Ladino-Rincon"

# -- General configuration ---------------------------------------------------
extensions = [
    "myst_parser",
    "ablog",
    "sphinx.ext.intersphinx",
    "sphinx_design",
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store", "**.ipynb_checkpoints",
                   ".bundle", "_site", "vendor", "Gemfile*", "*.lock",
                   "**/README.md", "README.md", "GETTING_STARTED.md", "plan.md",
                   "assets/**"]

# -- Options for HTML output -------------------------------------------------
html_theme = "pydata_sphinx_theme"
html_title = "Alfonso Ladino-Rincon"
html_static_path = ["_static"]
html_css_files = ["custom.css"]

html_theme_options = {
    # Navigation
    "navbar_start": ["navbar-logo"],
    "navbar_center": ["navbar-nav"],
    "navbar_end": ["navbar-icon-links", "theme-switcher"],
    "footer_start": ["copyright"],
    "footer_end": ["sphinx-version"],

    # Right sidebar (TOC) - enabled by default for all pages
    "show_toc_level": 2,

    # GitHub and social links
    "github_url": "https://github.com/aladinor",
    "icon_links": [
        {
            "name": "ORCID",
            "url": "https://orcid.org/0000-0001-8081-7827",
            "icon": "fa-brands fa-orcid",
        },
        {
            "name": "Email",
            "url": "mailto:aladino@illinois.edu",
            "icon": "fa-solid fa-envelope",
        },
    ],

    # Theme appearance
    "logo": {
        "text": "Alfonso Ladino-Rincon",
    },

    # Navigation links
    "show_nav_level": 1,
    "navigation_depth": 2,
}

html_sidebars = {
    # Homepage only: no sidebars (landing page style)
    "index": [],

    # Blog pages: ABlog widgets on left sidebar
    "blog": ["ablog/tagcloud.html", "ablog/archives.html"],
    "blog/**": ["ablog/recentposts.html", "ablog/archives.html"],

    # All other pages use default theme sidebars:
    # - Left sidebar: navigation tree
    # - Right sidebar: page TOC (controlled by theme options)
}

# -- ABlog configuration -----------------------------------------------------
blog_title = "Alfonso Ladino-Rincon's Blog"
blog_path = "blog"
blog_post_pattern = "blog/*.md"
blog_baseurl = "https://aladinor.github.io"
fontawesome_included = True
post_auto_excerpt = 3
post_date_format = "%B %d, %Y"

# -- MyST configuration ------------------------------------------------------
myst_enable_extensions = [
    "colon_fence",
    "deflist",
]

# Suppress known warnings
suppress_warnings = ["myst.header"]
