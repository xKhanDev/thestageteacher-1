import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Building2,
  ArrowRight,
  Users,
  Crown,
} from "lucide-react";
import {
  FaCheck,
  FaCrown,
  FaSlideshare,
  FaGoogle,
  FaRobot,
  FaBrain,
  FaLanguage,
  FaGamepad,
  FaRocket,
} from "react-icons/fa";

// react-icons/io (Ionicons)
import {
  IoMdInfinite,
  IoIosChatbubbles,
  IoMdNotifications,
} from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";

interface ProductsSectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const ProductsSection = ({
  onShowLogin,
  onJoinWaitlist,
}: ProductsSectionProps) => {
  const { t } = useTranslation();
  const { createCheckout } = useSubscription();
  const [upgrading, setUpgrading] = useState(false);

  const handleUpgrade = async () => {
    try {
      setUpgrading(true);
      await createCheckout(); // Use default Pro plan price
    } catch (error) {
      console.error('Error upgrading:', error);
    } finally {
      setUpgrading(false);
    }
  };
  const products = [
    {
      id: "easyteach-free",
<<<<<<< HEAD
      name: "EasyTeach Free",
      description:
        "Perfect for getting started with AI-powered teaching tools and basic content generation.",
      longDescription:
        "Get started with essential AI teaching tools including lesson planning, communication assistance, and basic content generation.",
=======
      name: t("products.easyTeachFree"),
      description: t("products.basicLessonPlanning"),
      longDescription: t("products.teachersCount"),
>>>>>>> main
      icon: BookOpen,
      status: "available",
      color: "from-blue-500 to-blue-600",
      bgColor: "blue",
      price: t("common.free"),
      priceSubtext: t("products.freeForever"),
      features: [
        { text: t("products.basicLessonPlanning"), reactIcon: FaCheck },
        { text: t("products.parentCommunicationTemplates"), reactIcon: FaCheck },
        { text: t("products.limitedAIGenerations"), reactIcon: FaCheck },
        { text: t("products.basicBehaviorManagement"), reactIcon: FaCheck },
        { text: t("products.communitySupportText"), reactIcon: FaCheck },
      ],
      users: t("products.teachersCount"),
      action: () => onShowLogin(),
      actionText: t("products.getStartedFree"),
      btnIcon: ArrowRight,
      popular: false,
    },
    {
      id: "easyteach-pro",
      name: t("products.easyTeachPro"),
      description: t("products.everythingInFree"),
      longDescription: t("products.exclusiveEarlyAccess"),
      icon: Crown,
      status: "available",
      color: "from-purple-500 to-purple-600",
      bgColor: "purple",
      price: "$89",
      priceSubtext: t("products.perYear"),
      features: [
        { text: t("products.everythingInFree"), reactIcon: FaCheck },
        { text: t("products.unlimitedAIGenerations"), reactIcon: IoMdInfinite },
        {
          text: t("products.continueThreads"),
          reactIcon: IoIosChatbubbles,
        },
        { text: t("products.unlimitedAISlides"), reactIcon: FaSlideshare },
        { text: t("products.exportToGoogleSlides"), reactIcon: FaGoogle },
        { text: t("products.easyTeachForStudents"), reactIcon: FaCheck },
        { text: t("products.lifetimeOutputHistory"), reactIcon: FaCheck },
        { text: t("products.exclusiveEarlyAccess"), reactIcon: FaCheck },
      ],
      users: t("products.mostPopular"),
      action: () => handleUpgrade(),
      actionText: t("products.upgradeToPro"),
      btnIcon: FaCrown,
      popular: true,
    },
    {
      id: "school-admin",
      name: t("products.schoolAdministration"),
      description: t("products.schoolAdminDesc"),
      longDescription: t("products.institutionalReporting"),
      icon: Building2,
      status: "coming-soon",
      color: "from-orange-500 to-orange-600",
      bgColor: "orange",
      price: t("products.comingSoon"),
      priceSubtext: "",
      features: [
        {
          text: t("products.schoolWideManagement"),
          reactIcon: MdOutlineAutoGraph,
        },
        { text: t("products.aiPoweredAdministrative"), reactIcon: FaRobot },
        { text: t("products.studentPerformanceAnalytics"), reactIcon: VscGraph },
        { text: t("products.staffManagementScheduling"), reactIcon: PiUsersThreeFill },
        { text: t("products.parentSchoolCommunication"), reactIcon: FaCheck },
        { text: t("products.institutionalReporting"), reactIcon: FaCheck },
      ],
      users: t("products.comingSoon"),
      action: () => onJoinWaitlist(t("products.schoolAdministration")),
      actionText: t("products.joinWaitlist"),
      btnIcon: IoMdNotifications,
      popular: false,
    },
    {
      id: "lms",
      name: t("products.advancedLMS"),
      description: t("products.advancedLMSDesc"),
      longDescription: t("products.blockchainCertificates"),
      icon: GraduationCap,
      status: "coming-soon",
      color: "from-green-500 to-green-600",
      bgColor: "green",
      price: t("products.comingSoon"),
      priceSubtext: "",
      features: [
        {
          text: t("products.aiPersonalizationAdaptive"),
          reactIcon: FaBrain,
        },
        {
          text: t("products.aiGeneratedContentMultilingual"),
          reactIcon: FaLanguage,
        },
        {
          text: t("products.smartProctoringGrading"),
          reactIcon: RiSecurePaymentFill,
        },
        { text: t("products.gamificationVRARIntegration"), reactIcon: FaGamepad },
        { text: t("products.predictiveAnalyticsAssistant"), reactIcon: FaCheck },
        {
          text: t("products.blockchainCertificates"),
          reactIcon: FaCheck,
        },
      ],
      users: t("products.comingSoon"),
      action: () => (window.location.href = "/lms"),
      actionText: t("products.enterLMSBeta"),
      btnIcon: FaRocket,
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-[#2901B3] to-blue-600 bg-clip-text text-transparent">
              {" "}
              Plan
            </span>
=======
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t("products.choosePlan")}
>>>>>>> main
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("products.planDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3">
          {products.map((product, index) => (
            <div
              key={product.id}
<<<<<<< HEAD
              className={`relative flex flex-col justify-between border border-gray-300 rounded-2xl hover:border-${product.bgColor}-600 hover:border-blue-500`}
=======
              className={`relative border border-gray-300 rounded-2xl hover:border-${product.bgColor}-600`}
>>>>>>> main
            >
              <div>
                {/* header */}
                <div
                  className={`flex items-center justify-between bg-${
                    product.bgColor
                  }-600 ${
                    product.name.startsWith("School") && "bg-orange-600"
                  } text-white rounded-t-2xl px-4 py-12 md:py-12
                `}
                >
                  <h1 className="text-lg/6 font-bold text-white">
                    {product.name}
                  </h1>
                  <span
                    className={`text-xs ${
                      product.name.startsWith("School")
                        ? "w-fit md:w-[108px] text-center"
                        : "w-fit"
                    } bg-white rounded-full px-2 py-1 text-${
                      product.bgColor
                    }-600 font-semibold`}
                  >
                    {product.status}
                  </span>
                </div>
<<<<<<< HEAD
                {/* icon */}
                <span
                  className={`absolute left-4 z-10 size-16 p-3 rounded-full bg-accent flex items-center justify-center bg-${
                    product.bgColor
                  }-100 ${
                    product.name.startsWith("School")
                      ? "top-20 md:top-[110px]"
                      : "top-[85px]"
                  }`}
                >
                  <product.icon
                    className={`h-6 w-6 text-${product.bgColor}-600`}
                  />
                </span>
                {/* content goes here */}
                <div className="px-4 flex flex-col gap-2">
                  <h1 className="pt-8 text-2xl font-bold">
                    {product.price}
                    {product.priceSubtext && (
                      <span className="text-gray-600 ml-1 text-sm">/</span>
                    )}
                    <span className="text-sm font-semibold">
                      {product.priceSubtext}
=======
                <p className="text-sm">{product.longDescription}</p>

                {/* What's included */}
                <div>
                  <h3 className="text-sm font-semibold mb-1 mt-4">
                    {t("products.whatsIncluded")}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <p
                        key={`${product.id}-feature-${featureIndex}`}
                        className={`text-gray-600 flex items-start text-sm ${
                          feature.text.startsWith("Everything in Free")
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        <feature.reactIcon
                          className={`size-4 mr-2 mt-1 text-${product.bgColor}-600`}
                        />
                        {feature.text}
                      </p>
                    ))}
                    <span className="text-gray-500 italic text-sm">
                      {t("products.featuresMore", { count: product.features.length - 4 })}
>>>>>>> main
                    </span>
                  </h1>
                  <p className="text-sm">{product.description}</p>

                  {/* users */}
                  <div className="mb-4">
                    {product.price === "Free" ? (
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <Users className="h-3 w-3 mr-1" />
                        <span className="">{product.users}</span>
                      </div>
                    ) : (
                      <span
                        className={`bg-${product.bgColor}-100 rounded-full px-2 py-1 text-xs font-semibold text-${product.bgColor}-600`}
                      >
                        {product.users}
                      </span>
                    )}
                  </div>
                  {/* <p className="text-sm">{product.longDescription}</p> */}

                  {/* What's included */}
                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      What's included:
                    </h3>
                    <div className="flex flex-col gap-2">
                      {product.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <p
                            key={`${product.id}-feature-${featureIndex}`}
                            className={`text-gray-600 flex items-start text-sm ${
                              feature.text.startsWith("Everything in Free")
                                ? "font-semibold"
                                : ""
                            }`}
                          >
                            <feature.reactIcon
                              className={`size-4 mr-2 mt-1 text-${product.bgColor}-600`}
                            />
                            {feature.text}
                          </p>
                        ))}
                      <span className="text-gray-500 italic text-sm">
                        +{product.features.length - 4} features more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className={`p-4`}>
                <Button
<<<<<<< HEAD
                  className={`mt-4 py-6 w-full flex items-center justify-center bg-${
                    product.bgColor
                  }-600 hover:bg-${product.bgColor}-700 ${
                    product.name.startsWith("School") &&
                    "bg-orange-600 hover:bg-orange-700"
                  }`}
=======
                  onClick={product.action}
                  disabled={product.id === "easyteach-pro" && upgrading}
                  className={`mt-4 py-6 w-full flex items-center justify-center bg-${product.bgColor}-600 hover:bg-${product.bgColor}-700`}
>>>>>>> main
                >
                  {product.id === "easyteach-pro" && upgrading ? "Opening Checkout..." : product.actionText}{" "}
                  <product.btnIcon className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
