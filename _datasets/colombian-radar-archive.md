---
layout: dataset
title: "Colombian Weather Radar Archive"
subtitle: "Analysis-Ready Cloud-Optimized Radar Data from Colombian National Network"
date: 2024-11-01
version: "2.1.0"
size: "15.2 TB"
format: "Zarr"
license: "CC BY 4.0"
doi: "10.5281/zenodo.8543210"
permalink: /datasets/colombian-radar-archive/

# Dataset Classification
category: "Atmospheric Observations"
data_type: "Weather Radar"
processing_level: "Level 2"
quality_level: "Research Grade"

# Temporal and Spatial Coverage
temporal_coverage: "2010-01-01 to present"
spatial_coverage: "Colombia (12°N-4°S, 67°W-79°W)"
resolution: 
  temporal: "5 minutes"
  spatial: "250m × 1° (range × azimuth)"
  vertical: "500m"

# Technical Specifications
instruments: 
  - "WSR-88D C-band Doppler Radars"
  - "IDEAM Radar Network"
  - "Dual-Polarization Systems"

variables:
  - name: "DBZ"
    description: "Reflectivity"
    type: "float32"
    units: "dBZ"
    range: "-30 to 70"
  - name: "VEL"
    description: "Radial Velocity"
    type: "float32"
    units: "m/s"
    range: "-64 to 64"
  - name: "WIDTH"
    description: "Spectral Width"
    type: "float32"
    units: "m/s"
    range: "0 to 32"
  - name: "ZDR"
    description: "Differential Reflectivity"
    type: "float32"
    units: "dB"
    range: "-5 to 8"
  - name: "PHIDP"
    description: "Differential Phase"
    type: "float32"
    units: "degrees"
    range: "0 to 360"
  - name: "RHOHV"
    description: "Cross-correlation Coefficient"
    type: "float32"
    units: "dimensionless"
    range: "0 to 1"
  - name: "KDP"
    description: "Specific Differential Phase"
    type: "float32"
    units: "degrees/km"
    range: "-5 to 20"

# Access Information
download_url: "https://zenodo.org/records/8543210"
api_url: "https://api.ideam.gov.co/radar/v2"
zenodo: "https://zenodo.org/records/8543210"
github: "https://github.com/aladinor/raw2zarr"
documentation: "https://raw2zarr.readthedocs.io/datasets/colombian-archive"

# FAIR Principles Compliance
fair_principles:
  - letter: "F"
    name: "Findable"
    status: "compliant"
    description: "Persistent DOI, rich metadata with CF conventions, searchable through STAC catalog"
  - letter: "A"
    name: "Accessible"
    status: "compliant"
    description: "Open access via Zenodo, cloud-optimized Zarr format, RESTful API available"
  - letter: "I"
    name: "Interoperable"
    status: "compliant"
    description: "CF Convention compliance, standard variable names, Xarray/Zarr compatibility"
  - letter: "R"
    name: "Reusable"
    status: "compliant"
    description: "Clear CC BY 4.0 license, comprehensive documentation, quality control metadata"

# Usage Statistics
stats:
  downloads: "2,547"
  citations: "18"
  views: "8,342"
  institutions: "15"
  countries: "8"

# Related Work
related_publications:
  - "raw2zarr-package"
  - "erad-2024-fair-principles"
related_projects:
  - "raw2zarr"
related_talks:
  - "scipy-2024-fair-principles-radar"
  - "erad-2024-fair-principles-radar"

tags: ["weather radar", "colombia", "zarr", "fair principles", "cloud-optimized", "dual-polarization", "precipitation", "atmospheric science"]

# Content
description: |
  The Colombian Weather Radar Archive represents a comprehensive, analysis-ready collection of weather radar observations from Colombia's national radar network operated by IDEAM (Institute of Hydrology, Meteorology and Environmental Studies). This dataset has been converted from raw radar formats to cloud-optimized Zarr format following FAIR data principles to enhance accessibility and usability for the global research community.

  **Key Features:**
  - **Complete Coverage**: Over 14 years of continuous observations from Colombian national radar network
  - **Cloud-Optimized**: Zarr format with intelligent chunking for efficient remote access
  - **Quality Controlled**: Automated quality control with comprehensive uncertainty quantification
  - **Research Ready**: Pre-processed data suitable for immediate scientific analysis
  - **FAIR Compliant**: Full implementation of Findable, Accessible, Interoperable, and Reusable principles

