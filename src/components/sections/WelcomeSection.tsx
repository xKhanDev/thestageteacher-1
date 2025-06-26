
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Users, Target, MessageCircle } from "lucide-react";
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

  const stats = [
    { label: "AI Tools", value: "50+", icon: Sparkles, color: "text-emerald-600" },
    { label: "Lesson Plans", value: "1000+", icon: BookOpen, color: "text-teal-600" },
    { label: "Happy Teachers", value: "100K+", icon: Users, color: "text-cyan-600" },
    { label: "Time Saved", value: "15hrs/week", icon: Target, color: "text-green-600" }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Welcome back, 
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent block mt-1">
            {getUserName()}! 👋
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Ready to supercharge your teaching? Choose from our AI-powered tools designed to save you time and enhance learning.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg md:text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm">
          <BookOpen className="mr-2 h-4 w-4" />
          Create Lesson Plan
        </Button>
        <Button variant="outline" className="border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 px-4 py-2 rounded-xl transition-all duration-200 text-sm">
          <MessageCircle className="mr-2 h-4 w-4" />
          Draft Parent Email
        </Button>
        <Button variant="outline" className="border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50 px-4 py-2 rounded-xl transition-all duration-200 text-sm">
          <Users className="mr-2 h-4 w-4" />
          Behavior Support
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;
