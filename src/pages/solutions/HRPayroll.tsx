import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import {
  Users,
  CreditCard,
  UserPlus,
  ClipboardCheck,
  Shield,
} from "lucide-react";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CreditCard, UserPlus, ClipboardCheck, Shield, ArrowRight, Target, Zap, Calendar, FileSearch } from "lucide-react";
>>>>>>> main
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
<<<<<<< HEAD
import Footer from "@/components/home/Footer";
=======
import hrHero from "@/assets/solutions/hr-payroll-hero.jpg";
>>>>>>> main

const HRPayroll = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: UserPlus,
<<<<<<< HEAD
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <UniversalHeader onShowLogin={() => setShowLogin(true)} />

        <div className="container mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-full mb-6">
              <Users className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              HR & Payroll
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Manage your school's most valuable asset—its people—with precision
              and ease.
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
            Streamline HR operations while staying compliant with regulatory
            standards. Automating payroll and personnel records frees up time
            for your team to focus on people, not paperwork.
          </p>
        </div> */}

          {/* Benefits */}
          <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Streamlined HR Operations
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <CreditCard className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Automated
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Payroll Processing
                </p>
              </div>
              <div>
                <Shield className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  100%
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Compliance Ready
                </p>
              </div>
              <div>
                <ClipboardCheck className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Digital
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Record Management
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Modernize Your HR?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Focus on people, not paperwork with automated HR solutions.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn text-white p-6"
            >
              Transform HR & Payroll Now
            </Button>
          </div>
        </div>

        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
=======
      title: t("solutions.hrPayroll.features.onboarding.title"),
      description: t("solutions.hrPayroll.features.onboarding.description")
    },
    {
      icon: CreditCard,
      title: t("solutions.hrPayroll.features.payroll.title"),
      description: t("solutions.hrPayroll.features.payroll.description")
    },
    {
      icon: ClipboardCheck,
      title: t("solutions.hrPayroll.features.attendance.title"),
      description: t("solutions.hrPayroll.features.attendance.description")
    },
    {
      icon: Users,
      title: t("solutions.hrPayroll.features.performance.title"),
      description: t("solutions.hrPayroll.features.performance.description")
    },
    {
      icon: Shield,
      title: t("solutions.hrPayroll.features.compliance.title"),
      description: t("solutions.hrPayroll.features.compliance.description")
    },
    {
      icon: Calendar,
      title: t("solutions.hrPayroll.features.scheduling.title"),
      description: t("solutions.hrPayroll.features.scheduling.description")
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
        <div className="absolute inset-0">
          <img 
            src={hrHero} 
            alt="HR and Payroll Management" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-fade-in">
              <Users className="h-10 w-10" />
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t("solutions.hrPayroll.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t("solutions.hrPayroll.hero.subtitle")}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
              style={{animationDelay: '0.6s'}}
            >
              {t("solutions.hrPayroll.hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">

        {/* Features Grid */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("solutions.hrPayroll.featuresSection.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("solutions.hrPayroll.featuresSection.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">{feature.title}</CardTitle>
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
          <div className="bg-gradient-to-r from-white via-purple-50/50 to-indigo-50/50 rounded-3xl p-12 shadow-2xl border border-purple-100">
            <div className="text-center mb-8">
              <Target className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("solutions.hrPayroll.whyItMatters.title")}</h2>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed mb-8">
              {t("solutions.hrPayroll.whyItMatters.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                <p className="text-gray-600">{t("solutions.hrPayroll.stats.adminReduction")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <p className="text-gray-600">{t("solutions.hrPayroll.stats.payrollAccuracy")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600">{t("solutions.hrPayroll.stats.compliance")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t("solutions.hrPayroll.benefits.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t("solutions.hrPayroll.benefits.automated.title")}</h3>
              <p className="text-gray-600 text-lg">{t("solutions.hrPayroll.benefits.automated.subtitle")}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t("solutions.hrPayroll.benefits.compliant.title")}</h3>
              <p className="text-gray-600 text-lg">{t("solutions.hrPayroll.benefits.compliant.subtitle")}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileSearch className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t("solutions.hrPayroll.benefits.digital.title")}</h3>
              <p className="text-gray-600 text-lg">{t("solutions.hrPayroll.benefits.digital.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">{t("solutions.hrPayroll.cta.title")}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("solutions.hrPayroll.cta.description")}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {t("solutions.hrPayroll.cta.button")}
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

export default HRPayroll;
