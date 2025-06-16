
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, MessageCircle, Users, FileText, Target, User, Sparkles, Clock, Heart } from "lucide-react";
import TeacherProfile from "@/components/TeacherProfile";
import ToolModal from "@/components/ToolModal";
import { tools } from "@/lib/toolsData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [teacherProfile, setTeacherProfile] = useState(null);

  const categories = [
    { name: "All", icon: Sparkles, color: "bg-purple-100 text-purple-800" },
    { name: "Lesson Planning", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
    { name: "Communication", icon: MessageCircle, color: "bg-green-100 text-green-800" },
    { name: "Behavior Support", icon: Users, color: "bg-orange-100 text-orange-800" },
    { name: "Admin", icon: FileText, color: "bg-gray-100 text-gray-800" },
    { name: "Differentiation", icon: Target, color: "bg-pink-100 text-pink-800" },
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TeacherAI
                </h1>
                <p className="text-sm text-gray-600">Your AI Teaching Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Save 10+ hours weekly</span>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowProfile(true)}
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>{teacherProfile ? teacherProfile.name : "Setup Profile"}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome back, {teacherProfile?.name || "educator"}! 
            <Heart className="inline-block h-8 w-8 text-red-500 ml-2" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to save time and spark joy in your classroom? Choose from 50+ AI-powered tools 
            designed by teachers, for teachers. Let's make today amazing! ✨
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search tools... (e.g., 'lesson plan', 'email')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 border-2 border-blue-100 focus:border-blue-300 rounded-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.name)}
                    className="flex items-center space-x-2 rounded-full"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const IconComponent = tool.icon;
            const categoryInfo = categories.find(cat => cat.name === tool.category);
            
            return (
              <Card 
                key={tool.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-2 border-gray-100 hover:border-blue-200"
                onClick={() => handleToolClick(tool)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${tool.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {tool.name}
                        </CardTitle>
                        <Badge variant="secondary" className={categoryInfo?.color}>
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-amber-600">
                      <Clock className="h-4 w-4" />
                      <span>{tool.timesSaved}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      ✓ Ready in {tool.estimatedTime}
                    </span>
                    <Button size="sm" className="rounded-full">
                      Try it →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tools found for "{searchTerm}"
            </h3>
            <p className="text-gray-500">
              Try a different search term or browse our categories above.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              Made with 💙 for educators who change the world, one student at a time.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Join 100,000+ teachers saving time with AI
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showProfile && (
        <TeacherProfile
          isOpen={showProfile}
          onClose={() => setShowProfile(false)}
          onSave={setTeacherProfile}
          currentProfile={teacherProfile}
        />
      )}

      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          teacherProfile={teacherProfile}
        />
      )}
    </div>
  );
};

export default Index;
