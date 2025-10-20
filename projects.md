# Projects

Here are some of the key research projects and open-source contributions I've been involved with:

## Research Projects

### raw2zarr: Cloud-Optimized Weather Radar Data

```{card}
:link: https://github.com/aladinor/raw2zarr

**Converting weather radar data to cloud-optimized Zarr format**

A Python package for converting raw weather radar data (NEXRAD, Colombian radar network) into cloud-optimized Zarr format following FAIR principles. This project enables:

- Fast, parallel access to large radar datasets
- Integration with Xarray and Dask for scalable analysis
- Automated quality control and metadata standardization
- Publishing to cloud storage for community access

**Technologies:** Python, Zarr, Xarray, Dask, AWS S3
```

### xradar: Weather Radar Toolkit

```{card}
:link: https://github.com/openradar/xradar

**Core contributor to the open-source radar data toolkit**

xradar is a community-driven Python package for reading, processing, and analyzing weather radar data. My contributions focus on:

- Implementing standardized I/O for multiple radar formats
- Developing data model specifications
- Writing documentation and tutorials
- Supporting users in the atmospheric science community

**Technologies:** Python, Xarray, NetCDF, CfRadial
```

### GPM Validation Networks

```{card}
**Ground-based validation of satellite precipitation estimates**

Developing automated processing pipelines for validating NASA's Global Precipitation Measurement (GPM) mission products using:

- Ground-based weather radar networks
- Rain gauge observations
- Disdrometer measurements

This work improves our understanding of satellite precipitation retrieval algorithms and their uncertainties.

**Technologies:** Python, NumPy, Pandas, TRMM/GPM data products
```

### Neural Networks for Precipitation Microphysics

```{card}
**Machine learning for raindrop size distribution retrieval**

Developing deep learning approaches to retrieve precipitation microphysics from GPM dual-frequency radar observations:

- Physics-informed neural network architectures
- Training on TRMM/GPM radar and disdrometer data
- Uncertainty quantification for operational use

**Technologies:** Python, PyTorch, TensorFlow, Jupyter
```

## Open Source Contributions

### Open Radar Science Community

```{card}
:link: https://openradarscience.org/

**Building an open, collaborative radar meteorology community**

Active participant in the Open Radar Science community, contributing to:

- Documentation and tutorials (Radar Cookbook)
- Community workshops and training events
- Software development best practices
- FAIR data principles for radar data

**Recent Activities:**
- Co-organized ERAD 2024 Open Radar Science short course
- Presented at SciPy 2024 on FAIR radar data workflows
- Contributed to Project Pythia Radar Cookbook
```

### Py-ART

```{card}
:link: https://arm-doe.github.io/pyart/

**Python ARM Radar Toolkit**

Contributing bug fixes, documentation improvements, and feature enhancements to one of the most widely-used radar processing libraries in atmospheric science.
```

### Colombian Radar Data Archive

```{card}
**Making weather radar data FAIR and accessible**

Transforming 15+ TB of Colombian weather radar data into cloud-optimized, community-accessible datasets:

- Historical radar archive (2000-present)
- Automated quality control pipelines
- Cloud storage with public access
- Comprehensive metadata following CF conventions

**Impact:** Enabling climate studies, machine learning research, and operational improvements
```

## Field Campaigns

### CAMP2Ex: Cloud, Aerosol and Monsoon Processes Philippines Experiment

```{card}
**NASA field campaign participant (2019)**

Participated in the CAMP2Ex field campaign investigating cloud-aerosol interactions and monsoon processes over the Philippines:

- Ground-based radar observations
- Coordination with airborne measurements
- Data quality control and processing
- Precipitation microphysics analysis
```

## Datasets & Data Products

I have created and maintain several research-grade datasets:

- **Colombian Radar Archive (Zarr)**: 15+ TB of quality-controlled radar data (2000-present)
- **GPM Validation Database**: Matched satellite-ground observations for South America
- **Disdrometer Dataset**: Rain microphysics observations from multiple campaigns

All datasets follow FAIR principles and are available through open repositories (Zenodo, AWS Open Data).

## Software Skills

**Languages:** Python (expert), R (proficient), Bash, Julia (learning)

**Scientific Stack:** NumPy, Pandas, Xarray, Dask, SciPy, Matplotlib, Cartopy

**Machine Learning:** PyTorch, TensorFlow, scikit-learn, MLflow

**Big Data:** Zarr, HDF5, NetCDF, Parquet, Dask, Spark

**Cloud:** AWS (S3, EC2, Lambda), Google Cloud, Pangeo ecosystem

**Tools:** Git, Docker, Jupyter, VS Code, Linux

## Collaborations

I regularly collaborate with:

- **2i2c**: Cloud infrastructure for science
- **Project Pythia**: Educational resources for atmospheric science
- **Pangeo**: Big data tools for geoscience
- **OpenRadar**: International radar community
- **IDEAM** (Colombia): National weather service radar data

## Get Involved

I'm always interested in new collaborations! If you're working on:

- Weather radar data processing
- Machine learning for atmospheric science
- Open science and FAIR data
- Cloud-optimized data formats

Feel free to reach out via [email](mailto:aladino@illinois.edu) or open an issue on [GitHub](https://github.com/aladinor)!
