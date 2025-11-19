type FilePaths = {
  filePath: string | string[];
};

export type PediatricSoftwareDataZipFileArch  = {
  measures: FilePaths;
  biochemicalRefs: FilePaths;
  charts: FilePaths;
  tables: FilePaths;
  clinicalRefs: FilePaths;
  dataFields: FilePaths;
  diagnosticRules: FilePaths;
  indicators: FilePaths;
  medicines: FilePaths;
  milks: FilePaths;
  nutritionalProducts: FilePaths;
  orientationRefs: FilePaths;
  units: FilePaths;
  nutritionalRiskFactors: FilePaths;
  appetiteTestRefs: FilePaths;
}