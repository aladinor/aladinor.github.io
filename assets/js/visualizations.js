/**
 * Interactive Data Visualizations for Alfonso Ladino-Rincon's Academic Website
 * Professional, accessible visualizations showcasing research impact and open science contributions
 */

// Research data for visualizations
const researchData = {
    publications: [
        {
            year: 2021,
            title: "Raindrop Size Spectrum in the Americas",
            journal: "Atmospheric Research",
            category: "Cloud Physics",
            citations: 45,
            type: "journal",
            impact: "high"
        },
        {
            year: 2021,
            title: "Simultaneous Lightning Observation",
            journal: "Journal of Atmospheric Science",
            category: "Radar Meteorology",
            citations: 32,
            type: "journal",
            impact: "medium"
        },
        {
            year: 2023,
            title: "Radar Cookbook",
            journal: "Open Radar Science",
            category: "Open Science",
            citations: 78,
            type: "publication",
            impact: "high"
        },
        {
            year: 2023,
            title: "Scientific Data Workshop AtmosCOL",
            journal: "Conference Proceedings",
            category: "Open Science",
            citations: 23,
            type: "conference",
            impact: "medium"
        },
        {
            year: 2024,
            title: "Droplet Size Distribution Neural Network",
            journal: "Machine Learning in Atmospheric Science",
            category: "Deep Learning",
            citations: 56,
            type: "journal",
            impact: "high"
        },
        {
            year: 2024,
            title: "ERAD Open Radar Science Short Course",
            journal: "Educational Resource",
            category: "Open Science",
            citations: 34,
            type: "conference",
            impact: "medium"
        },
        {
            year: 2024,
            title: "Raw2Zarr Python Package",
            journal: "Journal of Open Source Software",
            category: "Open Science",
            citations: 67,
            type: "software",
            impact: "high"
        }
    ],
    
    metrics: {
        totalPublications: 28,
        totalCitations: 335,
        hIndex: 12,
        datasetDownloads: 15420,
        githubStars: 247,
        githubForks: 89,
        collaboratingCountries: 15
    },
    
    datasetUsage: [
        { country: "United States", downloads: 4250, institutions: 12, lat: 39.8283, lng: -98.5795 },
        { country: "Colombia", downloads: 3180, institutions: 8, lat: 4.5709, lng: -74.2973 },
        { country: "Germany", downloads: 2890, institutions: 6, lat: 51.1657, lng: 10.4515 },
        { country: "United Kingdom", downloads: 2340, institutions: 5, lat: 55.3781, lng: -3.4360 },
        { country: "France", downloads: 1920, institutions: 4, lat: 46.2276, lng: 2.2137 },
        { country: "Japan", downloads: 1680, institutions: 7, lat: 36.2048, lng: 138.2529 },
        { country: "Australia", downloads: 1450, institutions: 3, lat: -25.2744, lng: 133.7751 },
        { country: "Brazil", downloads: 1320, institutions: 5, lat: -14.2350, lng: -51.9253 },
        { country: "Canada", downloads: 1180, institutions: 4, lat: 56.1304, lng: -106.3468 },
        { country: "Netherlands", downloads: 980, institutions: 2, lat: 52.1326, lng: 5.2913 },
        { country: "Spain", downloads: 840, institutions: 3, lat: 40.4637, lng: -3.7492 },
        { country: "Italy", downloads: 720, institutions: 2, lat: 41.8719, lng: 12.5674 },
        { country: "South Korea", downloads: 650, institutions: 3, lat: 35.9078, lng: 127.7669 },
        { country: "Sweden", downloads: 580, institutions: 2, lat: 60.1282, lng: 18.6435 },
        { country: "Norway", downloads: 430, institutions: 1, lat: 60.4720, lng: 8.4689 }
    ],
    
    researchAreas: {
        nodes: [
            { id: "cloud_physics", name: "Cloud Physics", group: "atmospheric", size: 45, color: "#2563eb" },
            { id: "radar_meteorology", name: "Radar Meteorology", group: "atmospheric", size: 38, color: "#2563eb" },
            { id: "deep_learning", name: "Deep Learning", group: "computational", size: 32, color: "#059669" },
            { id: "open_science", name: "Open Science", group: "methodology", size: 50, color: "#d97706" },
            { id: "fair_principles", name: "FAIR Principles", group: "methodology", size: 28, color: "#d97706" },
            { id: "python_development", name: "Python Development", group: "computational", size: 35, color: "#059669" },
            { id: "xarray", name: "Xarray", group: "tools", size: 25, color: "#7c3aed" },
            { id: "xradar", name: "xradar", group: "tools", size: 30, color: "#7c3aed" },
            { id: "zarr", name: "Zarr/ARCO", group: "tools", size: 22, color: "#7c3aed" },
            { id: "precipitation", name: "Precipitation Analysis", group: "atmospheric", size: 40, color: "#2563eb" },
            { id: "machine_learning", name: "Machine Learning", group: "computational", size: 36, color: "#059669" },
            { id: "collaborative_science", name: "Collaborative Science", group: "methodology", size: 33, color: "#d97706" }
        ],
        links: [
            { source: "cloud_physics", target: "precipitation", strength: 0.9 },
            { source: "radar_meteorology", target: "precipitation", strength: 0.8 },
            { source: "deep_learning", target: "machine_learning", strength: 0.9 },
            { source: "deep_learning", target: "precipitation", strength: 0.7 },
            { source: "open_science", target: "fair_principles", strength: 0.8 },
            { source: "open_science", target: "collaborative_science", strength: 0.7 },
            { source: "python_development", target: "xarray", strength: 0.8 },
            { source: "python_development", target: "xradar", strength: 0.9 },
            { source: "python_development", target: "zarr", strength: 0.7 },
            { source: "xarray", target: "zarr", strength: 0.6 },
            { source: "xradar", target: "radar_meteorology", strength: 0.8 },
            { source: "fair_principles", target: "zarr", strength: 0.6 },
            { source: "machine_learning", target: "cloud_physics", strength: 0.6 },
            { source: "collaborative_science", target: "python_development", strength: 0.5 }
        ]
    },
    
    workflowSteps: [
        {
            id: "raw_data",
            name: "Raw Radar Data",
            description: "Original dual-frequency precipitation radar measurements",
            position: { x: 50, y: 150 },
            type: "input",
            icon: "📡"
        },
        {
            id: "preprocessing",
            name: "Data Preprocessing",
            description: "Quality control, calibration, and initial processing",
            position: { x: 200, y: 150 },
            type: "process",
            icon: "⚙️"
        },
        {
            id: "ml_processing",
            name: "ML Processing",
            description: "Deep learning models (CGAN, PINNs) for enhanced retrievals",
            position: { x: 350, y: 100 },
            type: "process",
            icon: "🧠"
        },
        {
            id: "fair_implementation",
            name: "FAIR Implementation",
            description: "Metadata standardization and documentation",
            position: { x: 350, y: 200 },
            type: "process",
            icon: "📋"
        },
        {
            id: "arco_datasets",
            name: "ARCO Datasets",
            description: "Analysis-Ready Cloud-Optimized data products",
            position: { x: 500, y: 150 },
            type: "output",
            icon: "☁️"
        },
        {
            id: "community_access",
            name: "Community Access",
            description: "Open access through cloud platforms and APIs",
            position: { x: 650, y: 150 },
            type: "outcome",
            icon: "🌐"
        }
    ]
};

