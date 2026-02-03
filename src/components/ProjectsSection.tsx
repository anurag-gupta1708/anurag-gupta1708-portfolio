import React from 'react';
import { motion, time } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
{
  title: "AI-Powered Tourist Journey Planning & Public-Safety Dashboard",
  description: "AI-powered travel itinerary generator with ticket parsing, preference filters, and smart recommendations. Public safety dashboard integrating real-time data for informed travel decisions.",
  tools: [" React, Tailwind CSS, Node.js MongoDB, OpenAI APIs "],
      type: "Development",
      image: "public/Screenshot (1).png",
      liveDemoUrl: "https://ai-powered-tourist-journey-planning-and-public-safety-dashboard.vercel.app/" // Replace with your actual demo URL
    },
    {
      title: "BGMI-1v1 Voting Platform",
      description: " Real-time 1v1 voting system with live analytics and secure Gmail-based vote restriction. Full-stack build using Node.js, MongoDB & Tailwind, deployed on Vercel for scalable performance.",
      tools: ["React, Tailwind CSS, Node.js, MongoDB"],
      type: "Solo Developer ",
      image: "public/uploads/Screenshot (17).png",
      liveDemoUrl: "https://bgmi-1v1.vercel.app/" // Replace with your actual demo URL
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-black"
                      onClick={() => window.open("https://github.com/anurag-gupta1708?tab=repositories", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-cyan-500 hover:bg-cyan-600"
                      onClick={() => window.open(project.liveDemoUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="border-gray-600 text-gray-300">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
