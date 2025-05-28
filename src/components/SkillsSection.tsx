
import React from 'react';
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "Java", category: "Language" },
    { name: "VS Code", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "IntelliJ IDEA", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "AWS", category: "Tools" }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-2xl mb-2">
                {skill.category === 'Frontend' && '🎨'}
                {skill.category === 'Backend' && '⚙️'}
                {skill.category === 'Database' && '🗄️'}
                {skill.category === 'Language' && '💻'}
                {skill.category === 'Tools' && '🛠️'}
              </div>
              <h3 className="text-white font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
