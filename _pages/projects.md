---
layout: page
title: Projects
subtitle: Research & Development Initiatives
description: Current and completed projects in atmospheric science, software development, and open science.
permalink: /projects/
---

## All Projects

{% assign projects = site.projects | sort: 'date' | reverse %}

{% if projects.size > 0 %}
    <div class="projects-list">
        {% for project in projects %}
            <article class="project-item">
                {% if project.image %}
                    <div class="project-image">
                        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy">
                    </div>
                {% endif %}
                
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">
                            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
                        </h3>
                        
                        {% if project.status %}
                            <span class="project-status status-{{ project.status | downcase }}">
                                <i class="fas fa-circle"></i>
                                {{ project.status }}
                            </span>
                        {% endif %}
                    </div>
                    
                    {% if project.subtitle %}
                        <p class="project-subtitle">{{ project.subtitle }}</p>
                    {% endif %}
                    
                    <div class="project-meta">
                        {% if project.category %}
                            <span class="project-category">
                                <i class="fas fa-folder"></i>
                                {{ project.category }}
                            </span>
                        {% endif %}
                        
                        {% if project.start_date %}
                            <span class="project-dates">
                                <i class="fas fa-calendar"></i>
                                {{ project.start_date | date: "%Y" }}
                                {% if project.end_date %} - {{ project.end_date | date: "%Y" }}{% endif %}
                            </span>
                        {% endif %}
                        
                        {% if project.role %}
                            <span class="project-role">
                                <i class="fas fa-user"></i>
                                {{ project.role }}
                            </span>
                        {% endif %}
                    </div>
                    
                    {% if project.overview %}
                        <div class="project-overview">
                            {{ project.overview | strip_html | truncatewords: 30 }}
                        </div>
                    {% elsif project.excerpt %}
                        <div class="project-overview">
                            {{ project.excerpt | strip_html | truncatewords: 30 }}
                        </div>
                    {% endif %}
                    
                    {% if project.tools %}
                        <div class="project-tools">
                            {% for tool in project.tools limit:5 %}
                                <span class="tool-tag">{{ tool }}</span>
                            {% endfor %}
                        </div>
                    {% endif %}
                    
                    {% if project.tags.size > 0 %}
                        <div class="project-tags">
                            {% for tag in project.tags limit:4 %}
                                <span class="tag">{{ tag }}</span>
                            {% endfor %}
                        </div>
                    {% endif %}
                </div>
                
                <div class="project-actions">
                    {% if project.github %}
                        <a href="{{ project.github }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                    {% endif %}
                    
                    {% if project.demo %}
                        <a href="{{ project.demo }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-external-link-alt"></i>
                            Demo
                        </a>
                    {% endif %}
                    
                    {% if project.paper %}
                        <a href="{{ project.paper }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-file-alt"></i>
                            Paper
                        </a>
                    {% endif %}
                    
                    {% if project.documentation %}
                        <a href="{{ project.documentation }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-book"></i>
                            Docs
                        </a>
                    {% endif %}
                </div>
            </article>
        {% endfor %}
    </div>
{% else %}
    <div class="empty-state">
        <div class="empty-content">
            <i class="fas fa-project-diagram"></i>
            <h3>Projects Coming Soon</h3>
            <p>Research and development projects will appear here once added to the collection.</p>
            <p>Check out the current research activities and publications!</p>
            <div class="empty-actions">
                <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">View Research</a>
                <a href="{{ '/publications/' | relative_url }}" class="btn btn-outline">Publications</a>
            </div>
        </div>
    </div>
{% endif %}

## Project Categories

<div class="project-categories">
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-satellite"></i>
        </div>
        <h4>Remote Sensing</h4>
        <p>Advanced radar analysis techniques, satellite data processing, and atmospheric remote sensing algorithm development.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-brain"></i>
        </div>
        <h4>Machine Learning</h4>
        <p>Deep learning applications for atmospheric sciences, physics-informed neural networks, and AI-driven weather prediction.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-database"></i>
        </div>
        <h4>Data Infrastructure</h4>
        <p>Cloud-optimized data systems, FAIR data implementations, and scalable atmospheric data processing pipelines.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fab fa-python"></i>
        </div>
        <h4>Software Development</h4>
        <p>Open-source tools for atmospheric science, Python libraries, and scientific computing applications.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-graduation-cap"></i>
        </div>
        <h4>Education & Outreach</h4>
        <p>Training materials, workshops, tutorials, and educational resources for the atmospheric science community.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-users"></i>
        </div>
        <h4>Collaboration</h4>
        <p>Multi-institutional research initiatives, international partnerships, and community-driven development projects.</p>
    </div>
</div>

## Current Focus Areas

### Precipitation Science & Radar Meteorology

Working on advanced techniques for precipitation analysis using dual-frequency radar measurements, including:

- **Particle Size Distribution Retrievals**: Machine learning approaches for improving PSD estimates
- **Quality Control Systems**: Automated algorithms for radar data validation and correction
- **Multi-Platform Integration**: Combining radar, satellite, and in-situ observations

### Open Science Infrastructure

Developing tools and systems that support reproducible atmospheric science research:

- **Cloud-Optimized Data Formats**: Implementing Zarr and modern data structures
- **Analysis-Ready Datasets**: Creating FAIR-compliant atmospheric data products
- **Workflow Automation**: Building reproducible research pipelines

