# Plan: Transform Site to Match Chris Holdgraf's Visual Design

**Goal:** Create a clean, modern academic website with dark blue theme matching the screenshot of chrisholdgraf.com

## Design Specifications

### Color Palette (Deep Blues)
```css
/* Primary colors - Oxford/Berkeley/Yale blues */
--oxford-blue: #00132d;        /* Darkest - main background */
--oxford-blue-2: #00193b;      /* Card backgrounds */
--oxford-blue-3: #001e45;      /* Hover states */
--oxford-blue-4: #002657;      /* Borders */
--berkeley-blue: #002d67;      /* Accents */
--yale-blue: #00377e;          /* Links/buttons */
```

### Visual Style
- **Dark theme** with deep blue backgrounds
- **Clean, minimal** layout
- **Emoji-enhanced** content for personality
- **Card-based** navigation
- **Square profile photo** (not circular)
- **Large, friendly** typography

---

## Changes to Implement

### 1. Homepage (index.md) - Complete Redesign

**New Structure:**

```markdown
# Hi, I'm Alfonso Ladino-Rincon 👋

[Grid layout with two columns]

Left column: Square profile photo (large)
Right column: "A bit about me..." with emoji bullets

**Bullet points:**
- 🌧️ PhD Candidate in Atmospheric Sciences @ University of Illinois at Urbana-Champaign
- 📡 Radar Meteorology & Cloud Physics Researcher
- 🤖 Machine Learning for Weather Applications
- 🌍 Open Science & FAIR Data Principles Advocate
- 🐍 Contributor to Python Atmospheric Science Ecosystem

**Additional paragraph:**
"I also work extensively with [raw2zarr](link), [xradar](link), and the [Open Radar Science](link) community."

**Three navigation cards:**
1. About me 📘
2. Projects I've worked on 🔧
3. My blog ✍️

**Recent blog posts section:**
- Clean list format
- Post titles as links
- Brief excerpts
- Dates
```

### 2. Configuration (conf.py) Updates

**Add:**
- Dark theme configuration
- Custom CSS file reference
- Navigation menu items: About, Projects, Publications, Talks, Blog
- Theme color customization with Oxford blues
- Icon links (GitHub, ORCID, Email)

**Theme options:**
```python
html_theme_options = {
    "navbar_center": ["navbar-nav"],
    "navbar_end": ["navbar-icon-links", "theme-switcher"],
    "primary_sidebar_end": [],
    "footer_start": ["copyright"],
    "footer_end": ["sphinx-version"],
}
```

### 3. Custom CSS (_static/custom.css) - NEW FILE

**Create custom stylesheet with:**

```css
/* Color variables */
:root {
    --oxford-blue: #00132d;
    --oxford-blue-2: #00193b;
    --oxford-blue-3: #001e45;
    --oxford-blue-4: #002657;
    --berkeley-blue: #002d67;
    --yale-blue: #00377e;
}

/* Dark theme overrides */
body {
    background-color: var(--oxford-blue);
    color: #e0e0e0;
}

/* Profile photo - square with subtle styling */
.profile-photo {
    width: 300px;
    max-width: 100%;
    border: 3px solid var(--yale-blue);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Card styling */
.card {
    background-color: var(--oxford-blue-2);
    border: 1px solid var(--oxford-blue-4);
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    background-color: var(--oxford-blue-3);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 55, 126, 0.3);
}

/* Link colors */
a {
    color: var(--yale-blue);
}

a:hover {
    color: #4a90e2;
}

/* Hero section */
.hero-heading {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

/* Recent posts styling */
.post-list {
    background-color: var(--oxford-blue-2);
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 2rem;
}
```

### 4. New Pages to Create

#### projects.md - NEW
```markdown
# Projects I've worked on 🔧

## Research Projects

### raw2zarr
[Description of raw2zarr project]

### xradar Contributions
[Description of xradar work]

## Open Source Contributions

- Python atmospheric science ecosystem
- Radar data processing tools
- Cloud-optimized workflows
```

