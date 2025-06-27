
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Building2, ArrowRight, CheckCircle, Users, Sparkles, Star } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-purple-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ecerta
                </h1>
                <p className="text-xs text-gray-500">Educational Technology Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                Products
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                About Us
              </Button>
              <Button 
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                Sign In to EasyTeach
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 border-purple-200 text-sm font-medium px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Transforming Education with AI
            </Badge>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Complete EdTech 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Solutions for Education
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            From AI-powered teaching tools to comprehensive school management, Ecerta provides 
            everything educational institutions need to thrive in the digital age.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">100K+</div>
              <div className="text-gray-600 text-sm">Active Educators</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
              <div className="text-gray-600 text-sm">Comprehensive Products</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Hours Saved Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Product 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of modern education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className={`group hover:shadow-2xl transition-all duration-300 border-0 ${product.bgColor} overflow-hidden relative ${product.status === 'available' ? 'hover:-translate-y-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${product.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    {product.status === 'available' ? (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available Now
                      </Badge>
                    ) : (
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
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
                    className={`w-full rounded-2xl bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-medium py-3 transition-all duration-200 ${product.status === 'available' ? 'group-hover:scale-105' : ''}`}
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with EasyTeach today and be the first to know when our other products launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Try EasyTeach Free
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => handleJoinWaitlist('All Products')}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-4 text-xl font-bold rounded-xl"
            >
              Join All Waitlists
              <Star className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold">Ecerta</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering education worldwide with comprehensive AI-powered solutions.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
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
