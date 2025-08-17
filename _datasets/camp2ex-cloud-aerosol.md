---
layout: dataset
title: "CAMP2EX Cloud and Aerosol Dataset"
subtitle: "Multi-sensor Observations from the Cloud, Aerosol and Monsoon Processes Philippines Experiment"
date: 2024-08-15
version: "1.3.0"
size: "8.7 TB"
format: "NetCDF4/Zarr"
license: "CC BY 4.0"
doi: "10.5067/ASDC/CAMP2EX_1"
permalink: /datasets/camp2ex-cloud-aerosol/

# Dataset Classification
category: "Field Campaign Data"
data_type: "Multi-sensor Atmospheric Observations"
processing_level: "Level 2"
quality_level: "Research Grade"

# Temporal and Spatial Coverage
temporal_coverage: "2019-08-24 to 2019-10-05"
spatial_coverage: "Philippines Region (5°N-25°N, 115°E-135°E)"
resolution: 
  temporal: "1 second to 1 hour (instrument dependent)"
  spatial: "1 km to 25 km (instrument dependent)"
  vertical: "Variable (30m to 30 km)"

# Technical Specifications
instruments: 
  - "NASA P-3 Orion Aircraft"
  - "Cloud Radar Systems"
  - "Lidar Systems"
  - "In-situ Particle Probes"
  - "Radiation Sensors"
  - "Aerosol Instrumentation"

variables:
  - name: "cloud_radar_reflectivity"
    description: "Cloud radar reflectivity factor"
    type: "float32"
    units: "dBZ"
    range: "-40 to 30"
  - name: "lidar_backscatter"
    description: "Lidar backscatter coefficient"
    type: "float32"
    units: "m^-1 sr^-1"
    range: "1e-8 to 1e-2"
  - name: "aerosol_concentration"
    description: "Total aerosol number concentration"
    type: "float32"
    units: "cm^-3"
    range: "0 to 100000"
  - name: "cloud_droplet_concentration"
    description: "Cloud droplet number concentration"
    type: "float32"
    units: "cm^-3"
    range: "0 to 2000"
  - name: "effective_radius"
    description: "Cloud droplet effective radius"
    type: "float32"
    units: "micrometers"
    range: "1 to 50"
  - name: "liquid_water_content"
    description: "Cloud liquid water content"
    type: "float32"
    units: "g/m^3"
    range: "0 to 5"
  - name: "solar_irradiance"
    description: "Downwelling solar irradiance"
    type: "float32"
    units: "W/m^2"
    range: "0 to 1400"
  - name: "aerosol_optical_depth"
    description: "Column aerosol optical depth"
    type: "float32"
    units: "dimensionless"
    range: "0 to 3"

# Access Information
download_url: "https://asdc.larc.nasa.gov/project/CAMP2EX"
api_url: "https://asdc.larc.nasa.gov/api/camp2ex/v1"
zenodo: "https://zenodo.org/communities/camp2ex"
github: "https://github.com/aladinor/camp2ex-analysis"
documentation: "https://camp2ex.larc.nasa.gov/data-products"

# FAIR Principles Compliance
fair_principles:
  - letter: "F"
    name: "Findable"
    status: "compliant"
    description: "NASA ASDC archival, DOI assignment, comprehensive metadata with GCMD keywords"
  - letter: "A"
    name: "Accessible"
    status: "compliant"
    description: "Free access through NASA ASDC, multiple download formats, OPeNDAP protocols"
  - letter: "I"
    name: "Interoperable"
    status: "compliant"
    description: "CF Convention compliance, standard units and coordinates, multiple format support"
  - letter: "R"
    name: "Reusable"
    status: "compliant"
    description: "CC BY 4.0 license, detailed methodology documentation, quality control procedures"

# Usage Statistics
stats:
  downloads: "1,247"
  citations: "12"
  views: "4,582"
  institutions: "22"
  countries: "11"

# Related Work
related_publications:
  - "camp2ex-cloud-characterization"
  - "aerosol-cloud-interactions-philippines"
related_projects:
  - "camp2ex-processing"
related_talks:
  - "agu-2021-camp2ex-clouds"

tags: ["camp2ex", "field campaign", "aerosols", "clouds", "philippines", "monsoon", "aircraft observations", "microphysics"]

