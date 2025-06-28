import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BookOpen, GraduationCap, Building2, ArrowRight, CheckCircle, Users, Sparkles, Star, TrendingUp, Clock, Shield, Globe, Brain, Zap, Target, Award, MessageSquare, BarChart3, Settings, FileText, Calendar, PenTool } from "lucide-react";
import LoginModal from "@/components/auth/LoginModal";
import WaitlistModal from "@/components/WaitlistModal";

const EcertaHome = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistProduct, setWaitlistProduct] = useState('');

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
      action: () => setShowLogin(true),
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
      action: () => {
        setWaitlistProduct('Advanced AI LMS');
        setShowWaitlist(true);
      },
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
      action: () => {
        setWaitlistProduct('School Administration Platform');
        setShowWaitlist(true);
      },
      actionText: 'Join Waitlist'
    }
  ];

  const handleJoinWaitlist = (productName: string) => {
    setWaitlistProduct(productName);
    setShowWaitlist(true);
  };

  const showcaseFeatures = [
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
    { number: "30+", label: "Languages Supported", icon: Globe }
  ];

  const whyChooseUs = [
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
      {/* Navigation */}
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
                  onClick={() => setShowLogin(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover-scale transition-all duration-200"
                >
                  Login to EasyTeach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 border-purple-200 text-sm font-medium px-4 py-2 hover-scale">
              <Sparkles className="h-4 w-4 mr-2" />
              Transforming Education with AI
            </Badge>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight animate-scale-in">
            Complete EdTech 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Solutions for Education
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
            From AI-powered teaching tools to comprehensive school management, Ecerta provides 
            everything educational institutions need to thrive in the digital age.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-700 font-medium mb-2">Active Educators</div>
              <div className="text-sm text-gray-500">Teaching smarter with AI-powered tools</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-700 font-medium mb-2">Comprehensive Products</div>
              <div className="text-sm text-gray-500">Complete education ecosystem</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium mb-2">Hours Saved Weekly</div>
              <div className="text-sm text-gray-500">More time for what matters most</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 animate-fade-in">
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Globe className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Available Worldwide</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">4.9/5 User Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Most 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Comprehensive AI</span>
              <br />Education Platform
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
            {showcaseFeatures.map((feature, index) => (
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
                    onClick={() => setShowLogin(true)}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl hover-scale"
                  >
                    Explore This Feature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Laptop Mockup */}
                <div className="flex-1 relative">
                  <div className="relative mx-auto max-w-lg">
                    {/* Laptop Frame */}
                    <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl">
                      <div className="bg-gray-900 rounded-lg p-2 mb-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">easyteach.ai</div>
                        </div>
                        
                        {/* Screen Content */}
                        <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                          <img 
                            src={`https://images.unsplash.com/${feature.image}?auto=format&fit=crop&w=800&q=80`}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Dynamic UI Overlay */}
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
                    {/* Laptop Base */}
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
            {whyChooseUs.map((item, index) => (
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

      {/* Products Section */}
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

      {/* Enhanced CTA Section with More Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fade-in">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6 animate-scale-in">
            Ready to Transform Education?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 100,000 educators who have revolutionized their teaching with AI
          </p>
          
          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Save 15+ Hours Weekly</h3>
              <p className="text-sm opacity-90">Automate lesson planning, grading, and communication</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Improve Student Outcomes</h3>
              <p className="text-sm opacity-90">Personalized learning experiences for every student</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Professional Growth</h3>
              <p className="text-sm opacity-90">Access cutting-edge teaching methodologies</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
            >
              Start Free Trial Today
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => handleJoinWaitlist('All Products')}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-4 text-xl font-bold rounded-xl hover-scale transition-all duration-300"
            >
              Join All Waitlists
              <Star className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          <p className="text-sm opacity-80 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6 animate-fade-in">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover-scale">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold">Ecerta</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering education worldwide with comprehensive AI-powered solutions.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors hover-scale">Privacy</a>
            <a href="#" className="hover:text-white transition-colors hover-scale">Terms</a>
            <a href="#" className="hover:text-white transition-colors hover-scale">Support</a>
            <a href="#" className="hover:text-white transition-colors hover-scale">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showLogin && (
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}

      {showWaitlist && (
        <WaitlistModal
          isOpen={showWaitlist}
          onClose={() => setShowWaitlist(false)}
          productName={waitlistProduct}
        />
      )}
    </div>
  );
};

export default EcertaHome;
