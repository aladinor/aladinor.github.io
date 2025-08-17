---
layout: page
title: Talks & Presentations
subtitle: Sharing Research & Building Community
description: Conference presentations, invited talks, workshops, and seminars by Alfonso Ladino-Rincon.
permalink: /talks/
---

## All Talks & Presentations

{% assign talks = site.talks | sort: 'date' | reverse %}

{% if talks.size > 0 %}
    <div class="talks-list">
        {% for talk in talks %}
            <article class="talk-item">
                <div class="talk-content">
                    <h3 class="talk-title">
                        <a href="{{ talk.url | relative_url }}">{{ talk.title }}</a>
                    </h3>
                    
                    <div class="talk-meta">
                        {% if talk.venue %}
                            <span class="talk-venue">
                                <i class="fas fa-map-marker-alt"></i>
                                {{ talk.venue }}
                            </span>
                        {% endif %}
                        
                        {% if talk.location %}
                            <span class="talk-location">
                                <i class="fas fa-globe"></i>
                                {{ talk.location }}
                            </span>
                        {% endif %}
                        
                        {% if talk.date %}
                            <span class="talk-date">
                                <i class="fas fa-calendar"></i>
                                {{ talk.date | date: "%B %Y" }}
                            </span>
                        {% endif %}
                        
                        {% if talk.talk_type %}
                            <span class="talk-type-badge">{{ talk.talk_type }}</span>
                        {% endif %}
                    </div>
                    
                    {% if talk.abstract %}
                        <div class="talk-abstract">
                            {{ talk.abstract | strip_html | truncatewords: 25 }}
                        </div>
                    {% endif %}
                    
                    {% if talk.tags.size > 0 %}
                        <div class="talk-tags">
                            {% for tag in talk.tags %}
                                <span class="tag">{{ tag }}</span>
                            {% endfor %}
                        </div>
                    {% endif %}
                </div>
                
                <div class="talk-actions">
                    {% if talk.slides %}
                        <a href="{{ talk.slides | relative_url }}" target="_blank" class="btn btn-outline btn-sm">
                            <i class="fas fa-presentation"></i>
                            Slides
                        </a>
                    {% endif %}
                    
                    {% if talk.video %}
                        <a href="{{ talk.video }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-video"></i>
                            Video
                        </a>
                    {% endif %}
                    
                    {% if talk.poster %}
                        <a href="{{ talk.poster | relative_url }}" target="_blank" class="btn btn-outline btn-sm">
                            <i class="fas fa-image"></i>
                            Poster
                        </a>
                    {% endif %}
                    
                    {% if talk.event_url %}
                        <a href="{{ talk.event_url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-external-link-alt"></i>
                            Event
                        </a>
                    {% endif %}
                </div>
            </article>
        {% endfor %}
    </div>
{% else %}
    <div class="empty-state">
        <div class="empty-content">
            <i class="fas fa-microphone"></i>
            <h3>Talks Coming Soon</h3>
            <p>Conference presentations and talks will appear here once added to the collection.</p>
            <p>Check out the current research to see what topics are being explored!</p>
            <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">View Research</a>
        </div>
    </div>
{% endif %}

## Speaking Statistics

{% if talks.size > 0 %}
    <div class="speaking-stats">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">{{ talks.size }}</div>
                <div class="stat-label">Total Presentations</div>
            </div>
            
            {% assign invited_talks = talks | where: 'talk_type', 'Invited Talk' %}
            <div class="stat-item">
                <div class="stat-number">{{ invited_talks.size }}</div>
                <div class="stat-label">Invited Talks</div>
            </div>
            
            {% assign oral_presentations = talks | where: 'talk_type', 'Oral Presentation' %}
            <div class="stat-item">
                <div class="stat-number">{{ oral_presentations.size }}</div>
                <div class="stat-label">Oral Presentations</div>
            </div>
            
            {% assign posters = talks | where: 'talk_type', 'Poster Presentation' %}
            <div class="stat-item">
                <div class="stat-number">{{ posters.size }}</div>
                <div class="stat-label">Poster Presentations</div>
            </div>
        </div>
    </div>
{% endif %}

