import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { TrendingUp, Users, Brain, Target, Lightbulb } from "lucide-react";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, BookOpen, Brain, Target, Lightbulb, GraduationCap, LineChart, Users2, Calendar, MessageCircle, Trophy, Zap, Star } from "lucide-react";
>>>>>>> main
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import secondarySchoolsHero from "@/assets/secondary-schools-hero.jpg";
<<<<<<< HEAD
import Footer from "@/components/home/Footer";
=======
>>>>>>> main

const SecondarySchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Advanced Learning Paths",
<<<<<<< HEAD
      description:
        "Personalized curriculum designed for teenage learners and career preparation",
=======
      description: "Personalized curriculum designed for teenage learners with adaptive pathways that adjust to individual learning styles and career aspirations."
>>>>>>> main
    },
    {
      icon: Target,
      title: "Exam Preparation",
<<<<<<< HEAD
      description:
        "Comprehensive tools for standardized tests and university entrance exams",
=======
      description: "Comprehensive tools for standardized tests, university entrance exams, and certification programs with practice tests and progress tracking."
>>>>>>> main
    },
    {
      icon: Users,
      title: "Collaborative Learning",
<<<<<<< HEAD
      description: "Group projects and peer-to-peer learning environments",
    },
    {
      icon: Lightbulb,
      title: "STEM Focus",
      description:
        "Advanced science, technology, engineering, and mathematics programs",
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
              <TrendingUp className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Secondary Schools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prepare students for higher education and careers with our
              comprehensive secondary education platform designed for grades
              6-12.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
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
          <div className="bg-[#2901B3] rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Empowering Secondary Education
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-base/5 md:text-4xl font-bold  mb-2 text-white">
                  50,000+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Secondary Students
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold  mb-2 text-white">
                  300+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  High Schools
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold  mb-2 text-white">
                  85%
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  University Acceptance
                </div>
              </div>
=======
      description: "Group projects, peer-to-peer learning environments, and digital collaboration tools that prepare students for modern workplace dynamics."
    },
    {
      icon: Lightbulb,
      title: "STEM Excellence",
      description: "Advanced science, technology, engineering, and mathematics programs with virtual labs, coding environments, and research projects."
    },
    {
      icon: GraduationCap,
      title: "College & Career Readiness",
      description: "University application support, career guidance tools, internship programs, and skill development for future success."
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Detailed academic analytics, predictive insights, and personalized recommendations to optimize student success and university preparation."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Drive higher achievement with personalized learning paths and comprehensive progress tracking."
    },
    {
      icon: Users2,
      title: "Future-Ready Skills",
      description: "Develop critical thinking, collaboration, and digital literacy skills essential for higher education."
    },
    {
      icon: Calendar,
      title: "University Preparation",
      description: "Comprehensive support for college applications, standardized tests, and career planning."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rebecca Martinez",
      role: "High School Principal",
      school: "Lincoln Academy",
      content: "Our university acceptance rate increased by 25% after implementing Vicerta. Students are better prepared and more confident in their academic abilities.",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "AP Chemistry Teacher",
      school: "Riverside High School",
      content: "The virtual lab simulations and interactive content have revolutionized how I teach. Students understand complex concepts much faster.",
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
            src={secondarySchoolsHero} 
            alt="Secondary school classroom" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Secondary Schools
            </h1>
            <p className="text-2xl mb-6 text-blue-100 leading-relaxed">
              Prepare students for higher education and successful careers with our comprehensive 
              secondary education platform designed for grades 6-12 and beyond.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-blue-50">
              <p className="text-lg leading-relaxed">
                Bridge the critical gap between foundational learning and university readiness. Our platform empowers 
                secondary schools to deliver advanced academic programs, comprehensive exam preparation, and essential 
                life skills that ensure students thrive in higher education and their future careers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setShowLogin(true)}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Empowering Academic Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced tools and resources designed to challenge, inspire, and prepare students for their future academic and professional endeavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
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
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Secondary Schools Choose Vicerta</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our platform bridges the gap between secondary education and higher learning, 
              providing students with the tools and confidence they need to succeed in their next chapter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Educational Leaders</h2>
            <p className="text-xl text-gray-600">Hear from principals and teachers making a difference</p>
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
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.school}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Empowering Secondary Education Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">50,000+</div>
              <div className="text-gray-600 font-medium">Secondary Students</div>
              <div className="text-sm text-gray-500 mt-1">Grades 6-12</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">300+</div>
              <div className="text-gray-600 font-medium">High Schools</div>
              <div className="text-sm text-gray-500 mt-1">Worldwide</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">85%</div>
              <div className="text-gray-600 font-medium">University Acceptance</div>
              <div className="text-sm text-gray-500 mt-1">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">92%</div>
              <div className="text-gray-600 font-medium">Career Readiness</div>
              <div className="text-sm text-gray-500 mt-1">Graduate Rating</div>
>>>>>>> main
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Elevate Secondary Education?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join secondary schools worldwide in preparing students for
              success.
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
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white animate-fade-in">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Secondary Education?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join secondary schools worldwide in preparing students for university success and meaningful careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
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

export default SecondarySchools;