// Color schemes
const colorSchemes = {
    primary: "#1e3a5f",
    secondary: "#2563eb",
    accent: "#059669",
    categories: {
        "Cloud Physics": "#2563eb",
        "Radar Meteorology": "#3b82f6",
        "Open Science": "#059669",
        "Deep Learning": "#7c3aed",
        "Software": "#d97706"
    }
};

// Utility functions
const utils = {
    formatNumber: (num) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    getContrastColor: (hexcolor) => {
        const r = parseInt(hexcolor.slice(1, 3), 16);
        const g = parseInt(hexcolor.slice(3, 5), 16);
        const b = parseInt(hexcolor.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 155 ? '#000000' : '#ffffff';
    }
};

// Visualization Classes
class PublicationTimeline {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = d3.select(`#${containerId}`);
        this.data = researchData.publications;
        this.init();
    }
    
    init() {
        this.createLayout();
        this.setupScales();
        this.createVisualization();
        this.addInteractivity();
    }
    
    createLayout() {
        const containerElement = document.getElementById(this.containerId);
        this.width = containerElement.clientWidth - 40;
        this.height = 400;
        this.margin = { top: 40, right: 40, bottom: 60, left: 60 };
        
        this.svg = this.container
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('role', 'img')
            .attr('aria-label', 'Interactive timeline of research publications from 2021 to 2024');
        
        this.chart = this.svg.append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
            
        this.chartWidth = this.width - this.margin.left - this.margin.right;
        this.chartHeight = this.height - this.margin.top - this.margin.bottom;
    }
    
    setupScales() {
        this.xScale = d3.scaleLinear()
            .domain([2020.5, 2024.5])
            .range([0, this.chartWidth]);
            
        this.yScale = d3.scaleBand()
            .domain(this.data.map(d => d.title))
            .range([0, this.chartHeight])
            .padding(0.2);
            
        this.colorScale = d3.scaleOrdinal()
            .domain(Object.keys(colorSchemes.categories))
            .range(Object.values(colorSchemes.categories));
            
        this.sizeScale = d3.scaleSqrt()
            .domain([0, d3.max(this.data, d => d.citations)])
            .range([5, 15]);
    }
    
    createVisualization() {
        // Add axes
        const xAxis = d3.axisBottom(this.xScale)
            .tickFormat(d3.format('d'))
            .ticks(4);
            
        this.chart.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${this.chartHeight})`)
            .call(xAxis);
            
        // Add timeline line
        this.chart.append('line')
            .attr('class', 'timeline-line')
            .attr('x1', 0)
            .attr('x2', this.chartWidth)
            .attr('y1', this.chartHeight / 2)
            .attr('y2', this.chartHeight / 2)
            .style('stroke', '#e5e7eb')
            .style('stroke-width', 2);
        
        // Create publication groups
        const publicationGroups = this.chart.selectAll('.publication-group')
            .data(this.data)
            .enter()
            .append('g')
            .attr('class', 'publication-group')
            .attr('transform', d => `translate(${this.xScale(d.year)}, ${this.yScale(d.title)})`);
        
        // Add circles for publications
        publicationGroups.append('circle')
            .attr('class', 'publication-circle')
            .attr('r', d => this.sizeScale(d.citations))
            .attr('cy', this.yScale.bandwidth() / 2)
            .style('fill', d => this.colorScale(d.category))
            .style('stroke', '#ffffff')
            .style('stroke-width', 2)
            .style('cursor', 'pointer');
        
        // Add publication labels
        publicationGroups.append('text')
            .attr('class', 'publication-label')
            .attr('x', 20)
            .attr('y', this.yScale.bandwidth() / 2)
            .attr('dy', '0.35em')
            .style('font-size', '12px')
            .style('fill', colorSchemes.primary)
            .text(d => d.title.length > 40 ? d.title.substring(0, 40) + '...' : d.title);
        
        this.publicationGroups = publicationGroups;
    }
    
    addInteractivity() {
        // Create tooltip
        const tooltip = d3.select('body')
            .append('div')
            .attr('class', 'visualization-tooltip')
            .style('opacity', 0)
            .style('position', 'absolute')
            .style('background', 'rgba(0, 0, 0, 0.9)')
            .style('color', 'white')
            .style('padding', '12px')
            .style('border-radius', '6px')
            .style('font-size', '14px')
            .style('pointer-events', 'none')
            .style('z-index', 1000);
        
        this.publicationGroups
            .on('mouseover', (event, d) => {
                d3.select(event.currentTarget)
                    .select('.publication-circle')
                    .transition()
                    .duration(200)
                    .attr('r', this.sizeScale(d.citations) * 1.3)
                    .style('opacity', 0.8);
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 1);
                    
                tooltip.html(`
                    <strong>${d.title}</strong><br/>
                    <em>${d.journal}</em><br/>
                    Year: ${d.year}<br/>
                    Category: ${d.category}<br/>
                    Citations: ${d.citations}<br/>
                    Type: ${d.type}
                `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
            })
            .on('mouseout', (event, d) => {
                d3.select(event.currentTarget)
                    .select('.publication-circle')
                    .transition()
                    .duration(200)
                    .attr('r', this.sizeScale(d.citations))
                    .style('opacity', 1);
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0);
            });
        
        // Add legend
        this.addLegend();
    }
    
    addLegend() {
        const legend = this.svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${this.width - 150}, 20)`);
        
        const categories = [...new Set(this.data.map(d => d.category))];
        
        const legendItems = legend.selectAll('.legend-item')
            .data(categories)
            .enter()
            .append('g')
            .attr('class', 'legend-item')
            .attr('transform', (d, i) => `translate(0, ${i * 25})`);
        
        legendItems.append('circle')
            .attr('r', 8)
            .style('fill', d => this.colorScale(d));
        
        legendItems.append('text')
            .attr('x', 15)
            .attr('dy', '0.35em')
            .style('font-size', '12px')
            .style('fill', colorSchemes.primary)
            .text(d => d);
    }
}

