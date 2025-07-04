import { useTranslation } from 'react-i18next';
import { Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('videoShowcase.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('videoShowcase.description')}
          </p>
        </div>

        <div className="relative group animate-scale-in">
          {/* Video Container with Floating Elements */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover-scale">
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Video Embed */}
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/QB6C94EVAdA"
                title="Ecerta EdTech Platform Overview"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Overlay with Play Button (visible until video starts) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg animate-pulse">
                  <Play className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
            
            {/* Video Info Bar */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Volume2 className="h-5 w-5" />
                    <span className="text-sm font-medium">{t('videoShowcase.fullDemo')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span className="text-sm">{t('videoShowcase.duration')}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                >
                  {t('videoShowcase.watchFull')}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Feature Highlights Around Video */}
          <div className="absolute -left-8 top-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white rounded-lg p-4 shadow-lg border border-blue-200">
              <div className="text-sm font-medium text-blue-600 mb-1">AI-Powered</div>
              <div className="text-xs text-gray-600">Smart Content Generation</div>
            </div>
          </div>
          
          <div className="absolute -right-8 top-1/3 hidden lg:block animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-white rounded-lg p-4 shadow-lg border border-purple-200">
              <div className="text-sm font-medium text-purple-600 mb-1">Seamless Integration</div>
              <div className="text-xs text-gray-600">All Tools Connected</div>
            </div>
          </div>
          
          <div className="absolute -left-12 bottom-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <div className="bg-white rounded-lg p-4 shadow-lg border border-green-200">
              <div className="text-sm font-medium text-green-600 mb-1">Time Saving</div>
              <div className="text-xs text-gray-600">15+ Hours Weekly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;