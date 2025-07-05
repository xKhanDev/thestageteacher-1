
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import LanguageSelector from '@/components/LanguageSelector';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Building2, Sparkles, Users, TrendingUp, Heart, Zap, Award, Target, FileText, HelpCircle, Shield, Mail, UserCheck, FileBarChart, DollarSign, MessageSquare, School } from "lucide-react";

interface NavigationProps {
  onShowLogin: () => void;
}

const Navigation = ({ onShowLogin }: NavigationProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const products = [
    {
      id: 'easyteach',
      name: 'EasyTeach',
      description: 'AI-powered teaching tools',
      icon: BookOpen,
      status: 'available',
      color: 'from-blue-500 to-blue-600',
      onClick: () => navigate('/easyteach'),
    },
    {
      id: 'lms',
      name: 'Advanced AI LMS',
      description: 'Next-generation learning management',
      icon: GraduationCap,
      status: 'coming-soon',
      color: 'from-purple-500 to-purple-600',
      onClick: () => navigate('/advanced-lms'),
    },
    {
      id: 'admin',
      name: 'School Administration',
      description: 'Comprehensive school management',
      icon: Building2,
      status: 'coming-soon',
      color: 'from-green-500 to-green-600',
      onClick: () => navigate('/school-administration'),
    }
  ];

  const solutionsByCategory = [
    {
      title: "Primary Schools",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Secondary Schools",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Universities",
      icon: Award,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Independent Schools",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    }
  ];

  const solutionsByDepartment = [
    {
      title: "Admissions",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "General Report",
      icon: FileBarChart,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "HR & Payroll",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Finance",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Communication",
      icon: MessageSquare,
      color: "from-pink-500 to-rose-500",
    }
  ];

  const resourcesMenu = [
    {
      title: "Case Studies",
      icon: FileText,
      onClick: () => navigate('/case-studies'),
    },
    {
      title: "Blog",
      icon: BookOpen,
      onClick: () => navigate('/blog'),
    },
    {
      title: "Knowledge Base",
      icon: HelpCircle,
      onClick: () => navigate('/knowledge-base'),
    }
  ];

  const aboutMenu = [
    {
      title: "Partners & Integrations",
      icon: Zap,
      onClick: () => navigate('/partners-integrations'),
    },
    {
      title: "Data Protection & GDPR",
      icon: Shield,
      onClick: () => navigate('/data-protection'),
    },
    {
      title: "Contact Us",
      icon: Mail,
      onClick: () => navigate('/contact-us'),
    }
  ];

  const handleBookDemo = () => {
    navigate('/contact-us');
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 animate-scale-in cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-white">
              <span className="text-white font-bold text-lg sm:text-xl">V</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Vivicerta
              </h1>
              <p className="text-xs text-muted-foreground hidden lg:block">Educational Technology Platform</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-accent/10 transition-all duration-200">
                    {t('navigation.products')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-background shadow-lg border border-border animate-fade-in">
                      <div className="space-y-3">
                        {products.map((product) => (
                          <div 
                            key={product.id} 
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer hover-scale"
                            onClick={product.onClick}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${product.color}`}>
                              <product.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold text-foreground">{product.name}</h4>
                                {product.status === 'available' ? (
                                  <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">{t('navigation.available')}</Badge>
                                ) : (
                                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs">{t('navigation.comingSoon')}</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-accent/10 transition-all duration-200">
                    {t('navigation.solutions')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4 bg-background shadow-lg border border-border animate-fade-in">
                      <div className="grid grid-cols-2 gap-6">
                        {/* By Category */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">{t('navigation.byCategory')}</h3>
                          <div className="space-y-2">
                            {solutionsByCategory.map((solution, index) => (
                              <div key={index} className="group p-2 rounded-lg hover:bg-accent/10 transition-all duration-200 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${solution.color} group-hover:scale-110 transition-transform duration-200`}>
                                    <solution.icon className="h-3 w-3 text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {solution.title}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* By Department */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">{t('navigation.byDepartment')}</h3>
                          <div className="space-y-2">
                            {solutionsByDepartment.map((solution, index) => (
                              <div key={index} className="group p-2 rounded-lg hover:bg-accent/10 transition-all duration-200 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${solution.color} group-hover:scale-110 transition-transform duration-200`}>
                                    <solution.icon className="h-3 w-3 text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {solution.title}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <Button 
                          onClick={handleBookDemo}
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm w-full"
                        >
                          {t('navigation.bookDemo')}
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-accent/10 transition-all duration-200">
                    {t('navigation.resources')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-background shadow-lg border border-border animate-fade-in">
                      <div className="space-y-2">
                        {resourcesMenu.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer hover-scale"
                            onClick={item.onClick}
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                              <item.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium text-foreground hover:text-orange-700 transition-colors">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-accent/10 transition-all duration-200">
                    {t('navigation.aboutUs')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-background shadow-lg border border-border animate-fade-in">
                      <div className="space-y-2">
                        {aboutMenu.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer hover-scale"
                            onClick={item.onClick}
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-r from-slate-500 to-blue-500">
                              <item.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium text-foreground hover:text-slate-700 transition-colors">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-3">
              <LanguageSelector />
              <Button 
                variant="outline" 
                className="text-primary border-border hover:bg-accent/10 hover-scale transition-all duration-200"
                onClick={handleBookDemo}
              >
                {t('navigation.contact')}
              </Button>
              <Button 
                onClick={onShowLogin}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white hover-scale transition-all duration-200"
              >
                {t('navigation.login')}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              onClick={onShowLogin}
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm px-4"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