class ResearchImpactDashboard {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = d3.select(`#${containerId}`);
        this.data = researchData.metrics;
        this.init();
    }
    
    init() {
        this.createLayout();
        this.createMetricCards();
        this.createCharts();
    }
    
    createLayout() {
        this.container.append('div')
            .attr('class', 'dashboard-grid')
            .style('display', 'grid')
            .style('grid-template-columns', 'repeat(auto-fit, minmax(250px, 1fr))')
            .style('gap', '20px')
            .style('margin-bottom', '30px');
    }
    
    createMetricCards() {
        const metricsData = [
            { label: 'Total Publications', value: this.data.totalPublications, icon: '📄', color: colorSchemes.secondary },
            { label: 'Total Citations', value: this.data.totalCitations, icon: '📊', color: colorSchemes.accent },
            { label: 'H-Index', value: this.data.hIndex, icon: '🎯', color: colorSchemes.primary },
            { label: 'Dataset Downloads', value: utils.formatNumber(this.data.datasetDownloads), icon: '⬇️', color: '#d97706' },
            { label: 'GitHub Stars', value: this.data.githubStars, icon: '⭐', color: '#7c3aed' },
            { label: 'Collaborating Countries', value: this.data.collaboratingCountries, icon: '🌍', color: '#059669' }
        ];
        
        const dashboardGrid = this.container.select('.dashboard-grid');
        
        const cards = dashboardGrid.selectAll('.metric-card')
            .data(metricsData)
            .enter()
            .append('div')
            .attr('class', 'metric-card')
            .style('background', 'white')
            .style('border-radius', '12px')
            .style('padding', '20px')
            .style('box-shadow', '0 4px 6px -1px rgba(0, 0, 0, 0.1)')
            .style('transition', 'transform 0.3s ease, box-shadow 0.3s ease')
            .style('cursor', 'pointer');
        
        cards.append('div')
            .style('display', 'flex')
            .style('align-items', 'center')
            .style('margin-bottom', '10px')
            .each(function(d) {
                d3.select(this).append('span')
                    .style('font-size', '24px')
                    .style('margin-right', '10px')
                    .text(d.icon);
                
                d3.select(this).append('h3')
                    .style('margin', '0')
                    .style('color', d.color)
                    .style('font-size', '14px')
                    .style('font-weight', '600')
                    .text(d.label);
            });
        
        cards.append('div')
            .style('font-size', '32px')
            .style('font-weight', 'bold')
            .style('color', colorSchemes.primary)
            .text(d => d.value);
        
        // Add hover effects
        cards
            .on('mouseover', function() {
                d3.select(this)
                    .style('transform', 'translateY(-4px)')
                    .style('box-shadow', '0 10px 15px -3px rgba(0, 0, 0, 0.1)');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .style('transform', 'translateY(0)')
                    .style('box-shadow', '0 4px 6px -1px rgba(0, 0, 0, 0.1)');
            });
    }
    
    createCharts() {
        // Create container for charts
        const chartsContainer = this.container.append('div')
            .attr('class', 'charts-container')
            .style('display', 'grid')
            .style('grid-template-columns', '1fr 1fr')
            .style('gap', '30px')
            .style('margin-top', '30px');
        
        // Publications by year chart
        this.createPublicationChart(chartsContainer);
        
        // Citation growth chart
        this.createCitationChart(chartsContainer);
    }
    
    createPublicationChart(container) {
        const chartContainer = container.append('div')
            .attr('class', 'chart-container')
            .style('background', 'white')
            .style('border-radius', '12px')
            .style('padding', '20px')
            .style('box-shadow', '0 4px 6px -1px rgba(0, 0, 0, 0.1)');
        
        chartContainer.append('h3')
            .style('margin', '0 0 20px 0')
            .style('color', colorSchemes.primary)
            .text('Publications by Year');
        
        const pubData = d3.rollup(researchData.publications, v => v.length, d => d.year);
        const data = Array.from(pubData, ([year, count]) => ({year, count}));
        
        const width = 300;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 40, left: 40 };
        
        const svg = chartContainer.append('svg')
            .attr('width', width)
            .attr('height', height);
        
        const x = d3.scaleBand()
            .domain(data.map(d => d.year))
            .range([margin.left, width - margin.right])
            .padding(0.2);
        
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([height - margin.bottom, margin.top]);
        
        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.year))
            .attr('width', x.bandwidth())
            .attr('y', d => y(d.count))
            .attr('height', d => y(0) - y(d.count))
            .style('fill', colorSchemes.secondary)
            .style('rx', 4);
        
        // Add axes
        svg.append('g')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x));
        
        svg.append('g')
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y));
    }
    
    createCitationChart(container) {
        const chartContainer = container.append('div')
            .attr('class', 'chart-container')
            .style('background', 'white')
            .style('border-radius', '12px')
            .style('padding', '20px')
            .style('box-shadow', '0 4px 6px -1px rgba(0, 0, 0, 0.1)');
        
        chartContainer.append('h3')
            .style('margin', '0 0 20px 0')
            .style('color', colorSchemes.primary)
            .text('Research Categories');
        
        const categoryData = d3.rollup(researchData.publications, 
            v => d3.sum(v, d => d.citations), 
            d => d.category
        );
        const data = Array.from(categoryData, ([category, citations]) => ({category, citations}));
        
        const width = 300;
        const height = 200;
        const radius = Math.min(width, height) / 2 - 20;
        
        const svg = chartContainer.append('svg')
            .attr('width', width)
            .attr('height', height);
        
        const g = svg.append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);
        
        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.category))
            .range([colorSchemes.secondary, colorSchemes.accent, '#d97706', '#7c3aed']);
        
        const pie = d3.pie()
            .value(d => d.citations);
        
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);
        
        const arcs = g.selectAll('.arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc');
        
        arcs.append('path')
            .attr('d', arc)
            .style('fill', d => color(d.data.category));
        
        arcs.append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .attr('dy', '0.35em')
            .style('text-anchor', 'middle')
            .style('font-size', '12px')
            .style('fill', 'white')
            .text(d => d.data.category.split(' ')[0]);
    }
}

