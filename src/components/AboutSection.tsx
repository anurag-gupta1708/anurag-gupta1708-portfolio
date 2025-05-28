
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
              Aspiring software developer with solid background knowledge in user-centered design and full-stack web development. 
              Knowledgeable about converting concepts into workable digital solutions and developing responsive, user-friendly interfaces.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Motivated by a love of learning, solving problems, and creating impactful, scalable technology. 
              Eager to contribute to practical projects and grow within dynamic development teams.
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
                  <p className="text-gray-300">Galgotias University (2022–Present)</p>
                  <p className="text-gray-400">CGPA: 7.29</p>
                </div>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-green-400 font-semibold">Class 12</h4>
                  <p className="text-gray-300">Nav Jeevan Mission School</p>
                  <p className="text-gray-400">70.2% (2020–2021)</p>
                </div>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-green-400 font-semibold">Class 10</h4>
                  <p className="text-gray-300">Nav Jeevan Mission School</p>
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
