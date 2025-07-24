
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Megaphone, Bell, Globe, Users } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const Communication = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Megaphone,
      title: "Mass Announcements",
      description: "Send announcements via email, SMS, or in-app notifications instantly"
    },
    {
      icon: Bell,
      title: "Automated Alerts",
      description: "Smart alerts for attendance, grades, deadlines, and important events"
    },
    {
      icon: MessageSquare,
      title: "Two-Way Communication",
      description: "Direct communication portals between teachers, parents, and students"
    },
    {
      icon: Globe,
      title: "Language & Accessibility",
      description: "Built-in translation and accessibility features for inclusive communication"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-6">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Communication Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect every member of your school community with intelligent, real-time communication tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
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
            Build stronger relationships between school and home. Effective communication ensures that 
            no one is left out of the loop and every stakeholder stays informed, engaged, and empowered.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Connected School Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Megaphone className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant</h3>
              <p className="text-gray-600">Mass Communication</p>
            </div>
            <div>
              <Bell className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart</h3>
              <p className="text-gray-600">Automated Alerts</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inclusive</h3>
              <p className="text-gray-600">Multi-Language Support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect Your Community?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Build stronger relationships with powerful communication tools.
          </p>
          <Button 
            size="lg"
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 text-lg"
          >
            Improve School Communication
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

export default Communication;
