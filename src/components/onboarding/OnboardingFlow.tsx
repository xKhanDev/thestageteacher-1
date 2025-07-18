
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft, X } from "lucide-react";
import OnboardingStep1 from './OnboardingStep1';
import OnboardingStep2 from './OnboardingStep2';
import OnboardingStep3 from './OnboardingStep3';
import OnboardingStep4 from './OnboardingStep4';

interface OnboardingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (profile: any) => void;
}

const OnboardingFlow = ({ isOpen, onClose, onComplete }: OnboardingFlowProps) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState({
    profile: {},
    preferences: {},
    tools: [],
    completed: false
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    {
      id: 1,
      title: t('onboarding.step1.title', 'Welcome to EasyTeach'),
      description: t('onboarding.step1.description', 'Let\'s set up your teaching profile'),
      component: OnboardingStep1
    },
    {
      id: 2,
      title: t('onboarding.step2.title', 'Your Teaching Context'),
      description: t('onboarding.step2.description', 'Tell us about your classroom'),
      component: OnboardingStep2
    },
    {
      id: 3,
      title: t('onboarding.step3.title', 'Explore Tools'),
      description: t('onboarding.step3.description', 'Discover your favorite teaching tools'),
      component: OnboardingStep3
    },
    {
      id: 4,
      title: t('onboarding.step4.title', 'You\'re All Set!'),
      description: t('onboarding.step4.description', 'Start creating amazing lessons'),
      component: OnboardingStep4
    }
  ];

  const handleNext = (stepData?: any) => {
    if (stepData) {
      setOnboardingData(prev => ({ ...prev, ...stepData }));
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Complete onboarding
      const finalData = { ...onboardingData, ...stepData, completed: true };
      onComplete(finalData);
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    onComplete({ ...onboardingData, completed: true });
    onClose();
  };

  if (!isOpen) return null;

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <CardHeader className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">
              {t('onboarding.step', 'Step')} {currentStep} {t('onboarding.of', 'of')} {totalSteps}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <Progress value={progress} className="w-full h-2 mb-4" />
          
          <CardTitle className="text-xl">{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        
        <CardContent className="overflow-y-auto">
          <CurrentStepComponent
            data={onboardingData}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSkip={handleSkip}
            isFirst={currentStep === 1}
            isLast={currentStep === totalSteps}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingFlow;
