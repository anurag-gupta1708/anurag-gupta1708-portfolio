
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Download, Play, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextType from '../TypeText';
import SocialLinks from './SocialLinks';





const HeroContent = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowVideo(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <motion.div
    id="hero"
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
            Anurag Kumar Gupta
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-2"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-gray-300">
            <TextType 
  text={["Code...", "Create...", "Innovate"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={false}
  cursorCharacter="/"
/>
            
          </h2>
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg md:text-xl text-gray-400">
            <span></span>
            <span className="italic font-light">"Aspiring Full Stack Developer"</span>
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
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-self-auto items-center mt-8"
      >
  <Button 
    size="lg"
    className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
  >
    <a
     href="/public/uploads/ANURAG KUMAR GUPTA_Resume.pdf"
               download
             target="_blank"
            rel="noopener noreferrer"
           >
    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
    Download CV
    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
    </a>
  </Button>
  {/* <Button 
          variant="outline" 
          size="lg"
          className="group border-2 border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          onClick={() => setShowVideo(true)}
        >
          <Play className="w-5 h-5 mr-2" />
          Intro Video
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-2"
          >
            ▶
          </motion.div>
        </Button>
{showVideo && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setShowVideo(false)} // Click outside closes
  >

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()} // Prevent background close
      className="relative bg-black p-4 rounded-xl w-[90%] max-w-2xl"
    >

      {/* Close Button */}
      {/* <button
        onClick={() => setShowVideo(false)}
        className="absolute -top-3 -right-3 bg-white text-black w-8 h-8 rounded-full font-bold shadow-lg hover:scale-110 transition"
      >
        ✕
      </button> */}

      {/* Video */}
      {/* <video
        src="/uploads/3D Intro.mp4"
        controls
        autoPlay
        className="w-full rounded-lg"
      />

    </motion.div>

  </div>
)} */} 



      </motion.div>
      
      {/* Social Links */}
      <SocialLinks />
    </motion.div>
  );
};

export default HeroContent;
