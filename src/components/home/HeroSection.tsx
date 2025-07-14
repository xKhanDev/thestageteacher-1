
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Clock, Shield, Globe, Star, Sparkles } from "lucide-react";

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
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
          alt="Students collaborating in modern classroom"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <Badge className="bg-gradient-to-r from-blue-50 to-slate-50 text-slate-700 border-slate-200 text-sm font-medium px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            {t('hero.transformingEducation')}
          </Badge>
        </div>
        
        <h1 className="text-6xl font-bold text-slate-900 mb-8 leading-tight">
          {t('hero.title')}
          <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent block transition-all duration-1000">
            {messages[currentMessageIndex]}
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* Hero Image with Real Classroom */}
        <div className="mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
            alt="Modern classroom with technology integration"
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
            <div className="text-slate-700 font-medium mb-2">{t('hero.activeEducators')}</div>
            <div className="text-sm text-slate-500">{t('hero.acrossAllPlatforms')}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-slate-500 to-slate-600">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-600 mb-2">3</div>
            <div className="text-slate-700 font-medium mb-2">{t('hero.integratedProducts')}</div>
            <div className="text-sm text-slate-500">{t('hero.completeEcosystem')}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-slate-700 font-medium mb-2">{t('hero.hoursSavedMonthly')}</div>
            <div className="text-sm text-slate-500">{t('hero.perInstitution')}</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="flex items-center space-x-2 text-slate-600">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium">{t('hero.socCompliant')}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <Globe className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">{t('hero.availableWorldwide')}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{t('hero.userRating')}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-600 hover:to-slate-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="/student">
              Student Portal
              <Sparkles className="ml-3 h-6 w-6" />
            </a>
          </Button>
          <Button 
            size="lg"
            asChild
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="/teacher">
              Teacher Portal
              <Users className="ml-3 h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
