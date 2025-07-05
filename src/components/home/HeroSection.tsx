
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
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 text-sm font-medium px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            {t('hero.transformingEducation')}
          </Badge>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight animate-scale-in">
          {t('hero.title')}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent block transition-all duration-1000 animate-fade-in bg-[length:200%_100%] animate-gradient-shift">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover-scale animate-float">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 shadow-lg">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <div className="text-4xl font-bold text-primary mb-3">100K+</div>
            <div className="text-foreground font-semibold mb-2">{t('hero.activeEducators')}</div>
            <div className="text-sm text-muted-foreground">{t('hero.acrossAllPlatforms')}</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover-scale animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-accent to-accent/80 shadow-lg">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
            </div>
            <div className="text-4xl font-bold text-accent mb-3">3</div>
            <div className="text-foreground font-semibold mb-2">{t('hero.integratedProducts')}</div>
            <div className="text-sm text-muted-foreground">{t('hero.completeEcosystem')}</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover-scale animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            <div className="text-4xl font-bold text-secondary mb-3">50+</div>
            <div className="text-foreground font-semibold mb-2">{t('hero.hoursSavedMonthly')}</div>
            <div className="text-sm text-muted-foreground">{t('hero.perInstitution')}</div>
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

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            onClick={onShowLogin}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-16 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale border-0"
          >
            {t('hero.exploreEcosystem')}
            <Sparkles className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
