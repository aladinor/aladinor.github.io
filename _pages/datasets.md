---
layout: page
title: Datasets
subtitle: Open Data for Atmospheric Science Research
description: Curated datasets following FAIR principles for reproducible atmospheric science research.
permalink: /datasets/
---

## Available Datasets

{% assign datasets = site.datasets | sort: 'date' | reverse %}

{% if datasets.size > 0 %}
    <div class="datasets-list">
        {% for dataset in datasets %}
            <article class="dataset-item">
                <div class="dataset-content">
                    <h3 class="dataset-title">
                        <a href="{{ dataset.url | relative_url }}">{{ dataset.title }}</a>
                    </h3>
                    
                    <div class="dataset-meta">
                        {% if dataset.format %}
                            <span class="dataset-format">
                                <i class="fas fa-file-code"></i>
                                {{ dataset.format }}
                            </span>
                        {% endif %}
                        
                        {% if dataset.size %}
                            <span class="dataset-size">
                                <i class="fas fa-hdd"></i>
                                {{ dataset.size }}
                            </span>
                        {% endif %}
                        
                        {% if dataset.version %}
                            <span class="dataset-version">
                                <i class="fas fa-code-branch"></i>
                                v{{ dataset.version }}
                            </span>
                        {% endif %}
                        
                        {% if dataset.date %}
                            <span class="dataset-date">
                                <i class="fas fa-calendar"></i>
                                {{ dataset.date | date: "%Y" }}
                            </span>
                        {% endif %}
                        
                        {% if dataset.license %}
                            <span class="dataset-license">
                                <i class="fas fa-balance-scale"></i>
                                {{ dataset.license }}
                            </span>
                        {% endif %}
                    </div>
                    
                    {% if dataset.description %}
                        <div class="dataset-description">
                            {{ dataset.description | strip_html | truncatewords: 30 }}
                        </div>
                    {% endif %}
                    
                    {% if dataset.tags.size > 0 %}
                        <div class="dataset-tags">
                            {% for tag in dataset.tags %}
                                <span class="tag">{{ tag }}</span>
                            {% endfor %}
                        </div>
                    {% endif %}
                </div>
                
                <div class="dataset-actions">
                    {% if dataset.download_url %}
                        <a href="{{ dataset.download_url }}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                            <i class="fas fa-download"></i>
                            Download
                        </a>
                    {% endif %}
                    
                    {% if dataset.zenodo %}
                        <a href="{{ dataset.zenodo }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fas fa-archive"></i>
                            Zenodo
                        </a>
                    {% endif %}
                    
                    {% if dataset.github %}
                        <a href="{{ dataset.github }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                            <i class="fab fa-github"></i>
                            Repository
                        </a>
                    {% endif %}
                    
                    {% if dataset.documentation %}
                        <a href="{{ dataset.documentation }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
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
            <i class="fas fa-database"></i>
            <h3>Datasets Coming Soon</h3>
            <p>Research datasets will appear here once they are processed and made available following FAIR principles.</p>
            <p>Check back soon for open atmospheric science data!</p>
            <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">View Research</a>
        </div>
    </div>
{% endif %}

## Data Philosophy

I am committed to making atmospheric science data **Findable, Accessible, Interoperable, and Reusable (FAIR)**. All datasets shared here follow these principles to support reproducible research and accelerate scientific discovery.

<div class="fair-principles">
    <div class="fair-item">
        <div class="fair-letter">F</div>
        <div class="fair-content">
            <h4>Findable</h4>
            <p>Datasets are assigned persistent identifiers (DOIs) and include rich metadata to enable discovery through search engines and data catalogs.</p>
        </div>
    </div>
    
    <div class="fair-item">
        <div class="fair-letter">A</div>
        <div class="fair-content">
            <h4>Accessible</h4>
            <p>Data is stored in reliable repositories with open access protocols, ensuring long-term availability to the global research community.</p>
        </div>
    </div>
    
    <div class="fair-item">
        <div class="fair-letter">I</div>
        <div class="fair-content">
            <h4>Interoperable</h4>
            <p>Datasets use standardized formats (NetCDF, Zarr) and follow community conventions for variable names, units, and structure.</p>
        </div>
    </div>
    
    <div class="fair-item">
        <div class="fair-letter">R</div>
        <div class="fair-content">
            <h4>Reusable</h4>
            <p>Clear licensing, comprehensive documentation, and usage examples enable others to build upon this work effectively.</p>
        </div>
    </div>
</div>

## Dataset Categories

