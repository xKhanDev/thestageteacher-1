
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-3 mb-6 animate-fade-in">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover-scale">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold">Vicerta</span>
        </div>
        <p className="text-gray-400 mb-6">
          Empowering education worldwide with comprehensive AI-powered solutions.
        </p>
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          <a href="/privacy-policy" className="hover:text-white transition-colors hover-scale">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-white transition-colors hover-scale">Terms of Service</a>
          <a href="/data-protection" className="hover:text-white transition-colors hover-scale">Data Protection</a>
          <a href="/contact-us" className="hover:text-white transition-colors hover-scale">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
