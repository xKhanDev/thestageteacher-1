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
  Sparkles,
} from "lucide-react";
import easyTeachLogo from "@/assets/easyteach-logo.png";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";

const AppSidebar = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  // Check if user has Vicerta email address
  const isVicertaUser = user?.email?.includes('@vicerta') || false;

  const sidebarItems = [
    {
      name: t("easyteach.sidebar.wizardTools"),
      icon: Wand2,
      href: "/wizard-tools",
      description: t("easyteach.sidebar.wizardToolsDesc"),
      gradient: "from-primary to-secondary",
    },
    {
      name: t("easyteach.sidebar.kribiChatbot"),
      icon: Bot,
      href: "/ai-chatbot",
      description: t("easyteach.sidebar.kribiChatbotDesc"),
      gradient: "from-secondary to-accent",
    },
    {
      name: t("easyteach.sidebar.outputHistory"),
      icon: History,
      href: "/output-history",
      description: t("easyteach.sidebar.outputHistoryDesc"),
      gradient: "from-primary to-accent",
    },
    {
      name: t("easyteach.sidebar.toolsSuggestions"),
      icon: BrainCircuit,
      href: "/tools-suggestions",
      description: t("easyteach.sidebar.toolsSuggestionsDesc"),
      gradient: "from-accent to-secondary",
    },
    // Only show feedback dashboard for Vicerta users
    ...(isVicertaUser ? [{
      name: t("easyteach.sidebar.feedbackDashboard"),
      icon: BarChart3,
      href: "/feedback-dashboard",
      description: t("easyteach.sidebar.feedbackDashboardDesc"),
      gradient: "from-emerald-500 to-teal-500",
      isVicertaOnly: true,
    }] : []),
  ];

  return (
    <Sidebar className="border-0 shadow-2xl bg-white/95 backdrop-blur-md">
      <SidebarHeader className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-b border-primary/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EasyTeach
            </h2>
            <p className="text-xs text-muted-foreground font-medium">
              by Vicerta • AI Assistant
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-background via-primary/2 to-secondary/5">
        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-foreground font-semibold text-sm mb-4 flex items-center space-x-2">
            <Star className="h-4 w-4 text-primary" />
            <span>{t("easyteach.sidebar.quickAccess")}</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="group">
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/20 hover:bg-white hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                      />
                      <div
                        className={`p-2.5 rounded-xl bg-gradient-to-r ${item.gradient} shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                      >
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 relative min-w-0">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">
                          {item.name}
                        </span>
                        <p className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 leading-relaxed">
                          {item.description}
                        </p>
                        {(item as any).isVicertaOnly && (
                          <div className="inline-flex items-center mt-1">
                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium border border-emerald-200">
                              Vicerta Team
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-6 py-4">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-4 border border-primary/20 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-3">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="font-semibold text-foreground text-sm">
                {t("easyteach.sidebar.trustedByEducators")}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              "{t("easyteach.sidebar.testimonial")}"
            </p>
            <div className="flex items-center mt-3 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 text-amber-500 fill-current"
                />
              ))}
              <span className="text-xs text-muted-foreground ml-2">Sarah M.</span>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-primary/20">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span className="font-medium">{t("easyteach.sidebar.empoweringEducators")}</span>
        </div>
        <div className="text-center mt-2">
          <span className="text-xs text-muted-foreground">Powered by</span>
          <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-1">
            Vicerta
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
