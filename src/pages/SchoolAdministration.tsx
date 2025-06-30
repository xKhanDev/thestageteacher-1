
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, Users, DollarSign, Calendar, MessageSquare, BarChart3, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";

const SchoolAdministration = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Student Information System",
      description: "Comprehensive student records, enrollment, and academic tracking"
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Tuition tracking, billing, budgeting, and financial reporting"
    },
    {
      icon: Calendar,
      title: "Scheduling & Timetables",
      description: "Automated class scheduling, room allocation, and resource management"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Unified messaging for parents, teachers, and administrators"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into school performance and operations"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Data protection, GDPR compliance, and secure access controls"
    }
  ];

  const modules = [
    "Admissions & Enrollment",
    "Academic Records Management",
    "Staff & HR Management",
    "Financial Operations",
    "Parent & Student Portal",
    "Reporting & Analytics"
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-green-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
              Coming Soon
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="p-4 rounded-3xl bg-gradient-to-r from-green-500 to-teal-500 shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              School 
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Administration</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your entire school operations with our comprehensive administration platform designed for modern educational institutions.
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl text-lg">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Complete Administrative Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 shadow-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Integrated Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center text-lg text-gray-700 p-4 bg-white rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                {module}
              </div>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl text-lg">
            Request Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SchoolAdministration;
