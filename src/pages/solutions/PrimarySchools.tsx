import { Button } from "@/components/ui/button";
import { Heart, Users2, BookOpen, Shield } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const PrimarySchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Heart,
      title: "Age-Appropriate Learning",
      description:
        "Specially designed curriculum and tools for young learners aged 5-11",
    },
    {
      icon: Users2,
      title: "Parent Engagement",
      description:
        "Enhanced communication tools to keep parents involved in their child's education",
    },
    {
      icon: BookOpen,
      title: "Interactive Content",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 icon-bg rounded-full mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
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

        {/* Statistics */}
        <div className="bg-[#2901B3] rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Trusted by Primary Schools Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">15,000+</div>
              <div className="text-gray-200">Young Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-200">Primary Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-200">Teacher Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Primary Education?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of primary schools already using our platform.
          </p>
          <Button
            size="lg"
            onClick={() => setShowLogin(true)}
            className="my-btn text-white p-6"
          >
            Get Started Today
          </Button>
        </div>
      </div>

      {showLogin && (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
};

export default PrimarySchools;
