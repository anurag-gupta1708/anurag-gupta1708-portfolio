
import React from 'react';
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
    >
      <span className="text-gray-400 text-sm">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="p-2 rounded-full border border-gray-600"
      >
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
