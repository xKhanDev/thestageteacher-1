
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Target } from "lucide-react";

interface OnboardingStep2Props {
  data: any;
  onNext: (data: any) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

const OnboardingStep2 = ({ data, onNext, onPrevious, onSkip }: OnboardingStep2Props) => {
  const { t } = useTranslation();
  const [preferences, setPreferences] = useState({
    gradeLevel: data.preferences?.gradeLevel || '',
    subjects: data.preferences?.subjects || [],
    classSize: data.preferences?.classSize || '',
    teachingStyle: data.preferences?.teachingStyle || '',
    ...data.preferences
  });

  const subjects = [
    'Mathematics', 'English/Language Arts', 'Science', 'History/Social Studies',
    'Physical Education', 'Art', 'Music', 'Foreign Language', 'Technology',
    'Special Education', 'Early Childhood', 'Other'
  ];

  const toggleSubject = (subject: string) => {
    setPreferences(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s: string) => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = () => {
    onNext({ preferences });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-lg font-semibold mb-2">
          {t('onboarding.step2.title', 'Tell us about your classroom')}
        </h2>
        <p className="text-gray-600">
          {t('onboarding.step2.intro', 'This helps us personalize your EasyTeach experience.')}
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label>{t('onboarding.step2.gradeLevel', 'Grade Level/Age Group')}</Label>
          <Select
            value={preferences.gradeLevel}
            onValueChange={(value) => setPreferences(prev => ({ ...prev, gradeLevel: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('onboarding.step2.gradePlaceholder', 'Select grade level')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preschool">{t('onboarding.step2.preschool', 'Preschool (3-4 years)')}</SelectItem>
              <SelectItem value="primary">{t('onboarding.step2.primary', 'Primary (5-11 years)')}</SelectItem>
              <SelectItem value="secondary">{t('onboarding.step2.secondary', 'Secondary (12-16 years)')}</SelectItem>
              <SelectItem value="senior">{t('onboarding.step2.senior', 'Senior Secondary (17-18 years)')}</SelectItem>
              <SelectItem value="adult">{t('onboarding.step2.adult', 'Adult Education')}</SelectItem>
              <SelectItem value="mixed">{t('onboarding.step2.mixed', 'Mixed Ages')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label>{t('onboarding.step2.subjects', 'Subject Areas')} ({t('onboarding.step2.selectMultiple', 'select multiple')})</Label>
          <div className="grid grid-cols-2 gap-2">
            {subjects.map((subject) => (
              <div
                key={subject}
                onClick={() => toggleSubject(subject)}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all text-sm ${
                  preferences.subjects.includes(subject)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {t(`onboarding.step2.subject.${subject.toLowerCase().replace(/[^a-z]/g, '')}`, subject)}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t('onboarding.step2.classSize', 'Typical Class Size')}</Label>
          <Select
            value={preferences.classSize}
            onValueChange={(value) => setPreferences(prev => ({ ...prev, classSize: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('onboarding.step2.classSizePlaceholder', 'Select class size')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">{t('onboarding.step2.small', 'Small (1-15 students)')}</SelectItem>
              <SelectItem value="medium">{t('onboarding.step2.medium', 'Medium (16-25 students)')}</SelectItem>
              <SelectItem value="large">{t('onboarding.step2.large', 'Large (26-35 students)')}</SelectItem>
              <SelectItem value="very-large">{t('onboarding.step2.veryLarge', 'Very Large (35+ students)')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="ghost" onClick={onPrevious}>
          {t('onboarding.previous', 'Previous')}
        </Button>
        <div className="space-x-2">
          <Button variant="ghost" onClick={onSkip}>
            {t('onboarding.skip', 'Skip')}
          </Button>
          <Button onClick={handleSubmit}>
            {t('onboarding.next', 'Next Step')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;
