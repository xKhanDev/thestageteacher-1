
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
    <header className="bg-white/95 backdrop-blur-sm border-b border-emerald-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="hover:bg-emerald-50 rounded-lg p-2 transition-all duration-200 hover:shadow-sm border border-transparent hover:border-emerald-200" />
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
              <Sparkles className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                EasyTeach
              </h1>
              <p className="text-xs text-gray-600 font-medium">AI Teaching Assistant</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-2 rounded-full border border-emerald-100">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700">Save 10+ hrs weekly</span>
              <Zap className="h-4 w-4 text-amber-500" />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onProfileClick}
                className="flex items-center space-x-2 bg-emerald-50 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-100 transition-all duration-200 text-xs"
              >
                <User className="h-4 w-4" />
                <span className="max-w-20 truncate">{teacherProfile?.name || user?.user_metadata?.name || user?.email || "Profile"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-200 text-xs"
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
