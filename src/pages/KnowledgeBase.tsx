
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, HelpCircle, BookOpen, Video, FileText, MessageCircle } from "lucide-react";

const KnowledgeBase = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      title: "Getting Started",
      description: "Basic setup and first steps with Ecerta",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      articles: 12
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and walkthroughs",
      icon: Video,
      color: "from-purple-500 to-purple-600",
      articles: 8
    },
    {
      title: "Feature Guides",
      description: "Detailed explanations of all features",
      icon: FileText,
      color: "from-green-500 to-green-600",
      articles: 24
    },
    {
      title: "FAQ",
      description: "Frequently asked questions and answers",
      icon: HelpCircle,
      color: "from-orange-500 to-orange-600",
      articles: 18
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and problems",
      icon: MessageCircle,
      color: "from-red-500 to-red-600",
      articles: 15
    }
  ];

  const popularArticles = [
    "How to create your first lesson plan with EasyTeach",
    "Setting up parent communication preferences",
    "Understanding behavior tracking features",
    "Customizing your classroom dashboard",
    "Integrating with existing school systems"
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-cyan-100 shadow-lg sticky top-0 z-50">
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="p-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Knowledge 
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Base</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and guides to help you get the most out of Ecerta's educational platform.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for help articles, guides, or tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-cyan-50 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Articles
          </h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors">
                      {article}
                    </h3>
                    <div className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;
