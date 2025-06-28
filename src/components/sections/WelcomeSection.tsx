
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Users, Quote, Star, Heart, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";

interface WelcomeSectionProps {
  teacherProfile: any;
  onQuickAction?: (category: string) => void;
}

const WelcomeSection = ({ teacherProfile, onQuickAction }: WelcomeSectionProps) => {
  const { user } = useAuth();
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });
  
  const educationalQuotes = [
    { text: "You are not just teaching a subject, you are teaching hearts and minds. Your impact reaches far beyond the classroom and into the future of humanity.", author: "Unknown" },
    { text: "Every great mind was once taught by someone who believed in them. You are that someone for countless students. Take pride in shaping tomorrow's leaders.", author: "Educational Proverb" },
    { text: "Teaching is the profession that creates all other professions. You are the architect of dreams and the builder of futures. Your work matters immensely.", author: "Unknown" },
    { text: "In a world where you can be anything, be the teacher who inspires, encourages, and believes in every student. You have the power to change lives.", author: "Modern Teaching Wisdom" },
    { text: "Your patience plants seeds of knowledge, your wisdom nurtures growth, and your dedication harvests success. You are growing the future, one student at a time.", author: "Educational Philosophy" },
    { text: "Behind every successful person is a teacher who saw their potential before they did. You are that beacon of hope and possibility.", author: "Teaching Truth" },
    { text: "Teaching is not about filling empty vessels, but about igniting flames of curiosity and passion. You are a flame-lighter, a dream-awakener.", author: "Modern Educator" },
    { text: "The influence of a great teacher extends beyond the classroom and lasts a lifetime. You are not just teaching lessons, you are touching souls.", author: "Educational Inspiration" },
    { text: "Every child needs a champion – an adult who will never give up on them, who understands the power of connection. You are that champion.", author: "Rita Pearson" },
    { text: "Your classroom is a sanctuary of learning, your words are seeds of wisdom, and your care is the sunshine that helps every child grow.", author: "Teaching Tribute" },
    { text: "In your hands lies the power to shape minds, inspire hearts, and change the world. Never underestimate the incredible impact you make every single day.", author: "Educator's Creed" },
    { text: "You chose teaching not for fame or fortune, but for the privilege of watching young minds discover their potential. That choice makes you extraordinary.", author: "Teacher's Pride" }
  ];

  const favoriteTools = [
    { name: "Lesson Planner Pro", icon: BookOpen, color: "from-blue-500 to-indigo-500" },
    { text: "Smart Grading", icon: Star, color: "from-purple-500 to-pink-500" },
    { text: "Class Organizer", icon: Heart, color: "from-green-500 to-emerald-500" },
    { text: "Quiz Master", icon: Zap, color: "from-orange-500 to-red-500" }
  ];

  useEffect(() => {
    const randomQuote = educationalQuotes[Math.floor(Math.random() * educationalQuotes.length)];
    setCurrentQuote(randomQuote);
  }, []);
  
  const getUserName = () => {
    if (teacherProfile?.name) return teacherProfile.name;
    if (user?.user_metadata?.name) return user.user_metadata.name;
    if (user?.email) return user.email.split('@')[0];
    return 'Teacher';
  };

  return (
    <div className="mb-6">
      {/* Compact Welcome Message */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800 mb-1">
          Welcome back, {getUserName()}
        </h1>
        <p className="text-xs text-gray-700">
          Ready to create something amazing today?
        </p>
      </div>

      {/* Educational Quote of the Day - More Compact */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 mb-4">
        <div className="flex items-center space-x-2 mb-3">
          <Quote className="h-4 w-4 text-blue-600" />
          <h2 className="text-base font-semibold text-gray-800">Quote of the Day</h2>
        </div>
        <div className="text-center">
          <blockquote className="text-sm text-gray-800 italic mb-2 leading-relaxed">
            "{currentQuote.text}"
          </blockquote>
          <cite className="text-xs text-gray-600 font-medium">— {currentQuote.author}</cite>
        </div>
      </div>

      {/* Your Favorite Tools - More Compact */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
        <div className="flex items-center space-x-2 mb-3">
          <Heart className="h-4 w-4 text-red-500" />
          <h2 className="text-base font-semibold text-gray-800">Your Favorite Tools</h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {favoriteTools.map((tool, index) => (
            <Button 
              key={index}
              className={`bg-gradient-to-r ${tool.color} hover:opacity-90 text-white px-3 py-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xs font-medium`}
            >
              <tool.icon className="mr-1 h-3 w-3" />
              {tool.name || tool.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
