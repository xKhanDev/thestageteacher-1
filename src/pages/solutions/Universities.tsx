import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen, TrendingUp, Brain, Laptop, Globe, Database, Search, GraduationCap, LineChart, Users2, Calendar, MessageCircle, Trophy, Zap, Star } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import universitiesHero from "@/assets/universities-hero.jpg";

const Universities = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Advanced Research Tools",
      description: "AI-powered research assistance, academic collaboration platforms, and sophisticated data analysis tools for groundbreaking discoveries."
    },
    {
      icon: Users,
      title: "Large-Scale Management",
      description: "Handle thousands of students with sophisticated enrollment systems, automated grading, and comprehensive academic tracking."
    },
    {
      icon: Laptop,
      title: "Digital Campus",
      description: "Complete virtual learning environment with interactive lecture halls, online laboratories, and immersive educational experiences."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Advanced analytics for academic performance, institutional efficiency, predictive modeling, and strategic decision-making."
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "International exchange programs, cross-cultural learning initiatives, and global research partnerships facilitated through our platform."
    },
    {
      icon: Database,
      title: "Research Data Management",
      description: "Secure, scalable research data storage, version control, and collaboration tools for multi-institutional research projects."
    }
  ];

  const benefits = [
    {
      icon: Search,
      title: "Research Excellence",
      description: "Accelerate breakthrough discoveries with AI-powered research tools and collaborative platforms."
    },
    {
      icon: GraduationCap,
      title: "Student Success",
      description: "Comprehensive support systems that guide students from admission to graduation and beyond."
    },
    {
      icon: LineChart,
      title: "Institutional Growth",
      description: "Data-driven insights to optimize operations, improve outcomes, and drive strategic growth."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Amanda Foster",
      role: "Dean of Academic Affairs",
      school: "Metropolitan University",
      content: "Vicerta has transformed our approach to higher education. Research productivity has increased by 40% and student satisfaction is at an all-time high.",
      rating: 5
    },
    {
      name: "Prof. David Kim",
      role: "Computer Science Department",
      school: "Tech Institute",
      content: "The collaborative research tools and virtual lab environments have enabled us to conduct experiments that were previously impossible. It's revolutionary.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/90 to-indigo-600/90 text-white">
        <div className="absolute inset-0">
          <img 
            src={universitiesHero} 
            alt="University classroom" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Universities
            </h1>
            <p className="text-2xl mb-6 text-purple-100 leading-relaxed">
              Empower higher education with advanced learning management systems designed 
              for universities, research institutions, and academic excellence at scale.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-purple-50">
              <p className="text-lg leading-relaxed">
                Transform higher education with cutting-edge research tools, global collaboration platforms, 
                and advanced analytics. Our comprehensive ecosystem supports everything from undergraduate 
                programs to doctoral research, enabling institutions to lead in academic innovation and 
                prepare students for tomorrow's challenges.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setShowLogin(true)}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Key Features Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leading Innovation in Higher Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology solutions that drive research breakthroughs, enhance academic excellence, and prepare students for global leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Universities Choose Vicerta</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our platform is built for the unique demands of higher education, supporting research excellence, 
              academic innovation, and the development of tomorrow's leaders and thinkers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognized by Academic Leaders</h2>
            <p className="text-xl text-gray-600">See how universities are advancing with Vicerta</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-purple-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.school}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Leading Universities Trust Vicerta</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">250,000+</div>
              <div className="text-gray-600 font-medium">University Students</div>
              <div className="text-sm text-gray-500 mt-1">Undergraduate & Graduate</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-gray-600 font-medium">Universities</div>
              <div className="text-sm text-gray-500 mt-1">Globally</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-600 font-medium">Research Efficiency</div>
              <div className="text-sm text-gray-500 mt-1">Improvement Rate</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-gray-600 font-medium">Faculty Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Platform Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white animate-fade-in">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-purple-200" />
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Higher Education?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join leading universities worldwide in advancing research, innovation, and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Your Free Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>

      {showLogin && (
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
};

export default Universities;