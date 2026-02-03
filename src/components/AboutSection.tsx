
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
            Hello! I’m <span className="text-rose-400 font-semibold">Anurag</span>, a passionate developer who loves building clean, functional, and user-friendly digital experiences. 
            I enjoy bringing ideas to life through efficient and elegant code, whether 
            I’m developing intuitive user interfaces or working on robust server-side solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in computer science and hands-on experience across multiple real-world projects, I am always eager to explore new technologies, solve challenging problems, 
              and continuously improve my skill set. In my free time, I enjoy practicing problem-solving on platforms like LeetCode and staying updated with the latest technology trends.
               I am driven to create impactful solutions and grow alongside innovative and forward-thinking teams.
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
                  <p className="text-gray-300"><a href="https://www.galgotiasuniversity.edu.in/" target="_blank">Galgotias University (2022–2026)</a></p>
                  
                  {/* <p className="text-gray-400">CGPA: 7.52</p> */}
                </div>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-green-400 font-semibold">Senior Secondary </h4>
                  <p className="text-gray-300"><a href="http://navjeevandeoria.in/BasicDetail.aspx"target=''>Nav Jeevan Mission School</a></p>
                  {/* <p className="text-gray-400">70.2% (2020–2021)</p> */}
                </div>
                {/* <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-green-400 font-semibold">Class 10</h4>
                  <p className="text-gray-300"><a href="http://navjeevandeoria.in/BasicDetail.aspx"target=''>Nav Jeevan Mission School</a></p>
                  <p className="text-gray-400">79% (2018–2019)</p>
                </div> */}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
