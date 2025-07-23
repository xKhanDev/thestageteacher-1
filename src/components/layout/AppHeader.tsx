import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Clock, User, Sparkles, Zap, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

interface AppHeaderProps {
  teacherProfile: any;
  onProfileClick: () => void;
}

const AppHeader = ({ teacherProfile, onProfileClick }: AppHeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="bg-white/98 backdrop-blur-sm border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="hover:bg-blue-100 hover:text-primary rounded-lg p-2 transition-all duration-200 hover:shadow-sm border border-transparent hover:border-blue-300 text-gray-800" />
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                EasyTeach
              </h1>
              <p className="text-xs text-gray-700 font-medium">
                {t("easyteach.header.aiTeachingAssistant")}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-full border-2 border-blue-200">
              <Clock className="h-4 w-4 text-blue-700" />
              <span className="text-xs font-semibold text-blue-800">
                {t("easyteach.header.saveHours", { hours: "10" })}
              </span>
              <Zap className="h-4 w-4 text-amber-600" />
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <Button
                variant="outline"
                size="sm"
                onClick={onProfileClick}
                className="flex items-center bg-blue-50 hover:bg-blue-100 hover:text-black capitalize transition-all duration-200 text-xs text-gray-800 font-medium"
              >
                <User className="h-4 w-4" />
                <span className="max-w-20 truncate">
                  {teacherProfile?.name ||
                    user?.user_metadata?.name ||
                    user?.email ||
                    t("easyteach.header.profile")}
                </span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-white bg-red-600  hover:bg-red-700 hover:text-white  transition-all duration-200 text-xs font-medium"
              >
                <LogOut className="h-4 w-4" />
                <span>{t("easyteach.header.signOut")}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
