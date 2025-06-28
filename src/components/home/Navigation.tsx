
import { useState } from 'react';
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
import { BookOpen, GraduationCap, Building2, Sparkles } from "lucide-react";

interface NavigationProps {
  onShowLogin: () => void;
}

const Navigation = ({ onShowLogin }: NavigationProps) => {
  const products = [
    {
      id: 'easyteach',
      name: 'EasyTeach',
      description: 'AI-powered teaching tools that save educators 15+ hours every week',
      icon: BookOpen,
      status: 'available',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'lms',
      name: 'Advanced AI LMS',
      description: 'Next-generation learning management system powered by artificial intelligence',
      icon: GraduationCap,
      status: 'coming-soon',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'admin',
      name: 'School Administration',
      description: 'Comprehensive school management platform for modern educational institutions',
      icon: Building2,
      status: 'coming-soon',
      color: 'from-green-500 to-green-600',
    }
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-purple-100 shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 animate-scale-in">
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
                          <div key={product.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover-scale">
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
                    <div className="w-96 p-4 bg-white shadow-lg border border-gray-200 animate-fade-in">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">By Category</h4>
                          <div className="space-y-2">
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              Primary
                            </NavigationMenuLink>
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              Secondary
                            </NavigationMenuLink>
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              University
                            </NavigationMenuLink>
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              Independent
                            </NavigationMenuLink>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">By Department</h4>
                          <div className="space-y-2">
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              Admissions
                            </NavigationMenuLink>
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              General Report
                            </NavigationMenuLink>
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              HR & Payroll
                            </NavigationMenuLink>
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              Finance
                            </NavigationMenuLink>
                            <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
                              Communication
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-700 hover:text-purple-600 px-3 py-2 hover:bg-purple-50 rounded-md transition-colors">
                    Resources
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-700 hover:text-purple-600 px-3 py-2 hover:bg-purple-50 rounded-md transition-colors">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-3">
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50 hover-scale transition-all duration-200">
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