<div class="dataset-categories">
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-satellite-dish"></i>
        </div>
        <h4>Radar Data</h4>
        <p>Processed weather radar observations, including dual-frequency measurements and quality-controlled precipitation data.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-cloud-rain"></i>
        </div>
        <h4>Precipitation</h4>
        <p>Particle size distribution retrievals, rainfall rate estimates, and drop size distribution measurements.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-globe-americas"></i>
        </div>
        <h4>Climate Data</h4>
        <p>Long-term atmospheric datasets optimized for climate research and trend analysis applications.</p>
    </div>
    
    <div class="category-card">
        <div class="category-icon">
            <i class="fas fa-brain"></i>
        </div>
        <h4>ML Training Data</h4>
        <p>Curated datasets for machine learning applications in atmospheric sciences, including labeled training examples.</p>
    </div>
</div>

## Data Access & Usage

### Cloud-Optimized Formats

All datasets are provided in cloud-optimized formats to enable efficient analysis:

- **Zarr**: For large, multidimensional arrays with chunked storage
- **NetCDF4**: Following CF conventions for atmospheric data
- **Parquet**: For tabular data with efficient compression and querying

### Access Methods

**Direct Download**: Individual files can be downloaded directly from data repositories.

**Programmatic Access**: Use Python libraries like `xarray`, `fsspec`, and `intake` for cloud-native data access.

**API Access**: RESTful APIs available for automated data retrieval and integration.

### Usage Examples

```python
import xarray as xr

# Access cloud-optimized dataset directly
ds = xr.open_zarr('s3://bucket/dataset.zarr')

# Load and analyze precipitation data
precip = ds.precipitation_rate
monthly_mean = precip.resample(time='1M').mean()
```

## Data Citation

Please cite datasets appropriately when using them in your research. Each dataset page includes a recommended citation format. General citation guidelines:

1. **Include the DOI** when available
2. **Specify the version** used in your analysis
3. **Acknowledge funding sources** listed in the dataset metadata
4. **Follow journal requirements** for data citation format

## Collaboration & Contributions

I welcome collaborations on dataset development and improvement. If you:

- **Have suggestions** for additional processing or quality control
- **Identify issues** with existing datasets
- **Want to contribute** complementary data
- **Need assistance** with data access or analysis

Please reach out through the contact methods listed in the site navigation.

## Quality Assurance

All datasets undergo comprehensive quality control procedures:

- **Automated Quality Checks**: Systematic validation of data ranges, units, and formats
- **Manual Review**: Expert examination of data patterns and anomalies  
- **Version Control**: Tracked changes and improvements over time
- **Community Feedback**: Incorporation of user-reported issues and suggestions

## Data Policy

- **Open Access**: Most datasets are freely available under permissive licenses
- **Privacy Protection**: No personal or sensitive information is included
- **Ethical Use**: Data should be used for legitimate scientific purposes
- **Attribution**: Proper citation and acknowledgment are required

---

*For questions about data access, licensing, or collaboration opportunities, please contact me directly.*

<style>
.datasets-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    margin-bottom: var(--space-12);
}

.dataset-item {
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

.dataset-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.dataset-title {
    margin-bottom: var(--space-3);
    font-size: var(--font-size-lg);
}

.dataset-title a {
    color: var(--color-primary);
    text-decoration: none;
}

.dataset-title a:hover {
    color: var(--color-secondary);
    text-decoration: underline;
}

.dataset-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
}

.dataset-meta > span {
    display: flex;
    align-items: center;
    gap: var(--space-1);
}

.dataset-description {
    color: var(--color-text-light);
    margin-bottom: var(--space-3);
    line-height: var(--line-height-relaxed);
}

.dataset-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
}

.dataset-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    align-items: flex-start;
}

.fair-principles {
    display: grid;
    gap: var(--space-6);
    margin: var(--space-12) 0;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
}

.fair-item {
    display: flex;
    gap: var(--space-4);
    padding: var(--space-6);
    background-color: var(--color-background-card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border: 2px solid var(--color-accent);
}

.fair-letter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: var(--radius-full);
    background-color: var(--color-accent);
    color: var(--color-background);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xl);
    flex-shrink: 0;
}

.fair-content h4 {
    margin-bottom: var(--space-2);
    color: var(--color-primary);
}

.fair-content p {
    color: var(--color-text-light);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    margin: 0;
}

.dataset-categories {
    display: grid;
    gap: var(--space-6);
    margin: var(--space-12) 0;
    
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
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

pre {
    background-color: var(--color-primary-dark);
    color: var(--color-background);
    padding: var(--space-4);
    border-radius: var(--radius-lg);
    overflow-x: auto;
    margin: var(--space-4) 0;
}

code {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
}
</style>