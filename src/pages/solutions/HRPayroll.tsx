
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CreditCard, UserPlus, ClipboardCheck, Shield } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const HRPayroll = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: UserPlus,
      title: "Digital Staff Onboarding",
      description: "Streamlined onboarding process with role-based access management"
    },
    {
      icon: CreditCard,
      title: "Payroll Automation",
      description: "Automated payroll with tax calculations and benefits management"
    },
    {
      icon: ClipboardCheck,
      title: "Attendance & Leave Management",
      description: "Comprehensive tracking of staff attendance and leave requests"
    },
    {
      icon: Users,
      title: "Performance Evaluation",
      description: "Digital performance tracking and evaluation systems"
    },
    {
      icon: Shield,
      title: "Compliance & Records",
      description: "Automated compliance alerts and secure digital recordkeeping"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            HR & Payroll
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Manage your school's most valuable asset—its people—with precision and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why it Matters Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why it Matters</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Streamline HR operations while staying compliant with regulatory standards. 
            Automating payroll and personnel records frees up time for your team to focus on people, not paperwork.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Streamlined HR Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated</h3>
              <p className="text-gray-600">Payroll Processing</p>
            </div>
            <div>
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100%</h3>
              <p className="text-gray-600">Compliance Ready</p>
            </div>
            <div>
              <ClipboardCheck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital</h3>
              <p className="text-gray-600">Record Management</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your HR?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Focus on people, not paperwork with automated HR solutions.
          </p>
          <Button 
            size="lg"
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 text-lg"
          >
            Transform HR & Payroll Now
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

export default HRPayroll;
