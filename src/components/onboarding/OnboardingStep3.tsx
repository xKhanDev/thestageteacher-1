
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wand2, FileText, CheckCircle, MessageCircle, Users, Target } from "lucide-react";
import { tools } from "@/lib/toolsData";

interface OnboardingStep3Props {
  data: any;
  onNext: (data: any) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

const OnboardingStep3 = ({ data, onNext, onPrevious, onSkip }: OnboardingStep3Props) => {
  const { t } = useTranslation();
  const [selectedTools, setSelectedTools] = useState<string[]>(data.tools || []);

  // Get a curated selection of popular tools for onboarding
  const featuredTools = tools.slice(0, 8);

  const toggleTool = (toolId: string) => {
    setSelectedTools(prev => 
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const handleSubmit = () => {
    onNext({ tools: selectedTools });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Lesson Planning': return <Wand2 className="h-4 w-4" />;
      case 'Content Hub': return <FileText className="h-4 w-4" />;
      case 'Assessment': return <CheckCircle className="h-4 w-4" />;
      case 'Communication': return <MessageCircle className="h-4 w-4" />;
      case 'Behaviour Support': return <Users className="h-4 w-4" />;
      case 'Differentiation': return <Target className="h-4 w-4" />;
      default: return <Wand2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Wand2 className="h-8 w-8 text-purple-600" />
        </div>
        <h2 className="text-lg font-semibold mb-2">
          {t('onboarding.step3.title', 'Discover Your Favorite Tools')}
        </h2>
        <p className="text-gray-600">
          {t('onboarding.step3.intro', 'Select the tools that interest you most. You can explore all tools later!')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredTools.map((tool) => (
          <Card
            key={tool.id}
            className={`cursor-pointer transition-all border-2 ${
              selectedTools.includes(tool.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleTool(tool.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(tool.category)}
                  <CardTitle className="text-sm font-medium">{tool.name}</CardTitle>
                </div>
                {selectedTools.includes(tool.id) && (
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                )}
              </div>
              <CardDescription className="text-xs line-clamp-2" title={tool.description}>
                {tool.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Badge variant="secondary" className="text-xs">
                {t(`easyteach.categories.${tool.category.toLowerCase().replace(/[^a-z]/g, '')}`, tool.category)}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p>
          {t('onboarding.step3.note', 'Selected')} {selectedTools.length} {t('onboarding.step3.tools', 'tools')}. 
          {' '}{t('onboarding.step3.explore', 'You can explore all 50+ tools after onboarding!')}
        </p>
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

export default OnboardingStep3;
