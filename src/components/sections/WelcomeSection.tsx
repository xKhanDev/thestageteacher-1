
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
    { label: "AI Tools", value: "50+", icon: Sparkles, color: "text-blue-600" },
    { label: "Lesson Plans", value: "1000+", icon: BookOpen, color: "text-green-600" },
    { label: "Happy Teachers", value: "100K+", icon: Users, color: "text-purple-600" },
    { label: "Time Saved", value: "15hrs/week", icon: Target, color: "text-pink-600" }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome back, 
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
            {getUserName()}! 👋
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ready to supercharge your teaching? Choose from our AI-powered tools designed to save you time and enhance your students' learning experience.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
          <BookOpen className="mr-2 h-5 w-5" />
          Create Lesson Plan
        </Button>
        <Button variant="outline" className="border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 px-6 py-3 rounded-xl transition-all duration-200">
          <MessageCircle className="mr-2 h-5 w-5" />
          Draft Parent Email
        </Button>
        <Button variant="outline" className="border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-50 px-6 py-3 rounded-xl transition-all duration-200">
          <Users className="mr-2 h-5 w-5" />
          Behavior Support
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;
