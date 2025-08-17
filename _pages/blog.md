---
layout: page
title: Blog
subtitle: Thoughts on Atmospheric Science, Open Science & Technology
description: Personal reflections and insights on research, technology, and the atmospheric science community.
permalink: /blog/
---

## Recent Posts

{% assign posts = site.posts | sort: 'date' | reverse %}

{% if posts.size > 0 %}
    <div class="blog-posts">
        {% for post in posts %}
            <article class="post-preview">
                {% if post.image %}
                    <div class="post-image">
                        <a href="{{ post.url | relative_url }}">
                            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" loading="lazy">
                        </a>
                    </div>
                {% endif %}
                
                <div class="post-content">
                    <header class="post-header">
                        <h2 class="post-title">
                            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        </h2>
                        
                        <div class="post-meta">
                            <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">
                                <i class="fas fa-calendar"></i>
                                {{ post.date | date: "%B %d, %Y" }}
                            </time>
                            
                            {% if post.reading_time %}
                                <span class="post-reading-time">
                                    <i class="fas fa-clock"></i>
                                    {{ post.reading_time }} min read
                                </span>
                            {% endif %}
                            
                            {% if post.author %}
                                <span class="post-author">
                                    <i class="fas fa-user"></i>
                                    {{ post.author }}
                                </span>
                            {% endif %}
                        </div>
                        
                        {% if post.tags.size > 0 %}
                            <div class="post-tags">
                                {% for tag in post.tags limit:4 %}
                                    <span class="tag">{{ tag }}</span>
                                {% endfor %}
                            </div>
                        {% endif %}
                    </header>
                    
                    <div class="post-excerpt">
                        {% if post.excerpt %}
                            {{ post.excerpt | strip_html | truncatewords: 40 }}
                        {% else %}
                            {{ post.content | strip_html | truncatewords: 40 }}
                        {% endif %}
                    </div>
                    
                    <a href="{{ post.url | relative_url }}" class="read-more">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        {% endfor %}
    </div>
    
    {% comment %}
    <!-- Pagination if needed -->
    {% if paginator.total_pages > 1 %}
        <nav class="pagination">
            {% if paginator.previous_page %}
                <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-link">&larr; Newer Posts</a>
            {% endif %}
            
            <span class="pagination-info">
                Page {{ paginator.page }} of {{ paginator.total_pages }}
            </span>
            
            {% if paginator.next_page %}
                <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-link">Older Posts &rarr;</a>
            {% endif %}
        </nav>
    {% endif %}
    {% endcomment %}
    
{% else %}
    <div class="empty-state">
        <div class="empty-content">
            <i class="fas fa-pen-alt"></i>
            <h3>Blog Posts Coming Soon</h3>
            <p>I'll be sharing thoughts and insights about atmospheric science research, open science practices, and technology developments. Check back soon for the first posts!</p>
            <p>In the meantime, you can explore my research and recent publications.</p>
            <div class="empty-actions">
                <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">View Research</a>
                <a href="{{ '/publications/' | relative_url }}" class="btn btn-outline">Publications</a>
            </div>
        </div>
    </div>
{% endif %}

## What You'll Find Here

This blog will feature content across several key areas:

<div class="blog-topics">
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-cloud-rain"></i>
        </div>
        <h4>Research Insights</h4>
        <p>Behind-the-scenes looks at current research projects, methodological approaches, and lessons learned from atmospheric science investigations.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-database"></i>
        </div>
        <h4>Open Science</h4>
        <p>Discussions on FAIR data principles, reproducible research practices, and the importance of open science in advancing atmospheric research.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fab fa-python"></i>
        </div>
        <h4>Technical Deep Dives</h4>
        <p>Tutorials, code examples, and explanations of computational techniques used in atmospheric science and data analysis.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-graduation-cap"></i>
        </div>
        <h4>Career & Education</h4>
        <p>Reflections on graduate school, academic career paths, mentoring experiences, and advice for aspiring atmospheric scientists.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-users"></i>
        </div>
        <h4>Community & Collaboration</h4>
        <p>Thoughts on building inclusive research communities, international collaborations, and the future of atmospheric science.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-lightbulb"></i>
        </div>
        <h4>Innovation & Technology</h4>
        <p>Emerging technologies in atmospheric science, machine learning applications, and the intersection of AI and physical sciences.</p>
    </div>
