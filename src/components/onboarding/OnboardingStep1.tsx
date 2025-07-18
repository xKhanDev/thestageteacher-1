
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, School } from "lucide-react";

interface OnboardingStep1Props {
  data: any;
  onNext: (data: any) => void;
  onSkip: () => void;
  isFirst: boolean;
}

const OnboardingStep1 = ({ data, onNext, onSkip, isFirst }: OnboardingStep1Props) => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState({
    name: data.profile?.name || '',
    title: data.profile?.title || '',
    school: data.profile?.school || '',
    experience: data.profile?.experience || '',
    ...data.profile
  });

  const handleSubmit = () => {
    onNext({ profile });
  };

  const isValid = profile.name && profile.title;

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-lg font-semibold mb-2">
          {t('onboarding.step1.welcome', 'Welcome to EasyTeach!')}
        </h2>
        <p className="text-gray-600">
          {t('onboarding.step1.intro', 'Let\'s start by getting to know you and your teaching background.')}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t('onboarding.step1.name', 'Your Name')} *</Label>
          <Input
            id="name"
            value={profile.name}
            onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
            placeholder={t('onboarding.step1.namePlaceholder', 'Enter your full name')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">{t('onboarding.step1.title', 'Job Title')} *</Label>
          <Select
            value={profile.title}
            onValueChange={(value) => setProfile(prev => ({ ...prev, title: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('onboarding.step1.titlePlaceholder', 'Select your role')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">{t('onboarding.step1.teacher', 'Teacher')}</SelectItem>
              <SelectItem value="head-teacher">{t('onboarding.step1.headTeacher', 'Head Teacher')}</SelectItem>
              <SelectItem value="principal">{t('onboarding.step1.principal', 'Principal')}</SelectItem>
              <SelectItem value="coordinator">{t('onboarding.step1.coordinator', 'Coordinator')}</SelectItem>
              <SelectItem value="substitute">{t('onboarding.step1.substitute', 'Substitute Teacher')}</SelectItem>
              <SelectItem value="other">{t('onboarding.step1.other', 'Other')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="school">{t('onboarding.step1.school', 'School/Institution')}</Label>
          <Input
            id="school"
            value={profile.school}
            onChange={(e) => setProfile(prev => ({ ...prev, school: e.target.value }))}
            placeholder={t('onboarding.step1.schoolPlaceholder', 'Enter your school name')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">{t('onboarding.step1.experience', 'Teaching Experience')}</Label>
          <Select
            value={profile.experience}
            onValueChange={(value) => setProfile(prev => ({ ...prev, experience: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('onboarding.step1.experiencePlaceholder', 'Select your experience level')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">{t('onboarding.step1.new', 'New Teacher (0-1 years)')}</SelectItem>
              <SelectItem value="early">{t('onboarding.step1.early', 'Early Career (2-5 years)')}</SelectItem>
              <SelectItem value="experienced">{t('onboarding.step1.experienced', 'Experienced (6-15 years)')}</SelectItem>
              <SelectItem value="veteran">{t('onboarding.step1.veteran', 'Veteran (15+ years)')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="ghost" onClick={onSkip}>
          {t('onboarding.skip', 'Skip for now')}
        </Button>
        <Button onClick={handleSubmit} disabled={!isValid}>
          {t('onboarding.next', 'Next Step')}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep1;
