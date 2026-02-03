
import React from 'react';
import { motion } from "framer-motion";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{scale:1.1}}
            onClick={()=>{
              document.getElementById("hero")?.scrollIntoView({behavior:"smooth"});
            }}
            className="text-xl font-bold text-white"
          >
            AG
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            {darkMode ? '🌙' : '☀️'}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
