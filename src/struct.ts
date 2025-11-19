import path from "path";
import fs from 'fs'
import { PediatricSoftwareDataZipFileArch } from "../types/struct";
import { processedDataDir } from "../devConstants";

export const struct: PediatricSoftwareDataZipFileArch = {
    measures: {
        filePath: 'anthroMeasures/anthropometricMeasures.json'
    },
    biochemicalRefs: {
        filePath: 'biochemicalRef/verified.json'
    },
    charts: {
        filePath: [
            'charts/arm_circumference_boys_0_5.json',
            'charts/arm_circumference_girls_0_5.json',
            'charts/bmi_for_age_boys_0_5.json',
            'charts/bmi_for_age_girls_0_5.json',
            'charts/bmi_for_age_boys_5_19.json',
            'charts/bmi_for_age_girls_5_19.json',
            'charts/head_circumference_boys_0_5.json',
            'charts/head_circumference_girls_0_5.json',
            'charts/height_for_age_boys_5_19.json',
            'charts/height_for_age_girls_5_19.json',
            'charts/length_for_age_boys_0_5.json',
            'charts/length_for_age_girls_0_5.json',
            'charts/subscapular_skinfold_boys_0_5.json',
            'charts/subscapular_skinfold_girls_0_5.json',
            'charts/triceps_skinfold_boys_0_5.json',
            'charts/triceps_skinfold_girls_0_5.json',
            'charts/weight_for_age_boys_0_5.json',
            'charts/weight_for_age_boys_5_10.json',
            'charts/weight_for_age_girls_0_5.json',
            'charts/weight_for_age_girls_5_10.json',
            'charts/weight_for_height_boys_65_120.json',
            'charts/weight_for_height_girls_65_120.json',
            'charts/weight_for_length_boys_45_110.json',
            'charts/weight_for_length_girls_45_110.json',
        ]
    },
    tables: {
        filePath: [
            'tables/weight_for_height_nchs_unisex.json',
            'tables/weight_for_length_who_2006_unisex.json',
        ]
    },
    appetiteTestRefs: {
        filePath: 'appetiteTestRef/appetiteTestRef.json'
    },
    clinicalRefs: {
        filePath: 'clinicalRef/clinicalRef.json'
    },
    dataFields: {
        filePath: 'data_fields/data_fields.json'
    },
    diagnosticRules: {
        filePath: 'diagnosticRules/diagnosticRules.json'
    },
    indicators: {
        filePath: [
            'indicators/single/bmi_indicator.json',
            'indicators/single/head_circumference_indicator.json',
            'indicators/single/height_for_age_indicator.json',
            'indicators/single/muac_for_age_indicator.json',
            'indicators/single/subscapular_skinfold_indicator.json',
            'indicators/single/triceps_skinfold_indicator.json',
            'indicators/single/weight_for_age_indicator.json',
            'indicators/single/weight_for_height_indicator.json',
            'indicators/single/weight_for_height_nchs_indicator.json',
            'indicators/single/weight_for_height_unisex_indicator.json',
        ]
    },
    medicines: {
        filePath: 'medicine/medicines.json'
    },
    milks: {
        filePath: 'milks/milks.json'
    },
    nutritionalProducts: {
        filePath: 'milks/products.json'
    },
    orientationRefs: {
        filePath: 'orientationRef/orientationRef.json'
    },
    units: {
        filePath: 'units/units.json'
    },
    nutritionalRiskFactors: {
        filePath: 'nutritionalRiskFactor/nutritionalRiskFactor.json'
    },
}


export function checkIfProcessedDirSatisfiesStruct(dir: string): boolean {
    return Object.values(struct).every((value) => {
        if (typeof value.filePath === 'string') {
            return fs.existsSync(path.join(dir, value.filePath));
        } else if (Array.isArray(value.filePath)) {
            return value.filePath.every((filePath) => fs.existsSync(path.join(dir, filePath)));
        }
        return false;
    });
}
export function saveStructInDir() {
    if (!checkIfProcessedDirSatisfiesStruct(processedDataDir)) {
        console.log('Processed directory does not satisfy struct.');
        return false;
    }
    const structPath = path.join(processedDataDir, 'struct.json');
    fs.writeFileSync(structPath, JSON.stringify(struct, null, 2));
    return true;
}

