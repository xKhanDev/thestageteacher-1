import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Search,
  HelpCircle,
  BookOpen,
  Video,
  FileText,
  MessageCircle,
  ArrowDownRight,
} from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";

const KnowledgeBase = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [onModelOpen, setOnModelOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      title: "Getting Started",
      description: "Basic setup and first steps with Ecerta",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      articles: 12,
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and walkthroughs",
      icon: Video,
      color: "from-purple-500 to-purple-600",
      articles: 8,
    },
    {
      title: "Feature Guides",
      description: "Detailed explanations of all features",
      icon: FileText,
      color: "from-green-500 to-green-600",
      articles: 24,
    },
    {
      title: "FAQ",
      description: "Frequently asked questions and answers",
      icon: HelpCircle,
      color: "from-orange-500 to-orange-600",
      articles: 18,
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and problems",
      icon: MessageCircle,
      color: "from-red-500 to-red-600",
      articles: 15,
    },
  ];

  const featureGuides = [
    {
      title: "Lesson Plan Generator",
      purpose:
        "Create comprehensive, curriculum-aligned lesson plans in minutes",
      features: [
        "AI-powered content generation",
        "Curriculum alignment",
        "Multiple format exports",
        "Differentiation suggestions",
      ],
      steps: [
        "Select your grade level and subject",
        "Enter your lesson topic or learning objective",
        "Choose lesson duration and format preferences",
        "Review and customize the generated plan",
        "Export or save to your teaching library",
      ],
    },
    {
      title: "Parent Email Generator",
      purpose:
        "Craft professional, personalized emails to parents about student progress",
      features: [
        "Tone customization",
        "Situation-specific templates",
        "Multiple language support",
        "Progress tracking integration",
      ],
      steps: [
        "Select the type of communication (positive, concern, general update)",
        "Choose the student and relevant details",
        "Customize the tone and key points",
        "Review the generated email",
        "Send directly or copy to your email client",
      ],
    },
    {
      title: "Behavior Plan Generator",
      purpose:
        "Develop effective behavior intervention strategies for individual students",
      features: [
        "Evidence-based strategies",
        "Goal setting",
        "Progress monitoring",
        "Stakeholder collaboration",
      ],
      steps: [
        "Document the target behavior and current patterns",
        "Set specific, measurable goals",
        "Choose intervention strategies",
        "Define success metrics and timeline",
        "Share with relevant stakeholders",
      ],
    },
    {
      title: "AI Text Detector",
      purpose: "Identify AI-generated content in student submissions",
      features: [
        "High accuracy detection",
        "Detailed analysis reports",
        "Bulk processing",
        "Integration with grading systems",
      ],
      steps: [
        "Upload or paste the text to analyze",
        "Select analysis depth and parameters",
        "Review the detection results",
        "Access detailed analysis breakdown",
        "Generate reports for record-keeping",
      ],
    },
    {
      title: "Assessment Builder",
      purpose:
        "Create customized quizzes, tests, and rubrics aligned with learning objectives",
      features: [
        "Question bank integration",
        "Automatic grading",
        "Analytics dashboard",
        "Accessibility options",
      ],
      steps: [
        "Define assessment type and learning objectives",
        "Add questions from bank or create new ones",
        "Set grading criteria and rubrics",
        "Configure timing and accessibility settings",
        "Deploy to students and monitor results",
      ],
    },
    {
      title: "Differentiation Planner",
      purpose:
        "Adapt lessons and activities for diverse learning needs and abilities",
      features: [
        "Learning style accommodations",
        "Multi-level activities",
        "Resource suggestions",
        "IEP integration",
      ],
      steps: [
        "Identify student learning profiles",
        "Select the content or skill to differentiate",
        "Choose differentiation strategies",
        "Generate adapted materials and activities",
        "Track student progress and adjust as needed",
      ],
    },
  ];

  const featureGuides = [
    {
      title: "Lesson Plan Generator",
      purpose: "Create comprehensive, curriculum-aligned lesson plans in minutes",
      features: ["AI-powered content generation", "Curriculum alignment", "Multiple format exports", "Differentiation suggestions"],
      steps: [
        "Select your grade level and subject",
        "Enter your lesson topic or learning objective",
        "Choose lesson duration and format preferences",
        "Review and customize the generated plan",
        "Export or save to your teaching library"
      ]
    },
    {
      title: "Parent Email Generator",
      purpose: "Craft professional, personalized emails to parents about student progress",
      features: ["Tone customization", "Situation-specific templates", "Multiple language support", "Progress tracking integration"],
      steps: [
        "Select the type of communication (positive, concern, general update)",
        "Choose the student and relevant details",
        "Customize the tone and key points",
        "Review the generated email",
        "Send directly or copy to your email client"
      ]
    },
    {
      title: "Behavior Plan Generator",
      purpose: "Develop effective behavior intervention strategies for individual students",
      features: ["Evidence-based strategies", "Goal setting", "Progress monitoring", "Stakeholder collaboration"],
      steps: [
        "Document the target behavior and current patterns",
        "Set specific, measurable goals",
        "Choose intervention strategies",
        "Define success metrics and timeline",
        "Share with relevant stakeholders"
      ]
    },
    {
      title: "AI Text Detector",
      purpose: "Identify AI-generated content in student submissions",
      features: ["High accuracy detection", "Detailed analysis reports", "Bulk processing", "Integration with grading systems"],
      steps: [
        "Upload or paste the text to analyze",
        "Select analysis depth and parameters",
        "Review the detection results",
        "Access detailed analysis breakdown",
        "Generate reports for record-keeping"
      ]
    },
    {
      title: "Assessment Builder",
      purpose: "Create customized quizzes, tests, and rubrics aligned with learning objectives",
      features: ["Question bank integration", "Automatic grading", "Analytics dashboard", "Accessibility options"],
      steps: [
        "Define assessment type and learning objectives",
        "Add questions from bank or create new ones",
        "Set grading criteria and rubrics",
        "Configure timing and accessibility settings",
        "Deploy to students and monitor results"
      ]
    },
    {
      title: "Differentiation Planner",
      purpose: "Adapt lessons and activities for diverse learning needs and abilities",
      features: ["Learning style accommodations", "Multi-level activities", "Resource suggestions", "IEP integration"],
      steps: [
        "Identify student learning profiles",
        "Select the content or skill to differentiate",
        "Choose differentiation strategies",
        "Generate adapted materials and activities",
        "Track student progress and adjust as needed"
      ]
    }
  ];

  const popularArticles = [
<<<<<<< HEAD
    "How to create your first lesson plan with EasyTeach",
    "Setting up parent communication preferences",
    "Understanding behavior tracking features",
    "Customizing your classroom dashboard",
    "Integrating with existing school systems",
=======
    "Getting started with EasyTeach: Complete setup guide",
    "How to create your first lesson plan with AI assistance",
    "Setting up effective parent communication workflows",
    "Understanding behavior tracking and intervention tools",
    "Customizing your classroom dashboard for maximum efficiency",
    "Integrating EasyTeach with existing school systems",
    "Best practices for using AI tools in education",
    "Creating inclusive and accessible learning materials"
>>>>>>> main
  ];

  return (
    <>
      <Navigation onShowLogin={() => setOnModelOpen(true)} />
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50  to-blue-100 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="p-4 rounded-3xl icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                <HelpCircle className="size-8 md:size-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Knowledge
                <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Base
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers, tutorials, and guides to help you get the most out
                of Ecerta's educational platform.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles, guides, or tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white shadow rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <div className="p-3 icon-bg rounded-lg  group-hover:scale-105 transition-transform duration-300">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-lg/6 font-bold">{category.title}</h2>
                    </div>
                  </div>

<<<<<<< HEAD
                  <p className="text-gray-600 text-base/6 pt-2">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Popular Articles
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-2xl group border-none hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in p-4 md:p-6 rounded-md md:rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base/6 md:text-lg font-medium md:font-semibold text-gray-900 ">
=======
      {/* Feature Guides Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Tool Feature Guides
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Comprehensive guides for each tool in your EasyTeach toolkit. Learn what each tool does, 
            how to use it effectively, and maximize your teaching efficiency.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featureGuides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 font-medium">
                    {guide.purpose}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {guide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How to Use:</h4>
                    <ol className="space-y-2">
                      {guide.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Articles
          </h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors">
>>>>>>> main
                      {article}
                    </h3>
                    <div className="text-blue-500  group">
                      <ArrowDownRight
                        size={26}
                        className="group-hover:-rotate-45 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>{" "}
      <Footer />
    </>
  );
};

export default KnowledgeBase;