methodology: |
  ### Data Collection
  
  **Radar Network Configuration**
  - **Primary Instruments**: WSR-88D C-band dual-polarization Doppler radars
  - **Network Operator**: IDEAM (Colombian National Weather Service)
  - **Observation Strategy**: Volume scans every 5 minutes with 14 elevation angles
  - **Spatial Coverage**: Complete Colombian territory with overlapping coverage in populated areas
  
  **Raw Data Characteristics**
  - **Original Format**: Proprietary IRIS/SIGMET format
  - **Data Volume**: ~500 GB/day raw data from 12 operational radars
  - **Variables**: Standard dual-polarization moments (Z, V, W, ZDR, PhiDP, RhoHV, KDP)
  - **Quality Flags**: Real-time quality control flags from radar processors

  ### Processing Workflow
  
  **Step 1: Raw Data Ingestion**
  ```python
  from raw2zarr import RadarProcessor
  
  # Initialize processor with IDEAM configuration
  processor = RadarProcessor(
      config='ideam_colombia.yaml',
      quality_control=True,
      compression_level=5
  )
  
  # Process daily volume
  processor.process_day(
      input_path='/data/raw/2024/01/01/',
      output_path='/data/zarr/2024/01/01.zarr'
  )
  ```
  
  **Step 2: Quality Control Pipeline**
  - **Range Validation**: Physical bounds checking for all variables
  - **Temporal Consistency**: Detection of unrealistic temporal changes
  - **Spatial Coherence**: Geographic consistency validation
  - **Cross-Variable Validation**: Physical relationship checks between polarimetric variables
  - **Clutter Removal**: Automated ground clutter and biological return filtering
  
  **Step 3: Metadata Enhancement**
  - **CF Convention Compliance**: Full Climate and Forecast metadata standards
  - **STAC Integration**: SpatioTemporal Asset Catalog compatibility
  - **Provenance Tracking**: Complete data lineage and processing history
  - **Uncertainty Quantification**: Per-pixel uncertainty estimates
  
  **Step 4: Cloud Optimization**
  - **Chunking Strategy**: Optimized for both time-series and spatial analysis
  - **Compression**: Blosc with level-5 compression (~70% size reduction)
  - **Indexing**: Multi-dimensional coordinate indexing for fast access
  - **Validation**: Automated testing of converted data integrity

quality: |
  ### Quality Control Framework
  
  **Automated Validation**
  - **Physical Bounds**: All variables checked against meteorologically realistic ranges
  - **Cross-Validation**: Dual-polarization relationships validated using physical constraints
  - **Temporal Continuity**: Detection and flagging of temporal discontinuities
  - **Spatial Coherence**: Geographic consistency checks using neighboring radar observations
  
  **Quality Flags**
  Each observation includes comprehensive quality indicators:
  - `quality_flag`: Overall data quality assessment (0=good, 1=questionable, 2=bad)
  - `clutter_flag`: Ground clutter contamination indicator
  - `precipitation_flag`: Precipitation/non-precipitation classification
  - `attenuation_flag`: Signal attenuation correction applied
  
  **Uncertainty Quantification**
  - **Measurement Uncertainty**: Instrument calibration and precision estimates
  - **Processing Uncertainty**: Propagated errors from quality control algorithms
  - **Gridding Uncertainty**: Spatial interpolation error estimates
  - **Temporal Uncertainty**: Time interpolation accuracy metrics
  
  **Validation Against Independent Data**
  - **Ground Truth**: Comparison with rain gauge networks
  - **Satellite Validation**: Cross-validation with GPM and CloudSat observations
  - **Model Comparison**: Evaluation against high-resolution numerical weather models
  - **Inter-radar Consistency**: Consistency checks in overlapping coverage areas

usage_notes: |
  ### Quick Start Guide
  
  **Installation Requirements**
  ```bash
  # Install required packages
  pip install xarray zarr fsspec s3fs
  pip install raw2zarr  # For specialized processing tools
  ```
  
  **Basic Data Access**
  ```python
  import xarray as xr
  import fsspec
  
  # Open remote dataset
  fs = fsspec.filesystem('https')
  ds = xr.open_zarr('https://zenodo.org/api/files/8543210/colombian_radar_2024.zarr')
  
  # Access specific time period
  jan_data = ds.sel(time=slice('2024-01-01', '2024-01-31'))
  
  # Extract reflectivity for analysis
  reflectivity = ds.DBZ.where(ds.quality_flag == 0)  # Good quality only
  ```
  
  **Advanced Analysis Examples**
  ```python
  # Precipitation rate estimation
  from raw2zarr.algorithms import zh_to_rain
  
  # Convert reflectivity to rain rate
  rain_rate = zh_to_rain(ds.DBZ, relation='marshall_palmer')
  
  # Hydrometeor classification using dual-pol
  from raw2zarr.classification import dual_pol_classifier
  
  hydrometeor_class = dual_pol_classifier(
      zh=ds.DBZ, zdr=ds.ZDR, 
      kdp=ds.KDP, rhohv=ds.RHOHV
  )
  ```
  
  ### Performance Optimization
  
  **Efficient Data Loading**
  - Use time and spatial slicing to load only required data subsets
  - Leverage Dask for parallel processing of large time series
  - Consider rechunking for specific analysis patterns
  
  **Memory Management**
  ```python
  # Process large datasets efficiently
  import dask.array as da
  
  # Load as Dask array for lazy evaluation
  reflectivity = ds.DBZ.chunk({'time': 100, 'range': 500})
  
  # Compute statistics efficiently
  monthly_mean = reflectivity.groupby('time.month').mean().compute()
  ```
  
  ### Known Limitations
  
  - **Beam Blockage**: Some radars affected by topographic beam blockage (documented in metadata)
  - **Calibration Drift**: Long-term calibration stability varies by radar (uncertainty estimates provided)
  - **Data Gaps**: Planned maintenance periods and equipment failures result in temporal gaps
  - **Range Limitations**: Effective range varies by radar site and atmospheric conditions

