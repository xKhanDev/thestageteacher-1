
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { Wand2, Bot, History, BrainCircuit, Star, Heart, Sparkles } from "lucide-react";

const AppSidebar = () => {
  const sidebarItems = [
    { 
      name: "Wizard Tools", 
      icon: Wand2, 
      href: "/wizard-tools",
      description: "AI-powered magic tools",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "AI Chatbot", 
      icon: Bot, 
      href: "/ai-chatbot",
      description: "Teaching assistant bot",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Output History", 
      icon: History, 
      href: "/output-history",
      description: "Your past creations",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Tools Suggestions", 
      icon: BrainCircuit, 
      href: "/tools-suggestions",
      description: "Suggest new tools",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <Sidebar className="border-0 shadow-2xl">
      <SidebarHeader className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-b border-purple-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EasyTeach
            </h2>
            <p className="text-xs text-gray-500 font-medium">AI Assistant</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-gray-700 font-bold text-sm mb-4 flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Quick Access</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="group">
                    <a href={item.href} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-gradient-to-r hover:from-white hover:to-blue-50/80 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${item.gradient} shadow-md group-hover:scale-110 transition-transform duration-200`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 relative">
                        <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors text-sm">
                          {item.name}
                        </span>
                        <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-6 py-4">
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-4 border border-blue-200/50">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="font-semibold text-gray-800 text-sm">Teacher Loved</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              "EasyTeach saves me 10+ hours every week! The AI tools are incredible." 
            </p>
            <div className="flex items-center mt-3 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
              ))}
              <span className="text-xs text-gray-500 ml-2">Sarah M.</span>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-purple-100">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <Sparkles className="h-3 w-3 text-purple-500" />
          <span>Made with ❤️ for educators</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
