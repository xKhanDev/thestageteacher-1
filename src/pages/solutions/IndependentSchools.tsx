import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, BookOpen, Users, Trophy, Star, Crown, Shield, Gem, Settings, LineChart, Users2, Calendar, MessageCircle, Zap } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import independentSchoolsHero from "@/assets/independent-schools-hero.jpg";

const IndependentSchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Award,
      title: "Premium Education Tools",
      description: "Exclusive features and personalized learning experiences designed specifically for independent institutions with the highest academic standards."
    },
    {
      icon: Users,
      title: "Small Class Management",
      description: "Tailored tools for intimate learning environments that enable individual attention, personalized guidance, and close student-teacher relationships."
    },
    {
      icon: Trophy,
      title: "Excellence Tracking",
      description: "Advanced analytics and reporting systems to maintain, measure, and showcase academic excellence with detailed performance insights."
    },
    {
      icon: Crown,
      title: "Custom Branding",
      description: "White-label solutions that reflect your school's unique identity, values, and prestigious reputation with complete brand customization."
    },
    {
      icon: Shield,
      title: "Premium Support",
      description: "Dedicated account management, priority technical support, and personalized implementation services for seamless integration."
    },
    {
      icon: Gem,
      title: "Elite Features",
      description: "Access to cutting-edge educational technology, beta features, and exclusive tools available only to independent institutions."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Personalized Excellence",
      description: "Deliver individualized education that matches your institution's commitment to student success."
    },
    {
      icon: Settings,
      title: "Complete Customization",
      description: "Fully customizable platform that adapts to your unique pedagogical approach and institutional values."
    },
    {
      icon: LineChart,
      title: "Premium Analytics",
      description: "Sophisticated reporting and insights that demonstrate ROI and academic achievement to stakeholders."
    }
  ];

  const testimonials = [
    {
      name: "Margaret Thornfield",
      role: "Head of School",
      school: "Prestigious Academy",
      content: "Vicerta understands the unique needs of independent schools. Our parents love the detailed insights, and our teachers appreciate the sophisticated tools.",
      rating: 5
    },
    {
      name: "Dr. Charles Wellington",
      role: "Academic Director",
      school: "Elite Preparatory School",
      content: "The level of customization and attention to detail is exactly what our institution needed. It reflects our commitment to excellence in every aspect.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600/90 to-teal-600/90 text-white">
        <div className="absolute inset-0">
          <img 
            src={independentSchoolsHero} 
            alt="Independent school classroom" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Independent Schools
            </h1>
            <p className="text-2xl mb-6 text-emerald-100 leading-relaxed">
              Elevate your independent institution with premium educational technology 
              designed for excellence, prestige, and personalized learning experiences.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-emerald-50">
              <p className="text-lg leading-relaxed">
                Preserve your institution's distinctive character while embracing innovative educational 
                technology. Our flexible platform adapts to your unique curriculum, pedagogical approach, 
                and community values, ensuring that tradition and innovation work together to deliver 
                unparalleled educational excellence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setShowLogin(true)}
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
              >
                Start Premium Trial
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Schedule Private Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Key Features Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Designed for Educational Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature is crafted to meet the sophisticated needs of independent schools that demand the highest standards in education and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
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
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Independent Schools Choose Vicerta</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We understand that independent schools operate at the pinnacle of educational excellence. 
              Our platform is designed to enhance your institution's reputation while delivering unmatched educational outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Elite Institutions</h2>
            <p className="text-xl text-gray-600">Hear from leaders at prestigious independent schools</p>
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
                    <p className="text-emerald-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.school}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Excellence in Independent Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">25,000+</div>
              <div className="text-gray-600 font-medium">Elite Students</div>
              <div className="text-sm text-gray-500 mt-1">Premium Education</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-gray-600 font-medium">Independent Schools</div>
              <div className="text-sm text-gray-500 mt-1">Worldwide</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-gray-600 font-medium">Parent Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Premium Rating</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">96%</div>
              <div className="text-gray-600 font-medium">University Placement</div>
              <div className="text-sm text-gray-500 mt-1">Top-Tier Institutions</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white animate-fade-in">
          <Crown className="h-16 w-16 mx-auto mb-6 text-emerald-200" />
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Independent School?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join elite independent schools in delivering exceptional education with technology that matches your commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Premium Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Contact Premium Support
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

export default IndependentSchools;