examples:
  - title: "Precipitation Analysis"
    description: "Extract and analyze precipitation patterns from radar reflectivity data"
    language: "python"
    code: |
      import xarray as xr
      import matplotlib.pyplot as plt
      
      # Load dataset
      ds = xr.open_zarr('path/to/colombian_radar.zarr')
      
      # Select Bogotá radar for precipitation analysis
      bogota_radar = ds.sel(radar_id='BOG')
      
      # Extract heavy precipitation events (>35 dBZ)
      heavy_precip = bogota_radar.DBZ.where(bogota_radar.DBZ > 35)
      
      # Calculate monthly precipitation frequency
      monthly_freq = (heavy_precip.count('time') / 
                     bogota_radar.time.count()) * 100
      
      # Plot seasonal precipitation patterns
      monthly_freq.groupby('time.month').mean().plot()
      plt.title('Heavy Precipitation Frequency by Month')
      plt.ylabel('Frequency (%)')
      plt.show()
    link: "https://github.com/aladinor/radar-cookbook/blob/main/precipitation_analysis.ipynb"
    
  - title: "Dual-Polarization Hydrometeor Classification"
    description: "Use dual-polarization variables to classify precipitation types"
    language: "python"
    code: |
      import numpy as np
      from raw2zarr.classification import HydrometeorClassifier
      
      # Initialize classifier
      classifier = HydrometeorClassifier()
      
      # Classify hydrometeors using dual-pol variables
      hydro_class = classifier.classify(
          zh=ds.DBZ,
          zdr=ds.ZDR,
          kdp=ds.KDP,
          rhohv=ds.RHOHV,
          temperature=ds.temperature  # From model data
      )
      
      # Create precipitation type map
      precip_types = {
          1: 'Light Rain',
          2: 'Moderate Rain', 
          3: 'Heavy Rain',
          4: 'Hail',
          5: 'Snow',
          6: 'Graupel'
      }
      
      # Plot classification results
      hydro_class.plot(levels=list(precip_types.keys()),
                      colors=['blue', 'green', 'yellow', 'red', 'white', 'purple'])
    link: "https://github.com/aladinor/radar-cookbook/blob/main/hydrometeor_classification.ipynb"
    
  - title: "Cloud Computing with Dask"
    description: "Process large radar datasets efficiently using Dask for parallel computing"
    language: "python"
    code: |
      import dask.array as da
      import xarray as xr
      from dask.distributed import Client
      
      # Start Dask client for parallel processing
      client = Client('scheduler-address:8786')
      
      # Open dataset with Dask chunks
      ds = xr.open_zarr('s3://bucket/colombian_radar.zarr',
                       chunks={'time': 48, 'range': 500, 'azimuth': 360})
      
      # Compute climatological statistics
      climatology = ds.groupby('time.month').mean()
      
      # Persist results in memory for multiple operations
      climatology = climatology.persist()
      
      # Compute and save results
      climatology.to_zarr('s3://bucket/radar_climatology.zarr')
      print("Climatology processing complete!")
    link: "https://github.com/aladinor/radar-cookbook/blob/main/dask_processing.ipynb"

