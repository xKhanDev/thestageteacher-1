import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { MessageSquare, Megaphone, Bell, Globe, Users } from "lucide-react";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Megaphone, Bell, Globe, Users, ArrowRight, Target, Zap, Video, Send } from "lucide-react";
>>>>>>> main
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
<<<<<<< HEAD
import Footer from "@/components/home/Footer";
=======
import communicationHero from "@/assets/solutions/communication-hero.jpg";
>>>>>>> main

const Communication = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Megaphone,
<<<<<<< HEAD
      title: "Mass Announcements",
      description:
        "Send announcements via email, SMS, or in-app notifications instantly",
    },
    {
      icon: Bell,
      title: "Automated Alerts",
      description:
        "Smart alerts for attendance, grades, deadlines, and important events",
    },
    {
      icon: MessageSquare,
      title: "Two-Way Communication",
      description:
        "Direct communication portals between teachers, parents, and students",
    },
    {
      icon: Globe,
      title: "Language & Accessibility",
      description:
        "Built-in translation and accessibility features for inclusive communication",
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
              <MessageSquare className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Communication Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Connect every member of your school community with intelligent,
              real-time communication tools.
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

          {/* Why it Matters Section */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Build stronger relationships between school and home. Effective
            communication ensures that no one is left out of the loop and every
            stakeholder stays informed, engaged, and empowered.
          </p>
        </div> */}

          {/* Benefits */}
          <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Connected School Community
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <Megaphone className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Instant
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Mass Communication
                </p>
              </div>
              <div>
                <Bell className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Smart
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Automated Alerts
                </p>
              </div>
              <div>
                <Users className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Inclusive
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Multi-Language Support
                </p>
              </div>
=======
      title: t("solutions.communication.features.broadcasting.title"),
      description: t("solutions.communication.features.broadcasting.description")
    },
    {
      icon: Bell,
      title: t("solutions.communication.features.alerts.title"),
      description: t("solutions.communication.features.alerts.description")
    },
    {
      icon: MessageSquare,
      title: t("solutions.communication.features.hub.title"),
      description: t("solutions.communication.features.hub.description")
    },
    {
      icon: Globe,
      title: t("solutions.communication.features.multilingual.title"),
      description: t("solutions.communication.features.multilingual.description")
    },
    {
      icon: Video,
      title: t("solutions.communication.features.meetings.title"),
      description: t("solutions.communication.features.meetings.description")
    },
    {
      icon: Send,
      title: t("solutions.communication.features.workflows.title"),
      description: t("solutions.communication.features.workflows.description")
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600">
        <div className="absolute inset-0">
          <img 
            src={communicationHero} 
            alt="Communication and Collaboration Hub" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-cyan-600/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-fade-in">
              <MessageSquare className="h-10 w-10" />
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t("solutions.communication.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t("solutions.communication.hero.subtitle")}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
              style={{animationDelay: '0.6s'}}
            >
              {t("solutions.communication.hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">

        {/* Features Grid */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("solutions.communication.featuresSection.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("solutions.communication.featuresSection.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-teal-600 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why it Matters Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-white via-teal-50/50 to-cyan-50/50 rounded-3xl p-12 shadow-2xl border border-teal-100">
            <div className="text-center mb-8">
              <Target className="h-16 w-16 text-teal-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("solutions.communication.whyItMatters.title")}</h2>
>>>>>>> main
            </div>
            <p className="text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed">
              {t("solutions.communication.whyItMatters.description")}
            </p>
          </div>
<<<<<<< HEAD

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Connect Your Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Build stronger relationships with powerful communication tools.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn p-6"
            >
              Improve School Communication
            </Button>
          </div>
        </div>

        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
=======
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">{t("solutions.communication.cta.title")}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("solutions.communication.cta.description")}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {t("solutions.communication.cta.button")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
>>>>>>> main
      </div>
      <Footer />
    </>
  );
};

export default Communication;
