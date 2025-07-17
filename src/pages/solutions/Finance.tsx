
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, CreditCard, FileBarChart, Banknote, PieChart } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

const Finance = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: CreditCard,
      title: "Fee Management & Automated Billing",
      description: "Streamlined fee collection with automated billing and payment processing"
    },
    {
      icon: FileBarChart,
      title: "Custom Financial Reports",
      description: "Comprehensive financial reporting with detailed audit trails"
    },
    {
      icon: PieChart,
      title: "Budget Planning & Tracking",
      description: "Advanced budget planning tools with real-time expenditure tracking"
    },
    {
      icon: Banknote,
      title: "Banking & Payment Integration",
      description: "Seamless integration with bank systems and payment gateways"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Finance Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Keep your school financially healthy with full visibility and control over every penny.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why it Matters Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why it Matters</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Whether you're managing tuition payments, operational budgets, or vendor accounts, 
            our platform makes financial workflows simpler, more secure, and completely transparent.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Complete Financial Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <CreditCard className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated</h3>
              <p className="text-gray-600">Billing & Payments</p>
            </div>
            <div>
              <FileBarChart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent</h3>
              <p className="text-gray-600">Financial Reporting</p>
            </div>
            <div>
              <PieChart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time</h3>
              <p className="text-gray-600">Budget Tracking</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Finances?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take control of your school's financial health with intelligent tools.
          </p>
          <Button 
            size="lg"
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 text-lg"
          >
            Optimize School Finances
          </Button>
        </div>
      </div>

      {showLogin && (
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
};

export default Finance;
