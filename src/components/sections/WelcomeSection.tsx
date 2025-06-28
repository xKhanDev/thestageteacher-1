
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Users, Quote } from "lucide-react";
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
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
    { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
    { text: "The function of education is to teach one to think intensively and to think critically.", author: "Martin Luther King Jr." },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss" },
    { text: "Education is the kindling of a flame, not the filling of a vessel.", author: "Socrates" },
    { text: "The best teachers are those who show you where to look but don't tell you what to see.", author: "Alexandra K. Trenfor" },
    { text: "Teaching is the profession that teaches all the other professions.", author: "Unknown" },
    { text: "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.", author: "Brad Henry" },
    { text: "The art of teaching is the art of assisting discovery.", author: "Mark Van Doren" },
    { text: "Every child deserves a champion – an adult who will never give up on them.", author: "Rita Pearson" }
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

  const handleQuickActionClick = (category: string) => {
    if (onQuickAction) {
      onQuickAction(category);
    }
  };

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

      {/* Educational Quote of the Day */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Quote className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-800">Quote of the Day</h2>
        </div>
        <div className="text-center">
          <blockquote className="text-lg text-gray-700 italic mb-3 leading-relaxed">
            "{currentQuote.text}"
          </blockquote>
          <cite className="text-sm text-gray-500 font-medium">— {currentQuote.author}</cite>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button 
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
          onClick={() => handleQuickActionClick("Lesson Planning")}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Create Lesson Plan
        </Button>
        <Button 
          variant="outline" 
          className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all duration-200 text-sm"
          onClick={() => handleQuickActionClick("Communication")}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Draft Parent Email
        </Button>
        <Button 
          variant="outline" 
          className="border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 px-4 py-2 rounded-xl transition-all duration-200 text-sm"
          onClick={() => handleQuickActionClick("Behaviour Support")}
        >
          <Users className="mr-2 h-4 w-4" />
          Behavior Support
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;
