import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Building2,
  Users,
  DollarSign,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";

const SchoolAdministration = () => {
  const [onShowLogin, setOnShowLogin] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Users,
      title: t('schoolAdmin.features.sis.title'),
      description: t('schoolAdmin.features.sis.description'),
    },
    {
      icon: DollarSign,
      title: t('schoolAdmin.features.financial.title'),
      description: t('schoolAdmin.features.financial.description'),
    },
    {
      icon: Calendar,
      title: t('schoolAdmin.features.scheduling.title'),
      description: t('schoolAdmin.features.scheduling.description'),
    },
    {
      icon: MessageSquare,
      title: t('schoolAdmin.features.communication.title'),
      description: t('schoolAdmin.features.communication.description'),
    },
    {
      icon: BarChart3,
      title: t('schoolAdmin.features.analytics.title'),
      description: t('schoolAdmin.features.analytics.description'),
    },
    {
      icon: Shield,
      title: t('schoolAdmin.features.security.title'),
      description: t('schoolAdmin.features.security.description'),
    },
  ];

  const modules = [
    t('schoolAdmin.modules.admissions'),
    t('schoolAdmin.modules.records'),
    t('schoolAdmin.modules.staff'),
    t('schoolAdmin.modules.financial'),
    t('schoolAdmin.modules.portal'),
    t('schoolAdmin.modules.reporting'),
  ];

  return (
    <>
      <Navigation onShowLogin={() => setOnShowLogin(true)} />
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="p-4 rounded-3xl icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                <Building2 className="size-8 md:size-10 text-white" />
              </div>
<<<<<<< HEAD
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                School
                <span className=" bg-gradient-to-r from-[#2903b1] to-blue-600 bg-clip-text text-transparent">
=======
              <h1 className="text-5xl font-bold text-foreground mb-6">
                {t('products.schoolAdminTitle')}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
>>>>>>> main
                  {" "}
                  
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {t('products.schoolAdminDesc')}
              </p>
<<<<<<< HEAD
              <Button className="w-full md:w-72 my-btn group text-white p-6 rounded-xl">
                Join the Waitlist
=======
              <Button className="my-btn group text-white p-6 rounded-xl">
                {t('common.joinWaitlist')}
>>>>>>> main
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Complete Administrative{" "}
              <span className="bg-gradient-to-r from-[#2903b1] to-blue-600 bg-clip-text text-transparent">
                Solution
=======
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              {t('schoolAdmin.sections.complete')}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('schoolAdmin.sections.solution')}
>>>>>>> main
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 place-content-center gap-4 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <div className="p-3 icon-bg rounded-lg  group-hover:scale-105 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-lg/6 font-bold">{feature.title}</h2>
                    </div>
<<<<<<< HEAD
                  </div>

                  <p className="text-gray-600 text-base/6 pt-2">
                    {feature.description}
                  </p>
                </div>
=======
                    <CardTitle className="text-xl font-bold text-foreground ">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
>>>>>>> main
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Integrated Modules
=======
            <h2 className="text-4xl font-bold text-foreground mb-12">
              {t('schoolAdmin.sections.integratedModules')}
>>>>>>> main
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {modules.map((module, index) => (
                <div
                  key={index}
<<<<<<< HEAD
                  className="flex items-center text-lg text-gray-700"
=======
                  className="flex items-center text-lg text-muted-foreground p-4 bg-white rounded-lg shadow-sm animate-fade-in"
>>>>>>> main
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="size-5 md:size-6 text-green-500 mr-3 flex-shrink-0" />
                  {module}
                </div>
              ))}
            </div>
<<<<<<< HEAD
            <Button className="w-full md:w-72 my-btn text-white p-6 rounded-xl">
              Request Demo
=======
            <Button className="my-btn text-white p-6 rounded-xl">
              {t('schoolAdmin.buttons.requestDemo')}
>>>>>>> main
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SchoolAdministration;
