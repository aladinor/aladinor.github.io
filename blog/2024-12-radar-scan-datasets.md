---
date: 2024-12-01
author: Alfonso Ladino-Rincon
tags: radar, cloud-native, zarr, earthmover
category: blog
---

# Radar Scan Datasets: Time-Aware Cloud-Native Data Access

Weather radar data is essential for understanding precipitation processes, validating satellite observations, and improving forecast models. However, traditional radar data formats present significant challenges for modern cloud-based workflows. In this post, I explore how time-aware, cloud-native approaches using Zarr can transform how we work with radar scan datasets.

[Read the full blog post at Earthmover →](https://earthmover.io/blog/radar-scan-datasets-time-aware-cloud-native)

**Date:** December 01, 2024

## The Challenge with Traditional Radar Data

Traditional weather radar data is stored in file-based formats (NEXRAD Level-II, ODIM HDF5, UF) that were designed for sequential access on local filesystems. Each volume scan becomes a separate file, making it difficult to:

- Query data across time efficiently
- Access specific elevations or variables without downloading entire files
- Parallelize data processing across multiple workers
- Integrate with cloud-based analysis tools

## A Cloud-Native Solution

By converting radar data to Zarr format with careful attention to chunk sizing and metadata, we can create truly cloud-optimized datasets that enable:

1. **Time-aware queries**: Quickly access data for specific time ranges without scanning through thousands of files
2. **Selective variable access**: Download only the radar variables you need (reflectivity, velocity, etc.)
3. **Parallel processing**: Use Dask to process data across multiple cores or machines
4. **Cost-effective storage**: Cloud-optimized formats reduce data transfer costs

## Key Design Principles

The approach I've developed through `raw2zarr` focuses on:

- **Preserving metadata**: Maintaining all original radar metadata and quality flags
- **Optimal chunking**: Balancing between query performance and storage efficiency
- **FAIR compliance**: Following findable, accessible, interoperable, and reusable principles
- **Standardization**: Adhering to CF-Radial conventions for interoperability

[Read the full article on Earthmover →](https://earthmover.io/blog/radar-scan-datasets-time-aware-cloud-native)

## Tools and Resources

- [raw2zarr](https://github.com/aladinor/raw2zarr) - Python package for converting radar data to Zarr
- [xradar](https://github.com/openradar/xradar) - Radar data toolkit for Python
- Example notebooks demonstrating cloud-native radar workflows