// export const PediatricSoftwareDataZipFileArch = {
//   anthropometricMeasure: {
//     filePath: 'anthroMeasures/anthropometricMeasures.json',
//   },
//   appetiteTestRef: {
//     filePath: 'appetiteTestRef/appetiteTestRef.json',
//   },
//   biochemicalRef: {
//     filePath: 'biochemicalRef/verified.json',
//   },
//   charts: {
//     filePath: [
//       'charts/arm_circumference_boys_0_5.json',
//       'charts/arm_circumference_girls_0_5.json',
//       'charts/bmi_for_age_boys_0_5.json',
//       'charts/bmi_for_age_girls_0_5.json',
//       'charts/bmi_for_age_boys_5_19.json',
//       'charts/bmi_for_age_girls_5_19.json',
//       'charts/head_circumference_boys_0_5.json',
//       'charts/head_circumference_girls_0_5.json',
//       'charts/height_for_age_boys_5_19.json',
//       'charts/height_for_age_girls_5_19.json',
//       'charts/length_for_age_boys_0_5.json',
//       'charts/length_for_age_girls_0_5.json',
//       'charts/subscapular_skinfold_boys_0_5.json',
//       'charts/subscapular_skinfold_girls_0_5.json',
//       'charts/triceps_skinfold_boys_0_5.json',
//       'charts/triceps_skinfold_girls_0_5.json',
//       'charts/weight_for_age_boys_0_5.json',
//       'charts/weight_for_age_boys_5_10.json',
//       'charts/weight_for_age_girls_0_5.json',
//       'charts/weight_for_age_girls_5_10.json',
//       'charts/weight_for_height_boys_65_120.json',
//       'charts/weight_for_height_girls_65_120.json',
//       'charts/weight_for_length_boys_45_110.json',
//       'charts/weight_for_length_girls_45_110.json',
//     ],
//   },
//   clinicalRef: {
//     filePath: 'clinicalRef/clinicalRef.json',
//   },
//   nextClinicalRef: {
//     filePath: 'clinicalRef/clinicalRef.next.json',
//   },
//   dataFields: {
//     filePath: 'data_fields/data_fields.json',
//   },
//   carePhases: {
//     filePath: 'carePhases/carePhases.json',
//   },
//   complications: {
//     filePath: 'complications/complications.json',
//   },
//   diagnosticRules: {
//     filePath: 'diagnosticRules/diagnosticRules.json',
//   },
//   nextDiagnostiRules: {
//     filePath: 'diagnosticRules/diagnosticRules.next.json',
//   },
//   indicators: {
//     filePath: [
//       'indicators/single/bmi_indicator.json',
//       'indicators/single/head_circumference_indicator.json',
//       'indicators/single/height_for_age_indicator.json',
//       'indicators/single/muac_for_age_indicator.json',
//       'indicators/single/subscapular_skinfold_indicator.json',
//       'indicators/single/triceps_skinfold_indicator.json',
//       'indicators/single/weight_for_age_indicator.json',
//       'indicators/single/weight_for_height_indicator.json',
//       'indicators/single/weight_for_height_nchs_indicator.json',
//       'indicators/single/weight_for_height_unisex_indicator.json',
//     ],
//   },
//   medicine: {
//     filePath: 'medicine/medicines.json',
//   },
//   nextMedicine: {
//     filePath: 'medicine/medicines.next.json',
//   },
//   milks: {
//     filePath: 'milks/milks.json',
//   },
//   milkEntitie: {
//     filePath: 'milks/milk_entities.json',
//   },
//   nutritionalProduct: {
//     filePath: 'milks/products.json',
//   },

//   orientationRef: {
//     filePath: 'orientationRef/orientationRef.json',
//   },
//   nextOrientationRef: {
//     filePath: 'orientationRef/orientationRef.next.json',
//   },
//   tables: {
//     filePath: [
//       'tables/weight_for_height_nchs_unisex.json',
//       'tables/weight_for_length_who_2006_unisex.json',
//     ],
//   },
//   units: {
//     filePath: 'units/units.json',
//   },
//   nutritionalRiskFactors: {
//     filePath: 'nutritionalRiskFactor/nutritionalRiskFactor.json',
//   },
// };


