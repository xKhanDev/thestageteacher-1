import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, BookOpen, Brain, Target, Lightbulb } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const SecondarySchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Advanced Learning Paths",
      description: "Personalized curriculum designed for teenage learners and career preparation"
    },
    {
      icon: Target,
      title: "Exam Preparation",
      description: "Comprehensive tools for standardized tests and university entrance exams"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Group projects and peer-to-peer learning environments"
    },
    {
      icon: Lightbulb,
      title: "STEM Focus",
      description: "Advanced science, technology, engineering, and mathematics programs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Secondary Schools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prepare students for higher education and careers with our comprehensive 
            secondary education platform designed for grades 6-12.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Empowering Secondary Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Secondary Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">High Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">University Acceptance</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Secondary Education?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join secondary schools worldwide in preparing students for success.
          </p>
          <Button 
            size="lg"
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg"
          >
            Get Started Today
          </Button>
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

export default SecondarySchools;