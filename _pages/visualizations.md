---
layout: page
title: Research Visualizations
permalink: /visualizations/
description: Interactive data visualizations showcasing research impact, collaboration networks, and open science contributions in atmospheric science.
---

<div class="visualizations-intro">
    <div class="container">
        <h1 class="page-title">Interactive Research Visualizations</h1>
        <p class="page-description">
            Explore my research impact and contributions to open science through interactive data visualizations. 
            These charts showcase publication trends, global collaboration networks, dataset usage patterns, 
            and the interconnected nature of atmospheric science research.
        </p>
    </div>
</div>

<!-- Research Impact Dashboard -->
<section class="visualization-section">
    <div class="container">
        <div class="section-header">
            <h2>Research Impact Dashboard</h2>
            <p>Key metrics showcasing research productivity, citations, and community engagement</p>
        </div>
        <div id="research-dashboard" class="visualization-container" role="region" aria-label="Research impact metrics dashboard">
            <div class="loading-placeholder">
                <div class="loading-spinner"></div>
                <p>Loading research impact visualization...</p>
            </div>
        </div>
    </div>
</section>

<!-- Publication Timeline -->
<section class="visualization-section">
    <div class="container">
        <div class="section-header">
            <h2>Publication Timeline</h2>
            <p>Interactive timeline of research publications from 2021-2024, organized by research category and impact</p>
        </div>
        <div id="publication-timeline" class="visualization-container" role="region" aria-label="Publication timeline visualization">
            <div class="loading-placeholder">
                <div class="loading-spinner"></div>
                <p>Loading publication timeline...</p>
            </div>
        </div>
    </div>
</section>

<!-- Dataset Usage Map -->
<section class="visualization-section">
    <div class="container">
        <div class="section-header">
            <h2>Global Dataset Usage</h2>
            <p>World map showing the global reach of open datasets, with download statistics by country and institution</p>
        </div>
        <div id="dataset-map" class="visualization-container" role="region" aria-label="Global dataset usage map">
            <div class="loading-placeholder">
                <div class="loading-spinner"></div>
                <p>Loading dataset usage map...</p>
            </div>
        </div>
    </div>
</section>

<!-- Research Network -->
<section class="visualization-section">
    <div class="container">
        <div class="section-header">
            <h2>Research Areas Network</h2>
            <p>Interactive network diagram showing connections between research topics, methodologies, and tools</p>
        </div>
        <div id="research-network" class="visualization-container" role="region" aria-label="Research areas network diagram">
            <div class="loading-placeholder">
                <div class="loading-spinner"></div>
                <p>Loading research network...</p>
            </div>
        </div>
    </div>
</section>

<!-- Cloud Computing Workflow -->
<section class="visualization-section">
    <div class="container">
        <div class="section-header">
            <h2>Open Science Workflow</h2>
            <p>Visual representation of the data processing pipeline from raw radar measurements to ARCO datasets</p>
        </div>
        <div id="workflow-diagram" class="visualization-container" role="region" aria-label="Cloud computing workflow diagram">
            <div class="loading-placeholder">
                <div class="loading-spinner"></div>
                <p>Loading workflow diagram...</p>
            </div>
        </div>
    </div>
</section>

<!-- Insights Section -->
<section class="insights-section">
    <div class="container">
        <h2 class="section-title">Key Insights</h2>
        <div class="insights-grid">
            <div class="insight-card">
                <div class="insight-icon">📊</div>
                <h3>Research Impact</h3>
                <p>With 28+ publications and 335+ citations, my research demonstrates significant impact in atmospheric science, particularly in cloud physics and open science methodologies.</p>
            </div>
            <div class="insight-card">
                <div class="insight-icon">🌍</div>
                <h3>Global Reach</h3>
                <p>Datasets are actively used by researchers in 15+ countries, with over 15,000 downloads, showcasing the international impact of open science initiatives.</p>
            </div>
            <div class="insight-card">
                <div class="insight-icon">🔗</div>
                <h3>Interconnected Research</h3>
                <p>The research network reveals strong connections between cloud physics, machine learning, and open science, highlighting interdisciplinary collaboration patterns.</p>
            </div>
            <div class="insight-card">
                <div class="insight-icon">⚡</div>
                <h3>Innovation Pipeline</h3>
                <p>The FAIR-compliant workflow demonstrates how modern cloud computing and ML techniques can accelerate scientific discovery and data accessibility.</p>
            </div>
        </div>
    </div>
</section>

<!-- Technical Notes -->
<section class="technical-notes">
    <div class="container">
        <h2 class="section-title">Technical Implementation</h2>
        <div class="technical-content">
            <div class="tech-info">
                <h3>Data Visualization Technologies</h3>
                <ul>
                    <li><strong>D3.js v7</strong> - For creating custom, interactive SVG visualizations</li>
                    <li><strong>Force-directed layouts</strong> - For network diagrams and relationship mapping</li>
                    <li><strong>Geographic projections</strong> - For accurate world map representations</li>
                    <li><strong>Responsive design</strong> - Adaptive layouts for mobile and desktop viewing</li>
                    <li><strong>Accessibility features</strong> - ARIA labels, keyboard navigation, and screen reader support</li>
                </ul>
            </div>
            <div class="data-sources">
                <h3>Data Sources & Methodology</h3>
                <ul>
                    <li><strong>Publication data</strong> - Curated from Google Scholar and institutional repositories</li>
                    <li><strong>Citation metrics</strong> - Tracked through academic databases and citation indices</li>
                    <li><strong>Download statistics</strong> - Aggregated from Zenodo, GitHub, and cloud storage platforms</li>
                    <li><strong>Collaboration networks</strong> - Derived from co-authorship patterns and project affiliations</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Load visualization scripts -->
