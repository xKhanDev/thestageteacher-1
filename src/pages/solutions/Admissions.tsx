import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import {
  UserCheck,
  FileText,
  CheckCircle,
  Clock,
  BarChart,
  Bot,
  MessageSquare,
  Monitor,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import LoginModal from "@/components/auth/LoginModal";
import Footer from "@/components/home/Footer";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, FileText, Users, CheckCircle, Clock, BarChart, Bot, MessageSquare, Monitor, ArrowRight, Zap, Target } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import admissionsHero from "@/assets/solutions/admissions-hero.jpg";
>>>>>>> main

const Admissions = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: FileText,
<<<<<<< HEAD
      title: "Online Application Forms",
      description:
        "Customizable fields that adapt to your school's specific requirements",
    },
    {
      icon: CheckCircle,
      title: "Automatic Document Verification",
      description:
        "Automated verification and comprehensive applicant tracking system",
    },
    {
      icon: Bot,
      title: "AI-Based Student Profiling",
      description:
        "Faster evaluations through intelligent student profiling algorithms",
    },
    {
      icon: MessageSquare,
      title: "Seamless Communication",
      description: "Direct communication channels with parents and applicants",
    },
    {
      icon: Monitor,
      title: "Centralized Dashboard",
      description: "Monitor every stage of enrollment from a single interface",
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
              <UserCheck className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Admissions Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Simplify and streamline your entire admissions process with our
              intuitive, AI-assisted platform.
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
          {/* Why it Matters Section
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Cut down administrative time and reduce errors by automating
            repetitive tasks. Offer prospective families a smooth and responsive
            admissions journey that reflects your school's professionalism.
          </p>
        </div> */}
          {/* Benefits */}
          <div className="bg-[#2903b1] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Transform Your Admissions Process
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  75% Faster
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Processing Time Reduction
                </p>
              </div>
              <div>
                <CheckCircle className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  99% Accuracy
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Document Verification
                </p>
              </div>
              <div>
                <BarChart className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Real-time
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Analytics & Reporting
                </p>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Modernize Your Admissions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join institutions worldwide in streamlining their admission
              process.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn p-6 rounded-xl"
            >
              Streamline Admissions Today
            </Button>
          </div>
        </div>

        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
=======
      title: t('solutions.admissions.features.onlineForms.title'),
      description: t('solutions.admissions.features.onlineForms.description')
    },
    {
      icon: CheckCircle,
      title: t('solutions.admissions.features.verification.title'),
      description: t('solutions.admissions.features.verification.description')
    },
    {
      icon: Bot,
      title: t('solutions.admissions.features.aiProfiling.title'),
      description: t('solutions.admissions.features.aiProfiling.description')
    },
    {
      icon: MessageSquare,
      title: t('solutions.admissions.features.communication.title'),
      description: t('solutions.admissions.features.communication.description')
    },
    {
      icon: Monitor,
      title: t('solutions.admissions.features.dashboard.title'),
      description: t('solutions.admissions.features.dashboard.description')
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
        <div className="absolute inset-0">
          <img 
            src={admissionsHero} 
            alt="Admissions Management" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-fade-in">
              <UserCheck className="h-10 w-10" />
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('solutions.admissions.title')}
            </h1>
            <p className="text-xl leading-relaxed mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t('solutions.admissions.subtitle')}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
              style={{animationDelay: '0.6s'}}
            >
              {t('solutions.admissions.startTrial')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">

        {/* Features Grid */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('solutions.admissions.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.admissions.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
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
          <div className="bg-gradient-to-r from-white via-blue-50/50 to-cyan-50/50 rounded-3xl p-12 shadow-2xl border border-blue-100">
            <div className="text-center mb-8">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('solutions.admissions.whyMatters.title')}</h2>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed">
              {t('solutions.admissions.whyMatters.description')}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('solutions.admissions.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">75% {t('solutions.admissions.benefits.faster')}</h3>
              <p className="text-gray-600 text-lg">{t('solutions.admissions.benefits.fasterDesc')}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">99% {t('solutions.admissions.benefits.accuracy')}</h3>
              <p className="text-gray-600 text-lg">{t('solutions.admissions.benefits.accuracyDesc')}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('solutions.admissions.benefits.realtime')}</h3>
              <p className="text-gray-600 text-lg">{t('solutions.admissions.benefits.realtimeDesc')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">{t('solutions.admissions.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t('solutions.admissions.cta.description')}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {t('solutions.admissions.cta.button')}
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

export default Admissions;
