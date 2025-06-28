
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Building2, ArrowRight, CheckCircle, Users, Clock, Brain, Zap, Target, Award, Shield, Sparkles, TrendingUp } from "lucide-react";

interface ProductsSectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const ProductsSection = ({ onShowLogin, onJoinWaitlist }: ProductsSectionProps) => {
  const products = [
    {
      id: 'easyteach',
      name: 'EasyTeach',
      description: 'AI-powered teaching tools that save educators 15+ hours every week',
      longDescription: 'Transform your teaching experience with smart lesson planning, instant communication tools, behavior support, and personalized learning resources.',
      icon: BookOpen,
      status: 'available',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Smart Lesson Planning', 'Parent Communication', 'Behavior Management', '50+ AI Tools'],
      users: '100,000+ Teachers',
      action: () => onShowLogin(),
      actionText: 'Start Teaching Smarter'
    },
    {
      id: 'lms',
      name: 'Advanced AI LMS',
      description: 'Next-generation learning management system powered by artificial intelligence',
      longDescription: 'Revolutionary LMS that adapts to student learning patterns, provides intelligent analytics, and automates administrative tasks for seamless education delivery.',
      icon: GraduationCap,
      status: 'coming-soon',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Adaptive Learning Paths', 'AI-Powered Analytics', 'Smart Assessments', 'Automated Grading'],
      users: 'Coming Soon',
      action: () => onJoinWaitlist('Advanced AI LMS'),
      actionText: 'Join Waitlist'
    },
    {
      id: 'admin',
      name: 'School Administration',
      description: 'Comprehensive school management platform for modern educational institutions',
      longDescription: 'Streamline your school operations with integrated student information systems, staff management, financial tracking, and communication tools.',
      icon: Building2,
      status: 'coming-soon',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      features: ['Student Information System', 'Staff Management', 'Financial Tracking', 'Communication Hub'],
      users: 'Coming Soon',
      action: () => onJoinWaitlist('School Administration Platform'),
      actionText: 'Join Waitlist'
    }
  ];

  // EasyTeach specific showcase features
  const easyteachFeatures = [
    {
      title: "AI-Powered Lesson Planning",
      description: "Generate comprehensive lesson plans in minutes with our advanced AI that understands curriculum standards and learning objectives.",
      image: "photo-1461749280684-dccba630e2f6",
      features: ["Curriculum-aligned content", "Differentiated instruction", "Assessment integration", "Real-time collaboration"]
    },
    {
      title: "Smart Communication Hub", 
      description: "Streamline parent communication with AI-generated emails, progress reports, and behavioral updates that maintain professional tone.",
      image: "photo-1486312338219-ce68d2c6f44d",
      features: ["Automated parent emails", "Progress tracking", "Behavioral reports", "Multi-language support"]
    },
    {
      title: "Intelligent Analytics Dashboard",
      description: "Get deep insights into student performance, engagement patterns, and learning outcomes with our comprehensive analytics suite.",
      image: "photo-1498050108023-c5249f4df085",
      features: ["Performance analytics", "Engagement tracking", "Predictive insights", "Custom reporting"]
    }
  ];

  const platformStats = [
    { number: "50+", label: "AI-Powered Tools", icon: Brain },
    { number: "15", label: "Hours Saved Weekly", icon: Clock },
    { number: "100K+", label: "Educators Worldwide", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "AI Assistant Available", icon: Zap },
    { number: "30+", label: "Languages Supported", icon: Target }
  ];

  const whyChooseEasyTeach = [
    {
      icon: Target,
      title: "Purpose-Built for Education",
      description: "Unlike generic AI tools, EasyTeach is specifically designed for educators, understanding the unique challenges and requirements of the education sector."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Over 100,000 educators have saved 15+ hours weekly while improving student outcomes and engagement through our platform."
    },
    {
      icon: Shield,
      title: "Privacy & Security First",
      description: "FERPA compliant with enterprise-grade security. Your data and your students' information are protected with the highest standards."
    },
    {
      icon: Sparkles,
      title: "Continuous Innovation",
      description: "Our AI models are constantly updated with the latest educational research and teaching methodologies to provide cutting-edge solutions."
    }
  ];

  return (
    <>
      {/* Products Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Product 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of modern education, from individual teachers to entire institutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className={`group hover:shadow-2xl transition-all duration-500 border-0 ${product.bgColor} overflow-hidden relative ${product.status === 'available' ? 'hover:-translate-y-2' : ''} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${product.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    {product.status === 'available' ? (
                      <Badge className="bg-green-100 text-green-800 border-green-200 pulse">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available Now
                      </Badge>
                    ) : (
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    {product.users}
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {product.longDescription}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={product.action}
                    className={`w-full rounded-2xl bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-medium py-3 transition-all duration-300 ${product.status === 'available' ? 'group-hover:scale-105' : ''}`}
                  >
                    {product.actionText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EasyTeach Detailed Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              EasyTeach: The Most 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Comprehensive AI</span>
              <br />Teaching Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lesson planning to student analytics, EasyTeach provides everything educators need in one powerful, AI-driven platform
            </p>
          </div>

          {/* Platform Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {platformStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Feature Showcase with Laptop Mockups */}
          <div className="space-y-20">
            {easyteachFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={onShowLogin}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl hover-scale"
                  >
                    Explore This Feature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Laptop Mockup */}
                <div className="flex-1 relative">
                  <div className="relative mx-auto max-w-lg">
                    <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl">
                      <div className="bg-gray-900 rounded-lg p-2 mb-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">easyteach.ai</div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                          <img 
                            src={`https://images.unsplash.com/${feature.image}?auto=format&fit=crop&w=800&q=80`}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent">
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                                      <Sparkles className="h-3 w-3 text-white" />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-800">EasyTeach AI</span>
                                  </div>
                                  <div className="text-xs text-green-600 font-medium">● Active</div>
                                </div>
                                <div className="text-xs text-gray-600">
                                  {index === 0 && "Generating personalized lesson plan for Grade 5 Mathematics..."}
                                  {index === 1 && "Drafting parent communication for student progress update..."}
                                  {index === 2 && "Analyzing student performance data and generating insights..."}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700 h-6 rounded-b-2xl mx-4 shadow-lg"></div>
                    <div className="bg-gray-600 h-2 rounded-b-lg mx-8 shadow-md"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EasyTeach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why EasyTeach is the 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Educator's Choice</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by educators, for educators. We understand your challenges and provide solutions that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseEasyTeach.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
