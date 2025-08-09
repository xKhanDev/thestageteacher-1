import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";
import {
  BookOpen,
  GraduationCap,
  Building2,
  Heart,
  TrendingUp,
  Award,
  Target,
  UserCheck,
  FileBarChart,
  Users,
  DollarSign,
  MessageSquare,
  FileText,
  HelpCircle,
  Zap,
  Shield,
  Mail,
} from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onShowLogin: () => void;
}

<<<<<<< HEAD
const MobileNavigation = ({
  isOpen,
  onClose,
  onShowLogin,
}: MobileNavigationProps) => {
=======
const MobileNavigation = ({ isOpen, onClose, onShowLogin }: MobileNavigationProps) => {
>>>>>>> main
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const products = [
    {
      id: "easyteach",
      name: "EasyTeach",
      icon: BookOpen,
      path: "/easyteach",
    },
    {
      id: "lms",
      name: "Advanced AI LMS",
      icon: GraduationCap,
      path: "/advanced-lms",
    },
    {
      id: "admin",
      name: "School Administration",
      icon: Building2,
      path: "/school-administration",
    },
  ];

  const solutionsByCategory = [
<<<<<<< HEAD
    {
      title: "Primary Schools",
      icon: Heart,
      path: "/solutions/primary-schools",
    },
    {
      title: "Secondary Schools",
      icon: TrendingUp,
      path: "/solutions/secondary-schools",
    },
    { title: "Universities", icon: Award, path: "/solutions/universities" },
    {
      title: "Independent Schools",
      icon: Target,
      path: "/solutions/independent-schools",
    },
=======
    { title: "Primary Schools", icon: Heart, path: "/solutions/primary-schools" },
    { title: "Secondary Schools", icon: TrendingUp, path: "/solutions/secondary-schools" },
    { title: "Universities", icon: Award, path: "/solutions/universities" },
    { title: "Independent Schools", icon: Target, path: "/solutions/independent-schools" },
>>>>>>> main
  ];

  const solutionsByDepartment = [
    { title: "Admissions", icon: UserCheck, path: "/solutions/admissions" },
<<<<<<< HEAD
    {
      title: "General Report",
      icon: FileBarChart,
      path: "/solutions/reporting",
    },
    { title: "HR & Payroll", icon: Users, path: "/solutions/hr-payroll" },
    { title: "Finance", icon: DollarSign, path: "/solutions/finance" },
    {
      title: "Communication",
      icon: MessageSquare,
      path: "/solutions/communication",
    },
=======
    { title: "General Report", icon: FileBarChart, path: "/solutions/general-reports" },
    { title: "HR & Payroll", icon: Users, path: "/solutions/hr-payroll" },
    { title: "Finance", icon: DollarSign, path: "/solutions/finance" },
    { title: "Communication", icon: MessageSquare, path: "/solutions/communication" },
>>>>>>> main
  ];

  const resources = [
    { title: "Case Studies", icon: FileText, path: "/case-studies" },
    { title: "Blog", icon: BookOpen, path: "/blog" },
    { title: "Knowledge Base", icon: HelpCircle, path: "/knowledge-base" },
  ];

  const about = [
<<<<<<< HEAD
    {
      title: "Partners & Integrations",
      icon: Zap,
      path: "/partners-integrations",
    },
=======
    { title: "Partners & Integrations", icon: Zap, path: "/partners-integrations" },
>>>>>>> main
    { title: "Data Protection & GDPR", icon: Shield, path: "/data-protection" },
    { title: "Contact Us", icon: Mail, path: "/contact-us" },
  ];

  if (!isOpen) return null;

  return (
<<<<<<< HEAD
    <div className="fixed left-0 top-0 w-full lg:hidden">
      {/* Backdrop */}
      {/* <div className="fixed inset-0 bg-black/50" onClick={onClose} /> */}

      {/* Menu Panel */}
      <div className="w-full h-screen bg-background shadow-xl animate-slide-in-right">
=======
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-background shadow-xl animate-slide-in-right">
>>>>>>> main
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Products */}
            <div>
              <button
                onClick={() => toggleSection("products")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.products")}
<<<<<<< HEAD
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "products" ? "rotate-90" : ""
                  }`}
=======
                <ChevronRight 
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "products" ? "rotate-90" : ""
                  }`} 
>>>>>>> main
                />
              </button>
              {expandedSection === "products" && (
                <div className="ml-4 mt-2 space-y-2">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleNavigate(product.path)}
<<<<<<< HEAD
                      className="py-3 flex items-center space-x-3 w-full px-4 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-blue-100 rounded-lg"
=======
                      className="flex items-center space-x-3 w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
>>>>>>> main
                    >
                      <product.icon className="h-4 w-4" />
                      <span>{product.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div>
              <button
                onClick={() => toggleSection("solutions")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.solutions")}
<<<<<<< HEAD
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "solutions" ? "rotate-90" : ""
                  }`}
=======
                <ChevronRight 
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "solutions" ? "rotate-90" : ""
                  }`} 
>>>>>>> main
                />
              </button>
              {expandedSection === "solutions" && (
                <div className="ml-4 mt-2 space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {t("navigation.byCategory")}
                    </h4>
                    <div className="space-y-1">
                      {solutionsByCategory.map((solution, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigate(solution.path)}
<<<<<<< HEAD
                          className="flex items-center space-x-3 w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
=======
                          className="flex items-center space-x-3 w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
>>>>>>> main
                        >
                          <solution.icon className="h-4 w-4" />
                          <span>{solution.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
<<<<<<< HEAD

=======
                  
>>>>>>> main
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {t("navigation.byDepartment")}
                    </h4>
                    <div className="space-y-1">
                      {solutionsByDepartment.map((solution, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigate(solution.path)}
<<<<<<< HEAD
                          className="flex items-center space-x-3 w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
=======
                          className="flex items-center space-x-3 w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
>>>>>>> main
                        >
                          <solution.icon className="h-4 w-4" />
                          <span>{solution.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button
                onClick={() => toggleSection("resources")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.resources")}
<<<<<<< HEAD
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "resources" ? "rotate-90" : ""
                  }`}
=======
                <ChevronRight 
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "resources" ? "rotate-90" : ""
                  }`} 
>>>>>>> main
                />
              </button>
              {expandedSection === "resources" && (
                <div className="ml-4 mt-2 space-y-2">
                  {resources.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate(item.path)}
<<<<<<< HEAD
                      className="flex items-center space-x-3 w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
=======
                      className="flex items-center space-x-3 w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
>>>>>>> main
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <div>
              <button
                onClick={() => toggleSection("about")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.aboutUs")}
<<<<<<< HEAD
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "about" ? "rotate-90" : ""
                  }`}
=======
                <ChevronRight 
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "about" ? "rotate-90" : ""
                  }`} 
>>>>>>> main
                />
              </button>
              {expandedSection === "about" && (
                <div className="ml-4 mt-2 space-y-2">
                  {about.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate(item.path)}
<<<<<<< HEAD
                      className="flex items-center space-x-3 w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
=======
                      className="flex items-center space-x-3 w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
>>>>>>> main
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-border space-y-2">
            <Button
              onClick={() => handleNavigate("/contact-us")}
              variant="outline"
<<<<<<< HEAD
              className="w-full p-6"
=======
              className="w-full"
>>>>>>> main
            >
              {t("navigation.contact")}
            </Button>
            <Button
              onClick={() => {
                onShowLogin();
                onClose();
              }}
<<<<<<< HEAD
              className="w-full my-btn p-6"
=======
              className="w-full bg-primary hover:bg-primary/90"
>>>>>>> main
            >
              {t("navigation.login")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default MobileNavigation;
=======
export default MobileNavigation;
>>>>>>> main
