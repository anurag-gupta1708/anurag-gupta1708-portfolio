import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {

  const experiences = [
    {
      role: "Web Full Stack Development Virtual Intern",
      company: "AICTE",
      certificate: "public/Anurag Kumar  Gupta_AICTE_certificate.pdf",
      duration: "Oct – Dec 2024",
      points: [
        "Participated in a virtual internship focused on full stack web development",
        "Worked with HTML, CSS, JavaScript, Node.js, and MySQL",
        "Built responsive web applications and backend APIs",
        "Gained hands-on experience in real-world project development"
      ]
    },
    {
      role: "Java Developer Trainee",
      company: "WIPRO",
      certificate: "public/J_250540604_Anurag Kumar Gupta.pdf",
      duration: "2025",
      points: [
        "Developed Java-based applications using object-oriented programming principles",
        "Worked on backend logic, data handling, and application flow",
        "Practiced problem solving and optimized code performance",
        "Implemented basic database connectivity and CRUD operations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & Certification
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto space-y-8">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-500 transition-all duration-300">

                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">

                    <div>
                      <CardTitle className="text-white text-xl">
                        {exp.role}
                      </CardTitle>

                      <p className="text-cyan-400 font-semibold">
                        {exp.certificate ? (
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                    </div>

                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {exp.duration}
                    </Badge>

                  </div>
                </CardHeader>

                <CardContent className='space-y-4'>
                  <ul className="space-y-2 text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  {/* Certificate  */}
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    >
                       📄 
                    </a>
                  )}
                </CardContent>

              </Card>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
