# MalnutriX Lite - Data Processing Pipeline

This repository contains the data processing pipeline for the **MalnutriX Lite** mobile application. It handles the extraction, transformation, and preparation of all data required by the mobile application for malnutrition assessment and management.

## Overview

The MalnutriX Lite Data Processing Pipeline is responsible for converting raw data sources (including WHO/NCHS growth charts, clinical references, nutritional information, diagnostic rules, and other medical data) into structured JSON formats optimized for mobile consumption. This ensures the MalnutriX Lite mobile application has access to all necessary data for proper functioning in field conditions.

## Features

- **Growth References**: Processes WHO/NCHS growth charts and tables from XLS/XLSX files to JSON format
- **Clinical References**: Extracts and formats clinical reference data
- **Diagnostic Rules**: Processes diagnostic algorithms and rules
- **Nutritional Data**: Handles nutritional risk factors, products, and milk formulations
- **Anthropometric Measures**: Processes anthropometric measurement references
- **Medical Information**: Extracts medicine data, appetite test references, and orientation guides
- **Biochemical References**: Processes verified and non-verified biochemical reference values
- **Indicators**: Generates all necessary health and nutritional indicators
- **Formula Fields**: Processes formula and calculation field references
- **Data Structure**: Creates structured data formats for mobile consumption

## Architecture

The processing pipeline is organized in modules:
- `src/AnthropometricMeasure` - Anthropometric measurement references
- `src/AppetiteTestRef` - Appetite test references
- `src/BiologicalRef` - Biochemical reference values
- `src/ClinicalRef` - Clinical reference data
- `src/DataFieldRef` - Data field definitions
- `src/DiagnosticRule` - Diagnostic rules and algorithms
- `src/FormulaFieldRef` - Formula and calculation fields
- `src/GrowthRef` - WHO/NCHS growth charts and tables
- `src/IndicatorGeneration` - Health and nutritional indicators
- `src/Medicines` - Medicine data
- `src/Milk` - Milk formulations
- `src/NutritionalRiskFactor` - Nutritional risk factors
- `src/OrientationRef` - Clinical orientation references
- `src/units` - Unit definitions
- `src/struct.ts` - Data structure definitions

## Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Access to raw data sources (Excel files for growth charts, etc.)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/nXhermane/MalnutriXlite_data
cd MalnutriX_lite_data
```

2. Install dependencies:
```bash
yarn install
```

## Usage

### Build Process

To run the complete data extraction and processing pipeline:

```bash
yarn build
```

This executes the `extract_all.ts` orchestrator which runs through all extraction steps in the correct order.

### Additional Scripts

- `yarn create-data-zip`: Creates a ZIP archive of processed data for mobile deployment
- `yarn move`: Moves needed assets to the build directory
- `yarn build:zip:move`: Executes the complete pipeline: build → create ZIP → move assets

### Output

Processed data is stored in the `processed_data/` directory in JSON format, optimized for use in the MalnutriX Lite mobile application. The directory includes:
- Growth charts and tables (`charts/` and `tables/`)
- All indicators (`all_indicators/`)
- Clinical references
- Diagnostic rules
- Nutritional information
- And other required data files

## Project Structure

```
MalnutriX_lite_data/
├── extract_all.ts          # Main extraction orchestrator
├── devConstants.ts         # Development constants
├── processed_data/         # Output directory for processed JSON data
├── assets/                 # Input assets (Excel files, etc.)
├── src/                    # Source modules for data processing
│   ├── AnthropometricMeasure
│   ├── AppetiteTestRef
│   ├── BiologicalRef
│   ├── ClinicalRef
│   ├── DataFieldRef
│   ├── DiagnosticRule
│   ├── FormulaFieldRef
│   ├── GrowthRef
│   ├── IndicatorGeneration
│   ├── Medicines
│   ├── Milk
│   ├── NutritionalRiskFactor
│   ├── OrientationRef
│   ├── units
│   ├── index.ts
│   └── struct.ts
├── types/
├── utils/
└── package.json
```

## Dependencies

- `adm-zip`: For creating ZIP archives of processed data
- `xlsx`: For reading Excel files (WHO/NCHS growth charts)
- `ts-node`: For running TypeScript files directly
- Various type definition packages for development

## License

This project is licensed under the MIT License.

## About MalnutriX Lite

MalnutriX Lite is a mobile application designed to assist healthcare workers in the assessment and management of malnutrition, particularly in resource-limited settings. This data processing pipeline is an essential component that ensures the mobile application has access to all necessary clinical and nutritional reference data.

## Contributing

For issues, suggestions, or contributions, please contact the development team or submit a pull request following the project's contribution guidelines.