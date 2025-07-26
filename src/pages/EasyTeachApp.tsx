import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Bot, Menu } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    t("easyteach.categories.lessonPlanning")
  );
  const [showProfile, setShowProfile] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [teacherProfile, setTeacherProfile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = [
    {
      name: t("easyteach.categories.all"),
      icon: "Grid",
      color: "bg-gray-100 text-gray-800",
      gradient: "from-gray-500 to-gray-600",
    },
    {
      name: t("easyteach.categories.lessonPlanning"),
      icon: "BookOpen",
      color: "bg-blue-100 text-blue-800",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: t("easyteach.categories.contentHub"),
      icon: "FileText",
      color: "bg-indigo-100 text-indigo-800",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      name: t("easyteach.categories.assessment"),
      icon: "CheckCircle",
      color: "bg-purple-100 text-purple-800",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: t("easyteach.categories.communication"),
      icon: "MessageCircle",
      color: "bg-cyan-100 text-cyan-800",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      name: t("easyteach.categories.behaviourSupport"),
      icon: "Users",
      color: "bg-teal-100 text-teal-800",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      name: t("easyteach.categories.differentiation"),
      icon: "Target",
      color: "bg-slate-100 text-slate-800",
      gradient: "from-slate-500 to-slate-600",
    },
  ];

  // Map translated categories back to English for tool filtering
  const categoryMapping = {
    [t("easyteach.categories.all")]: "All",
    [t("easyteach.categories.lessonPlanning")]: "Lesson Planning",
    [t("easyteach.categories.contentHub")]: "Content Hub",
    [t("easyteach.categories.assessment")]: "Assessment",
    [t("easyteach.categories.communication")]: "Communication",
    [t("easyteach.categories.behaviourSupport")]: "Behaviour Support",
    [t("easyteach.categories.differentiation")]: "Differentiation",
  };

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryMapping[selectedCategory] === "All" ||
      tool.category === categoryMapping[selectedCategory];
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const handleQuickAction = (category, toolId) => {
    setSelectedCategory(category);
    // Find the specific tool by ID
    const tool = tools.find((tool) => tool.id === toolId);
    if (tool) {
      setSelectedTool(tool);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="p-0 w-72 lg:hidden">
            <AppSidebar />
          </SheetContent>
        </Sheet>

        <div className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {/* Mobile Header with Menu Button */}
          <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold text-gray-800">EasyTeach</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowProfile(true)}
              className="p-2"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block">
            <AppHeader
              teacherProfile={teacherProfile}
              onProfileClick={() => setShowProfile(true)}
            />
          </div>

          <div className="container-responsive section-responsive">
            <WelcomeSection
              teacherProfile={teacherProfile}
              onQuickAction={handleQuickAction}
            />

            {/* Main Content Tabs */}
            <Tabs defaultValue="tools" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-blue-50 border border-gray-300 mb-6 sm:mb-8 h-14">
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:bg-[#2901b3] data-[state=active]:text-white text-sm sm:text-base"
                >
                  {t("easyteach.tabs.teachingTools")}
                </TabsTrigger>
                <TabsTrigger
                  value="ai-assistant"
                  className="data-[state=active]:bg-[#2901b3] data-[state=active]:text-white text-sm sm:text-base"
                >
                  <Bot className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">
                    {t("easyteach.tabs.kribiAssistant")}
                  </span>
                  <span className="sm:hidden">{t("easyteach.tabs.ai")}</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tools" className="space-y-6 sm:space-y-8">
                {/* Enhanced Search Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                    {t("easyteach.search.findPerfectTool")}
                  </h3>

                  {/* Search Bar */}
                  <div className="relative mb-4 sm:mb-6">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                    <Input
                      type="text"
                      placeholder={t("easyteach.search.searchPlaceholder")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 sm:pl-12 h-12 sm:py-4 text-sm sm:text-base border border-primary focus:outline-none rounded-xl bg-white"
                    />
                  </div>

                  {/* Category Filters */}
                  <CategoryFilters
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                  />
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
                    <h2 className="subheading-responsive text-gray-800 mb-2">
                      {t("easyteach.aiAssistant.title")}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {t("easyteach.aiAssistant.description")}
                    </p>
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
