
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Users, Quote, Star, Heart, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

interface WelcomeSectionProps {
  teacherProfile: any;
  onQuickAction?: (category: string, toolId: number) => void;
}

const WelcomeSection = ({ teacherProfile, onQuickAction }: WelcomeSectionProps) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });
  
  const educationalQuotes = t('easyteach.quotes', { returnObjects: true }) as Array<{ text: string; author: string }>;

  // Get actual tools from toolsData, selecting popular ones from each category
  const favoriteTools = [
    { name: "Lesson Plan Generator", icon: BookOpen, color: "from-blue-500 to-indigo-500", category: "Lesson Planning", toolId: 1 },
    { name: "General Assessment", icon: Star, color: "from-purple-500 to-pink-500", category: "Assessment", toolId: 10 },
    { name: "Parent Email Composer", icon: Heart, color: "from-green-500 to-emerald-500", category: "Communication", toolId: 18 },
    { name: "Quiz Creator", icon: Zap, color: "from-orange-500 to-red-500", category: "Assessment", toolId: 15 }
  ];

  useEffect(() => {
    const randomQuote = educationalQuotes[Math.floor(Math.random() * educationalQuotes.length)];
    setCurrentQuote(randomQuote);
  }, []);
  
  const getUserName = () => {
    if (teacherProfile?.name) return teacherProfile.name;
    if (user?.user_metadata?.name) return user.user_metadata.name;
    if (user?.email) return user.email.split('@')[0];
    return 'Teacher';
  };

  return (
    <div className="mb-4">
      {/* Top section: Citation only */}
      <div className="mb-4">
        {/* No welcome message here anymore */}

        {/* Cogitatio - More compact */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-2 mb-3">
            <div className="p-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
              <Quote className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('easyteach.welcome.cogitatio')}
            </h2>
          </div>
          <blockquote className="text-sm text-gray-800 italic mb-2 leading-relaxed">
            "{currentQuote.text}"
          </blockquote>
          <cite className="text-xs text-blue-600 font-medium">— {currentQuote.author}</cite>
        </div>
      </div>

      {/* Your Favorite Tools */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
        <div className="flex items-center space-x-2 mb-3">
          <Heart className="h-4 w-4 text-red-500" />
          <h2 className="text-sm font-semibold text-gray-800">{t('easyteach.welcome.favoriteTools')}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {favoriteTools.map((tool, index) => (
            <Button 
              key={index}
              onClick={() => onQuickAction?.(tool.category, tool.toolId)}
              className={`bg-gradient-to-r ${tool.color} hover:opacity-90 text-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-xs font-medium`}
            >
              <tool.icon className="mr-1 h-3 w-3" />
              {tool.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
