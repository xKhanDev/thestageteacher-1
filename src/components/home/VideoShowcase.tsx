
import { useTranslation } from 'react-i18next';
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VideoShowcase = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Trusted by Educational Leaders Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powered by cutting-edge AI technology from industry leaders
          </p>
        </div>

        {/* AI Partners Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Powered By Leading AI Technology</h3>
            <p className="text-slate-600">EasyTeach leverages the most advanced AI models to deliver exceptional educational experiences</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-slate-900">OpenAI</div>
                <div className="text-sm text-slate-600">GPT-4 Integration</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-slate-900">Google</div>
                <div className="text-sm text-slate-600">Gemini AI</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-slate-900">Claude</div>
                <div className="text-sm text-slate-600">Anthropic AI</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-slate-900">Meta</div>
                <div className="text-sm text-slate-600">Llama AI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-green-100">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Enterprise Security</h4>
              <p className="text-slate-600 text-sm">SOC 2 compliant with bank-level encryption</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Award Winning</h4>
              <p className="text-slate-600 text-sm">EdTech Innovation Award 2024</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Global Reach</h4>
              <p className="text-slate-600 text-sm">Used in 50+ countries worldwide</p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial with Real Photo */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                alt="Teacher using laptop"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl text-slate-700 italic mb-4">
                "EasyTeach has revolutionized how I prepare lessons. What used to take hours now takes minutes, 
                and my students are more engaged than ever."
              </blockquote>
              <div>
                <div className="font-semibold text-slate-900">Dr. Sarah Johnson</div>
                <div className="text-slate-600">Professor of Education, Stanford University</div>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-4 w-4 text-green-500 mr-1" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
