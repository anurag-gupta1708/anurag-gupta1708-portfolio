
import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github,  href: "https://github.com/anurag-gupta1708", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/anurag-gupta1708", label: "LinkedIn" },
    { icon: Mail, href: "mailto:guptaanurag1708@gmail.com", label: "Email" },
    // { icon: Code, href: "https://leetcode.com/u/a_2005/", label: "LeetCode" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="flex justify-center lg:justify-self-auto space-x-6 mt-8"
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
          title={label}
        >
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
