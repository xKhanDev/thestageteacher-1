<<<<<<< HEAD
import { Facebook, Twitter, Youtube } from "lucide-react";
=======

import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";
>>>>>>> main

const Footer = () => {
  const { t } = useTranslation();
  return (
<<<<<<< HEAD
    <footer className="bg-[#2901b3] text-white grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-8">
      {/* Footer Content */}
      <div>
        <img
          src="/logos/brand-light.svg"
          alt="Footer Logo"
          className="w-32 mb-4"
        />
        <p className="text-gray-200 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          recusandae asperiores beatae aut delectus commodi sint deleniti magni
          enim reiciendis sunt, vero provident labore facere tenetur nam iste
          cum, inventore repellendus assumenda temporibus consequatur quia
          cupiditate! Iusto quasi porro itaque?
        </p>
        <h1 className="text-2xl font-semibold text-white block text-center md:text-start">
          Follow us
        </h1>

        <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
          {[
            { name: "twitter", href: "#" },
            {
              name: "youtube",
              href: "#",
            },
            { name: "facebook", href: "#" },
          ].map((a) => (
            <a
              href={a.href}
              className="border border-gray-200 rounded-full p-2 hover:bg-white hover:text-[#2901b3] transition-all duration-200"
            >
              {a.name.startsWith("twi") && <Twitter />}
              {a.name.startsWith("yout") && <Youtube />}
              {a.name.startsWith("fac") && <Facebook />}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-12 md:px-0 border border-emerald-300">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white block text-center">
            Content
          </h3>
          <div className="flex flex-col items-center space-y-2">
            {[
              { name: "Home", href: "#" },
              { name: "About", href: "#" },
              { name: "Contact", href: "#" },
            ].map((a) => (
              <a href={a.href} className="text-gray-200 hover:text-blue-300">
                {a.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white block text-center">
            Content
          </h3>
          <div className="flex flex-col items-center space-y-2">
            {[
              { name: "Home", href: "#" },
              { name: "About", href: "#" },
              { name: "Contact", href: "#" },
            ].map((a) => (
              <a href={a.href} className="text-gray-200 hover:text-blue-300">
                {a.name}
              </a>
            ))}
          </div>
=======
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-3 mb-6 animate-fade-in">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover-scale">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold">Vicerta</span>
        </div>
        <p className="text-gray-400 mb-6">
          {t("footer.tagline")}
        </p>
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          <a href="/privacy-policy" className="hover:text-white transition-colors hover-scale">{t("footer.privacy")}</a>
          <a href="/terms-of-service" className="hover:text-white transition-colors hover-scale">{t("footer.terms")}</a>
          <a href="/data-protection" className="hover:text-white transition-colors hover-scale">{t("footer.dataProtection")}</a>
          <a href="/contact-us" className="hover:text-white transition-colors hover-scale">{t("footer.contact")}</a>
>>>>>>> main
        </div>
      </div>
    </footer>
  );
};

export default Footer;
