
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import EasyTeachApp from "./pages/EasyTeachApp";
import EasyTeachPage from "./pages/EasyTeachPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import AIChatbot from "./pages/AIChatbot";
import WizardTools from "./pages/WizardTools";
import ToolsSuggestions from "./pages/ToolsSuggestions";
import OutputHistory from "./pages/OutputHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/easyteach-app" element={<EasyTeachApp />} />
            <Route path="/easyteach" element={<EasyTeachPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/ai-chatbot" element={<AIChatbot />} />
            <Route path="/wizard-tools" element={<WizardTools />} />
            <Route path="/tools-suggestions" element={<ToolsSuggestions />} />
            <Route path="/output-history" element={<OutputHistory />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
