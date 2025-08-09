import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import {
  DollarSign,
  CreditCard,
  FileBarChart,
  Banknote,
  PieChart,
} from "lucide-react";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, CreditCard, FileBarChart, Banknote, PieChart, ArrowRight, Target, Zap, Calculator, TrendingDown } from "lucide-react";
>>>>>>> main
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
<<<<<<< HEAD
import Footer from "@/components/home/Footer";
=======
import financeHero from "@/assets/solutions/finance-hero.jpg";
>>>>>>> main

const Finance = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: CreditCard,
<<<<<<< HEAD
      title: "Fee Management & Automated Billing",
      description:
        "Streamlined fee collection with automated billing and payment processing",
    },
    {
      icon: FileBarChart,
      title: "Custom Financial Reports",
      description:
        "Comprehensive financial reporting with detailed audit trails",
    },
    {
      icon: PieChart,
      title: "Budget Planning & Tracking",
      description:
        "Advanced budget planning tools with real-time expenditure tracking",
    },
    {
      icon: Banknote,
      title: "Banking & Payment Integration",
      description:
        "Seamless integration with bank systems and payment gateways",
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
              <DollarSign className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Finance Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Keep your school financially healthy with full visibility and
              control over every penny.
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
            Whether you're managing tuition payments, operational budgets, or
            vendor accounts, our platform makes financial workflows simpler,
            more secure, and completely transparent.
          </p>
        </div> */}

          {/* Benefits */}
          <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Complete Financial Control
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <CreditCard className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Automated
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Billing & Payments
                </p>
              </div>
              <div>
                <FileBarChart className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Transparent
                </h3>
                <p className="text-gray-200 text-xsmd:text-base">
                  Financial Reporting
                </p>
              </div>
              <div>
                <PieChart className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Real-time
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Budget Tracking
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Optimize Your Finances?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take control of your school's financial health with intelligent
              tools.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn p-6"
            >
              Optimize School Finances
            </Button>
          </div>
        </div>

        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
=======
      title: t("solutions.finance.features.feeManagement.title"),
      description: t("solutions.finance.features.feeManagement.description")
    },
    {
      icon: FileBarChart,
      title: t("solutions.finance.features.reports.title"),
      description: t("solutions.finance.features.reports.description")
    },
    {
      icon: PieChart,
      title: t("solutions.finance.features.budgetPlanning.title"),
      description: t("solutions.finance.features.budgetPlanning.description")
    },
    {
      icon: Banknote,
      title: t("solutions.finance.features.paymentProcessing.title"),
      description: t("solutions.finance.features.paymentProcessing.description")
    },
    {
      icon: Calculator,
      title: t("solutions.finance.features.taxManagement.title"),
      description: t("solutions.finance.features.taxManagement.description")
    },
    {
      icon: TrendingDown,
      title: t("solutions.finance.features.costOptimization.title"),
      description: t("solutions.finance.features.costOptimization.description")
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
        <div className="absolute inset-0">
          <img 
            src={financeHero} 
            alt="Financial Management and Analytics" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-amber-600/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-fade-in">
              <DollarSign className="h-10 w-10" />
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t("solutions.finance.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t("solutions.finance.hero.subtitle")}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
              style={{animationDelay: '0.6s'}}
            >
              {t("solutions.finance.hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">

        {/* Features Grid */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("solutions.finance.featuresSection.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("solutions.finance.featuresSection.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">{feature.title}</CardTitle>
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
          <div className="bg-gradient-to-r from-white via-orange-50/50 to-amber-50/50 rounded-3xl p-12 shadow-2xl border border-orange-100">
            <div className="text-center mb-8">
              <Target className="h-16 w-16 text-orange-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("solutions.finance.whyItMatters.title")}</h2>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed mb-8">
              {t("solutions.finance.whyItMatters.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">90%</div>
                <p className="text-gray-600">{t("solutions.finance.stats.paymentProcessing")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.8%</div>
                <p className="text-gray-600">{t("solutions.finance.stats.accuracy")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
                <p className="text-gray-600">{t("solutions.finance.stats.costReduction")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t("solutions.finance.benefits.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t("solutions.finance.benefits.automated.title")}</h3>
              <p className="text-gray-600 text-lg">{t("solutions.finance.benefits.automated.subtitle")}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileBarChart className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t("solutions.finance.benefits.transparent.title")}</h3>
              <p className="text-gray-600 text-lg">{t("solutions.finance.benefits.transparent.subtitle")}</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t("solutions.finance.benefits.smart.title")}</h3>
              <p className="text-gray-600 text-lg">{t("solutions.finance.benefits.smart.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">{t("solutions.finance.cta.title")}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("solutions.finance.cta.description")}
            </p>
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {t("solutions.finance.cta.button")}
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

export default Finance;
