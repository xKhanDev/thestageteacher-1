
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/AppSidebar";
import AppHeader from "@/components/layout/AppHeader";
import WelcomeSection from "@/components/sections/WelcomeSection";
import CategoryFilters from "@/components/sections/CategoryFilters";
import ToolsGrid from "@/components/sections/ToolsGrid";
import TeacherProfile from "@/components/TeacherProfile";
import ToolModal from "@/components/ToolModal";
import { tools } from "@/lib/toolsData";

const EasyTeachApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Lesson Planning");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [teacherProfile, setTeacherProfile] = useState(null);

  const categories = [
    { name: "Lesson Planning", icon: "BookOpen", color: "bg-blue-100 text-blue-800", gradient: "from-blue-400 to-blue-600" },
    { name: "Content Hub", icon: "FileText", color: "bg-green-100 text-green-800", gradient: "from-green-400 to-green-600" },
    { name: "Assessment", icon: "CheckCircle", color: "bg-purple-100 text-purple-800", gradient: "from-purple-400 to-purple-600" },
    { name: "Communication", icon: "MessageCircle", color: "bg-orange-100 text-orange-800", gradient: "from-orange-400 to-orange-600" },
    { name: "Behaviour Support", icon: "Users", color: "bg-red-100 text-red-800", gradient: "from-red-400 to-red-600" },
    { name: "Differentiation", icon: "Target", color: "bg-pink-100 text-pink-800", gradient: "from-pink-400 to-pink-600" },
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
        <div className="flex-1 bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
          <AppHeader 
            teacherProfile={teacherProfile}
            onProfileClick={() => setShowProfile(true)}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <WelcomeSection teacherProfile={teacherProfile} />

            {/* Search and Filters */}
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