<script src="{{ '/assets/js/visualizations.js' | relative_url }}"></script>

<style>
/* Visualization-specific styles */
.visualizations-intro {
    background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-alt) 100%);
    padding: var(--space-16) 0 var(--space-12) 0;
    text-align: center;
}

.visualization-section {
    padding: var(--space-16) 0;
}

.visualization-section:nth-child(even) {
    background-color: var(--color-background-alt);
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-8);
}

.section-header h2 {
    color: var(--color-primary);
    margin-bottom: var(--space-3);
    font-size: var(--font-size-3xl);
}

.section-header p {
    color: var(--color-text-light);
    font-size: var(--font-size-lg);
    max-width: 600px;
    margin: 0 auto;
}

.visualization-container {
    background: white;
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    box-shadow: var(--shadow-lg);
    min-height: 400px;
    position: relative;
    overflow: hidden;
}

.loading-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    color: var(--color-text-light);
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--color-border);
    border-top: 4px solid var(--color-secondary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: var(--space-4);
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.insights-section {
    padding: var(--space-20) 0;
    background-color: var(--color-background-alt);
}

.insights-grid {
    display: grid;
    gap: var(--space-8);
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.insight-card {
    background: white;
    padding: var(--space-6);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.insight-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.insight-icon {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--space-4);
}

.insight-card h3 {
    color: var(--color-primary);
    margin-bottom: var(--space-3);
    font-size: var(--font-size-xl);
}

.insight-card p {
    color: var(--color-text-light);
    line-height: var(--line-height-relaxed);
}

.technical-notes {
    padding: var(--space-16) 0;
}

.technical-content {
    display: grid;
    gap: var(--space-8);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.tech-info, .data-sources {
    background: white;
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.tech-info h3, .data-sources h3 {
    color: var(--color-primary);
    margin-bottom: var(--space-4);
    font-size: var(--font-size-xl);
}

.tech-info ul, .data-sources ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tech-info li, .data-sources li {
    padding: var(--space-2) 0;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text);
}

.tech-info li:last-child, .data-sources li:last-child {
    border-bottom: none;
}

.tech-info strong, .data-sources strong {
    color: var(--color-secondary);
    font-weight: var(--font-weight-semibold);
}

/* Responsive design */
@media (max-width: 768px) {
    .visualization-container {
        padding: var(--space-4);
        margin: 0 var(--space-2);
    }
    
    .section-header h2 {
        font-size: var(--font-size-2xl);
    }
    
    .section-header p {
        font-size: var(--font-size-base);
    }
    
    .insights-grid {
        grid-template-columns: 1fr;
    }
    
    .technical-content {
        grid-template-columns: 1fr;
    }
}

/* Dark mode compatibility */
@media (prefers-color-scheme: dark) {
    .visualization-container,
    .insight-card,
    .tech-info,
    .data-sources {
        background: #1a202c;
        color: #e2e8f0;
    }
    
    .loading-placeholder {
        color: #a0aec0;
    }
}

/* Print styles */
@media print {
    .visualization-container {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #e5e7eb;
    }
    
    .loading-placeholder {
        display: none;
    }
}

/* High contrast mode */
@media (prefers-contrast: high) {
    .visualization-container {
        border: 2px solid #000;
    }
    
    .insight-card,
    .tech-info,
    .data-sources {
        border: 1px solid #000;
    }
}

/* Reduced motion accessibility */
@media (prefers-reduced-motion: reduce) {
    .loading-spinner {
        animation: none;
    }
    
    .insight-card,
    .visualization-container {
        transition: none;
    }
}

/* Focus styles for accessibility */
.visualization-container:focus-within {
    outline: 2px solid var(--color-secondary);
    outline-offset: 2px;
}

/* Custom tooltip styles */
.visualization-tooltip,
.map-tooltip,
.network-tooltip,
.workflow-tooltip {
    font-family: var(--font-family-sans);
    line-height: var(--line-height-normal);
    max-width: 300px;
    word-wrap: break-word;
    box-shadow: var(--shadow-xl);
}

/* SVG elements accessibility */
.visualization-container svg {
    max-width: 100%;
    height: auto;
}

.visualization-container svg text {
    font-family: var(--font-family-sans);
}

/* Interactive elements */
.visualization-container .node-group,
.visualization-container .publication-group,
.visualization-container .country-circle,
.visualization-container .workflow-step {
    transition: opacity var(--transition-fast);
}

.visualization-container .node-group:focus,
.visualization-container .publication-group:focus,
.visualization-container .country-circle:focus,
.visualization-container .workflow-step:focus {
    outline: 2px solid var(--color-secondary);
    outline-offset: 2px;
}
</style>