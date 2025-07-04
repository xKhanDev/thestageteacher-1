import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { educationSystems, getGradesBySystem } from '@/utils/gradeSystem';

interface GradeSystemSelectorProps {
  selectedSystem: string;
  selectedGrade: string;
  onSystemChange: (system: string) => void;
  onGradeChange: (grade: string) => void;
  className?: string;
}

const GradeSystemSelector = ({
  selectedSystem,
  selectedGrade,
  onSystemChange,
  onGradeChange,
  className = ""
}: GradeSystemSelectorProps) => {
  const { t } = useTranslation();
  const grades = getGradesBySystem(selectedSystem);

  const handleSystemChange = (system: string) => {
    onSystemChange(system);
    // Reset grade when system changes
    onGradeChange('');
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('grades.selectSystem')}
        </label>
        <Select value={selectedSystem} onValueChange={handleSystemChange}>
          <SelectTrigger>
            <SelectValue placeholder={t('grades.selectSystem')} />
          </SelectTrigger>
          <SelectContent>
            {educationSystems.map((system) => (
              <SelectItem key={system.code} value={system.code}>
                {system.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedSystem && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('grades.selectGrade')}
          </label>
          <Select value={selectedGrade} onValueChange={onGradeChange}>
            <SelectTrigger>
              <SelectValue placeholder={t('grades.selectGrade')} />
            </SelectTrigger>
            <SelectContent>
              {grades.map((grade) => (
                <SelectItem key={grade.value} value={grade.value}>
                  {grade.label} {grade.ageRange && `(${grade.ageRange} ans / years)`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default GradeSystemSelector;