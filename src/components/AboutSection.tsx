
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I am Anurag, a developer who loves to build clean, functional, and user-friendly digital experiences. 
              I enjoy bringing ideas to life through the simple elegance of writing mercilessly efficient code, 
              whether it be when developing user interfaces or working on the server-side.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Having studied computer science, partnered with my hands-on real-world experience in different projects, 
              I am always excited to explore new tools, solve problems, and further develop my skills. 
              I also enjoy problem-solving on LeetCode or exploring innovative technology trends in my spare time! 
              I love building impactful solutions and growing with progressive teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-semibold">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-300"><a href="https://www.galgotiasuniversity.edu.in/" target="_blank">Galgotias University (2022–Present)</a></p>
                  
                  <p className="text-gray-400">CGPA: 7.29</p>
                </div>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-green-400 font-semibold">Class 12</h4>
                  <p className="text-gray-300"><a href="http://navjeevandeoria.in/BasicDetail.aspx"target=''>Nav Jeevan Mission School</a></p>
                  <p className="text-gray-400">70.2% (2020–2021)</p>
                </div>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-green-400 font-semibold">Class 10</h4>
                  <p className="text-gray-300"><a href="http://navjeevandeoria.in/BasicDetail.aspx"target=''>Nav Jeevan Mission School</a></p>
                  <p className="text-gray-400">79% (2018–2019)</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
