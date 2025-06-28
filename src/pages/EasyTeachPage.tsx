
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, CheckCircle, Users, Clock, Brain, Zap, Target, Award, Shield, Sparkles, TrendingUp } from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import LoginModal from "@/components/auth/LoginModal";

const EasyTeachPage = () => {
  const [showLogin, setShowLogin] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
      <Navigation onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
            <CheckCircle className="h-3 w-3 mr-1" />
            Available Now
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            EasyTeach: AI-Powered Teaching
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Revolution</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your teaching experience with smart lesson planning, instant communication tools, behavior support, and personalized learning resources that save you 15+ hours every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Teaching Smarter
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center justify-center text-sm text-gray-500 mb-8">
            <Users className="h-4 w-4 mr-2" />
            100,000+ Teachers Worldwide
          </div>
        </div>
      </section>

      {/* Platform Stats Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platformStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
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
        </div>
      </section>

      {/* Feature Showcase with Laptop Mockups */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Most Comprehensive AI Teaching Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lesson planning to student analytics, EasyTeach provides everything educators need in one powerful, AI-driven platform
            </p>
          </div>

          <div className="space-y-20">
            {easyteachFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
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
                    onClick={() => setShowLogin(true)}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl"
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
          <div className="text-center mb-16">
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
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 100,000+ educators who are already saving 15+ hours weekly with EasyTeach
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Save 15+ Hours Weekly</h3>
              <p className="text-sm opacity-90">Automate lesson planning and communication</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Join 100K+ Educators</h3>
              <p className="text-sm opacity-90">Be part of the teaching revolution</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Improve Student Outcomes</h3>
              <p className="text-sm opacity-90">Data-driven insights for better teaching</p>
            </div>
          </div>

          <Button 
            size="lg"
            onClick={() => setShowLogin(true)}
            className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Teaching Smarter Today
            <Sparkles className="ml-3 h-6 w-6" />
          </Button>
          
          <p className="text-sm opacity-80 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      <Footer />

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
};

export default EasyTeachPage;
