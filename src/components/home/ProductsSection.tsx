
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Building2, ArrowRight, CheckCircle, Users, Sparkles, PenTool, BookText, MessageSquare, Target, Zap, Crown } from "lucide-react";

interface ProductsSectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const ProductsSection = ({ onShowLogin, onJoinWaitlist }: ProductsSectionProps) => {
  const { t } = useTranslation();
  
  const products = [
    {
      id: 'easyteach-free',
      name: 'EasyTeach Free',
      description: 'Perfect for getting started with AI-powered teaching tools',
      longDescription: 'Get started with essential AI teaching tools including lesson planning, communication assistance, and basic content generation.',
      icon: BookOpen,
      status: 'available',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      price: 'Free',
      priceSubtext: 'Forever',
      features: [
        'Basic Lesson Planning',
        'Parent Communication Templates', 
        'Limited AI Generations (50/month)',
        'Basic Behavior Management Tools',
        'Community Support'
      ],
      users: '100,000+ Teachers',
      action: () => onShowLogin(),
      actionText: 'Get Started Free',
      popular: false
    },
    {
      id: 'easyteach-pro',
      name: 'EasyTeach Pro',
      description: 'Everything in Free, plus unlimited AI power and exclusive features',
      longDescription: 'Unlock the full potential of AI-powered teaching with unlimited generations, advanced features, and exclusive early access to new tools.',
      icon: Crown,
      status: 'available',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      price: '$89',
      priceSubtext: 'per year',
      features: [
        'Everything in Free, plus...',
        'Unlimited AI generations',
        'Continue threads with Kribi Chatbot',
        'Unlimited AI Slides generation',
        'Export to Google Slides',
        'EasyTeach for students',
        'Lifetime output history',
        'Exclusive early access to new features'
      ],
      users: 'Most Popular',
      action: () => onShowLogin(),
      actionText: 'Upgrade to Pro',
      popular: true
    },
    {
      id: 'school-admin',
      name: 'School Administration',
      description: t('products.schoolAdminDesc'),
      longDescription: 'Comprehensive school management system with AI-powered administrative tools, student tracking, and institutional analytics.',
      icon: Building2,
      status: 'coming-soon',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      price: 'Coming Soon',
      priceSubtext: '',
      features: [
        'School-wide Management Dashboard',
        'AI-Powered Administrative Assistance',
        'Student Performance Analytics',
        'Staff Management & Scheduling',
        'Parent-School Communication Hub',
        'Institutional Reporting & Insights'
      ],
      users: t('products.comingSoon'),
      action: () => onJoinWaitlist('School Administration'),
      actionText: t('products.joinWaitlist'),
      popular: false
    },
    {
      id: 'lms',
      name: t('products.advancedLMS'),
      description: t('products.advancedLMSDesc'),
      longDescription: 'Revolutionary AI-powered LMS with personalized learning paths, smart proctoring, automated content generation, gamification, predictive analytics, and blockchain certifications.',
      icon: GraduationCap,
      status: 'coming-soon',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      price: 'Coming Soon',
      priceSubtext: '',
      features: [
        'AI-Powered Personalization & Adaptive Learning',
        'AI-Generated Content & Multilingual Support', 
        'Smart Proctoring & Auto-Grading',
        'Gamification & VR/AR Integration',
        'Predictive Analytics & AI Assistant',
        'Blockchain Certificates & Corporate Features'
      ],
      users: t('products.comingSoon'),
      action: () => window.location.href = '/lms',
      actionText: 'Enter LMS Beta',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Choose Your 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade when you're ready for unlimited AI power
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={product.id} className={`group hover:shadow-2xl transition-all duration-500 border-0 ${product.bgColor} overflow-hidden relative ${product.status === 'available' ? 'hover:-translate-y-2' : ''} animate-fade-in ${product.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 px-4 py-1">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${product.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  {product.status === 'available' ? (
                    <Badge className="bg-green-100 text-green-800 border-green-200 pulse text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Available
                    </Badge>
                  ) : (
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs">
                      Coming Soon
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {product.name}
                </CardTitle>
                
                <div className="mb-3">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    {product.priceSubtext && (
                      <span className="text-gray-600 ml-1 text-sm">/{product.priceSubtext}</span>
                    )}
                  </div>
                </div>
                
                <CardDescription className="text-gray-600 text-sm leading-relaxed mb-3">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Users className="h-3 w-3 mr-1" />
                  {product.users}
                </div>
              </CardHeader>

              <CardContent className="relative pt-0">
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start text-xs text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className={feature.startsWith('Everything in Free') ? 'font-semibold text-gray-800' : ''}>{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 4 && (
                    <div className="text-xs text-gray-500 italic">
                      +{product.features.length - 4} more features
                    </div>
                  )}
                </div>

                <Button 
                  onClick={product.action}
                  className={`w-full rounded-2xl bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-medium py-2 text-sm transition-all duration-300 ${product.status === 'available' ? 'group-hover:scale-105' : ''}`}
                >
                  {product.actionText}
                  <ArrowRight className="ml-1 h-3 w-3" />
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
