
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Play, Github, ExternalLink, Mail, Phone, Linkedin, Code, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

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

  const projects = [
    {
      title: "EduExam",
      description: "Designed an education-focused exam interface with modern UI/UX principles",
      tools: ["Figma"],
      type: "Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      title: "Khatabook Clone",
      description: "Full-stack application featuring customer ledger, transaction history, filtering, and balance computation",
      tools: ["React.js", "Node.js"],
      type: "Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              AG
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="text-white block mb-2">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block">
                  Anurag Gupta
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-2"
              >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300">
                  Full-Stack Developer
                </h2>
                <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-gray-400">
                  <span>&</span>
                  <span className="italic font-light">Problem Solver</span>
                </div>
              </motion.div>
            </div>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Transforming innovative ideas into <span className="text-cyan-400 font-medium">functional</span> and 
              <span className="text-purple-400 font-medium"> beautiful</span> digital solutions. 
              Passionate about building scalable, impactful technology with <span className="text-green-400 font-medium">10+ years</span> of 
              dedication to learning and growth.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center space-x-6 mt-8"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
                { icon: Code, href: "#", label: "LeetCode" }
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
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
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
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
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

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description: "Wireframes and prototypes in Figma with user-centered design principles",
                icon: "🎨"
              },
              {
                title: "Full-Stack Development",
                description: "From frontend UIs to backend logic and database management",
                icon: "💻"
              },
              {
                title: "Custom Web Applications",
                description: "Tailored to client requirements with responsive design and functionality",
                icon: "🚀"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's work together</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+91-9415290058</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">akg2571977@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">LinkedIn</p>
                    <p className="text-white">linkedin.com/in/anurag-gupta-378819274</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">LeetCode</p>
                    <p className="text-white">leetcode.com/u/a_2005</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Your Name" 
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <Input 
                      placeholder="Subject" 
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Anurag Gupta. All rights reserved. Built with passion and dedication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
