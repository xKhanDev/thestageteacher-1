
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle, Users } from "lucide-react";

const DataProtection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const protections = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: Lock,
      title: "Secure Access Controls",
      description: "Multi-factor authentication and role-based permissions ensure only authorized users access sensitive data."
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Our platform is built with privacy as a core principle, minimizing data collection and maximizing protection."
    },
    {
      icon: FileText,
      title: "GDPR Compliance",
      description: "Full compliance with European data protection regulations and international privacy standards."
    },
    {
      icon: Users,
      title: "Data Minimization",
      description: "We only collect data that is necessary for educational purposes and delete it when no longer needed."
    }
  ];

  const gdprRights = [
    "Right to be informed about data collection and use",
    "Right to access personal data we hold",
    "Right to rectification of inaccurate data",
    "Right to erasure (right to be forgotten)",
    "Right to restrict processing",
    "Right to data portability",
    "Right to object to processing",
    "Rights related to automated decision making"
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Data Protection & 
              <span className="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent"> GDPR</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities. Learn how we protect your information and comply with global privacy regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How We Protect Your Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protections.map((protection, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-500 to-blue-500 shadow-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <protection.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors">
                    {protection.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {protection.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your GDPR Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Under the General Data Protection Regulation (GDPR), you have specific rights regarding your personal data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gdprRights.map((right, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 group-hover:text-slate-700 transition-colors">
                      {right}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-slate-500 to-blue-500 hover:from-slate-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl text-lg">
              Contact Data Protection Officer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataProtection;