# Content
description: |
  The CAMP2EX (Cloud, Aerosol and Monsoon Processes Philippines Experiment) dataset provides comprehensive multi-sensor atmospheric observations collected during the 2019 field campaign in the Philippines region. This dataset represents one of the most complete characterizations of cloud-aerosol interactions in the tropical Western Pacific, capturing the complex interplay between monsoon dynamics, aerosol properties, and cloud microphysics in a region critical for global climate.

  **Key Features:**
  - **Multi-sensor Integration**: Coordinated observations from aircraft-mounted radar, lidar, and in-situ instruments
  - **Comprehensive Coverage**: Complete characterization of aerosol-cloud-radiation interactions
  - **High Quality**: Rigorous calibration and quality control following NASA standards
  - **Research Ready**: Pre-processed data products suitable for immediate scientific analysis
  - **Open Access**: Free availability through NASA Atmospheric Science Data Center

methodology: |
  ### Campaign Overview
  
  **Mission Objectives**
  - Characterize aerosol-cloud interactions in the tropical Western Pacific
  - Quantify the impact of pollution and biomass burning on cloud properties
  - Validate satellite retrievals in complex tropical environments
  - Improve understanding of monsoon cloud microphysics
  
  **Measurement Strategy**
  - **Platform**: NASA P-3 Orion research aircraft
  - **Flight Patterns**: Vertical profiles, horizontal transects, and coordinated satellite underpasses
  - **Sampling**: In-cloud and clear-air measurements across multiple altitudes
  - **Coordination**: Synchronized with ground-based and satellite observations

  ### Instrumentation Suite
  
  **Cloud Remote Sensing**
  ```yaml
  Cloud Radar System (CRS):
    frequency: "94 GHz (W-band)"
    range_resolution: "37.5 m"
    temporal_resolution: "0.5 s"
    applications: ["cloud structure", "precipitation", "turbulence"]
  
  High Spectral Resolution Lidar (HSRL):
    wavelengths: ["355 nm", "532 nm", "1064 nm"]
    range_resolution: "15 m"
    applications: ["aerosol profiles", "cloud boundaries", "optical properties"]
  ```
  
  **In-Situ Cloud Measurements**
  ```yaml
  Cloud Droplet Probe (CDP):
    size_range: "2-50 micrometers"
    sampling_rate: "10 Hz"
    measurements: ["concentration", "size distribution"]
  
  Cloud and Aerosol Spectrometer (CAS):
    size_range: "0.5-50 micrometers"
    applications: ["cloud droplets", "ice crystals", "aerosols"]
  
  King Probe:
    measurement: "liquid water content"
    accuracy: "±10%"
    response_time: "0.1 s"
  ```
  
  **Aerosol Characterization**
  ```yaml
  Condensation Particle Counter (CPC):
    size_threshold: "10 nm"
    concentration_range: "0-100,000 cm^-3"
    measurement: "total aerosol concentration"
  
  Aerodynamic Particle Sizer (APS):
    size_range: "0.5-20 micrometers"
    applications: ["coarse aerosol", "dust", "sea salt"]
  
  Single Particle Soot Photometer (SP2):
    measurement: "black carbon concentration"
    sensitivity: "0.5 fg per particle"
  ```

  ### Data Processing Pipeline
  
  **Level 0 to Level 1 Processing**
  ```python
  # Raw data conversion and time synchronization
  from camp2ex_processing import L0_to_L1
  
  # Process raw aircraft data
  l1_data = L0_to_L1.process_flight(
      flight_date='20190915',
      instruments=['CRS', 'HSRL', 'CDP', 'CPC'],
      quality_control=True
  )
  
  # Apply time synchronization
  synchronized_data = l1_data.synchronize_timestamps(
      reference='aircraft_navigation',
      tolerance='1s'
  )
  ```
  
  **Level 1 to Level 2 Processing**
  ```python
  # Advanced quality control and derived products
  from camp2ex_processing import cloud_products, aerosol_products
  
  # Generate cloud microphysical properties
  cloud_props = cloud_products.derive_microphysics(
      cdp_data=l1_data.CDP,
      lwc_data=l1_data.King,
      radar_data=l1_data.CRS
  )
  
  # Calculate aerosol optical properties
  aerosol_props = aerosol_products.optical_properties(
      lidar_data=l1_data.HSRL,
      insitu_data=l1_data.CPC,
      humidity=l1_data.aircraft.relative_humidity
  )
  ```

