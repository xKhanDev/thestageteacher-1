
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Building2, ArrowRight, CheckCircle, Users, Sparkles, PenTool, BookText, MessageSquare, Target, Zap } from "lucide-react";

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

  // Custom Dashboard Mockup Component
  const EasyTeachDashboard = () => (
    <div className="relative mx-auto max-w-lg">
      <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl">
        <div className="bg-gray-900 rounded-lg p-2 mb-2">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">easyteach.ai</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg overflow-hidden aspect-video relative">
            {/* Sidebar */}
            <div className="absolute left-0 top-0 w-16 h-full bg-white border-r border-purple-100 flex flex-col items-center py-3 space-y-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <BookText className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <PenTool className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-16 p-4 h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-800">Dashboard</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">AI Active</span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white rounded-lg p-2 border border-purple-100 shadow-sm">
                  <div className="flex items-center space-x-1 mb-1">
                    <BookText className="h-3 w-3 text-purple-600" />
                    <span className="text-xs font-medium text-gray-800">Lesson Plans</span>
                  </div>
                  <div className="text-xs text-gray-600">Generate instantly</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100 shadow-sm">
                  <div className="flex items-center space-x-1 mb-1">
                    <PenTool className="h-3 w-3 text-blue-600" />
                    <span className="text-xs font-medium text-gray-800">Feedback</span>
                  </div>
                  <div className="text-xs text-gray-600">Smart writing tools</div>
                </div>
              </div>

              {/* Floating Tooltips */}
              <div className="relative">
                <div className="absolute top-1 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-pulse">
                  <Sparkles className="h-2 w-2 inline mr-1" />
                  Generate Lesson Plan
                </div>
                <div className="absolute top-8 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                  Writing Feedback
                </div>
                <div className="absolute bottom-4 right-6 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                  Vocabulary Builder
                </div>
              </div>

              {/* Progress indicators */}
              <div className="mt-4 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Week Progress</span>
                  <span className="text-purple-600 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* AI Status Badge */}
            <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <Zap className="h-2 w-2 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">EasyTeach AI</div>
                  <div className="text-xs text-green-600">● Ready to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-6 rounded-b-2xl mx-4 shadow-lg"></div>
      <div className="bg-gray-600 h-2 rounded-b-lg mx-8 shadow-md"></div>
    </div>
  );

  return (
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

                {/* Show dashboard mockup only for EasyTeach */}
                {product.id === 'easyteach' && (
                  <div className="mb-6">
                    <EasyTeachDashboard />
                  </div>
                )}

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
  );
};

export default ProductsSection;