class DatasetUsageMap {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = d3.select(`#${containerId}`);
        this.data = researchData.datasetUsage;
        this.init();
    }
    
    init() {
        this.createLayout();
        this.createWorldMap();
        this.addInteractivity();
    }
    
    createLayout() {
        const containerElement = document.getElementById(this.containerId);
        this.width = containerElement.clientWidth - 40;
        this.height = 500;
        
        this.svg = this.container
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('role', 'img')
            .attr('aria-label', 'World map showing dataset usage by country');
        
        this.projection = d3.geoNaturalEarth1()
            .scale(this.width / 6.5)
            .translate([this.width / 2, this.height / 2]);
        
        this.path = d3.geoPath().projection(this.projection);
    }
    
    async createWorldMap() {
        // Create simplified world map using basic shapes
        this.createSimplifiedMap();
        this.plotDataPoints();
    }
    
    createSimplifiedMap() {
        // Create a simplified background representing world continents
        const continents = [
            { name: "North America", path: "M 150 120 L 350 110 L 360 180 L 320 200 L 280 190 L 150 200 Z" },
            { name: "South America", path: "M 280 220 L 320 210 L 340 280 L 330 350 L 300 360 L 280 340 L 270 280 Z" },
            { name: "Europe", path: "M 450 100 L 550 95 L 560 140 L 520 150 L 450 145 Z" },
            { name: "Africa", path: "M 470 160 L 540 155 L 560 200 L 550 280 L 520 310 L 480 300 L 460 250 Z" },
            { name: "Asia", path: "M 570 90 L 750 85 L 780 120 L 800 160 L 750 180 L 700 170 L 650 150 L 580 140 Z" },
            { name: "Australia", path: "M 720 280 L 780 275 L 790 310 L 760 320 L 720 315 Z" }
        ];
        
        this.svg.selectAll('.continent')
            .data(continents)
            .enter()
            .append('path')
            .attr('class', 'continent')
            .attr('d', d => d.path)
            .style('fill', '#f3f4f6')
            .style('stroke', '#e5e7eb')
            .style('stroke-width', 1);
    }
    
    plotDataPoints() {
        const sizeScale = d3.scaleSqrt()
            .domain([0, d3.max(this.data, d => d.downloads)])
            .range([5, 25]);
        
        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([0, d3.max(this.data, d => d.downloads)]);
        
        const circles = this.svg.selectAll('.country-circle')
            .data(this.data)
            .enter()
            .append('circle')
            .attr('class', 'country-circle')
            .attr('cx', d => {
                const projected = this.projection([d.lng, d.lat]);
                return projected ? projected[0] : 0;
            })
            .attr('cy', d => {
                const projected = this.projection([d.lng, d.lat]);
                return projected ? projected[1] : 0;
            })
            .attr('r', d => sizeScale(d.downloads))
            .style('fill', d => colorScale(d.downloads))
            .style('stroke', '#ffffff')
            .style('stroke-width', 2)
            .style('opacity', 0.8)
            .style('cursor', 'pointer');
        
        this.circles = circles;
    }
    
    addInteractivity() {
        const tooltip = d3.select('body')
            .append('div')
            .attr('class', 'map-tooltip')
            .style('opacity', 0)
            .style('position', 'absolute')
            .style('background', 'rgba(0, 0, 0, 0.9)')
            .style('color', 'white')
            .style('padding', '12px')
            .style('border-radius', '6px')
            .style('font-size', '14px')
            .style('pointer-events', 'none')
            .style('z-index', 1000);
        
        this.circles
            .on('mouseover', (event, d) => {
                d3.select(event.currentTarget)
                    .transition()
                    .duration(200)
                    .style('opacity', 1)
                    .attr('r', function() {
                        return +d3.select(this).attr('r') * 1.2;
                    });
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 1);
                    
                tooltip.html(`
                    <strong>${d.country}</strong><br/>
                    Downloads: ${d.downloads.toLocaleString()}<br/>
                    Institutions: ${d.institutions}<br/>
                    Usage Rank: ${researchData.datasetUsage.indexOf(d) + 1}
                `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
            })
            .on('mouseout', (event, d) => {
                d3.select(event.currentTarget)
                    .transition()
                    .duration(200)
                    .style('opacity', 0.8)
                    .attr('r', function() {
                        return +d3.select(this).attr('r') / 1.2;
                    });
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0);
            });
        
        // Add legend
        this.addMapLegend();
    }
    
    addMapLegend() {
        const legend = this.svg.append('g')
            .attr('class', 'map-legend')
            .attr('transform', `translate(20, ${this.height - 120})`);
        
        legend.append('rect')
            .attr('width', 150)
            .attr('height', 100)
            .style('fill', 'rgba(255, 255, 255, 0.9)')
            .style('stroke', '#e5e7eb')
            .style('rx', 6);
        
        legend.append('text')
            .attr('x', 10)
            .attr('y', 20)
            .style('font-weight', 'bold')
            .style('font-size', '14px')
            .style('fill', colorSchemes.primary)
            .text('Dataset Downloads');
        
        const legendData = [
            { size: 5, label: '< 1K', downloads: 500 },
            { size: 12, label: '1K - 3K', downloads: 2000 },
            { size: 20, label: '> 3K', downloads: 4000 }
        ];
        
        const legendItems = legend.selectAll('.legend-item')
            .data(legendData)
            .enter()
            .append('g')
            .attr('class', 'legend-item')
            .attr('transform', (d, i) => `translate(10, ${35 + i * 20})`);
        
        legendItems.append('circle')
            .attr('r', d => d.size)
            .attr('cx', 10)
            .style('fill', '#2563eb')
            .style('opacity', 0.7);
        
        legendItems.append('text')
            .attr('x', 25)
            .attr('dy', '0.35em')
            .style('font-size', '12px')
            .style('fill', colorSchemes.primary)
            .text(d => d.label);
    }
}