</div>

## Featured Topics

### Radar Meteorology & Remote Sensing
Deep dives into radar data analysis, quality control techniques, and advanced remote sensing applications in atmospheric research.

### Machine Learning for Climate Science
Exploring the integration of AI and machine learning with traditional atmospheric physics, including physics-informed neural networks and uncertainty quantification.

### Open Source Development
Insights from contributing to scientific software projects, best practices for research code, and building sustainable open source communities.

### FAIR Data Practices
Practical approaches to implementing Findable, Accessible, Interoperable, and Reusable data principles in atmospheric science research.

### Graduate School Journey
Personal reflections on the PhD experience, research challenges and breakthroughs, and balancing academic and personal life.

### International Collaboration
Experiences working with global research teams, participating in international field campaigns, and building cross-border partnerships.

## Subscribe & Connect

Stay updated with new blog posts and research updates:

- **RSS Feed**: Subscribe to the RSS feed for automatic updates
- **Social Media**: Follow on Twitter and LinkedIn for post announcements
- **Email Updates**: Sign up for monthly research newsletters (coming soon)

## Guest Posts & Collaborations

I welcome guest posts and collaborative articles from fellow researchers, students, and practitioners in atmospheric science and related fields. Topics of particular interest include:

- Early career experiences and advice
- Novel research methodologies and findings
- Diversity and inclusion in atmospheric sciences
- International perspectives on climate research
- Technical tutorials and educational content

If you're interested in contributing, please reach out through the contact information provided in the site navigation.

## Comments & Discussion

While comments aren't enabled directly on the blog, I encourage discussion and engagement through:

- **Twitter**: Tag me in your responses and thoughts
- **LinkedIn**: Comment on shared articles and posts
- **Email**: Send direct feedback and questions
- **GitHub**: Open issues for technical content and corrections

I value diverse perspectives and constructive dialogue about the topics covered here.

---

*All blog content represents my personal views and experiences unless otherwise noted. Opinions expressed are my own and do not necessarily reflect those of my institution or collaborators.*

<style>
.blog-posts {
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    margin-bottom: var(--space-16);
}

.post-preview {
    display: grid;
    gap: var(--space-6);
    padding: var(--space-8);
    background-color: var(--color-background-card);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    
    @media (min-width: 768px) {
        grid-template-columns: 300px 1fr;
        align-items: start;
    }
}

.post-preview:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.post-image {
    @media (max-width: 767px) {
        order: -1;
    }
}

.post-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius-lg);
    
    @media (min-width: 768px) {
        height: 180px;
    }
}

.post-header {
    margin-bottom: var(--space-4);
}

.post-title {
    margin-bottom: var(--space-3);
    font-size: var(--font-size-2xl);
}

.post-title a {
    color: var(--color-primary);
    text-decoration: none;
}

.post-title a:hover {
    color: var(--color-secondary);
    text-decoration: underline;
}

.post-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
}

.post-meta > span {
    display: flex;
    align-items: center;
    gap: var(--space-1);
}

.post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
}

.post-excerpt {
    color: var(--color-text-light);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--space-4);
}

.read-more {
    color: var(--color-secondary);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    transition: color var(--transition-fast);
}

.read-more:hover {
    color: var(--color-secondary-dark);
}

.blog-topics {
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

.topic-card {
    background-color: var(--color-background-card);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: transform var(--transition-normal);
}

.topic-card:hover {
    transform: translateY(-2px);
}

.topic-icon {
    font-size: var(--font-size-3xl);
    color: var(--color-secondary);
    margin-bottom: var(--space-4);
}

.topic-card h4 {
    margin-bottom: var(--space-3);
    color: var(--color-primary);
}

.topic-card p {
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

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-8) 0;
    margin-top: var(--space-12);
    border-top: 1px solid var(--color-border);
}

.pagination-link {
    color: var(--color-secondary);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.pagination-link:hover {
    color: var(--color-secondary-dark);
    text-decoration: underline;
}

.pagination-info {
    color: var(--color-text-light);
    font-size: var(--font-size-sm);
}
</style>