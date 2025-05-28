
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white text-xl">Web Development Intern</CardTitle>
                  <p className="text-cyan-400 font-semibold">AICTE</p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Oct–Dec 2024
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Built real-world web applications using modern technologies
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Worked extensively with HTML, CSS, JavaScript, Node.js, and MySQL
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Contributed to scalable solutions and gained hands-on development experience
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Collaborated with team members on various development projects
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
