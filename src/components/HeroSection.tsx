
import React from 'react';
import { motion } from "framer-motion";
import { ChevronDown, Download, Play, Github, Linkedin, Mail, Code, ArrowRight, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-16 h-16 border border-cyan-400/30 rounded-lg"
        />
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-8 h-8 bg-cyan-400/20 rounded-full"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
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
                className="relative w-80 h-75 rounded-full overflow-hidden border-4 border-white/25 shadow-2xl"
              >
                <img
                  src="public/_DSF8625 (1).jpg"
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

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-center lg:text-left space-y-8 order-1 lg:order-2"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-green-400 font-medium">Available for new opportunities</span>
              <Sparkles className="w-4 h-4 text-green-400" />
            </motion.div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white block mb-2">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block">
                  Anurag Gupta
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-2"
              >
                <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-gray-300">
                  Full-Stack Developer
                </h2>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg md:text-xl text-gray-400">
                  <span>&</span>
                  <span className="italic font-light">Problem Solver</span>
                </div>
              </motion.div>
            </div>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Transforming innovative ideas into <span className="text-cyan-400 font-medium">functional</span> and 
              <span className="text-purple-400 font-medium"> beautiful</span> digital solutions. 
              Passionate about building scalable, impactful technology.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8"
            >
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <a
                 href="/public/ANURAG GUPTA_RESUME With Photo.pdf"
                           download
                         target="_blank"
                        rel="noopener noreferrer"
                       >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
            
                variant="outline" 
                size="lg"
                className="group border-2 border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  ▶
                </motion.div>
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              {[
                { icon: Github,  href: "https://github.com/anurag-gupta1708", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", label: "LinkedIn" },
                { icon: Mail, href: "mailto:akg2571977@gmail.com", label: "Email" },
                { icon: Code, href: "https://leetcode.com/u/a_2005/", label: "LeetCode" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                  title={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
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
    </section>
  );
};

export default HeroSection;
