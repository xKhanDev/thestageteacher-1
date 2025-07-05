
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Network, Zap, Users, TrendingUp, Globe, BookOpen, GraduationCap, Building2, CheckCircle } from "lucide-react";

interface EcertaShowcaseProps {
  onShowLogin: () => void;
}

const EcertaShowcase = ({ onShowLogin }: EcertaShowcaseProps) => {
  const { t } = useTranslation();
  
  const ecosystemFeatures = [
    {
      title: t('showcase.consolidatedAI'),
      description: t('showcase.consolidatedAIDesc'),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      icon: Brain,
      features: ["Cross-platform learning", "Shared intelligence", "Continuous improvement", "Predictive insights"]
    },
    {
      title: t('showcase.seamlessIntegration'),
      description: t('showcase.seamlessIntegrationDesc'),
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      icon: Network,
      features: ["Data synchronization", "Single sign-on", "Unified analytics", "Shared resources"]
    },
    {
      title: t('showcase.revolutionaryImpact'),
      description: t('showcase.revolutionaryImpactDesc'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: Zap,
      features: ["Industry transformation", "Future-ready solutions", "Global accessibility", "Scalable architecture"]
    }
  ];

  const whyEcerta = [
    {
      icon: Users,
      title: t('showcase.completeEcosystem'),
      description: t('showcase.completeEcosystemDesc')
    },
    {
      icon: TrendingUp,
      title: t('showcase.exponentialGrowth'),
      description: t('showcase.exponentialGrowthDesc')
    },
    {
      icon: Globe,
      title: t('showcase.globalTransformation'),
      description: t('showcase.globalTransformationDesc')
    }
  ];

  return (
    <>
      {/* Ecerta Platform Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('showcase.drivingForce')} 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {t('showcase.behindEducation')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('showcase.platformDescription')}
            </p>
          </div>

          <div className="space-y-20">
            {ecosystemFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} animate-fade-in hover:scale-105 transition-all duration-700`} style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg animate-pulse">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.2}s` }}>{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.4}s` }}>
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 animate-pulse" style={{ animationDelay: `${idx * 0.1}s` }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <div className="relative mx-auto max-w-lg">
                    <div className="bg-white rounded-2xl p-4 shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-500">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-64 object-cover rounded-lg hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Floating decoration around images */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ecerta Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('showcase.whyEcerta')}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('showcase.whyEcertaDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyEcerta.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={onShowLogin}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl hover-scale"
            >
              {t('showcase.experienceFuture')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcertaShowcase;