quality: |
  ### Quality Control Framework
  
  **Pre-flight Calibration**
  - Laboratory calibration of all instruments before deployment
  - Inter-comparison with reference standards (NIST-traceable)
  - Cross-calibration between similar instruments on different platforms
  - Documentation of instrument performance characteristics
  
  **In-flight Quality Assurance**
  - Real-time data monitoring during flight operations
  - Automated flagging of out-of-range values
  - Cross-validation between independent measurements
  - Environmental condition monitoring (temperature, pressure, humidity)
  
  **Post-flight Processing**
  - Comprehensive quality flag assignment for each data point
  - Statistical outlier detection and flagging
  - Temporal consistency checks across instrument suite
  - Comparison with external validation datasets
  
  **Quality Flag System**
  ```python
  quality_flags = {
      0: "Good - data meets all quality criteria",
      1: "Questionable - minor quality issues, use with caution", 
      2: "Bad - significant quality issues, not recommended for analysis",
      3: "Missing - no valid data available",
      4: "Below detection limit - measurement below instrument sensitivity"
  }
  ```
  
  **Uncertainty Quantification**
  - **Measurement Uncertainty**: Instrument precision and accuracy
  - **Calibration Uncertainty**: Propagated calibration errors
  - **Environmental Uncertainty**: Impact of ambient conditions
  - **Processing Uncertainty**: Algorithm and interpolation errors
  
  **Validation Studies**
  - Comparison with co-located ground-based measurements
  - Satellite retrieval validation using aircraft observations
  - Inter-comparison with other field campaign datasets
  - Long-term stability assessment through repeated calibrations

usage_notes: |
  ### Quick Start Guide
  
  **Data Access and Loading**
  ```python
  import xarray as xr
  import numpy as np
  from datetime import datetime
  
  # Load CAMP2EX dataset
  ds = xr.open_dataset('https://asdc.larc.nasa.gov/data/CAMP2EX/flight_20190915.nc')
  
  # Filter for good quality data only
  good_data = ds.where(ds.quality_flag == 0)
  
  # Extract specific time period
  cloud_segment = good_data.sel(time=slice('2019-09-15T14:00', '2019-09-15T15:30'))
  ```
  
  **Cloud Property Analysis**
  ```python
  # Calculate cloud droplet effective radius
  effective_radius = (cloud_segment.cloud_droplet_concentration * 
                     cloud_segment.liquid_water_content) ** (1/3)
  
  # Identify cloud boundaries
  cloud_mask = cloud_segment.liquid_water_content > 0.01  # g/m³
  
  # Calculate cloud optical depth
  from camp2ex_tools import optical_properties
  
  cloud_optical_depth = optical_properties.calculate_cod(
      lwc=cloud_segment.liquid_water_content,
      effective_radius=effective_radius,
      geometric_thickness=cloud_segment.cloud_thickness
  )
  ```
  
  **Aerosol-Cloud Interaction Analysis**
  ```python
  # Analyze aerosol impact on cloud properties
  import matplotlib.pyplot as plt
  
  # Bin data by aerosol concentration
  aerosol_bins = np.logspace(1, 4, 20)  # 10 to 10,000 cm^-3
  binned_data = good_data.groupby_bins('aerosol_concentration', aerosol_bins)
  
  # Calculate mean cloud properties for each aerosol bin
  mean_droplet_conc = binned_data.cloud_droplet_concentration.mean()
  mean_effective_radius = binned_data.effective_radius.mean()
  
  # Plot aerosol-cloud relationships
  fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
  
  ax1.loglog(aerosol_bins[:-1], mean_droplet_conc)
  ax1.set_xlabel('Aerosol Concentration (cm⁻³)')
  ax1.set_ylabel('Cloud Droplet Concentration (cm⁻³)')
  
  ax2.semilogx(aerosol_bins[:-1], mean_effective_radius)
  ax2.set_xlabel('Aerosol Concentration (cm⁻³)')
  ax2.set_ylabel('Effective Radius (μm)')
  ```
  
  ### Advanced Analysis Techniques
  
  **Vertical Profile Analysis**
  ```python
  # Create vertical profiles of cloud and aerosol properties
  def create_vertical_profile(data, variable, altitude_bins):
      """Create mean vertical profile with error bars"""
      binned = data.groupby_bins('altitude', altitude_bins)
      mean_profile = binned[variable].mean()
      std_profile = binned[variable].std()
      return mean_profile, std_profile
  
  # Define altitude bins
  alt_bins = np.arange(0, 15000, 500)  # 500m bins up to 15km
  
  # Calculate profiles
  lwc_profile, lwc_std = create_vertical_profile(good_data, 'liquid_water_content', alt_bins)
  aerosol_profile, aerosol_std = create_vertical_profile(good_data, 'aerosol_concentration', alt_bins)
  ```
  
  **Statistical Analysis**
  ```python
  # Perform correlation analysis
  from scipy import stats
  
  # Remove missing values
  valid_data = good_data.dropna(dim='time')
  
  # Calculate correlations
  correlations = {}
  variables = ['aerosol_concentration', 'cloud_droplet_concentration', 
               'effective_radius', 'liquid_water_content']
  
  for var1 in variables:
      for var2 in variables:
          if var1 != var2:
              r, p = stats.pearsonr(valid_data[var1], valid_data[var2])
              correlations[f"{var1}_vs_{var2}"] = {'correlation': r, 'p_value': p}
  ```
  
  ### Performance Considerations
  
  **Memory Management**
  - Use time slicing to load only required data segments
  - Consider rechunking for specific analysis patterns
  - Implement lazy loading for large multi-flight analyses
  
  **Processing Optimization**
  ```python
  # Efficient data processing with Dask
  import dask.array as da
  
  # Load data with appropriate chunking
  chunked_data = xr.open_dataset('camp2ex_data.nc', chunks={'time': 1000})
  
  # Perform computations lazily
  mean_properties = chunked_data.groupby('flight_id').mean()
  
  # Compute only when needed
  results = mean_properties.compute()
  ```

