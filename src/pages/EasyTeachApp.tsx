
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Bot } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppSidebar from "@/components/layout/AppSidebar";
import AppHeader from "@/components/layout/AppHeader";
import WelcomeSection from "@/components/sections/WelcomeSection";
import CategoryFilters from "@/components/sections/CategoryFilters";
import ToolsGrid from "@/components/sections/ToolsGrid";
import TeacherProfile from "@/components/TeacherProfile";
import ToolModal from "@/components/ToolModal";
import AIAssistant from "@/components/AIAssistant";
import { tools } from "@/lib/toolsData";

const EasyTeachApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Lesson Planning");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [teacherProfile, setTeacherProfile] = useState(null);

  const categories = [
    { name: "Lesson Planning", icon: "BookOpen", color: "bg-emerald-100 text-emerald-800", gradient: "from-emerald-400 to-emerald-600" },
    { name: "Content Hub", icon: "FileText", color: "bg-teal-100 text-teal-800", gradient: "from-teal-400 to-teal-600" },
    { name: "Assessment", icon: "CheckCircle", color: "bg-cyan-100 text-cyan-800", gradient: "from-cyan-400 to-cyan-600" },
    { name: "Communication", icon: "MessageCircle", color: "bg-green-100 text-green-800", gradient: "from-green-400 to-green-600" },
    { name: "Behaviour Support", icon: "Users", color: "bg-lime-100 text-lime-800", gradient: "from-lime-400 to-lime-600" },
    { name: "Differentiation", icon: "Target", color: "bg-emerald-100 text-emerald-800", gradient: "from-emerald-400 to-emerald-600" },
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

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <AppHeader 
            teacherProfile={teacherProfile}
            onProfileClick={() => setShowProfile(true)}
          />

          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
            <WelcomeSection teacherProfile={teacherProfile} />

            {/* Main Content Tabs */}
            <Tabs defaultValue="tools" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-emerald-100 mb-8">
                <TabsTrigger value="tools" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                  Teaching Tools
                </TabsTrigger>
                <TabsTrigger value="ai-assistant" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                  <Bot className="h-4 w-4 mr-2" />
                  AI Assistant
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tools" className="space-y-8">
                {/* Search and Filters */}
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="Search tools..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 py-3 text-sm border-2 border-emerald-200 focus:border-emerald-400 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm"
                      />
                    </div>
                    <CategoryFilters 
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onCategorySelect={setSelectedCategory}
                    />
                  </div>
                </div>

                <ToolsGrid 
                  tools={filteredTools}
                  categories={categories}
                  onToolClick={handleToolClick}
                  searchTerm={searchTerm}
                />
              </TabsContent>

              <TabsContent value="ai-assistant">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Teaching Assistant</h2>
                    <p className="text-gray-600 text-sm">Get instant help with educational questions, lesson planning, and teaching strategies</p>
                  </div>
                  <AIAssistant />
                </div>
              </TabsContent>
            </Tabs>
          </div>

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

export default EasyTeachApp;
