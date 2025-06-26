
import { Star, Heart, CheckCircle, Users2, Lightbulb } from "lucide-react";

interface WelcomeSectionProps {
  teacherProfile: any;
}

const WelcomeSection = ({ teacherProfile }: WelcomeSectionProps) => {
  return (
    <div className="text-center mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-3xl blur-3xl -z-10"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-3 text-sm font-semibold text-gray-600">Trusted by 100,000+ educators</span>
          </div>
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome back, {teacherProfile?.name || "educator"}! 
          <Heart className="inline-block h-10 w-10 text-red-500 ml-3 animate-pulse" />
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Ready to transform your teaching experience? 🌟 Choose from <span className="font-bold text-purple-600">50+ AI-powered tools</span> 
          designed by teachers, for teachers. Let's make today absolutely amazing! ✨
        </p>
        <div className="flex justify-center items-center mt-8 space-x-8">
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Instant Results</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-600">
            <Users2 className="h-5 w-5" />
            <span className="font-medium">Teacher-Approved</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-600">
            <Lightbulb className="h-5 w-5" />
            <span className="font-medium">Creative Solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
