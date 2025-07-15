
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Clock, Shield, Globe, Star, Sparkles, ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onShowLogin: () => void;
}

const HeroSection = ({ onShowLogin }: HeroSectionProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const { t } = useTranslation();
  
  const messages = [
    t('hero.subtitle1'),
    t('hero.subtitle2'),
    t('hero.subtitle3'),
    t('hero.subtitle4'),
    t('hero.subtitle5')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 border-purple-200 text-sm font-medium px-4 py-2 hover-scale">
            <Sparkles className="h-4 w-4 mr-2" />
            {t('hero.transformingEducation')}
          </Badge>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight animate-scale-in">
          {t('hero.title')}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block transition-all duration-1000 animate-fade-in">
            {messages[currentMessageIndex]}
          </span>
        </h1>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
          {t('hero.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 hover-scale">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
            <div className="text-gray-700 font-medium mb-2">{t('hero.activeEducators')}</div>
            <div className="text-sm text-gray-500">{t('hero.acrossAllPlatforms')}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover-scale">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-700 font-medium mb-2">{t('hero.integratedProducts')}</div>
            <div className="text-sm text-gray-500">{t('hero.completeEcosystem')}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover-scale">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium mb-2">{t('hero.hoursSavedMonthly')}</div>
            <div className="text-sm text-gray-500">{t('hero.perInstitution')}</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 animate-fade-in">
          <div className="flex items-center space-x-2 text-gray-600">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium">{t('hero.socCompliant')}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Globe className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">{t('hero.availableWorldwide')}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{t('hero.userRating')}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={onShowLogin}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            Get Started Free
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            <Play className="mr-3 h-6 w-6" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
