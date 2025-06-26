
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { Wand2, Bot, History, BrainCircuit, Star, Heart, GraduationCap } from "lucide-react";

const AppSidebar = () => {
  const sidebarItems = [
    { 
      name: "Wizard Tools", 
      icon: Wand2, 
      href: "/wizard-tools",
      description: "AI-powered teaching tools",
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      name: "AI Chatbot", 
      icon: Bot, 
      href: "/ai-chatbot",
      description: "Teaching assistant bot",
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Output History", 
      icon: History, 
      href: "/output-history",
      description: "Your past creations",
      gradient: "from-blue-600 to-cyan-500"
    },
    { 
      name: "Tools Suggestions", 
      icon: BrainCircuit, 
      href: "/tools-suggestions",
      description: "Suggest new features",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <Sidebar className="border-0 shadow-lg">
      <SidebarHeader className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              EasyTeach
            </h2>
            <p className="text-xs text-slate-600 font-medium">Professional AI Assistant</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30">
        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-slate-700 font-semibold text-sm mb-4 flex items-center space-x-2">
            <Star className="h-4 w-4 text-blue-600" />
            <span>Quick Access</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="group">
                    <a href={item.href} className="flex items-center space-x-3 p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 hover:scale-[1.01] relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 rounded-xl`}></div>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 relative">
                        <span className="sidebar-text text-slate-800 group-hover:text-slate-900 transition-colors">
                          {item.name}
                        </span>
                        <p className="sidebar-description group-hover:text-slate-600 transition-colors mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-6 py-4">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 rounded-xl p-4 border border-blue-200/50">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="font-semibold text-slate-800 text-sm">Trusted by Educators</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              "EasyTeach transforms my lesson planning and saves hours every week. Highly recommended!" 
            </p>
            <div className="flex items-center mt-3 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
              ))}
              <span className="text-xs text-slate-500 ml-2">Sarah M., Grade 5</span>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-slate-200">
        <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
          <GraduationCap className="h-3 w-3 text-blue-600" />
          <span>Empowering educators worldwide</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
