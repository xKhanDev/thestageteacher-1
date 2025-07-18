
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sparkles, ArrowRight, BookOpen, Users, Wand2 } from "lucide-react";

interface OnboardingStep4Props {
  data: any;
  onNext: (data: any) => void;
  onPrevious: () => void;
  isLast: boolean;
}

const OnboardingStep4 = ({ data, onNext, onPrevious, isLast }: OnboardingStep4Props) => {
  const { t } = useTranslation();
  
  const handleComplete = () => {
    onNext({ completed: true });
  };

  const quickActions = [
    {
      icon: <Wand2 className="h-5 w-5" />,
      title: t('onboarding.step4.action1', 'Create Your First Lesson'),
      description: t('onboarding.step4.action1Desc', 'Use our AI-powered lesson planner'),
      category: t('easyteach.categories.lessonPlanning'),
      toolId: 'lesson-planner'
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: t('onboarding.step4.action2', 'Generate Learning Materials'),
      description: t('onboarding.step4.action2Desc', 'Create worksheets and activities'),
      category: t('easyteach.categories.contentHub'),
      toolId: 'worksheet-generator'
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: t('onboarding.step4.action3', 'Set Up Communication'),
      description: t('onboarding.step4.action3Desc', 'Connect with parents and students'),
      category: t('easyteach.categories.communication'),
      toolId: 'parent-communication'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-green-800">
          {t('onboarding.step4.title', 'You\'re All Set!')}
        </h2>
        <p className="text-gray-600">
          {t('onboarding.step4.intro', 'Welcome to EasyTeach! Here are some quick actions to get you started.')}
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
        <h3 className="font-semibold mb-4 flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
          {t('onboarding.step4.summary', 'Your Setup Summary')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-medium text-gray-700">{t('onboarding.step4.profile', 'Profile')}</div>
            <div className="text-gray-600">
              {data.profile?.name || t('onboarding.step4.notSet', 'Not set')}
              {data.profile?.title && ` • ${data.profile.title}`}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-700">{t('onboarding.step4.teaching', 'Teaching')}</div>
            <div className="text-gray-600">
              {data.preferences?.gradeLevel || t('onboarding.step4.notSet', 'Not set')}
              {data.preferences?.subjects?.length > 0 && ` • ${data.preferences.subjects.length} subjects`}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-700">{t('onboarding.step4.tools', 'Tools Selected')}</div>
            <div className="text-gray-600">
              {data.tools?.length || 0} {t('onboarding.step4.toolsCount', 'tools ready to use')}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-800">
          {t('onboarding.step4.quickStart', 'Quick Start Actions')}
        </h3>
        {quickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
        <p>
          {t('onboarding.step4.tip', 'Tip: You can access all tools from the main dashboard and update your preferences anytime in your profile.')}
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="ghost" onClick={onPrevious}>
          {t('onboarding.previous', 'Previous')}
        </Button>
        <Button onClick={handleComplete} className="bg-green-600 hover:bg-green-700">
          {t('onboarding.step4.start', 'Start Teaching!')} 
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep4;
