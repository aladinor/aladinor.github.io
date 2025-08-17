---
layout: page
title: Publications
subtitle: Research Output & Scholarly Contributions
description: Comprehensive list of Alfonso's publications, including peer-reviewed articles, conference proceedings, and software releases.
permalink: /publications/
---

## All Publications

{% assign publications = site.publications | sort: 'date' | reverse %}

{% if publications.size > 0 %}
    <div class="publications-list">
        {% for publication in publications %}
            <article class="publication-item">
                <div class="publication-content">
                    <h3 class="publication-title">
                        <a href="{{ publication.url | relative_url }}">{{ publication.title }}</a>
                    </h3>
                    
                    {% if publication.authors %}
                        <p class="publication-authors">{{ publication.authors }}</p>
                    {% endif %}
                    
                    <div class="publication-meta">
                        {% if publication.journal %}
                            <span class="publication-journal">{{ publication.journal }}</span>
                        {% endif %}
                        
                        {% if publication.date %}
                            <span class="publication-date">{{ publication.date | date: "%Y" }}</span>
                        {% endif %}
                        
                        {% if publication.volume %}
                            <span class="publication-volume">Vol. {{ publication.volume }}</span>
                        {% endif %}
                        
                        {% if publication.pages %}
                            <span class="publication-pages">pp. {{ publication.pages }}</span>
                        {% endif %}
                    </div>
                    
                    {% if publication.abstract %}
                        <div class="publication-abstract">
                            {{ publication.abstract | strip_html | truncatewords: 30 }}
                        </div>
                    {% endif %}
                    
                    {% if publication.tags.size > 0 %}
                        <div class="publication-tags">
                            {% for tag in publication.tags %}
                                <span class="tag">{{ tag }}</span>
                            {% endfor %}
                        </div>
                    {% endif %}
                </div>
                
                <div class="publication-actions">
                    {% if publication.doi %}
                        <a href="https://doi.org/{{ publication.doi }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-external-link-alt"></i>
                            DOI
                        </a>
                    {% endif %}
                    
                    {% if publication.pdf %}
                        <a href="{{ publication.pdf | relative_url }}" target="_blank" class="btn btn-outline btn-sm">
                            <i class="fas fa-file-pdf"></i>
                            PDF
                        </a>
                    {% endif %}
                    
                    {% if publication.code %}
                        <a href="{{ publication.code }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                    {% endif %}
                    
                    {% if publication.data %}
                        <a href="{{ publication.data }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-database"></i>
                            Data
                        </a>
                    {% endif %}
                </div>
            </article>
        {% endfor %}
    </div>
{% else %}
    <div class="empty-state">
        <div class="empty-content">
            <i class="fas fa-book-open"></i>
            <h3>Publications Coming Soon</h3>
            <p>Publications will appear here once added to the collection. Check back soon for the latest research output!</p>
            <p>In the meantime, you can explore the research overview and current projects.</p>
            <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">View Research</a>
        </div>
    </div>
{% endif %}

## Publication Statistics

{% if publications.size > 0 %}
    <div class="publication-stats">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">{{ publications.size }}</div>
                <div class="stat-label">Total Publications</div>
            </div>
            
            {% assign peer_reviewed = publications | where: 'type', 'peer-reviewed' %}
            <div class="stat-item">
                <div class="stat-number">{{ peer_reviewed.size }}</div>
                <div class="stat-label">Peer-Reviewed Articles</div>
            </div>
            
            {% assign conference_papers = publications | where: 'type', 'conference' %}
            <div class="stat-item">
                <div class="stat-number">{{ conference_papers.size }}</div>
                <div class="stat-label">Conference Proceedings</div>
            </div>
            
            {% assign this_year = 'now' | date: "%Y" %}
            {% assign this_year_pubs = publications | where_exp: "pub", "pub.date >= this_year" %}
            <div class="stat-item">
                <div class="stat-number">{{ this_year_pubs.size }}</div>
                <div class="stat-label">{{ this_year }} Publications</div>
            </div>
        </div>
    </div>
{% endif %}

## Research Topics

{% if publications.size > 0 %}
    {% assign all_tags = publications | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
    {% if all_tags.size > 0 %}
        <div class="research-topics">
            <h3>Publication Topics</h3>
            <div class="topics-cloud">
                {% for tag in all_tags %}
                    {% if tag != "" %}
                        {% assign tag_count = 0 %}
                        {% for publication in publications %}
                            {% if publication.tags contains tag %}
                                {% assign tag_count = tag_count | plus: 1 %}
                            {% endif %}
                        {% endfor %}
                        <span class="topic-tag" style="font-size: {{ tag_count | times: 0.2 | plus: 1 }}em;">
                            {{ tag }} ({{ tag_count }})
                        </span>
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    {% endif %}
{% endif %}

---

## Guidelines for Citation

When citing this work, please use the provided citation formats available on each publication page. For software contributions and datasets, please refer to the specific citation guidelines provided with each resource.

## Open Access Policy

I am committed to making research freely accessible to the global scientific community. Most publications are available as open access or have preprint versions available. If you cannot access a particular publication, please contact me directly.

## Collaboration Opportunities

I welcome collaborations on atmospheric science research, open science initiatives, and educational projects. If you're interested in working together or have questions about any of these publications, please don't hesitate to reach out.

<style>
.publications-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    margin-bottom: var(--space-12);
}

.publication-item {
    display: grid;
    gap: var(--space-4);
    padding: var(--space-6);
    background-color: var(--color-background-card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr auto;
        align-items: start;
    }
}

.publication-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.publication-title {
    margin-bottom: var(--space-3);
    font-size: var(--font-size-lg);
}

.publication-title a {
    color: var(--color-primary);
    text-decoration: none;
}

.publication-title a:hover {
    color: var(--color-secondary);
    text-decoration: underline;
}

.publication-authors {
    color: var(--color-text);
    font-weight: var(--font-weight-medium);
    margin-bottom: var(--space-2);
}

.publication-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
}

.publication-meta > span:not(:last-child)::after {
    content: " • ";
    margin-left: var(--space-2);
}

.publication-abstract {
    color: var(--color-text-light);
    margin-bottom: var(--space-3);
    line-height: var(--line-height-relaxed);
}

.publication-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
}

.publication-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    align-items: flex-start;
}

.btn-sm {
    padding: var(--space-2) var(--space-3);
    font-size: var(--font-size-sm);
}

.empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    text-align: center;
}

.empty-content {
    max-width: 400px;
    padding: var(--space-8);
}

.empty-content i {
    font-size: var(--font-size-6xl);
    color: var(--color-text-light);
    margin-bottom: var(--space-4);
}

.publication-stats {
    margin: var(--space-12) 0;
    padding: var(--space-8);
    background-color: var(--color-background-alt);
    border-radius: var(--radius-lg);
}

.stats-grid {
    display: grid;
    gap: var(--space-6);
    text-align: center;
    
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
}

.stat-number {
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-secondary);
}

.stat-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
    font-weight: var(--font-weight-medium);
}

.research-topics {
    margin: var(--space-12) 0;
}

.topics-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    margin-top: var(--space-4);
}

.topic-tag {
    color: var(--color-secondary);
    font-weight: var(--font-weight-medium);
    line-height: 1.2;
}
</style>