
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Building2, Sparkles, Users, TrendingUp, Heart, Zap, Award, Target, FileText, HelpCircle, Shield, Mail } from "lucide-react";

interface NavigationProps {
  onShowLogin: () => void;
}

const Navigation = ({ onShowLogin }: NavigationProps) => {
  const navigate = useNavigate();
  
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
    // For now, just show an alert - you can replace this with actual demo booking logic
    alert('Demo booking functionality will be implemented soon!');
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-purple-100 shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 animate-scale-in cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ecerta
              </h1>
              <p className="text-xs text-gray-500">Educational Technology Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 bg-transparent hover:bg-purple-50 transition-all duration-200">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-white shadow-lg border border-gray-200 animate-fade-in">
                      <div className="space-y-3">
                        {products.map((product) => (
                          <div 
                            key={product.id} 
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover-scale"
                            onClick={product.onClick}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${product.color}`}>
                              <product.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                                {product.status === 'available' ? (
                                  <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">Available</Badge>
                                ) : (
                                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs">Coming Soon</Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 bg-transparent hover:bg-purple-50 transition-all duration-200">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white shadow-lg border border-gray-200 animate-fade-in">
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 mb-3">By Institution Type</h3>
                        <div className="space-y-2">
                          {solutionsByCategory.map((solution, index) => (
                            <div key={index} className="group p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${solution.color} group-hover:scale-110 transition-transform duration-200`}>
                                  <solution.icon className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                                  {solution.title}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button 
                        onClick={handleBookDemo}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-sm w-full"
                      >
                        Book Demo
                      </Button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 bg-transparent hover:bg-purple-50 transition-all duration-200">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white shadow-lg border border-gray-200 animate-fade-in">
                      <div className="space-y-2">
                        {resourcesMenu.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover-scale"
                            onClick={item.onClick}
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                              <item.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium text-gray-900 hover:text-orange-700 transition-colors">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 bg-transparent hover:bg-purple-50 transition-all duration-200">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white shadow-lg border border-gray-200 animate-fade-in">
                      <div className="space-y-2">
                        {aboutMenu.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover-scale"
                            onClick={item.onClick}
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-r from-slate-500 to-blue-500">
                              <item.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium text-gray-900 hover:text-slate-700 transition-colors">
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
              <Button 
                variant="outline" 
                className="text-purple-600 border-purple-200 hover:bg-purple-50 hover-scale transition-all duration-200"
                onClick={handleBookDemo}
              >
                Book a Demo
              </Button>
              <Button 
                onClick={onShowLogin}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover-scale transition-all duration-200"
              >
                Login to EasyTeach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