class ResearchNetworkGraph {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = d3.select(`#${containerId}`);
        this.data = researchData.researchAreas;
        this.init();
    }
    
    init() {
        this.createLayout();
        this.setupSimulation();
        this.createVisualization();
        this.addInteractivity();
    }
    
    createLayout() {
        const containerElement = document.getElementById(this.containerId);
        this.width = containerElement.clientWidth - 40;
        this.height = 500;
        
        this.svg = this.container
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('role', 'img')
            .attr('aria-label', 'Network diagram showing research area connections');
        
        this.chart = this.svg.append('g');
    }
    
    setupSimulation() {
        this.simulation = d3.forceSimulation(this.data.nodes)
            .force('link', d3.forceLink(this.data.links).id(d => d.id).distance(80))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(this.width / 2, this.height / 2))
            .force('collision', d3.forceCollide().radius(d => d.size + 5));
    }
    
    createVisualization() {
        // Create links
        this.links = this.chart.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(this.data.links)
            .enter()
            .append('line')
            .attr('class', 'link')
            .style('stroke', '#e5e7eb')
            .style('stroke-opacity', 0.6)
            .style('stroke-width', d => Math.sqrt(d.strength * 5));
        
        // Create node groups
        this.nodeGroups = this.chart.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(this.data.nodes)
            .enter()
            .append('g')
            .attr('class', 'node-group')
            .style('cursor', 'pointer');
        
        // Add circles for nodes
        this.nodeGroups.append('circle')
            .attr('class', 'node')
            .attr('r', d => d.size / 2)
            .style('fill', d => d.color)
            .style('stroke', '#ffffff')
            .style('stroke-width', 3);
        
        // Add labels
        this.nodeGroups.append('text')
            .attr('class', 'node-label')
            .attr('dy', '0.35em')
            .style('text-anchor', 'middle')
            .style('font-size', '12px')
            .style('font-weight', '600')
            .style('fill', 'white')
            .style('pointer-events', 'none')
            .text(d => d.name.split(' ')[0]);
        
        // Add drag behavior
        this.nodeGroups.call(d3.drag()
            .on('start', (event, d) => {
                if (!event.active) this.simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on('drag', (event, d) => {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on('end', (event, d) => {
                if (!event.active) this.simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }));
    }
    
    addInteractivity() {
        const tooltip = d3.select('body')
            .append('div')
            .attr('class', 'network-tooltip')
            .style('opacity', 0)
            .style('position', 'absolute')
            .style('background', 'rgba(0, 0, 0, 0.9)')
            .style('color', 'white')
            .style('padding', '12px')
            .style('border-radius', '6px')
            .style('font-size', '14px')
            .style('pointer-events', 'none')
            .style('z-index', 1000);
        
        this.nodeGroups
            .on('mouseover', (event, d) => {
                // Highlight connected nodes and links
                this.highlightConnections(d);
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 1);
                    
                tooltip.html(`
                    <strong>${d.name}</strong><br/>
                    Group: ${d.group}<br/>
                    Impact Score: ${d.size}<br/>
                    Connected Areas: ${this.getConnectedNodes(d).length}
                `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
            })
            .on('mouseout', (event, d) => {
                this.resetHighlight();
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0);
            });
        
        // Update positions on simulation tick
        this.simulation.on('tick', () => {
            this.links
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            
            this.nodeGroups
                .attr('transform', d => `translate(${d.x}, ${d.y})`);
        });
        
        // Add legend
        this.addNetworkLegend();
    }
    
    highlightConnections(selectedNode) {
        const connectedNodes = this.getConnectedNodes(selectedNode);
        const connectedIds = new Set([selectedNode.id, ...connectedNodes.map(d => d.id)]);
        
        // Fade unconnected nodes
        this.nodeGroups.style('opacity', d => connectedIds.has(d.id) ? 1 : 0.3);
        
        // Highlight connected links
        this.links.style('opacity', d => 
            d.source.id === selectedNode.id || d.target.id === selectedNode.id ? 1 : 0.1
        );
    }
    
    resetHighlight() {
        this.nodeGroups.style('opacity', 1);
        this.links.style('opacity', 0.6);
    }
    
    getConnectedNodes(node) {
        return this.data.links
            .filter(link => link.source.id === node.id || link.target.id === node.id)
            .map(link => link.source.id === node.id ? link.target : link.source);
    }
    
    addNetworkLegend() {
        const legend = this.svg.append('g')
            .attr('class', 'network-legend')
            .attr('transform', `translate(20, 20)`);
        
        const groups = [...new Set(this.data.nodes.map(d => d.group))];
        const groupColors = {
            'atmospheric': '#2563eb',
            'computational': '#059669',
            'methodology': '#d97706',
            'tools': '#7c3aed'
        };
        
        legend.append('rect')
            .attr('width', 200)
            .attr('height', groups.length * 25 + 30)
            .style('fill', 'rgba(255, 255, 255, 0.9)')
            .style('stroke', '#e5e7eb')
            .style('rx', 6);
        
        legend.append('text')
            .attr('x', 10)
            .attr('y', 20)
            .style('font-weight', 'bold')
            .style('font-size', '14px')
            .style('fill', colorSchemes.primary)
            .text('Research Groups');
        
        const legendItems = legend.selectAll('.legend-item')
            .data(groups)
            .enter()
            .append('g')
            .attr('class', 'legend-item')
            .attr('transform', (d, i) => `translate(10, ${35 + i * 25})`);
        
        legendItems.append('circle')
            .attr('r', 8)
            .attr('cx', 10)
            .style('fill', d => groupColors[d]);
        
        legendItems.append('text')
            .attr('x', 25)
            .attr('dy', '0.35em')
            .style('font-size', '12px')
            .style('fill', colorSchemes.primary)
            .text(d => d.charAt(0).toUpperCase() + d.slice(1));
    }
}

class WorkflowVisualization {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = d3.select(`#${containerId}`);
        this.data = researchData.workflowSteps;
        this.init();
    }
    
    init() {
        this.createLayout();
        this.createWorkflow();
        this.addInteractivity();
    }
    
    createLayout() {
        const containerElement = document.getElementById(this.containerId);
        this.width = containerElement.clientWidth - 40;
        this.height = 350;
        
        this.svg = this.container
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('role', 'img')
            .attr('aria-label', 'Cloud computing workflow diagram showing data processing pipeline');
    }
    
    createWorkflow() {
        // Create connections between steps
        this.createConnections();
        
        // Create workflow steps
        this.createSteps();
    }
    
    createConnections() {
        const connections = [
            { from: this.data[0], to: this.data[1] },
            { from: this.data[1], to: this.data[2] },
            { from: this.data[1], to: this.data[3] },
            { from: this.data[2], to: this.data[4] },
            { from: this.data[3], to: this.data[4] },
            { from: this.data[4], to: this.data[5] }
        ];
        
        this.svg.selectAll('.workflow-connection')
            .data(connections)
            .enter()
            .append('line')
            .attr('class', 'workflow-connection')
            .attr('x1', d => d.from.position.x)
            .attr('y1', d => d.from.position.y)
            .attr('x2', d => d.to.position.x)
            .attr('y2', d => d.to.position.y)
            .style('stroke', '#e5e7eb')
            .style('stroke-width', 3)
            .style('marker-end', 'url(#arrowhead)');
        
        // Add arrow marker
        this.svg.append('defs')
            .append('marker')
            .attr('id', 'arrowhead')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 8)
            .attr('refY', 0)
            .attr('markerWidth', 4)
            .attr('markerHeight', 4)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .style('fill', '#9ca3af');
    }
    
    createSteps() {
        const stepGroups = this.svg.selectAll('.workflow-step')
            .data(this.data)
            .enter()
            .append('g')
            .attr('class', 'workflow-step')
            .attr('transform', d => `translate(${d.position.x}, ${d.position.y})`)
            .style('cursor', 'pointer');
        
        // Add step circles with different colors based on type
        const typeColors = {
            'input': colorSchemes.secondary,
            'process': colorSchemes.accent,
            'output': '#d97706',
            'outcome': '#7c3aed'
        };
        
        stepGroups.append('circle')
            .attr('class', 'step-circle')
            .attr('r', 30)
            .style('fill', d => typeColors[d.type])
            .style('stroke', '#ffffff')
            .style('stroke-width', 3);
        
        // Add icons
        stepGroups.append('text')
            .attr('class', 'step-icon')
            .attr('dy', '0.35em')
            .style('text-anchor', 'middle')
            .style('font-size', '20px')
            .text(d => d.icon);
        
        // Add step labels
        stepGroups.append('text')
            .attr('class', 'step-label')
            .attr('y', 45)
            .attr('dy', '0.35em')
            .style('text-anchor', 'middle')
            .style('font-size', '12px')
            .style('font-weight', '600')
            .style('fill', colorSchemes.primary)
            .text(d => d.name);
        
        this.stepGroups = stepGroups;
    }
    
    addInteractivity() {
        const tooltip = d3.select('body')
            .append('div')
            .attr('class', 'workflow-tooltip')
            .style('opacity', 0)
            .style('position', 'absolute')
            .style('background', 'rgba(0, 0, 0, 0.9)')
            .style('color', 'white')
            .style('padding', '12px')
            .style('border-radius', '6px')
            .style('font-size', '14px')
            .style('pointer-events', 'none')
            .style('z-index', 1000)
            .style('max-width', '250px');
        
        this.stepGroups
            .on('mouseover', (event, d) => {
                d3.select(event.currentTarget)
                    .select('.step-circle')
                    .transition()
                    .duration(200)
                    .attr('r', 35)
                    .style('opacity', 0.9);
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 1);
                    
                tooltip.html(`
                    <strong>${d.name}</strong><br/>
                    <em>${d.description}</em><br/>
                    Type: ${d.type.charAt(0).toUpperCase() + d.type.slice(1)}
                `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
            })
            .on('mouseout', (event, d) => {
                d3.select(event.currentTarget)
                    .select('.step-circle')
                    .transition()
                    .duration(200)
                    .attr('r', 30)
                    .style('opacity', 1);
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0);
            });
        
        // Add workflow legend
        this.addWorkflowLegend();
    }
    
    addWorkflowLegend() {
        const legend = this.svg.append('g')
            .attr('class', 'workflow-legend')
            .attr('transform', `translate(20, 20)`);
        
        const stepTypes = [
            { type: 'input', label: 'Data Input', color: colorSchemes.secondary },
            { type: 'process', label: 'Processing', color: colorSchemes.accent },
            { type: 'output', label: 'Data Output', color: '#d97706' },
            { type: 'outcome', label: 'Community Impact', color: '#7c3aed' }
        ];
        
        legend.append('rect')
            .attr('width', 180)
            .attr('height', stepTypes.length * 25 + 30)
            .style('fill', 'rgba(255, 255, 255, 0.9)')
            .style('stroke', '#e5e7eb')
            .style('rx', 6);
        
        legend.append('text')
            .attr('x', 10)
            .attr('y', 20)
            .style('font-weight', 'bold')
            .style('font-size', '14px')
            .style('fill', colorSchemes.primary)
            .text('Workflow Steps');
        
        const legendItems = legend.selectAll('.legend-item')
            .data(stepTypes)
            .enter()
            .append('g')
            .attr('class', 'legend-item')
            .attr('transform', (d, i) => `translate(10, ${35 + i * 25})`);
        
        legendItems.append('circle')
            .attr('r', 8)
            .attr('cx', 10)
            .style('fill', d => d.color);
        
        legendItems.append('text')
            .attr('x', 25)
            .attr('dy', '0.35em')
            .style('font-size', '12px')
            .style('fill', colorSchemes.primary)
            .text(d => d.label);
    }
}

