import { Button } from "@/components/ui/button";
import {
  Users,
  CreditCard,
  UserPlus,
  ClipboardCheck,
  Shield,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const HRPayroll = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: UserPlus,
      title: "Digital Staff Onboarding",
      description:
        "Streamlined onboarding process with role-based access management",
    },
    {
      icon: CreditCard,
      title: "Payroll Automation",
      description:
        "Automated payroll with tax calculations and benefits management",
    },
    {
      icon: ClipboardCheck,
      title: "Attendance & Leave Management",
      description:
        "Comprehensive tracking of staff attendance and leave requests",
    },
    {
      icon: Users,
      title: "Performance Evaluation",
      description: "Digital performance tracking and evaluation systems",
    },
    {
      icon: Shield,
      title: "Compliance & Records",
      description:
        "Automated compliance alerts and secure digital recordkeeping",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 icon-bg rounded-full mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            HR & Payroll
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Manage your school's most valuable asset—its people—with precision
            and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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

        {/* Why it Matters Section */}
        {/* <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Streamline HR operations while staying compliant with regulatory
            standards. Automating payroll and personnel records frees up time
            for your team to focus on people, not paperwork.
          </p>
        </div> */}

        {/* Benefits */}
        <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Streamlined HR Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <CreditCard className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Automated
              </h3>
              <p className="text-gray-200">Payroll Processing</p>
            </div>
            <div>
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">100%</h3>
              <p className="text-gray-200">Compliance Ready</p>
            </div>
            <div>
              <ClipboardCheck className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Digital</h3>
              <p className="text-gray-200">Record Management</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Modernize Your HR?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Focus on people, not paperwork with automated HR solutions.
          </p>
          <Button
            size="lg"
            onClick={() => setShowLogin(true)}
            className="my-btn text-white p-6"
          >
            Transform HR & Payroll Now
          </Button>
        </div>
      </div>

      {showLogin && (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
};

export default HRPayroll;
