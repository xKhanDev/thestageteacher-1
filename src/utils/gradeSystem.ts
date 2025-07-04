export interface GradeLevel {
  value: string;
  label: string;
  ageRange?: string;
}

export interface EducationSystem {
  code: string;
  name: string;
  grades: GradeLevel[];
}

export const educationSystems: EducationSystem[] = [
  {
    code: 'US',
    name: 'United States',
    grades: [
      { value: 'K', label: 'Kindergarten', ageRange: '5-6' },
      { value: '1', label: 'Grade 1', ageRange: '6-7' },
      { value: '2', label: 'Grade 2', ageRange: '7-8' },
      { value: '3', label: 'Grade 3', ageRange: '8-9' },
      { value: '4', label: 'Grade 4', ageRange: '9-10' },
      { value: '5', label: 'Grade 5', ageRange: '10-11' },
      { value: '6', label: 'Grade 6', ageRange: '11-12' },
      { value: '7', label: 'Grade 7', ageRange: '12-13' },
      { value: '8', label: 'Grade 8', ageRange: '13-14' },
      { value: '9', label: 'Grade 9', ageRange: '14-15' },
      { value: '10', label: 'Grade 10', ageRange: '15-16' },
      { value: '11', label: 'Grade 11', ageRange: '16-17' },
      { value: '12', label: 'Grade 12', ageRange: '17-18' }
    ]
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    grades: [
      { value: 'Reception', label: 'Reception', ageRange: '4-5' },
      { value: 'Year1', label: 'Year 1', ageRange: '5-6' },
      { value: 'Year2', label: 'Year 2', ageRange: '6-7' },
      { value: 'Year3', label: 'Year 3', ageRange: '7-8' },
      { value: 'Year4', label: 'Year 4', ageRange: '8-9' },
      { value: 'Year5', label: 'Year 5', ageRange: '9-10' },
      { value: 'Year6', label: 'Year 6', ageRange: '10-11' },
      { value: 'Year7', label: 'Year 7', ageRange: '11-12' },
      { value: 'Year8', label: 'Year 8', ageRange: '12-13' },
      { value: 'Year9', label: 'Year 9', ageRange: '13-14' },
      { value: 'Year10', label: 'Year 10', ageRange: '14-15' },
      { value: 'Year11', label: 'Year 11', ageRange: '15-16' },
      { value: 'Year12', label: 'Year 12 (Sixth Form)', ageRange: '16-17' },
      { value: 'Year13', label: 'Year 13 (Sixth Form)', ageRange: '17-18' }
    ]
  },
  {
    code: 'FR',
    name: 'France',
    grades: [
      { value: 'CP', label: 'CP (Cours Préparatoire)', ageRange: '6-7' },
      { value: 'CE1', label: 'CE1 (Cours Élémentaire 1)', ageRange: '7-8' },
      { value: 'CE2', label: 'CE2 (Cours Élémentaire 2)', ageRange: '8-9' },
      { value: 'CM1', label: 'CM1 (Cours Moyen 1)', ageRange: '9-10' },
      { value: 'CM2', label: 'CM2 (Cours Moyen 2)', ageRange: '10-11' },
      { value: '6eme', label: '6ème', ageRange: '11-12' },
      { value: '5eme', label: '5ème', ageRange: '12-13' },
      { value: '4eme', label: '4ème', ageRange: '13-14' },
      { value: '3eme', label: '3ème', ageRange: '14-15' },
      { value: '2nde', label: '2nde (Seconde)', ageRange: '15-16' },
      { value: '1ere', label: '1ère (Première)', ageRange: '16-17' },
      { value: 'Terminale', label: 'Terminale', ageRange: '17-18' }
    ]
  }
];

export const getEducationSystemByCode = (code: string): EducationSystem | undefined => {
  return educationSystems.find(system => system.code === code);
};

export const getGradesBySystem = (systemCode: string): GradeLevel[] => {
  const system = getEducationSystemByCode(systemCode);
  return system ? system.grades : [];
};

export const getSystemNameByCode = (code: string): string => {
  const system = getEducationSystemByCode(code);
  return system ? system.name : code;
};