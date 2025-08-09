<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
=======

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> main
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Info,
} from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";

const ContactUs = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [showLogin, setShowLogin] = useState(false);
=======
  const { t } = useTranslation();
>>>>>>> main
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
<<<<<<< HEAD
      title: "Email Us",
      details: "support@ecerta.com",
      description: "Get in touch for general inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our support team",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Education Street, Tech City, TC 12345",
      description: "Our headquarters location",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "When we're available to help",
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
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Contact
                <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Us
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We'd love to hear from you. Get in touch with our team for
                support, partnerships, or any questions about Ecerta.
              </p>
            </div>
=======
      title: t("pages.contactUs.emailUs"),
      details: t("pages.contactUs.emailAddress"),
      description: t("pages.contactUs.emailDescription")
    },
    {
      icon: Phone,
      title: t("pages.contactUs.callUs"),
      details: t("pages.contactUs.phoneNumber"),
      description: t("pages.contactUs.phoneDescription")
    },
    {
      icon: MapPin,
      title: t("pages.contactUs.visitUs"),
      details: t("pages.contactUs.address"),
      description: t("pages.contactUs.addressDescription")
    },
    {
      icon: Clock,
      title: t("pages.contactUs.supportHours"),
      details: t("pages.contactUs.hours"),
      description: t("pages.contactUs.hoursDescription")
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-primary/5 via-primary/10 to-primary/15 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <header className="bg-background/90 backdrop-blur-sm border-b border-border shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>{t("pages.contactUs.backToHome")}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="p-4 rounded-3xl bg-gradient-primary shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              {t("pages.contactUs.title").split(' ')[0]} 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> {t("pages.contactUs.title").split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pages.contactUs.subtitle")}
            </p>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group shadow bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="p-3 icon-bg rounded-lg  group-hover:scale-105 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg/6 font-bold">{info.title}</h2>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 my-2 text-base/6">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-base/6 pt-2">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow bg-gray-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send Us a Message
=======
      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t("pages.contactUs.getInTouch")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-primary/5 text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="p-3 rounded-2xl bg-gradient-primary shadow-lg w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {info.title}
>>>>>>> main
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
<<<<<<< HEAD
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          placeholder="John Doe"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="border border-gray-200 focus:outline-none py-6"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          placeholder="johndoe@gmail.com"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="border border-gray-200 focus:outline-none py-6"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        value={formData.subject}
                        placeholder="I need help with..."
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="border border-gray-200 focus:outline-none py-6"
=======
                  <p className="font-semibold text-foreground mb-2">{info.details}</p>
                  <CardDescription className="text-muted-foreground text-sm">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-background to-primary/5 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {t("pages.contactUs.sendMessage")}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t("pages.contactUs.sendMessageDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("pages.contactUs.name")}
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-2 border-border focus:border-primary focus:ring-primary"
>>>>>>> main
                        required
                      />
                    </div>
                    <div>
<<<<<<< HEAD
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        placeholder="Enter your message here..."
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="border border-gray-200 focus:outline-none py-4 min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full my-btn text-white p-6 group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:rotate-45 transition-all duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
=======
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("pages.contactUs.email")}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-2 border-border focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("pages.contactUs.subject")}
                    </label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="border-2 border-border focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("pages.contactUs.message")}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-2 border-border focus:border-primary focus:ring-primary min-h-[120px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-white py-3 text-lg"
                  >
                    {t("pages.contactUs.sendButton")}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
>>>>>>> main
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
