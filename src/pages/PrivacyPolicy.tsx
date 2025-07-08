import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, profile information when you create an account",
        "Educational Data: Lesson plans, assessments, and other content you create using our tools",
        "Usage Data: How you interact with our platform, features used, and performance metrics",
        "Technical Data: IP address, browser type, device information, and cookies",
        "Communication Data: Messages, feedback, and support requests"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our educational services and AI-powered tools",
        "Personalize your experience and content recommendations",
        "Communicate with you about updates, features, and support",
        "Analyze usage patterns to enhance platform performance",
        "Comply with legal obligations and protect against fraud",
        "Process payments and manage your subscription"
      ]
    },
    {
      icon: Shield,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Service Providers: Trusted partners who help us operate our platform",
        "Legal Requirements: When required by law or to protect our rights",
        "Business Transfers: In case of merger, acquisition, or sale of assets",
        "Consent: When you explicitly authorize us to share information"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "End-to-end encryption for all data transmission",
        "AES-256 encryption for data at rest",
        "Regular security audits and penetration testing",
        "Access controls and authentication mechanisms",
        "SOC 2 compliance and industry-standard security practices",
        "Secure data centers with 24/7 monitoring"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights (GDPR)",
      content: [
        "Right to access your personal data",
        "Right to rectify inaccurate information",
        "Right to erasure (right to be forgotten)",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing",
        "Right to withdraw consent at any time",
        "Right to lodge a complaint with supervisory authorities"
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        "Account data: Retained while your account is active",
        "Educational content: Kept as long as useful for service provision",
        "Usage data: Typically retained for 2 years for analytics",
        "Communication records: 3 years for support purposes",
        "Legal obligations may require longer retention periods",
        "You can request deletion of your data at any time"
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
            <div className="p-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Privacy 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Your privacy is fundamental to our mission. Learn how we protect and handle your data.
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
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {section.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Contact our Data Protection Officer for any privacy-related inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl text-lg"
              onClick={() => navigate('/contact-us')}
            >
              Contact DPO
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/data-protection')}
              className="px-8 py-3 rounded-xl text-lg"
            >
              Data Protection Center
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;