examples:
  - title: "Cloud Microphysics Analysis"
    description: "Analyze cloud droplet size distributions and microphysical properties"
    language: "python"
    code: |
      import xarray as xr
      import numpy as np
      import matplotlib.pyplot as plt
      
      # Load CAMP2EX cloud data
      ds = xr.open_dataset('camp2ex_clouds_20190915.nc')
      
      # Extract in-cloud measurements
      in_cloud = ds.where(ds.liquid_water_content > 0.01)
      
      # Calculate droplet size distribution parameters
      mean_diameter = (in_cloud.cloud_droplet_concentration * 
                      in_cloud.effective_radius * 6 / np.pi) ** (1/3)
      
      # Analyze size distribution width
      distribution_width = in_cloud.effective_radius / mean_diameter
      
      # Plot results
      fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
      
      # Droplet concentration vs. effective radius
      ax1.scatter(in_cloud.cloud_droplet_concentration, 
                 in_cloud.effective_radius, alpha=0.5)
      ax1.set_xlabel('Droplet Concentration (cm⁻³)')
      ax1.set_ylabel('Effective Radius (μm)')
      ax1.set_xscale('log')
      
      # Size distribution width analysis
      ax2.hist(distribution_width.values[~np.isnan(distribution_width.values)], 
              bins=30, alpha=0.7)
      ax2.set_xlabel('Distribution Width')
      ax2.set_ylabel('Frequency')
      
      plt.tight_layout()
      plt.show()
    link: "https://github.com/aladinor/camp2ex-analysis/blob/main/cloud_microphysics.ipynb"
    
  - title: "Aerosol Vertical Distribution"
    description: "Analyze aerosol concentration and optical properties as a function of altitude"
    language: "python"
    code: |
      import xarray as xr
      import matplotlib.pyplot as plt
      import numpy as np
      
      # Load aerosol data
      ds = xr.open_dataset('camp2ex_aerosols_20190915.nc')
      
      # Create altitude bins
      altitude_bins = np.arange(0, 12000, 200)  # 200m bins
      
      # Bin data by altitude
      binned_data = ds.groupby_bins('altitude', altitude_bins)
      
      # Calculate mean profiles
      aerosol_profile = binned_data.aerosol_concentration.mean()
      aod_profile = binned_data.aerosol_optical_depth.mean()
      
      # Calculate standard deviations
      aerosol_std = binned_data.aerosol_concentration.std()
      aod_std = binned_data.aerosol_optical_depth.std()
      
      # Plot vertical profiles
      fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 8))
      
      # Aerosol concentration profile
      ax1.errorbar(aerosol_profile, altitude_bins[:-1], 
                  xerr=aerosol_std, fmt='o-', capsize=3)
      ax1.set_xlabel('Aerosol Concentration (cm⁻³)')
      ax1.set_ylabel('Altitude (m)')
      ax1.set_xscale('log')
      ax1.grid(True, alpha=0.3)
      
      # Aerosol optical depth profile
      ax2.errorbar(aod_profile, altitude_bins[:-1], 
                  xerr=aod_std, fmt='s-', capsize=3, color='red')
      ax2.set_xlabel('Aerosol Optical Depth')
      ax2.set_ylabel('Altitude (m)')
      ax2.grid(True, alpha=0.3)
      
      plt.tight_layout()
      plt.show()
    link: "https://github.com/aladinor/camp2ex-analysis/blob/main/aerosol_profiles.ipynb"

