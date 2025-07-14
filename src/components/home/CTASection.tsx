
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Users, Award, Heart } from "lucide-react";

interface CTASectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const CTASection = ({ onShowLogin, onJoinWaitlist }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80"
          alt="Teacher working on laptop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 mb-8 text-slate-600">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">100,000+ Teachers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-slate-500" />
            <span className="text-sm font-medium">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-pink-500" />
            <span className="text-sm font-medium">Loved by Educators</span>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
          Ready to Transform Your Teaching?
        </h2>
        
        <p className="text-xl mb-12 text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Join thousands of educators who are already saving time and creating better learning experiences with our AI-powered platform.
        </p>

        {/* Real educator image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
            alt="Educator using modern technology in classroom"
            className="rounded-2xl shadow-xl mx-auto max-w-2xl w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg"
            onClick={onShowLogin}
            className="bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-600 hover:to-slate-700 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => onJoinWaitlist('Advanced Features')}
            className="border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 px-12 py-4 text-xl font-semibold rounded-xl transition-all duration-200"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Join Waitlist
          </Button>
        </div>

        {/* Additional messaging */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg">
          <p className="text-slate-600 text-lg">
            <span className="font-semibold text-slate-700">No credit card required</span> • 
            <span className="mx-2">Free forever plan available</span> • 
            <span className="font-semibold text-blue-700">Setup in under 5 minutes</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
