/**
 * Main JavaScript for Alfonso Ladino-Rincon's Academic Website
 * Handles navigation, smooth scrolling, and responsive interactions
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMobileNavigation();
        initSmoothScrolling();
        initActiveNavigation();
        initScrollToTop();
        initImageLazyLoading();
        initFormValidation();
        initOpenScienceInteractivity();
        initDatasetMetrics();
        initFAIRIndicators();
    });
    
    /**
     * Mobile Navigation Toggle
     */
    function initMobileNavigation() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', function() {
                const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
                
                // Toggle ARIA state
                mobileToggle.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle navigation visibility
                navMenu.classList.toggle('active');
                
                // Toggle body scroll lock when menu is open on mobile
                if (window.innerWidth < 768) {
                    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
                }
            });
            
            // Close mobile menu when clicking on nav links
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth < 768) {
                        navMenu.classList.remove('active');
                        mobileToggle.setAttribute('aria-expanded', 'false');
                        document.body.style.overflow = 'auto';
                    }
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (window.innerWidth < 768 && 
                    navMenu.classList.contains('active') &&
                    !navMenu.contains(event.target) &&
                    !mobileToggle.contains(event.target)) {
                    navMenu.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768) {
                    navMenu.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }
    
    /**
     * Smooth Scrolling for Anchor Links
     */
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = link.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Active Navigation Highlighting
     */
    function initActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        if (sections.length === 0) return;
        
        function updateActiveNav() {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        // Update on scroll
        window.addEventListener('scroll', throttle(updateActiveNav, 100));
    }
    
    /**
     * Scroll to Top Functionality
     */
    function initScrollToTop() {
        // Create scroll to top button
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollButton.className = 'scroll-to-top';
        scrollButton.setAttribute('aria-label', 'Scroll to top');
        scrollButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--color-secondary);
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `;
        
        document.body.appendChild(scrollButton);
        
        // Show/hide button based on scroll position
        function toggleScrollButton() {
            if (window.scrollY > 300) {
                scrollButton.style.opacity = '1';
                scrollButton.style.visibility = 'visible';
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.visibility = 'hidden';
            }
        }
        
        // Scroll to top when clicked
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effects
        scrollButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.backgroundColor = 'var(--color-secondary-dark)';
        });
        
        scrollButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.backgroundColor = 'var(--color-secondary)';
        });
        
        window.addEventListener('scroll', throttle(toggleScrollButton, 100));
    }
    
    /**
     * Image Lazy Loading
     */
    function initImageLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }
    
    /**
     * Form Validation (for contact forms, etc.)
     */
    function initFormValidation() {
        const forms = document.querySelectorAll('form[data-validate]');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                        
                        // Show error message
                        let errorMsg = field.parentNode.querySelector('.error-message');
                        if (!errorMsg) {
                            errorMsg = document.createElement('span');
                            errorMsg.className = 'error-message';
                            errorMsg.style.cssText = 'color: var(--color-error); font-size: 0.875rem; margin-top: 0.25rem;';
                            field.parentNode.appendChild(errorMsg);
                        }
                        errorMsg.textContent = 'This field is required.';
                    } else {
                        field.classList.remove('error');
                        const errorMsg = field.parentNode.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.remove();
                        }
                    }
                });
                
                // Email validation
                const emailFields = form.querySelectorAll('input[type="email"]');
                emailFields.forEach(field => {
                    if (field.value && !isValidEmail(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                        
                        let errorMsg = field.parentNode.querySelector('.error-message');
                        if (!errorMsg) {
                            errorMsg = document.createElement('span');
                            errorMsg.className = 'error-message';
                            errorMsg.style.cssText = 'color: var(--color-error); font-size: 0.875rem; margin-top: 0.25rem;';
                            field.parentNode.appendChild(errorMsg);
                        }
                        errorMsg.textContent = 'Please enter a valid email address.';
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                }
            });
            
            // Remove error styling on input
            const fields = form.querySelectorAll('input, textarea, select');
            fields.forEach(field => {
                field.addEventListener('input', function() {
                    this.classList.remove('error');
                    const errorMsg = this.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                });
            });
        });
    }
    
    /**
     * Utility Functions
     */
    
    // Throttle function to limit function calls
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Initialize analytics (if needed)
    function initAnalytics() {
        // Add Google Analytics or other tracking code here
        // Example:
        // gtag('config', 'GA_MEASUREMENT_ID');
    }
    
    // Performance optimization: Preload critical resources
    function preloadCriticalResources() {
        const criticalImages = document.querySelectorAll('img[data-preload]');
        criticalImages.forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src || img.dataset.src;
            document.head.appendChild(link);
        });
    }
    
    // Initialize additional features
    preloadCriticalResources();
    
    /**
     * Open Science Interactivity
     */
    function initOpenScienceInteractivity() {
        // Animate counters on the open science page
        animateCounters();
        
        // Initialize interactive FAIR indicators
        initInteractiveFAIR();
        
        // Setup dataset showcase interactions
        initDatasetShowcase();
        
        // Initialize impact metrics animations
        initImpactMetrics();
    }
    
    /**
     * Animate numerical counters
     */
    function animateCounters() {
        const counters = document.querySelectorAll('.metric-number, .stat-value, .counter');
        
        if ('IntersectionObserver' in window) {
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            counters.forEach(counter => {
                counterObserver.observe(counter);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            counters.forEach(animateCounter);
        }
    }
    
    function animateCounter(element) {
        const text = element.textContent;
        const number = parseFloat(text.replace(/[^0-9.]/g, ''));
        
        if (isNaN(number)) return;
        
        const suffix = text.replace(/[0-9.,]/g, '');
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = number / steps;
        const stepDuration = duration / steps;
        
        let current = 0;
        element.textContent = '0' + suffix;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            // Format number based on size
            let displayValue;
            if (number >= 1000) {
                displayValue = Math.round(current).toLocaleString();
            } else if (number >= 100) {
                displayValue = Math.round(current);
            } else {
                displayValue = current.toFixed(1);
            }
            
            element.textContent = displayValue + suffix;
        }, stepDuration);
    }
    
    /**
     * Interactive FAIR Indicators
     */
    function initInteractiveFAIR() {
        const fairItems = document.querySelectorAll('.fair-item, .indicator');
        
        fairItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                // Add hover animation
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
                
                // Show tooltip if available
                const tooltip = this.querySelector('.fair-tooltip');
                if (tooltip) {
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                
                // Hide tooltip
                const tooltip = this.querySelector('.fair-tooltip');
                if (tooltip) {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
                }
            });
            
            // Click to expand details
            item.addEventListener('click', function() {
                const details = this.querySelector('.fair-details');
                if (details) {
                    details.classList.toggle('expanded');
                }
            });
        });
    }
    
    /**
     * Dataset Showcase Interactions
     */
    function initDatasetShowcase() {
        const datasetCards = document.querySelectorAll('.dataset-card, .contribution-card');
        
        datasetCards.forEach(card => {
            // Add hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                this.style.boxShadow = '0 8px 25px rgba(42, 82, 152, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
            });
            
            // Progress bar animations for metrics
            const progressBars = card.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                animateProgressBar(bar);
            });
        });
    }
    
    function animateProgressBar(progressBar) {
        const percentage = progressBar.dataset.percentage || 100;
        const fill = progressBar.querySelector('.progress-fill');
        
        if (fill && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            fill.style.width = percentage + '%';
                            fill.style.transition = 'width 1.5s ease-out';
                        }, 200);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(progressBar);
        }
    }
    
    /**
     * Impact Metrics Animations
     */
    function initImpactMetrics() {
        const metricCards = document.querySelectorAll('.metric-card, .impact-metric');
        
        metricCards.forEach((card, index) => {
            // Staggered animation entrance
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                            }, index * 100); // Stagger by 100ms
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                // Set initial state
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                observer.observe(card);
            }
            
            // Interactive hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    /**
     * Dataset Metrics Functionality
     */
    function initDatasetMetrics() {
        // Copy citation functionality
        initCitationCopy();
        
        // Download tracking
        initDownloadTracking();
        
        // Share functionality
        initSocialSharing();
        
        // Interactive statistics
        initInteractiveStats();
    }
    
    function initCitationCopy() {
        const copyButtons = document.querySelectorAll('.copy-citation, .copy-btn');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const citation = this.dataset.citation || 
                               this.parentNode.querySelector('pre, code')?.textContent;
                
                if (citation && navigator.clipboard) {
                    navigator.clipboard.writeText(citation).then(() => {
                        showToast('Citation copied to clipboard!', 'success');
                    }).catch(() => {
                        fallbackCopyText(citation);
                    });
                } else if (citation) {
                    fallbackCopyText(citation);
                }
            });
        });
    }
    
    function fallbackCopyText(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showToast('Citation copied to clipboard!', 'success');
        } catch (err) {
            showToast('Failed to copy citation', 'error');
        }
        
        document.body.removeChild(textArea);
    }
    
    function initDownloadTracking() {
        const downloadLinks = document.querySelectorAll('a[href*="download"], a[href*="zenodo"], .btn-primary');
        
        downloadLinks.forEach(link => {
            link.addEventListener('click', function() {
                const datasetName = this.closest('.dataset-card')?.querySelector('h4')?.textContent ||
                                  this.closest('article')?.querySelector('h1')?.textContent ||
                                  'Unknown Dataset';
                
                // Track download (integrate with analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'dataset_download', {
                        'dataset_name': datasetName,
                        'download_url': this.href
                    });
                }
                
                // Update download counter (if available)
                updateDownloadCounter(datasetName);
            });
        });
    }
    
    function updateDownloadCounter(datasetName) {
        // Simulate download counter update
        const downloadCounters = document.querySelectorAll('.download-count, [data-metric="downloads"]');
        
        downloadCounters.forEach(counter => {
            const currentCount = parseInt(counter.textContent.replace(/[^0-9]/g, '')) || 0;
            const newCount = currentCount + 1;
            counter.textContent = newCount.toLocaleString() + ' Downloads';
        });
    }
    
    function initSocialSharing() {
        const shareButtons = document.querySelectorAll('.share-button, .social-share');
        
        shareButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const platform = this.dataset.platform || 
                               this.className.match(/twitter|linkedin|facebook/)?.[0];
                
                if (platform && platform !== 'email') {
                    e.preventDefault();
                    
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent(document.title);
                    
                    let shareUrl;
                    switch (platform) {
                        case 'twitter':
                            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                            break;
                        case 'linkedin':
                            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                            break;
                        case 'facebook':
                            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                            break;
                    }
                    
                    if (shareUrl) {
                        window.open(shareUrl, 'share-window', 'width=600,height=400');
                    }
                }
            });
        });
    }
    
    function initInteractiveStats() {
        // Create interactive charts for dataset statistics
        const statsContainers = document.querySelectorAll('.dataset-stats, .usage-stats');
        
        statsContainers.forEach(container => {
            const stats = extractStatsData(container);
            if (stats.length > 0) {
                createStatsVisualization(container, stats);
            }
        });
    }
    
    function extractStatsData(container) {
        const statItems = container.querySelectorAll('.stat-item, .metric');
        const data = [];
        
        statItems.forEach(item => {
            const label = item.querySelector('.stat-label, .metric-label')?.textContent;
            const value = item.querySelector('.stat-value, .metric-number')?.textContent;
            
            if (label && value) {
                const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
                if (!isNaN(numericValue)) {
                    data.push({ label, value: numericValue });
                }
            }
        });
        
        return data;
    }
    
    function createStatsVisualization(container, data) {
        // Simple bar chart visualization
        const chartContainer = document.createElement('div');
        chartContainer.className = 'stats-chart';
        chartContainer.style.cssText = `
            margin: 1rem 0;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px;
        `;
        
        const maxValue = Math.max(...data.map(d => d.value));
        
        data.forEach(stat => {
            const barContainer = document.createElement('div');
            barContainer.style.cssText = `
                display: flex;
                align-items: center;
                margin: 0.5rem 0;
                font-size: 0.875rem;
            `;
            
            const label = document.createElement('span');
            label.textContent = stat.label;
            label.style.cssText = `
                min-width: 120px;
                margin-right: 1rem;
            `;
            
            const barTrack = document.createElement('div');
            barTrack.style.cssText = `
                flex: 1;
                height: 20px;
                background: #e9ecef;
                border-radius: 10px;
                overflow: hidden;
                position: relative;
            `;
            
            const barFill = document.createElement('div');
            const percentage = (stat.value / maxValue) * 100;
            barFill.style.cssText = `
                height: 100%;
                background: linear-gradient(90deg, #2a5298, #1e3c72);
                width: 0%;
                transition: width 1s ease-out;
                border-radius: 10px;
            `;
            
            const valueLabel = document.createElement('span');
            valueLabel.textContent = stat.value.toLocaleString();
            valueLabel.style.cssText = `
                margin-left: 1rem;
                font-weight: bold;
                color: #2a5298;
            `;
            
            barTrack.appendChild(barFill);
            barContainer.appendChild(label);
            barContainer.appendChild(barTrack);
            barContainer.appendChild(valueLabel);
            chartContainer.appendChild(barContainer);
            
            // Animate bar fill
            setTimeout(() => {
                barFill.style.width = percentage + '%';
            }, 500);
        });
        
        container.appendChild(chartContainer);
    }
    
    /**
     * FAIR Indicators Functionality
     */
    function initFAIRIndicators() {
        const fairIndicators = document.querySelectorAll('.fair-indicators, .fair-compliance');
        
        fairIndicators.forEach(container => {
            const indicators = container.querySelectorAll('.indicator, .fair-item');
            
            indicators.forEach((indicator, index) => {
                // Animate indicators on scroll
                if ('IntersectionObserver' in window) {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                setTimeout(() => {
                                    entry.target.style.opacity = '1';
                                    entry.target.style.transform = 'scale(1)';
                                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                                    
                                    // Add pulse animation for compliant indicators
                                    if (entry.target.classList.contains('compliant')) {
                                        entry.target.style.animation = 'pulse 0.5s ease-in-out';
                                    }
                                }, index * 200);
                                observer.unobserve(entry.target);
                            }
                        });
                    });
                    
                    indicator.style.opacity = '0';
                    indicator.style.transform = 'scale(0.8)';
                    observer.observe(indicator);
                }
                
                // Add interactive features
                indicator.addEventListener('click', function() {
                    showFAIRDetails(this);
                });
            });
        });
    }
    
    function showFAIRDetails(indicator) {
        const principle = indicator.textContent.trim();
        const status = indicator.classList.contains('compliant') ? 'Compliant' : 
                      indicator.classList.contains('partial') ? 'Partially Compliant' : 'Non-Compliant';
        
        const details = getFAIRPrincipleDetails(principle);
        
        showModal({
            title: `FAIR Principle: ${principle}`,
            content: `
                <div class="fair-modal-content">
                    <div class="status-badge ${status.toLowerCase().replace(' ', '-')}">${status}</div>
                    <h4>${details.name}</h4>
                    <p>${details.description}</p>
                    <h5>Implementation Details:</h5>
                    <ul>
                        ${details.implementation.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `
        });
    }
    
    function getFAIRPrincipleDetails(principle) {
        const details = {
            'F': {
                name: 'Findable',
                description: 'Data and metadata are assigned globally unique and persistent identifiers, are registered in searchable resources, and include rich metadata.',
                implementation: [
                    'DOI assignment for permanent identification',
                    'Rich metadata following CF conventions',
                    'Registration in searchable catalogs (STAC)',
                    'Controlled vocabularies and standardized terms'
                ]
            },
            'A': {
                name: 'Accessible',
                description: 'Data are retrievable by their identifier using standardized protocols, are accessible even when data are no longer available.',
                implementation: [
                    'Cloud-optimized formats (Zarr, COG)',
                    'Standard protocols (HTTPS, OPeNDAP)',
                    'Open access with clear licensing',
                    'Long-term preservation guarantees'
                ]
            },
            'I': {
                name: 'Interoperable',
                description: 'Data use formal, accessible, shared, and broadly applicable language for knowledge representation.',
                implementation: [
                    'Standard file formats (NetCDF, HDF5)',
                    'CF Convention compliance',
                    'Common coordinate systems',
                    'Standardized variable naming'
                ]
            },
            'R': {
                name: 'Reusable',
                description: 'Data are described with accurate metadata, are released with clear usage licenses, and meet domain-relevant community standards.',
                implementation: [
                    'Comprehensive documentation',
                    'Clear licensing (CC BY, CC0)',
                    'Quality control procedures',
                    'Usage examples and tutorials'
                ]
            }
        };
        
        return details[principle] || { name: 'Unknown', description: '', implementation: [] };
    }
    
    /**
     * Utility Functions for Interactive Features
     */
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    function showModal({ title, content }) {
        const modal = document.createElement('div');
        modal.className = 'fair-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${title}</h3>
                        <button class="modal-close" aria-label="Close modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        modal.querySelector('.modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.querySelector('.modal-backdrop').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    }
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        
        .modal-dialog {
            position: relative;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #e9ecef;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .status-badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        
        .status-badge.compliant {
            background: #d4edda;
            color: #155724;
        }
        
        .status-badge.partially-compliant {
            background: #fff3cd;
            color: #856404;
        }
        
        .status-badge.non-compliant {
            background: #f8d7da;
            color: #721c24;
        }
    `;
    document.head.appendChild(style);
    
})();