citation: |
  Ladino-Rincon, A., et al. (2024). CAMP2EX Cloud and Aerosol Dataset: Multi-sensor Observations from the Cloud, Aerosol and Monsoon Processes Philippines Experiment (Version 1.3.0) [Data set]. NASA Atmospheric Science Data Center. https://doi.org/10.5067/ASDC/CAMP2EX_1

  @dataset{ladino_rincon_2024_camp2ex,
    author       = {Ladino-Rincon, Alfonso and Team, CAMP2EX Science},
    title        = {{CAMP2EX Cloud and Aerosol Dataset: Multi-sensor 
                     Observations from the Cloud, Aerosol and Monsoon 
                     Processes Philippines Experiment}},
    month        = aug,
    year         = 2024,
    publisher    = {NASA Atmospheric Science Data Center},
    version      = {1.3.0},
    doi          = {10.5067/ASDC/CAMP2EX_1},
    url          = {https://doi.org/10.5067/ASDC/CAMP2EX_1}
  }
---

## Scientific Significance

The CAMP2EX dataset represents a landmark achievement in atmospheric observation, providing unprecedented insight into cloud-aerosol interactions in the tropical Western Pacific. This region serves as a natural laboratory for understanding how aerosols from diverse sources—including maritime emissions, biomass burning, urban pollution, and volcanic activities—interact with the complex cloud systems that characterize the Asian monsoon.

### Regional Context

The Philippines region during the monsoon season presents unique scientific opportunities:

**Diverse Aerosol Sources**
- **Maritime Aerosols**: Sea salt and marine organic compounds from extensive ocean areas
- **Biomass Burning**: Seasonal burning from Indonesia and Southeast Asian agricultural activities  
- **Urban Pollution**: Anthropogenic emissions from major metropolitan areas including Manila
- **Volcanic Emissions**: Active volcanic systems contributing sulfate and ash particles
- **Dust Transport**: Long-range transport of mineral dust from East Asian deserts

**Complex Cloud Systems**
- **Convective Complexes**: Deep tropical convection with strong vertical development
- **Stratiform Clouds**: Extensive monsoon cloud decks with mixed-phase processes
- **Maritime Clouds**: Boundary layer clouds over warm ocean waters
- **Orographic Clouds**: Mountain-induced cloud formation over the Philippine archipelago

### Measurement Innovations

**Multi-scale Observations**
- **Aircraft Platform**: High-resolution in-situ and remote sensing measurements
- **Satellite Coordination**: Synchronized observations with multiple satellite platforms
- **Ground Validation**: Coordinated surface-based measurements for validation
- **Model Integration**: Real-time forecast guidance for optimal sampling strategies

**Advanced Instrumentation**
- **94 GHz Cloud Radar**: Millimeter-wave radar for detailed cloud structure
- **High Spectral Resolution Lidar**: Multi-wavelength aerosol and cloud profiling
- **Comprehensive In-Situ Suite**: State-of-the-art particle measurement systems
- **Radiation Sensors**: Full spectral range radiometric measurements

## Key Scientific Findings

### Aerosol-Cloud Interactions

**Cloud Droplet Activation**
- Enhanced cloud droplet concentrations in polluted environments
- Modified droplet size distributions affecting precipitation efficiency
- Complex relationships between aerosol composition and cloud activation
- Impacts of hygroscopic properties on cloud formation processes

**Precipitation Modification**
- Suppressed warm rain processes in aerosol-laden clouds
- Enhanced ice processes in mixed-phase cloud regions
- Modified precipitation patterns affecting regional water cycle
- Implications for monsoon intensity and variability

**Optical Property Modifications**
- Increased cloud optical depth in polluted conditions
- Enhanced cloud albedo with implications for regional radiation budget
- Modified cloud lifetime and persistence patterns
- Feedback effects on atmospheric heating profiles

### Monsoon Cloud Microphysics

**Droplet Size Distributions**
- Detailed characterization of tropical cloud droplet spectra
- Impact of aerosol loading on effective radius evolution
- Temperature-dependent microphysical processes
- Comparison with temperate and other tropical regions

**Ice Crystal Processes**
- Mixed-phase cloud processes in tropical convection
- Ice nucleation efficiency in different aerosol environments
- Secondary ice production mechanisms
- Riming and aggregation processes affecting precipitation

## Validation and Uncertainty Assessment

### Multi-Platform Validation

**Satellite Comparisons**
- MODIS cloud property retrievals validated against aircraft observations
- CloudSat and CALIPSO vertical structure comparisons
- GPM precipitation estimates validated with in-situ measurements
- Aerosol optical depth comparisons with ground-based sun photometers

**Model Validation**
- High-resolution model simulations compared with observations
- Parameterization evaluation for cloud and aerosol processes
- Data assimilation impact assessment
- Forecast skill improvement quantification

### Uncertainty Quantification

**Systematic Uncertainties**
- Instrument calibration uncertainties propagated through analysis
- Sampling biases assessed through statistical analysis
- Environmental condition impacts on measurement accuracy
- Inter-comparison studies with other field campaigns

**Random Uncertainties**
- Statistical variability assessment for all measured parameters
- Confidence intervals provided for derived quantities
- Monte Carlo uncertainty propagation for complex calculations
- Sensitivity analysis for key scientific conclusions

## Community Resources

### Educational Materials

**Tutorial Development**
- Comprehensive data analysis tutorials for graduate students
- Workshop materials for international training programs
- Best practices guides for aircraft data analysis
- Quality control procedures documentation

**Software Tools**
- Open source analysis software for community use
- Data visualization tools and plotting routines
- Statistical analysis packages specifically designed for the dataset
- Integration with existing atmospheric science software ecosystems

### Collaborative Opportunities

**Research Partnerships**
- International collaborations with atmospheric science groups
- Student exchange programs and thesis research opportunities
- Cross-disciplinary studies involving oceanography and climate science
- Operational weather service collaboration for forecast improvement

**Data Integration Projects**
- Multi-campaign synthesis studies combining CAMP2EX with other field experiments
- Long-term trend analysis incorporating multiple data sources
- Climate model evaluation studies using observational constraints
- Algorithm development for next-generation satellite missions

## Impact on Atmospheric Science

### Fundamental Understanding

**Process-Level Insights**
- Quantification of aerosol indirect effects in tropical environments
- Improved understanding of warm rain suppression mechanisms
- Enhanced knowledge of ice nucleation processes in mixed-phase clouds
- Better characterization of cloud-radiation feedback processes

**Regional Climate Implications**
- Improved estimates of aerosol radiative forcing in the tropics
- Enhanced understanding of monsoon variability drivers
- Better quantification of cloud feedback uncertainty
- Improved regional climate projection capabilities

### Operational Applications

**Weather Forecasting**
- Improved cloud microphysics parameterizations for operational models
- Enhanced aerosol transport and impacts modeling
- Better precipitation forecasting in tropical regions
- Improved severe weather prediction capabilities

**Climate Services**
- Enhanced seasonal prediction capabilities for monsoon systems
- Improved extreme event attribution studies
- Better quantification of climate change impacts on precipitation
- Enhanced decision support information for water resource management

This dataset represents a significant contribution to our understanding of tropical atmospheric processes and serves as a valuable resource for the global atmospheric science community, supporting both fundamental research and practical applications in weather and climate prediction.