
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Clock, User, Sparkles, Zap, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface AppHeaderProps {
  teacherProfile: any;
  onProfileClick: () => void;
}

const AppHeader = ({ teacherProfile, onProfileClick }: AppHeaderProps) => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="bg-white/98 backdrop-blur-sm border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="hover:bg-blue-100 rounded-lg p-2 transition-all duration-200 hover:shadow-sm border border-transparent hover:border-blue-300 text-gray-800" />
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                EasyTeach
              </h1>
              <p className="text-xs text-gray-700 font-medium">AI Teaching Assistant</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-full border-2 border-blue-200">
              <Clock className="h-4 w-4 text-blue-700" />
              <span className="text-xs font-semibold text-blue-800">Save 10+ hrs weekly</span>
              <Zap className="h-4 w-4 text-amber-600" />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onProfileClick}
                className="flex items-center space-x-2 bg-blue-50 border-2 border-blue-300 hover:border-blue-400 hover:bg-blue-100 transition-all duration-200 text-xs text-gray-800 font-medium"
              >
                <User className="h-4 w-4" />
                <span className="max-w-20 truncate">{teacherProfile?.name || user?.user_metadata?.name || user?.email || "Profile"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-red-700 border-2 border-red-300 hover:bg-red-100 hover:border-red-400 transition-all duration-200 text-xs font-medium"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