// Responsive utility
const handleResize = utils.debounce(() => {
    // Re-initialize visualizations on window resize
    const visualizations = document.querySelectorAll('.visualization-container');
    visualizations.forEach(container => {
        if (container.innerHTML) {
            const id = container.id;
            container.innerHTML = '';
            // Re-create visualization based on ID
            initializeVisualization(id);
        }
    });
}, 250);

// Initialize specific visualization
function initializeVisualization(containerId) {
    switch (containerId) {
        case 'publication-timeline':
            new PublicationTimeline(containerId);
            break;
        case 'research-dashboard':
            new ResearchImpactDashboard(containerId);
            break;
        case 'dataset-map':
            new DatasetUsageMap(containerId);
            break;
        case 'research-network':
            new ResearchNetworkGraph(containerId);
            break;
        case 'workflow-diagram':
            new WorkflowVisualization(containerId);
            break;
    }
}

// Initialize all visualizations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load D3.js if not already loaded
    if (typeof d3 === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://d3js.org/d3.v7.min.js';
        script.onload = () => {
            // Initialize visualizations after D3 loads
            initializeAllVisualizations();
        };
        document.head.appendChild(script);
    } else {
        initializeAllVisualizations();
    }
});

function initializeAllVisualizations() {
    const visualizationContainers = [
        'publication-timeline',
        'research-dashboard', 
        'dataset-map',
        'research-network',
        'workflow-diagram'
    ];
    
    visualizationContainers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            initializeVisualization(containerId);
        }
    });
}

// Add resize listener
window.addEventListener('resize', handleResize);

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PublicationTimeline,
        ResearchImpactDashboard,
        DatasetUsageMap,
        ResearchNetworkGraph,
        WorkflowVisualization,
        initializeVisualization,
        researchData
    };
}