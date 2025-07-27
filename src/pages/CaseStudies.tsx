
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      title: "Riverside Elementary: 40% Improvement in Student Engagement",
      school: "Riverside Elementary School",
      type: "Primary Education",
      results: "40% increase in engagement",
      timeframe: "6 months",
      description: "How EasyTeach transformed daily classroom activities and parent communication, leading to significant improvements in student participation and academic outcomes.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Metro High School: Reducing Teacher Workload by 15 Hours/Week",
      school: "Metro High School",
      type: "Secondary Education",
      results: "15 hours saved per week",
      timeframe: "3 months",
      description: "A comprehensive case study showing how our AI tools streamlined lesson planning, grading, and administrative tasks for a busy high school.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Westfield Academy: Complete Digital Transformation",
      school: "Westfield Academy",
      type: "Independent School",
      results: "100% digital adoption",
      timeframe: "12 months",
      description: "From traditional methods to a fully integrated digital ecosystem, see how Westfield Academy revolutionized their approach to education.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-primary/5 via-primary/10 to-primary/15 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <header className="bg-background/90 backdrop-blur-sm border-b border-border shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>{t("pages.caseStudies.backToHome")}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="p-4 rounded-3xl bg-gradient-primary shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              {t("pages.caseStudies.title").split(' ')[0]} 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> {t("pages.caseStudies.title").split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pages.caseStudies.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-primary/5 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <img 
                      src={study.image}
                      alt={study.school}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {study.type}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.timeframe}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-4">{study.school}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{study.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-600 font-semibold">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        {study.results}
                      </div>
                      <Button className="bg-gradient-primary hover:opacity-90 text-white">
                        {t("pages.caseStudies.readFullStudy")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
