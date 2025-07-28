import { Button } from "@/components/ui/button";
import { Target, Award, Users, Trophy, Crown } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const IndependentSchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Award,
      title: "Premium Education Tools",
      description:
        "Exclusive features and personalized learning experiences for independent institutions",
    },
    {
      icon: Users,
      title: "Small Class Management",
      description:
        "Tailored tools for intimate learning environments and individual attention",
    },
    {
      icon: Trophy,
      title: "Excellence Tracking",
      description:
        "Advanced analytics to maintain and showcase academic excellence",
    },
    {
      icon: Crown,
      title: "Custom Branding",
      description:
        "White-label solutions that reflect your school's unique identity and values",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 icon-bg rounded-full mb-6">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Independent Schools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your independent institution with premium educational
            technology designed for excellence and personalized learning
            experiences.
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
        <div className="bg-[#2901b3] rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Excellence in Independent Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">25,000+</div>
              <div className="text-gray-200">Independent Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-200">Independent Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-200">Parent Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enhance Your Independent School?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join elite independent schools in delivering exceptional education.
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

export default IndependentSchools;
