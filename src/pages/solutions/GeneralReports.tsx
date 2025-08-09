import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import {
  BarChart3,
  FileSpreadsheet,
  Download,
  Brain,
  TrendingUp,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import LoginModal from "@/components/auth/LoginModal";
import Footer from "@/components/home/Footer";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, FileSpreadsheet, Download, Brain, TrendingUp, ArrowRight, Target, Zap, Shield, Clock } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import reportsHero from "@/assets/solutions/reports-hero.jpg";
>>>>>>> main

const GeneralReports = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: BarChart3,
<<<<<<< HEAD
      title: "Dynamic Dashboards",
      description:
        "Real-time academic, behavioral, and operational data visualization",
    },
    {
      icon: FileSpreadsheet,
      title: "Custom Report Builder",
      description:
        "Create tailored reports for attendance, grades, performance, and more",
    },
    {
      icon: Download,
      title: "Export Flexibility",
      description:
        "Export reports to Excel, PDF, or send directly to stakeholders",
    },
    {
      icon: Brain,
      title: "AI-Assisted Insights",
      description:
        "Intelligent trends analysis and predictive insights for better decisions",
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
              <BarChart3 className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              General Reports
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Access real-time, data-driven insights that help you lead with
              confidence.
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
            Turn your school's data into actionable insights. Our system
            empowers leadership teams to make faster, evidence-based decisions
            and identify areas of improvement across departments.
          </p>
        </div> */}

          {/* Benefits */}
          <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Data-Driven Decision Making
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <TrendingUp className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Real-time
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Live Data Updates
                </p>
              </div>
              <div>
                <Brain className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  AI-Powered
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Predictive Analytics
                </p>
              </div>
              <div>
                <FileSpreadsheet className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Custom
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Tailored Reports
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Your Reporting?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Make evidence-based decisions with powerful insights.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn text-white p-6"
            >
              See Insights in Action
            </Button>
          </div>
        </div>

        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
=======
      title: t('solutions.reports.features.dashboards.title'),
      description: t('solutions.reports.features.dashboards.description')
    },
    {
      icon: FileSpreadsheet,
      title: t('solutions.reports.features.builder.title'),
      description: t('solutions.reports.features.builder.description')
    },
    {
      icon: Download,
      title: t('solutions.reports.features.export.title'),
      description: t('solutions.reports.features.export.description')
    },
    {
      icon: Brain,
      title: t('solutions.reports.features.aiInsights.title'),
      description: t('solutions.reports.features.aiInsights.description')
    },
    {
      icon: Shield,
      title: t('solutions.reports.features.security.title'),
      description: t('solutions.reports.features.security.description')
    },
    {
      icon: Clock,
      title: t('solutions.reports.features.scheduling.title'),
      description: t('solutions.reports.features.scheduling.description')
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0">
          <img 
            src={reportsHero} 
            alt="Data Analytics and Reports" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-fade-in">
              <BarChart3 className="h-10 w-10" />
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('solutions.reports.title')}
            </h1>
            <p className="text-xl leading-relaxed mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t('solutions.reports.subtitle')}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
              style={{animationDelay: '0.6s'}}
            >
              {t('solutions.reports.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">

        {/* Features Grid */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('solutions.reports.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.reports.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-green-600 transition-colors">{feature.title}</CardTitle>
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
          <div className="bg-gradient-to-r from-white via-green-50/50 to-emerald-50/50 rounded-3xl p-12 shadow-2xl border border-green-100">
            <div className="text-center mb-8">
              <Target className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('solutions.reports.whyMatters.title')}</h2>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed mb-8">
              {t('solutions.reports.whyMatters.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-gray-600">{t('solutions.reports.whyMatters.stats.reduction')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">{t('solutions.reports.whyMatters.stats.templates')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('solutions.reports.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('solutions.reports.benefits.realtime')}</h3>
              <p className="text-gray-600 text-lg">{t('solutions.reports.benefits.realtimeDesc')}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('solutions.reports.benefits.aiPowered')}</h3>
              <p className="text-gray-600 text-lg">{t('solutions.reports.benefits.aiDesc')}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileSpreadsheet className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('solutions.reports.benefits.custom')}</h3>
              <p className="text-gray-600 text-lg">{t('solutions.reports.benefits.customDesc')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">{t('solutions.reports.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t('solutions.reports.cta.description')}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {t('solutions.reports.cta.button')}
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

export default GeneralReports;
