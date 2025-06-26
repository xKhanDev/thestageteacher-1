
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Clock, User, Sparkles, Zap } from "lucide-react";

interface AppHeaderProps {
  teacherProfile: any;
  onProfileClick: () => void;
}

const AppHeader = ({ teacherProfile, onProfileClick }: AppHeaderProps) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gradient-to-r from-blue-100 to-purple-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl p-2 transition-all duration-200 hover:shadow-md border border-transparent hover:border-blue-200" />
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
              onClick={onProfileClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:border-purple-300 transition-all duration-200"
            >
              <User className="h-4 w-4" />
              <span>{teacherProfile ? teacherProfile.name : "Setup Profile"}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
