import React from 'react';
import { ArrowUp } from "lucide-react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left Text */}
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Anurag Gupta</span>. 
            All rights reserved.
          </p>

          {/* Center Tagline */}
          <p className="text-gray-500 text-sm">
            {/* Built with ❤️ using React & Tailwind CSS */}
          </p>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
