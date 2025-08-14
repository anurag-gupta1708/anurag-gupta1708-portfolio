
import React from 'react';
import { motion } from "framer-motion";

  // import Threads from '../ui/Threads';
  import Galaxy from "../ui/Galaxy";

const HeroBackground = () => {
  // return (
  //   <div className="absolute inset-0">
  //     <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30"></div>
  //     <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10"></div>
      
  //     {/* Floating Geometric Shapes */}
  //     <motion.div
  //       animate={{ 
  //         y: [0, -20, 0],
  //         rotate: [0, 180, 360]
  //       }}
  //       transition={{ 
  //         duration: 8,
  //         repeat: Infinity,
  //         ease: "linear"
  //       }}
  //       className="absolute top-20 left-10 w-16 h-16 border border-cyan-400/30 rounded-lg"
  //     />
      
  //     <motion.div
  //       animate={{ 
  //         y: [0, 20, 0],
  //         rotate: [360, 180, 0]
  //       }}
  //       transition={{ 
  //         duration: 10,
  //         repeat: Infinity,
  //         ease: "linear"
  //       }}
  //       className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"
  //     />
      
  //     <motion.div
  //       animate={{ 
  //         scale: [1, 1.2, 1],
  //         opacity: [0.5, 0.8, 0.5]
  //       }}
  //       transition={{ 
  //         duration: 6,
  //         repeat: Infinity,
  //         ease: "easeInOut"
  //       }}
  //       className="absolute bottom-40 left-20 w-8 h-8 bg-cyan-400/20 rounded-full"
  //     />
  //   </div>
  // );

/* <div className='absolute inset-0'>
  <Threads
    amplitude={4}
    distance={0.2}
    enableMouseInteraction={true}
  />
</div> */

return(

// With custom prop values
<div className="absolute inset-0">
  <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1.5}
    glowIntensity={0.5}
    saturation={0.8}
    hueShift={240}
    transparent={false}
    repulsionStrength={4}
  />
</div>
)
};

export default HeroBackground;
