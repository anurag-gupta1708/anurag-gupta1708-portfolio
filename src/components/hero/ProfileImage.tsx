
import React from 'react';
import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex justify-center lg:justify-start order-2 lg:order-1"
    >
      <div className="relative">
        {/* Animated Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-80 h-80 rounded-full border-2 border-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee)'
          }}
        />
        
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0}}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/25 shadow-2xl"
        >
          <img
            src="/lovable-uploads/2fe69ebc-bcd3-4c0d-acc6-5ce738339a18.png"
            alt="Anurag Gupta"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </motion.div>
        
        {/* Floating Elements around image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <Code className="w-6 h-6 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
