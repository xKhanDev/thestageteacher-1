
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, Sparkles, Star } from "lucide-react";

interface CTASectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const CTASection = ({ onShowLogin, onJoinWaitlist }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fade-in">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-5xl font-bold mb-6 animate-scale-in">
          Ready to Transform Education?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join the educational revolution with Ecerta's comprehensive AI-powered ecosystem
        </p>
        
        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Clock className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-bold mb-2">Save 50+ Hours Monthly</h3>
            <p className="text-sm opacity-90">Automate teaching, learning, and administration</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Users className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-bold mb-2">Complete Ecosystem</h3>
            <p className="text-sm opacity-90">Integrated solutions for every educational stakeholder</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Award className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-bold mb-2">Future-Ready Technology</h3>
            <p className="text-sm opacity-90">Stay ahead with cutting-edge AI innovations</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={onShowLogin}
            className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            Start with EasyTeach
            <Sparkles className="ml-3 h-6 w-6" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => onJoinWaitlist('Complete Ecerta Ecosystem')}
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-4 text-xl font-bold rounded-xl hover-scale transition-all duration-300"
          >
            Join All Waitlists
            <Star className="ml-3 h-6 w-6" />
          </Button>
        </div>
        
        <p className="text-sm opacity-80 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTASection;
