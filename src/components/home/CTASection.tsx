
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Users, Award, Heart } from "lucide-react";

interface CTASectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const CTASection = ({ onShowLogin, onJoinWaitlist }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 mb-8 text-gray-600">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">100,000+ Teachers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-medium">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-pink-500" />
            <span className="text-sm font-medium">Loved by Educators</span>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Ready to Transform Your Teaching?
        </h2>
        
        <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Join thousands of educators who are already saving time and creating better learning experiences with our AI-powered platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg"
            onClick={onShowLogin}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => onJoinWaitlist('Advanced Features')}
            className="border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 px-12 py-4 text-xl font-semibold rounded-xl transition-all duration-200"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Join Waitlist
          </Button>
        </div>

        {/* Additional messaging */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-purple-700">No credit card required</span> • 
            <span className="mx-2">Free forever plan available</span> • 
            <span className="font-semibold text-blue-700">Setup in under 5 minutes</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
