import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, CreditCard, Gavel } from "lucide-react";

const TermsOfService = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Vicerta's services, you agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to modify these terms at any time with notice",
        "Continued use after modifications constitutes acceptance of new terms"
      ]
    },
    {
      icon: FileText,
      title: "Service Description",
      content: [
        "Vicerta provides AI-powered educational technology solutions",
        "Services include lesson planning tools, assessment generators, and teaching assistants",
        "We offer both free and premium subscription tiers",
        "Service availability may vary by region and is subject to maintenance periods"
      ]
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete registration information",
        "Maintain the security of your account credentials",
        "Use the service only for lawful educational purposes",
        "Respect intellectual property rights of others",
        "Do not share account access with unauthorized users",
        "Report any security vulnerabilities or abuse"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Uses",
      content: [
        "Using the service for any illegal or unauthorized purpose",
        "Attempting to gain unauthorized access to our systems",
        "Uploading malicious code, viruses, or harmful content",
        "Harassing, threatening, or impersonating other users",
        "Sharing inappropriate or offensive educational content",
        "Violating any applicable laws or regulations"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Subscription fees are billed in advance on a recurring basis",
        "All fees are non-refundable except as required by law",
        "We reserve the right to change pricing with 30 days notice",
        "Failed payments may result in service suspension",
        "You are responsible for all taxes related to your subscription"
      ]
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: [
        "Service is provided 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount paid for services",
        "We do not guarantee uninterrupted or error-free service",
        "Users are responsible for backing up their content"
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="p-4 rounded-3xl bg-gradient-to-r from-slate-500 to-blue-500 shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Terms of 
              <span className="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Please read these terms carefully before using our educational technology platform.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-500 to-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors">
                    {section.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Important Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Content you create remains yours. We retain rights to our platform, AI models, and proprietary technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Export</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can export your content at any time. We provide tools to download your lessons and assessments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Either party may terminate the agreement. We provide 30 days notice for service discontinuation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These terms are governed by applicable laws. Disputes will be resolved through binding arbitration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our legal team is available to clarify any questions about our terms of service.
          </p>
          <Button 
            className="bg-gradient-to-r from-slate-500 to-blue-500 hover:from-slate-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl text-lg"
            onClick={() => navigate('/contact-us')}
          >
            Contact Legal Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;