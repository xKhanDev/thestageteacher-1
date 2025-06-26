
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Users, Star } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface WelcomeSectionProps {
  teacherProfile: any;
}

const WelcomeSection = ({ teacherProfile }: WelcomeSectionProps) => {
  const { user } = useAuth();
  
  const getUserName = () => {
    if (teacherProfile?.name) return teacherProfile.name;
    if (user?.user_metadata?.name) return user.user_metadata.name;
    if (user?.email) return user.email.split('@')[0];
    return 'Teacher';
  };

  const favoriteTools = [
    { name: "Lesson Plan Generator", icon: BookOpen, category: "Lesson Planning", color: "text-blue-600" },
    { name: "Parent Email Draft", icon: MessageCircle, category: "Communication", color: "text-green-600" },
    { name: "Behavior Support Plan", icon: Users, category: "Behaviour Support", color: "text-purple-600" },
  ];

  return (
    <div className="mb-8">
      {/* Subtle Welcome Message */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome back, {getUserName()}
        </h1>
        <p className="text-sm text-gray-600">
          Ready to create something amazing today?
        </p>
      </div>

      {/* Your Favorite Tools */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Star className="h-5 w-5 text-yellow-500" />
          <h2 className="text-lg font-semibold text-gray-800">Your Favorite Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favoriteTools.map((tool, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="p-2 rounded-lg bg-white shadow-sm">
                <tool.icon className={`h-4 w-4 ${tool.color}`} />
              </div>
              <div>
                <div className="font-medium text-gray-800 text-sm">{tool.name}</div>
                <div className="text-xs text-gray-500">{tool.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm">
          <BookOpen className="mr-2 h-4 w-4" />
          Create Lesson Plan
        </Button>
        <Button variant="outline" className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all duration-200 text-sm">
          <MessageCircle className="mr-2 h-4 w-4" />
          Draft Parent Email
        </Button>
        <Button variant="outline" className="border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 px-4 py-2 rounded-xl transition-all duration-200 text-sm">
          <Users className="mr-2 h-4 w-4" />
          Behavior Support
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;