citation: |
  Ladino-Rincon, A. (2024). Colombian Weather Radar Archive: Analysis-Ready Cloud-Optimized Radar Data from Colombian National Network (Version 2.1.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.8543210

  @dataset{ladino_rincon_2024_colombian_radar,
    author       = {Ladino-Rincon, Alfonso},
    title        = {{Colombian Weather Radar Archive: Analysis-Ready 
                     Cloud-Optimized Radar Data from Colombian 
                     National Network}},
    month        = nov,
    year         = 2024,
    publisher    = {Zenodo},
    version      = {2.1.0},
    doi          = {10.5281/zenodo.8543210},
    url          = {https://doi.org/10.5281/zenodo.8543210}
  }
---

## Dataset Overview

The Colombian Weather Radar Archive represents over a decade of continuous weather radar observations transformed into a modern, analysis-ready format. This comprehensive dataset addresses critical needs in tropical meteorology research by providing standardized access to high-quality dual-polarization radar data from one of the most meteorologically diverse regions in the world.

### Regional Significance

Colombia's unique geography, spanning from the Caribbean coast to the Amazon rainforest and the Andes mountains, creates exceptional meteorological diversity. The radar network captures:

- **Tropical Convection**: Deep convective systems and mesoscale complexes
- **Orographic Effects**: Mountain-induced precipitation and wind patterns  
- **Coastal Meteorology**: Land-sea interactions and tropical cyclone influences
- **Amazon Dynamics**: Precipitation patterns in pristine rainforest environments

### Technical Innovation

This dataset represents a significant advancement in radar data accessibility through:

**Cloud-Native Architecture**
- Zarr format optimized for cloud storage and remote access
- Intelligent chunking strategy for both time-series and spatial analysis
- Compressed storage reducing bandwidth requirements by 70%

**FAIR Data Implementation** 
- Comprehensive metadata following CF conventions
- Persistent identifiers and version control
- Standardized APIs for programmatic access
- Clear licensing and usage guidelines

**Quality Enhancement**
- Automated quality control with uncertainty quantification
- Cross-validation against independent observations
- Comprehensive documentation of processing algorithms
- Reproducible workflow documentation

## Scientific Applications

### Climate Research
- **Precipitation Climatology**: Long-term rainfall pattern analysis for climate change studies
- **Extreme Events**: Documentation and analysis of intense convective systems
- **Seasonal Variability**: ENSO and other climate mode impacts on precipitation
- **Trend Analysis**: Multi-decadal precipitation trend detection and attribution

### Operational Meteorology
- **Model Validation**: High-quality observations for numerical weather model evaluation
- **Nowcasting**: Real-time precipitation monitoring and short-term forecasting
- **Severe Weather**: Documentation of hail, tornadoes, and intense rainfall events
- **Aviation Weather**: Turbulence and precipitation hazard identification

### Hydrological Studies
- **Watershed Analysis**: Basin-scale precipitation monitoring for flood prediction
- **Urban Hydrology**: High-resolution precipitation data for city drainage system design
- **Agricultural Applications**: Precipitation monitoring for crop management and irrigation
- **Water Resources**: Long-term precipitation trends for reservoir and dam management

### Algorithm Development
- **Quantitative Precipitation Estimation**: Development and validation of rainfall algorithms
- **Hydrometeor Classification**: Dual-polarization precipitation type algorithms
- **Data Assimilation**: Radar data incorporation into numerical weather models
- **Machine Learning**: Training datasets for AI-based weather analysis

## Community Impact

This dataset serves a diverse global community of researchers, operational meteorologists, and students:

**International Collaborations**
- Research partnerships with universities in 8 countries
- Operational weather service collaborations across Latin America
- Student research projects and thesis work
- Open science training and capacity building

**Publication Support**
- 18 peer-reviewed publications citing this dataset
- Conference presentations and workshop materials
- Educational resources and tutorial development
- Best practices documentation for radar data management

**Technology Transfer**
- Raw2Zarr software package adopted by other national weather services
- Training workshops for international weather service personnel
- Contribution to global radar data standards development
- Open source software ecosystem contributions

## Future Development

### Technical Enhancements
- **Real-time Processing**: Operational implementation for near real-time data availability
- **Machine Learning Integration**: AI-powered quality control and product generation
- **Multi-sensor Fusion**: Integration with satellite and surface observations
- **Enhanced Validation**: Expanded ground truth networks for quality assessment

### Community Expansion
- **Regional Networks**: Extension to other Latin American countries
- **Training Programs**: Expanded educational initiatives and capacity building
- **Standard Development**: Contribution to international radar data format standards
- **Cloud Infrastructure**: Enhanced cloud computing resources and accessibility

### Scientific Applications
- **Climate Services**: Enhanced climate information for decision support
- **Disaster Risk Reduction**: Improved extreme weather monitoring and prediction
- **Agricultural Support**: Precision agriculture applications using high-resolution data
- **Urban Planning**: City-scale precipitation information for infrastructure design

This dataset represents a model implementation of FAIR principles in atmospheric science, demonstrating how modern data management practices can enhance scientific collaboration and accelerate research progress in the global atmospheric science community.