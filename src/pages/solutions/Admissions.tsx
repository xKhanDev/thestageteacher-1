import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, FileText, Users, CheckCircle, Clock, BarChart } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const Admissions = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: FileText,
      title: "Application Management",
      description: "Streamlined application process with automated document verification"
    },
    {
      icon: Users,
      title: "Applicant Tracking",
      description: "Comprehensive tracking system from application to enrollment"
    },
    {
      icon: CheckCircle,
      title: "Automated Evaluation",
      description: "AI-powered evaluation and scoring system for fair assessments"
    },
    {
      icon: BarChart,
      title: "Admission Analytics",
      description: "Data-driven insights to optimize your admission process"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
            <UserCheck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Admissions Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simplify and streamline your admissions process with our comprehensive 
            management system designed for educational institutions.
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

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transform Your Admissions Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">75% Faster</h3>
              <p className="text-gray-600">Processing Time Reduction</p>
            </div>
            <div>
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">99% Accuracy</h3>
              <p className="text-gray-600">Document Verification</p>
            </div>
            <div>
              <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time</h3>
              <p className="text-gray-600">Analytics & Reporting</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Admissions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join institutions worldwide in streamlining their admission process.
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

export default Admissions;