
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, BookOpen, Users, CheckCircle, ArrowRight, Play } from "lucide-react";

interface WelcomeSectionProps {
  teacherProfile?: any;
  onQuickAction: (category: string, toolId: string) => void;
  onStartOnboarding?: () => void;
}

const WelcomeSection = ({ teacherProfile, onQuickAction, onStartOnboarding }: WelcomeSectionProps) => {
  const { t } = useTranslation();

  const quickActions = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: t('welcome.quickActions.lessonPlan'),
      description: t('welcome.quickActions.lessonPlanDesc'),
      category: t('easyteach.categories.lessonPlanning'),
      toolId: "lesson-planner",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: t('welcome.quickActions.assessment'),
      description: t('welcome.quickActions.assessmentDesc'),
      category: t('easyteach.categories.assessment'),
      toolId: "quiz-generator",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: t('welcome.quickActions.communication'),
      description: t('welcome.quickActions.communicationDesc'),
      category: t('easyteach.categories.communication'),
      toolId: "parent-communication",
      gradient: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome Header */}
      <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 mr-3 text-yellow-300" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {teacherProfile?.name 
              ? t('welcome.greeting', { name: teacherProfile.name })
              : t('welcome.defaultGreeting')
            }
          </h1>
        </div>
        <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
          {t('welcome.subtitle')}
        </p>

        {/* Show onboarding button for new users or those who want to restart */}
        {(!teacherProfile || !localStorage.getItem('easyteach-onboarding-completed')) && onStartOnboarding && (
          <div className="mt-6">
            <Button
              onClick={onStartOnboarding}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3"
            >
              <Play className="h-4 w-4 mr-2" />
              {t('welcome.startOnboarding', 'Get Started with EasyTeach')}
            </Button>
          </div>
        )}

        {/* Option to restart onboarding for existing users */}
        {teacherProfile && localStorage.getItem('easyteach-onboarding-completed') && onStartOnboarding && (
          <div className="mt-4">
            <Button
              variant="ghost"
              onClick={onStartOnboarding}
              className="text-white/80 hover:text-white hover:bg-white/10 text-sm"
            >
              {t('welcome.restartOnboarding', 'Restart Setup Guide')}
            </Button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            {t('welcome.quickActions.title')}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {t('welcome.quickActions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {quickActions.map((action, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={() => onQuickAction(action.category, action.toolId)}
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.gradient} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  {action.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {action.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {action.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                  {t('welcome.quickActions.tryNow')}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