## Upcoming Speaking Engagements

*Check back for information about upcoming talks and presentations.*

## Speaking Topics

My presentations typically cover the following areas:

<div class="speaking-topics">
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-cloud-rain"></i>
        </div>
        <h4>Precipitation Science</h4>
        <p>Radar-based precipitation analysis, particle size distributions, and quantitative precipitation estimation techniques.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-satellite"></i>
        </div>
        <h4>Remote Sensing</h4>
        <p>Dual-frequency radar applications, satellite meteorology, and advanced remote sensing techniques for atmospheric research.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-brain"></i>
        </div>
        <h4>Machine Learning</h4>
        <p>Applications of deep learning in atmospheric sciences, physics-informed neural networks, and AI for weather prediction.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-database"></i>
        </div>
        <h4>Open Science</h4>
        <p>FAIR data principles, cloud-optimized datasets, reproducible research practices, and open-source software development.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fab fa-python"></i>
        </div>
        <h4>Scientific Computing</h4>
        <p>Python for atmospheric sciences, data visualization, high-performance computing, and software engineering for research.</p>
    </div>
    
    <div class="topic-card">
        <div class="topic-icon">
            <i class="fas fa-graduation-cap"></i>
        </div>
        <h4>Education & Training</h4>
        <p>Workshops on radar meteorology, scientific programming, data science techniques, and career development in atmospheric sciences.</p>
    </div>
</div>

## Speaking Opportunities

I'm always interested in sharing research findings and engaging with the atmospheric science community. I welcome invitations for:

- **Conference Presentations**: Research talks at national and international atmospheric science conferences
- **Invited Seminars**: University seminars and departmental talks
- **Workshop Instruction**: Hands-on training sessions for radar meteorology and scientific computing
- **Panel Discussions**: Open science, career development, and diversity in atmospheric sciences
- **Educational Outreach**: Talks for students and general audiences about atmospheric science and weather

### Speaking Topics Available

- Dual-frequency precipitation radar analysis and applications
- Machine learning approaches in atmospheric remote sensing  
- Open science practices and FAIR data principles
- Python programming for atmospheric scientists
- Career paths in atmospheric science and meteorology
- Diversity and inclusion in STEM fields

If you're interested in having me speak at your event, please reach out through any of the contact methods listed in the site navigation.

---

## Past Conference Participation

While building this collection, here are some notable conferences where I have presented:

- **European Radar Conference (ERAD) 2024** - Rome, Italy
- **Scientific Python Conference (SciPy) 2024** - Tacoma, United States  
- **AMS Radar Conference** - Minneapolis, United States
- **American Geophysical Union (AGU) Fall Meeting** - New Orleans, United States
- **AtmosCol Symposium** - Armenia, Colombia

<style>
.talks-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    margin-bottom: var(--space-12);
}

.talk-item {
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

.talk-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.talk-title {
    margin-bottom: var(--space-3);
    font-size: var(--font-size-lg);
}

.talk-title a {
    color: var(--color-primary);
    text-decoration: none;
}

.talk-title a:hover {
    color: var(--color-secondary);
    text-decoration: underline;
}

.talk-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
}

.talk-meta > span {
    display: flex;
    align-items: center;
    gap: var(--space-1);
}

.talk-type-badge {
    padding: var(--space-1) var(--space-3);
    background-color: var(--color-secondary);
    color: var(--color-background);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-full);
}

.talk-abstract {
    color: var(--color-text-light);
    margin-bottom: var(--space-3);
    line-height: var(--line-height-relaxed);
}

.talk-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
}

.talk-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    align-items: flex-start;
}

.speaking-stats {
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

.speaking-topics {
    display: grid;
    gap: var(--space-6);
    margin: var(--space-8) 0;
    
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
</style>