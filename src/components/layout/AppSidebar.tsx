
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Grid,
  BookOpen,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  Target,
  Bot,
  History,
  Settings,
  HelpCircle,
  User,
  Bell,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  Grid,
  BookOpen,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  Target,
};

export default function AppSidebar() {
  const { t } = useTranslation();
  const { collapsed } = useSidebar();
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = [
    {
      name: t("categories.all"),
      icon: "Grid",
      href: "#all",
      count: 30,
    },
    {
      name: t("categories.lessonPlanning"),
      icon: "BookOpen",
      href: "#lesson-planning",
      count: 8,
    },
    {
      name: t("categories.contentHub"),
      icon: "FileText",
      href: "#content-hub",
      count: 6,
    },
    {
      name: t("categories.assessment"),
      icon: "CheckCircle",
      href: "#assessment",
      count: 7,
    },
    {
      name: t("categories.communication"),
      icon: "MessageCircle",
      href: "#communication",
      count: 4,
    },
    {
      name: t("categories.classroomManagement"),
      icon: "Users",
      href: "#classroom-management",
      count: 3,
    },
    {
      name: t("categories.languageArts"),
      icon: "Target",
      href: "#language-arts",
      count: 2,
    },
  ];

  const mainNavigation = [
    {
      name: t("easyteach.tabs.teachingTools"),
      icon: Grid,
      href: "#tools",
      active: true,
    },
    {
      name: t("easyteach.tabs.kribiAssistant"),
      icon: Bot,
      href: "#ai-assistant",
      active: false,
    },
  ];

  const bottomNavigation = [
    {
      name: t("easyteach.sidebar.outputHistory"),
      icon: History,
      href: "/output-history",
    },
    {
      name: t("easyteach.sidebar.profile"),
      icon: User,
      href: "#profile",
    },
    {
      name: t("easyteach.sidebar.settings"),
      icon: Settings,
      href: "#settings",
    },
    {
      name: t("easyteach.sidebar.help"),
      icon: HelpCircle,
      href: "/knowledge-base",
    },
  ];

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarContent className="bg-white border-r border-gray-200">
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200">
          {!collapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  EasyTeach
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  by Vicerta
                </p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto">
              <Bot className="h-5 w-5 text-white" />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <button
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                          item.active
                            ? "bg-primary/10 text-primary border-r-2 border-primary"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tool Categories */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3">
              {t("easyteach.sidebar.categories")}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {visibleCategories.map((category) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                  return (
                    <SidebarMenuItem key={category.name}>
                      <SidebarMenuButton asChild>
                        <button className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-4 w-4" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
                
                {categories.length > 5 && (
                  <SidebarMenuItem>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAllCategories(!showAllCategories)}
                      className="w-full justify-start px-3 text-sm text-gray-500 hover:text-gray-700"
                    >
                      {showAllCategories ? (
                        <>
                          <ChevronDown className="h-4 w-4 mr-2" />
                          {t("easyteach.sidebar.showLess")}
                        </>
                      ) : (
                        <>
                          <ChevronRight className="h-4 w-4 mr-2" />
                          {t("easyteach.sidebar.showMore")}
                        </>
                      )}
                    </Button>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Bottom Navigation */}
        <div className="mt-auto border-t border-gray-200 p-2">
          <SidebarMenu>
            {bottomNavigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.href}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-all"
                    >
                      <IconComponent className="h-4 w-4" />
                      {!collapsed && <span className="text-sm">{item.name}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
