import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Heart, Users2, BookOpen, Shield } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import Footer from "@/components/home/Footer";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users2, BookOpen, Shield, Star, Play, Gamepad2, Palette, Calendar, MessageCircle, Trophy, Zap } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import primarySchoolsHero from "@/assets/primary-schools-hero.jpg";
>>>>>>> main

const PrimarySchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Heart,
      title: "Age-Appropriate Learning",
<<<<<<< HEAD
      description:
        "Specially designed curriculum and tools for young learners aged 5-11",
=======
      description: "Specially designed curriculum and tools for young learners aged 5-11, with intuitive interfaces and engaging content that matches developmental stages."
>>>>>>> main
    },
    {
      icon: Users2,
      title: "Parent Engagement",
<<<<<<< HEAD
      description:
        "Enhanced communication tools to keep parents involved in their child's education",
=======
      description: "Enhanced communication tools including real-time progress updates, behavior reports, and interactive parent-teacher conferences to keep families involved."
>>>>>>> main
    },
    {
      icon: BookOpen,
      title: "Interactive Content",
<<<<<<< HEAD
      description:
        "Gamified learning experiences that make education fun and engaging",
    },
    {
      icon: Shield,
      title: "Child Safety",
      description:
        "Enhanced security features and monitoring designed specifically for young students",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <UniversalHeader onShowLogin={() => setShowLogin(true)} />

        <div className="container mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-full mb-6">
              <Heart className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Primary{" "}
              <span className="bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent">
                Schools
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nurture young minds with our specialized educational technology
              platform designed specifically for primary school environments.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="p-3 icon-bg rounded-lg  group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg/6 font-bold">{feature.title}</h2>
                  </div>
                </div>

                <p className="text-gray-600 text-base/6 pt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-[#2901B3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Trusted by Primary Schools Worldwide
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  15,000+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Young Learners
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  500+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Primary Schools
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Teacher Satisfaction
                </div>
              </div>
=======
      description: "Gamified learning experiences with educational games, animated lessons, and interactive storytelling that make education fun and memorable."
    },
    {
      icon: Shield,
      title: "Child Safety & Security",
      description: "Enhanced security features including restricted access controls, content filtering, and comprehensive monitoring designed specifically for young students."
    },
    {
      icon: Gamepad2,
      title: "Educational Gaming",
      description: "Learning through play with math games, reading adventures, science experiments, and creative activities that build core academic skills."
    },
    {
      icon: Palette,
      title: "Creative Expression",
      description: "Digital art tools, creative writing platforms, and multimedia projects that encourage imagination and artistic development."
    }
  ];

  const benefits = [
    {
      icon: Play,
      title: "Engaging Learning",
      description: "Transform education into an adventure with interactive lessons and gamified experiences."
    },
    {
      icon: Calendar,
      title: "Progress Tracking",
      description: "Detailed progress reports and developmental milestone tracking for parents and teachers."
    },
    {
      icon: MessageCircle,
      title: "Family Connection",
      description: "Seamless communication between school and home with real-time updates and messages."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Grade 2 Teacher",
      school: "Sunshine Elementary",
      content: "My students are more engaged than ever! The interactive lessons make learning feel like play, and I can see real improvement in their reading and math skills.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Principal",
      school: "Rainbow Primary School",
      content: "Parent engagement has increased by 60% since implementing Vicerta. Families love the real-time updates and progress reports.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="absolute inset-0">
          <img 
            src={primarySchoolsHero} 
            alt="Primary school classroom" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Primary Schools
            </h1>
            <p className="text-2xl mb-6 text-pink-100 leading-relaxed">
              Nurture young minds with our specialized educational technology platform designed 
              specifically for primary school environments and early childhood development.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-pink-50">
              <p className="text-lg leading-relaxed">
                Create magical learning experiences that capture young imaginations while building essential 
                foundational skills. Our platform combines playful interactive content with proven pedagogical 
                methods to ensure every child develops confidence, curiosity, and a lifelong love of learning.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setShowLogin(true)}
                className="bg-white text-primary hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Young Learners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature is thoughtfully designed with child development and educational best practices in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg">
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
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-12 mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Primary Schools Choose Vicerta</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our platform is specifically designed to meet the unique needs of young learners, 
              creating an environment where curiosity thrives and learning becomes an adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Educators & Parents</h2>
            <p className="text-xl text-gray-600">See what our primary school community is saying</p>
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
                    <p className="text-pink-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.school}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Trusted by Primary Schools Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">15,000+</div>
              <div className="text-gray-600 font-medium">Young Learners</div>
              <div className="text-sm text-gray-500 mt-1">Ages 5-11</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-600 font-medium">Primary Schools</div>
              <div className="text-sm text-gray-500 mt-1">Globally</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-gray-600 font-medium">Teacher Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Platform Rating</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">40%</div>
              <div className="text-gray-600 font-medium">Learning Improvement</div>
              <div className="text-sm text-gray-500 mt-1">Average Gain</div>
>>>>>>> main
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Primary Education?
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Join thousands of primary schools already using our platform.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn text-white p-6"
            >
              Get Started Today
            </Button>
          </div>
        </div>

<<<<<<< HEAD
        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
=======
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 text-white animate-fade-in">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-pink-200" />
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Primary Education?</h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            Join thousands of primary schools creating joyful, effective learning experiences for young minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold"
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
>>>>>>> main
      </div>
      <Footer />
    </>
  );
};

export default PrimarySchools;
