import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, CheckCircle } from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";

const PartnersIntegrations = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const integrations = [
    {
      name: "Google Workspace",
      description:
        "Seamless integration with Google Classroom, Drive, and Calendar",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=100&q=80",
      category: "Productivity",
    },
    {
      name: "Microsoft 365",
      description: "Connect with Teams, OneDrive, and Office applications",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=100&q=80",
      category: "Productivity",
    },
    {
      name: "Zoom",
      description: "Integrated video conferencing for virtual classrooms",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      category: "Communication",
    },
    {
      name: "Khan Academy",
      description: "Access to educational content and learning resources",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=100&q=80",
      category: "Education",
    },
  ];

  const partners = [
    {
      name: "Educational Technology Alliance",
      description: "Leading consortium of EdTech innovators",
      type: "Technology Partner",
    },
    {
      name: "Global Schools Network",
      description: "International network of progressive schools",
      type: "Education Partner",
    },
    {
      name: "Teacher Training Institute",
      description: "Professional development and certifications",
      type: "Training Partner",
    },
  ];

  return (
    <>
      <Navigation onShowLogin={() => setShowLogin(true)} />

      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="p-4 rounded-3xl icon-bg shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Partners &
                <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Integrations
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seamlessly connect with the tools you already use and trust. Our
                extensive network of partners ensures you get the best
                educational experience.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Platform Integrations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-16 h-16 rounded-lg object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 ">
                      {integration.name}
                    </CardTitle>
                    <div className="text-xs text-[#2901b3] font-medium bg-blue-100 px-2 py-1 rounded-full w-fit mx-auto">
                      {integration.category}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center text-sm">
                      {integration.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Strategic Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card
                  key={index}
                  className="group border-none hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col justify-between">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {partner.description}
                        </p>
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-sm text-[#2901b3] font-medium bg-blue-100 px-3 py-1 rounded-full">
                            {partner.type}
                          </span>
                          <CheckCircle className="h-8 w-8 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PartnersIntegrations;