#### talks.md - NEW (Optional)
```markdown
# Talks & Presentations

## 2024

- ERAD 2024: Neural Networks for Precipitation Retrieval

## 2023

- AMS Radar Conference
- Open Radar Science Workshop
```

### 5. Update Existing Pages

#### about.md
- Ensure consistent styling
- Add more personality with emojis
- Include education, research, contributions sections

#### publications.md
- Keep ORCID integration
- Style to match dark theme

#### blog.md
- Ensure ABlog integration works
- Style post listings

---

## Files to Create/Modify

### NEW Files:
1. `_static/custom.css` - Custom dark blue theme styling
2. `projects.md` - Projects page
3. `talks.md` - Talks/presentations page (optional)
4. `assets/images/profile.jpg` - Your square profile photo
5. `plan.md` - This file (for reference)

### MODIFY Files:
1. `index.md` - Complete redesign with hero, cards, recent posts
2. `conf.py` - Add custom CSS, dark theme, navigation
3. `about.md` - Minor styling updates
4. `publications.md` - Ensure consistency
5. `blog.md` - Ensure ABlog styling

---

## Implementation Steps

1. **Add profile photo** to `assets/images/profile.jpg`
2. **Create custom.css** with dark blue theme
3. **Update conf.py** to reference custom CSS and configure theme
4. **Redesign index.md** with grid layout, hero section, cards
5. **Create projects.md** with your research projects
6. **Create talks.md** (optional) with presentations
7. **Update navigation** in conf.py to include all pages
8. **Test build** locally with `sphinx-build -b html . _build/html`
9. **Preview** with `python -m http.server --directory _build/html 8000`
10. **Commit and push** to deploy

---

## Expected Result

**Homepage will have:**
- ✅ Large "Hi, I'm Alfonso Ladino-Rincon 👋" heading
- ✅ Square profile photo on left
- ✅ "A bit about me..." with emoji bullets on right
- ✅ Dark blue background (Oxford blue palette)
- ✅ Three navigation cards (About, Projects, Blog)
- ✅ Recent blog posts section
- ✅ Top navigation: About | Projects | Publications | Talks | Blog
- ✅ Social icons (GitHub, ORCID, Email) in top right

**Overall design will:**
- ✅ Match the clean, modern aesthetic of chrisholdgraf.com
- ✅ Use deep blue color palette instead of gray
- ✅ Have square profile photo instead of circular
- ✅ Maintain professional academic tone
- ✅ Be mobile responsive (PyData theme handles this)
- ✅ Have smooth hover effects on cards
- ✅ Support light/dark theme toggle (optional)

---

## Assets Needed from You

1. **Profile Photo**
   - Format: JPG or PNG
   - Size: 300-500px square recommended
   - Location: Save to `assets/images/profile.jpg`

2. **Project Descriptions** (for projects.md)
   - raw2zarr
   - xradar
   - GPM validation
   - Other research projects

3. **Talks/Presentations** (optional, for talks.md)
   - Conference presentations
   - Workshops
   - Invited talks

---

## Notes

- PyData Sphinx Theme provides excellent responsive design
- MyST Markdown with sphinx-design provides grid/card directives
- ABlog handles blog functionality automatically
- Custom CSS overrides theme defaults for dark blue aesthetic
- All pages use consistent styling through CSS variables
- Build process remains simple: `sphinx-build -b html . _build/html`

---

## Future Enhancements (Post-Launch)

- ORCID publication auto-sync script
- Google Analytics integration
- Blog post categories/tags
- Project thumbnails/images
- Interactive visualizations
- Newsletter signup
- Contact form

---

**Status:** Ready to implement
**Time Estimate:** 2-3 hours for complete implementation
**Complexity:** Moderate - mainly content and CSS work