import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Wand2,
  Bot,
  History,
  BrainCircuit,
  Star,
  Heart,
  GraduationCap,
  BarChart3,
} from "lucide-react";
import easyTeachLogo from "@/assets/easyteach-logo.png";
import { useTranslation } from "react-i18next";

const AppSidebar = () => {
  const { t } = useTranslation();

  const sidebarItems = [
    {
      name: t("easyteach.sidebar.wizardTools"),
      icon: Wand2,
      href: "/wizard-tools",
      description: t("easyteach.sidebar.wizardToolsDesc"),
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: t("easyteach.sidebar.kribiChatbot"),
      icon: Bot,
      href: "/ai-chatbot",
      description: t("easyteach.sidebar.kribiChatbotDesc"),
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: t("easyteach.sidebar.outputHistory"),
      icon: History,
      href: "/output-history",
      description: t("easyteach.sidebar.outputHistoryDesc"),
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      name: t("easyteach.sidebar.toolsSuggestions"),
      icon: BrainCircuit,
      href: "/tools-suggestions",
      description: t("easyteach.sidebar.toolsSuggestionsDesc"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: t("easyteach.sidebar.feedbackDashboard"),
      icon: BarChart3,
      href: "/feedback-dashboard",
      description: t("easyteach.sidebar.feedbackDashboardDesc"),
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <Sidebar className="border-0 shadow-lg">
      <SidebarHeader className="p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg flex justify-center items-center overflow-hidden shadow-md">
            <img
              src="/favicon.png"
              alt="EasyTeach Logo"
              className="size-5 object-cover"
            />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-800">EasyTeach</h2>
            <p className="text-xs text-slate-600 font-medium">AI Assistant</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30">
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className="text-slate-700 font-semibold text-xs mb-3 flex items-center space-x-2">
            <Star className="h-3 w-3 text-blue-600" />
            <span>{t("easyteach.sidebar.quickAccess")}</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="group">
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 px-2 py-6 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-200/60 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 hover:scale-[1.01] relative overflow-hidden"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 rounded-lg`}
                      ></div>
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${item.gradient} shadow-sm group-hover:scale-105 transition-transform duration-200`}
                      >
                        <item.icon className="h-3 w-3 text-white" />
                      </div>
                      <div className="flex-1 relative min-w-0">
                        <span className="text-xs font-medium text-slate-800 group-hover:text-slate-900 transition-colors block truncate">
                          {item.name}
                        </span>
                        <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors mt-0.5 leading-tight truncate">
                          {item.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-4 py-3">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 rounded-lg p-3 border border-blue-200/50">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="h-3 w-3 text-red-500" />
              <span className="font-semibold text-slate-800 text-xs">
                {t("easyteach.sidebar.trustedByEducators")}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              "{t("easyteach.sidebar.testimonial")}"
            </p>
            <div className="flex items-center mt-2 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-2.5 w-2.5 text-yellow-500 fill-current"
                />
              ))}
              <span className="text-xs text-slate-500 ml-1">Sarah M.</span>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-slate-200">
        <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
          <GraduationCap className="h-3 w-3 text-blue-600" />
          <span>{t("easyteach.sidebar.empoweringEducators")}</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