### Community Software Development

Contributing to and maintaining open-source software for the atmospheric science community:

- **Core Libraries**: Enhancements to Xarray, xradar, and related ecosystem tools
- **Domain-Specific Tools**: Specialized packages for radar meteorology and precipitation analysis
- **Educational Resources**: Tutorials, examples, and documentation improvements

### Machine Learning Applications

Exploring cutting-edge AI techniques for atmospheric science applications:

- **Physics-Informed Neural Networks**: Integrating physical constraints with data-driven models
- **Generative Models**: Data augmentation and uncertainty quantification approaches
- **Transfer Learning**: Cross-platform and cross-domain model applications

## Collaboration Opportunities

I'm always interested in collaborating on projects that advance atmospheric science and promote open science practices. Areas where I welcome collaboration include:

**Research Projects**
- Precipitation and cloud physics studies
- Remote sensing algorithm development
- Climate data analysis and modeling
- Extreme weather event research

**Technical Development**
- Open-source software contributions
- Data infrastructure improvements
- Machine learning model development
- Cloud computing optimizations

**Educational Initiatives**
- Workshop development and instruction
- Tutorial and documentation creation
- Student mentoring and training
- Community outreach programs

**Funding Opportunities**
- Grant proposal development
- Multi-institutional collaborations
- International research partnerships
- Industry-academic partnerships

## Project Impact

### Research Contributions

Projects have resulted in peer-reviewed publications, conference presentations, and advances in atmospheric science understanding.

### Software Impact

Open-source contributions are used by researchers worldwide, improving the efficiency and reproducibility of atmospheric science research.

### Educational Outcomes

Training materials and workshops have educated hundreds of students and researchers in modern atmospheric science techniques.

### Community Building

Projects foster collaboration within the atmospheric science community and promote inclusive, open science practices.

## Getting Involved

If you're interested in contributing to any of these projects or starting a new collaboration:

1. **Check out the code repositories** linked from individual project pages
2. **Read the documentation** to understand project goals and current status
3. **Join the discussion** in project issue trackers or community forums
4. **Reach out directly** through the contact information provided

I welcome contributors of all experience levels and backgrounds!

---

*Projects are continuously evolving. Check individual project pages for the most current information about status, contributors, and ways to get involved.*

<style>
.projects-list {
    display: grid;
    gap: var(--space-8);
    margin-bottom: var(--space-12);
}

.project-item {
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    background-color: var(--color-background-card);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    
    @media (min-width: 768px) {
        grid-template-columns: auto 1fr auto;
        align-items: start;
    }
}

.project-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.project-image {
    @media (min-width: 768px) {
        width: 120px;
        height: 120px;
    }
}

.project-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius-lg);
    
    @media (min-width: 768px) {
        height: 120px;
    }
}

.project-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
}

.project-title {
    margin: 0;
    font-size: var(--font-size-xl);
    flex: 1;
}

.project-title a {
    color: var(--color-primary);
    text-decoration: none;
}

.project-title a:hover {
    color: var(--color-secondary);
    text-decoration: underline;
}

.project-status {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-2) var(--space-3);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-full);
    white-space: nowrap;
}

.project-status i {
    font-size: var(--font-size-xs);
}

.status-active,
.status-ongoing {
    background-color: rgba(5, 150, 105, 0.1);
    color: var(--color-accent);
}

.status-completed {
    background-color: rgba(34, 197, 94, 0.1);
    color: var(--color-success);
}

.status-paused {
    background-color: rgba(217, 119, 6, 0.1);
    color: var(--color-warning);
}

.status-archived {
    background-color: rgba(156, 163, 175, 0.1);
    color: var(--color-text-muted);
}

.project-subtitle {
    color: var(--color-text-light);
    font-style: italic;
    margin-bottom: var(--space-3);
}

.project-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
}

.project-meta > span {
    display: flex;
    align-items: center;
    gap: var(--space-1);
}

.project-overview {
    color: var(--color-text-light);
    margin-bottom: var(--space-4);
    line-height: var(--line-height-relaxed);
}

.project-tools {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
}

.tool-tag {
    display: inline-block;
    padding: var(--space-1) var(--space-2);
    background-color: var(--color-secondary);
    color: var(--color-background);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-sm);
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
}

.project-actions {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    align-items: flex-start;
    
    @media (min-width: 768px) {
        align-items: flex-end;
        min-width: 120px;
    }
}

.project-categories {
    display: grid;
    gap: var(--space-6);
    margin: var(--space-12) 0;
    
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
}

.category-card {
    background-color: var(--color-background-card);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: transform var(--transition-normal);
}

.category-card:hover {
    transform: translateY(-2px);
}

.category-icon {
    font-size: var(--font-size-3xl);
    color: var(--color-secondary);
    margin-bottom: var(--space-4);
}

.category-card h4 {
    margin-bottom: var(--space-3);
    color: var(--color-primary);
}

.category-card p {
    color: var(--color-text-light);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    margin: 0;
}

.empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    text-align: center;
}

.empty-content {
    max-width: 500px;
    padding: var(--space-8);
}

.empty-content i {
    font-size: var(--font-size-6xl);
    color: var(--color-text-light);
    margin-bottom: var(--space-4);
}

.empty-actions {
    display: flex;
    gap: var(--space-3);
    justify-content: center;
    margin-top: var(--space-6);
}
</style>