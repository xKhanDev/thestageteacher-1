
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, GraduationCap, Brain, BarChart3, Users, BookOpen, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";

const AdvancedLMS = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Adaptive learning paths that adjust to each student's pace and learning style"
    },
    {
      icon: BarChart3,
      title: "Intelligent Analytics",
      description: "Real-time insights into student progress and engagement patterns"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Enhanced group work and peer-to-peer learning experiences"
    },
    {
      icon: BookOpen,
      title: "Content Intelligence",
      description: "AI-generated quizzes, summaries, and supplementary materials"
    },
    {
      icon: Clock,
      title: "Automated Grading",
      description: "Smart assessment tools that save time and provide detailed feedback"
    },
    {
      icon: Target,
      title: "Learning Objectives",
      description: "Clear pathways aligned with curriculum standards and goals"
    }
  ];

  const benefits = [
    "50% reduction in administrative tasks",
    "Improved student engagement by 75%",
    "Personalized learning for every student",
    "Real-time progress tracking",
    "Seamless integration with existing systems"
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-purple-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
              Coming Soon
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="p-4 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Advanced 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI LMS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The next generation learning management system that adapts to every student's needs through the power of artificial intelligence.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl text-lg">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Revolutionary Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Transform Your Institution
          </h2>
          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center text-lg text-gray-700 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl text-lg">
            Get Early Access
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AdvancedLMS;
