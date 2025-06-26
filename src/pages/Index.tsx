
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, MessageCircle, Users, FileText, Target, User, Sparkles, Clock, Heart, CheckCircle, Lightbulb, Wand2, Bot, History, BrainCircuit, Star, Zap, Users2 } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import TeacherProfile from "@/components/TeacherProfile";
import ToolModal from "@/components/ToolModal";
import { tools } from "@/lib/toolsData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Lesson Planning");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [teacherProfile, setTeacherProfile] = useState(null);

  const categories = [
    { name: "Lesson Planning", icon: BookOpen, color: "bg-blue-100 text-blue-800", gradient: "from-blue-400 to-blue-600" },
    { name: "Content Hub", icon: FileText, color: "bg-green-100 text-green-800", gradient: "from-green-400 to-green-600" },
    { name: "Assessment", icon: CheckCircle, color: "bg-purple-100 text-purple-800", gradient: "from-purple-400 to-purple-600" },
    { name: "Communication", icon: MessageCircle, color: "bg-orange-100 text-orange-800", gradient: "from-orange-400 to-orange-600" },
    { name: "Behaviour Support", icon: Users, color: "bg-red-100 text-red-800", gradient: "from-red-400 to-red-600" },
    { name: "Differentiation", icon: Target, color: "bg-pink-100 text-pink-800", gradient: "from-pink-400 to-pink-600" },
  ];

  const sidebarItems = [
    { name: "Wizard Tools", icon: Wand2, href: "/wizard-tools" },
    { name: "AI Chatbot", icon: Bot, href: "/ai-chatbot" },
    { name: "Output History", icon: History, href: "/output-history" },
    { name: "Tools Suggestions", icon: BrainCircuit, href: "/tools-suggestions" },
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const AppSidebar = () => (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center space-x-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-200">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
          {/* Enhanced Header */}
          <header className="bg-white/90 backdrop-blur-sm border-b border-gradient-to-r from-blue-100 to-purple-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center space-x-4">
                  <SidebarTrigger className="hover:bg-blue-50 rounded-lg transition-colors" />
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-7 w-7 text-white animate-pulse" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      EasyTeach
                    </h1>
                    <p className="text-sm text-gray-600 font-medium">Your AI Teaching Assistant ✨</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-100">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Save 10+ hours weekly</span>
                    <Zap className="h-4 w-4 text-yellow-500" />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setShowProfile(true)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:border-purple-300 transition-all duration-200"
                  >
                    <User className="h-4 w-4" />
                    <span>{teacherProfile ? teacherProfile.name : "Setup Profile"}</span>
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Enhanced Welcome Section */}
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-3xl blur-3xl -z-10"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-3 text-sm font-semibold text-gray-600">Trusted by 100,000+ educators</span>
                  </div>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Welcome back, {teacherProfile?.name || "educator"}! 
                  <Heart className="inline-block h-10 w-10 text-red-500 ml-3 animate-pulse" />
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Ready to transform your teaching experience? 🌟 Choose from <span className="font-bold text-purple-600">50+ AI-powered tools</span> 
                  designed by teachers, for teachers. Let's make today absolutely amazing! ✨
                </p>
                <div className="flex justify-center items-center mt-8 space-x-8">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Instant Results</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Users2 className="h-5 w-5" />
                    <span className="font-medium">Teacher-Approved</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-600">
                    <Lightbulb className="h-5 w-5" />
                    <span className="font-medium">Creative Solutions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Search and Filters */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search tools... (e.g., 'lesson plan', 'email')"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-4 text-lg border-2 border-blue-100 focus:border-purple-300 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-200"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <Button
                        key={category.name}
                        variant={selectedCategory === category.name ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex items-center space-x-2 rounded-2xl px-6 py-3 transition-all duration-200 ${
                          selectedCategory === category.name 
                            ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105` 
                            : 'bg-white/80 backdrop-blur-sm border-2 hover:border-purple-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span className="font-medium">{category.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Enhanced Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool) => {
                const IconComponent = tool.icon;
                const categoryInfo = categories.find(cat => cat.name === tool.category);
                
                return (
                  <Card 
                    key={tool.id}
                    className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm shadow-lg overflow-hidden relative"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <CardHeader className="pb-4 relative">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-2xl ${tool.color} group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                            <IconComponent className="h-7 w-7" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                              {tool.name}
                            </CardTitle>
                            <Badge variant="secondary" className={`${categoryInfo?.color} font-medium mt-1`}>
                              {tool.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{tool.timesSaved}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-gray-600 leading-relaxed text-base mb-6">
                        {tool.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                          ✓ Ready in {tool.estimatedTime}
                        </span>
                        <Button size="sm" className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium px-6 group-hover:scale-105 transition-all duration-200">
                          Try it →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <div className="text-8xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                  No tools found for "{searchTerm}"
                </h3>
                <p className="text-lg text-gray-500">
                  Try a different search term or browse our categories above.
                </p>
              </div>
            )}
          </div>

          {/* Enhanced Footer */}
          <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-8 w-8 text-red-400 animate-pulse" />
                </div>
                <p className="text-xl mb-4">
                  Made with 💙 for educators who change the world, one student at a time.
                </p>
                <p className="text-lg text-blue-200 mb-6">
                  Join 100,000+ teachers saving time with AI
                </p>
                <div className="flex justify-center items-center space-x-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm font-medium">Rated 4.9/5 by educators</span>
                </div>
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
      </div>
    </SidebarProvider>
  );
};

export default Index;
