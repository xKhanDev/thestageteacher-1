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
      name: "Tools",
      icon: Wand2,
      href: "/wizard-tools",
      description: "AI-powered",
    },
    {
      name: "Chatbot",
      icon: Bot,
      href: "/ai-chatbot", 
      description: "Teaching",
    },
    {
      name: "History",
      icon: History,
      href: "/output-history",
      description: "Your past",
    },
    {
      name: "Suggestions",
      icon: BrainCircuit,
      href: "/tools-suggestions",
      description: "Suggest",
    },
    // Only show feedback dashboard for Vicerta users
    ...(isVicertaUser ? [{
      name: "feedback",
      icon: BarChart3,
      href: "/feedback-dashboard",
      description: "",
      isVicertaOnly: true,
    }] : []),
  ];

  return (
    <Sidebar className="border-0 bg-white">
      <SidebarContent className="p-3">
        <SidebarMenu className="space-y-2">
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-2xl bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <item.icon className="h-4 w-4 text-primary group-hover:text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-gray-900 block">
                      {item.name}
                    </span>
                    <p className="text-xs text-gray-500 truncate">
                      {item.description}
                    </p>
                    {(item as any).isVicertaOnly && (
                      <div className="inline-flex items-center mt-1">
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                          ✨ Team
                        </span>
                      </div>
                    )}
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
