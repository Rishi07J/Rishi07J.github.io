import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Brain, Code2, Cpu, Database, Layers, GitBranch, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, ExternalLink, Github, Linkedin, Sparkles, Zap, Rocket, ChevronDown } from 'lucide-react';

const QuantumPortfolio = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalText, setTerminalText] = useState('');
  const [matrixRain, setMatrixRain] = useState([]);
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [skillsRotation, setSkillsRotation] = useState(0);
  const canvasRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  
  const fullText = "$ init --ai-engineer\n> Rishi Joshi\n> Building intelligent systems...";
  
  // Enhanced terminal typing
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);
  
  // Matrix rain effect
  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array.from({ length: columns }, () => Math.random() * -100);
    setMatrixRain(drops);
    
    const interval = setInterval(() => {
      setMatrixRain(prev => prev.map(drop => drop > 100 ? 0 : drop + 1));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Advanced cursor with velocity tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const velocity = {
        x: e.clientX - lastMousePos.current.x,
        y: e.clientY - lastMousePos.current.y
      };
      setMouseVelocity(velocity);
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Scroll-based transformations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSkillsRotation(scrollY * 0.1);
      
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
    ai: ['TensorFlow', 'PyTorch', 'CLIP', 'YOLOv8', 'Scikit-learn', 'LangChain', 'OpenCV'],
    frameworks: ['FastAPI', 'Flask', 'MongoDB', 'Firebase', 'Pinecone', 'Render', 'Vercel'],
    areas: ['LLMs', 'NLP', 'Computer Vision', 'OOP', 'DSA', 'Databases']
  };

  const projects = [
    {
      title: 'OneClouds',
      year: '2025',
      desc: 'Multi-Cloud Storage Platform with encrypted file management integrating Google Drive, OneDrive and Dropbox using OAuth, FastAPI and SQLAlchemy.',
      tech: ['FastAPI', 'OAuth', 'SQLAlchemy', 'Encryption'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      github: 'https://github.com/rishijoshi/oneclouds',
      accentColor: 'cyan'
    },
    {
      title: 'Room-Wise Object Detection',
      year: '2025',
      desc: 'Computer vision application using YOLOv8 and CLIP to detect unique objects across rooms and intelligently remove duplicates with FastAPI backend.',
      tech: ['YOLOv8', 'CLIP', 'FastAPI', 'OpenCV'],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      github: 'https://github.com/rishijoshi/room-detection',
      accentColor: 'purple'
    },
    {
      title: 'Self-Learning LLM Chatbot',
      year: '2025',
      desc: 'Adaptive chatbot powered by LangChain and Groq API with feedback-driven learning system and MongoDB storage for context retention.',
      tech: ['LangChain', 'Groq API', 'MongoDB', 'NLP'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      github: 'https://github.com/rishijoshi/llm-chatbot',
      accentColor: 'green'
    },
    {
      title: 'Multimodal Biometric CNN',
      year: '2024',
      desc: 'Fusion-based authentication system combining iris and fingerprint recognition using TensorFlow with custom preprocessing pipeline.',
      tech: ['TensorFlow', 'CNN', 'Computer Vision', 'Biometrics'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      github: 'https://github.com/rishijoshi/biometric-cnn',
      accentColor: 'orange'
    }
  ];

  const experience = [
    {
      company: 'VKAPS IT Solutions',
      role: 'AI & Automation Intern',
      period: 'May 2025 – Jun 2025',
      desc: 'Worked on automation workflows and AI-powered system optimization.',
      color: 'cyan'
    },
    {
      company: 'Bhardwaj Innovation',
      role: 'Tech Intern',
      period: 'Jan 2024 – May 2024',
      desc: 'Developed frontend features for the company website using React, HTML, CSS, and JavaScript.',
      color: 'purple'
    }
  ];

  const certifications = [
    'AWS Cloud Architecting',
    'Kubernetes',
    'Prompt Engineering',
    'IBM Python for Data Science',
    'Tableau'
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <div 
          className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/50 rounded-3xl p-8 shadow-2xl shadow-cyan-500/20 animate-modalIn"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 transition-all"
          >
            ✕
          </button>
          
          <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient} rounded-t-3xl`} />
          
          <div className="mt-4">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <span className="text-gray-400">{project.year}</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {project.desc}
            </p>
            
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">TECH STACK</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 bg-${project.accentColor}-500/10 border border-${project.accentColor}-500/30 rounded-lg text-${project.accentColor}-400 font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-${project.accentColor}-500/50 transition-all hover:scale-105`}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <button className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white font-semibold transition-all">
                Live Demo →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Matrix rain background */}
      <div className="fixed inset-0 z-0 opacity-10">
        {matrixRain.map((drop, i) => (
          <div
            key={i}
            className="absolute text-green-500 font-mono text-xs"
            style={{
              left: `${i * 20}px`,
              top: `${drop}%`,
              textShadow: '0 0 8px rgba(34, 197, 94, 0.8)'
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      {/* Advanced cursor with magnetic trail */}
      <div 
        className={`fixed w-12 h-12 border-2 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ${
          cursorVariant === 'hover' ? 'w-20 h-20 border-cyan-400 bg-cyan-400/20' : 'border-cyan-400'
        }`}
        style={{
          left: `${cursorPos.x - 24}px`,
          top: `${cursorPos.y - 24}px`,
          transform: `rotate(${mouseVelocity.x * 2}deg) scale(${Math.min(1 + Math.abs(mouseVelocity.x + mouseVelocity.y) * 0.01, 1.3)})`
        }}
      />
      
      {/* Cursor trail */}
      <div 
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 blur-sm"
        style={{
          left: `${cursorPos.x - 4}px`,
          top: `${cursorPos.y - 4}px`,
          transition: 'all 0.3s cubic-bezier(0.75, 0, 0.25, 1)'
        }}
      />

      {/* Holographic navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 bg-black/20 backdrop-blur-2xl border border-cyan-500/30 rounded-full px-2 py-2 flex gap-2 shadow-2xl shadow-cyan-500/20">
        {['hero', 'projects', 'skills', 'experience', 'contact'].map(section => (
          <a
            key={section}
            href={`#${section}`}
            className={`relative px-6 py-2 capitalize text-sm font-medium transition-all duration-300 rounded-full ${
              activeSection === section 
                ? 'text-black bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {section}
            {activeSection === section && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse opacity-50 blur-md" />
            )}
          </a>
        ))}
      </nav>

      {/* Hero Section - Neural Network Aesthetic */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-8">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-6xl w-full">
          <div className="relative bg-black/40 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-12 shadow-2xl shadow-cyan-500/20 overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-xl animate-spin-slow" />
            
            <div className="relative">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span className="ml-4 text-sm text-gray-500 font-mono">~/quantum-space/rishi.ai</span>
                </div>
                <div className="flex gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              </div>
              
              {/* Terminal content with enhanced styling */}
              <div className="font-mono space-y-6">
                <div className="text-green-400 text-3xl md:text-5xl font-bold leading-tight">
                  {terminalText.split('\n').map((line, i) => (
                    <div key={i} className="mb-2">{line}</div>
                  ))}
                  <span className="animate-pulse text-cyan-400">█</span>
                </div>
                
                <div className="text-gray-400 text-base md:text-lg mt-8 space-y-4 border-l-4 border-cyan-500/50 pl-6">
                  <p className="text-cyan-300 font-semibold text-xl">// System Overview</p>
                  <p className="leading-relaxed">
                    Aspiring AI and Software Engineer specializing in <span className="text-cyan-400 font-semibold">machine learning</span>, 
                    <span className="text-purple-400 font-semibold"> LLM-powered systems</span>, and 
                    <span className="text-green-400 font-semibold"> backend architectures</span>. 
                    Building scalable, intelligent solutions with a focus on security and automation.
                  </p>
                </div>

                {/* Enhanced stats grid with animations */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  {[
                    { icon: Brain, count: 4, label: 'AI Projects', color: 'cyan', delay: '0s' },
                    { icon: Code2, count: 5, label: 'Languages', color: 'purple', delay: '0.1s' },
                    { icon: Award, count: 5, label: 'Certifications', color: 'green', delay: '0.2s' },
                    { icon: Briefcase, count: 2, label: 'Internships', color: 'orange', delay: '0.3s' }
                  ].map((stat, idx) => (
                    <div 
                      key={idx}
                      className={`group relative bg-gradient-to-br from-${stat.color}-950/50 to-transparent border border-${stat.color}-500/30 rounded-2xl p-6 hover:scale-110 hover:border-${stat.color}-500/60 transition-all duration-300 cursor-pointer overflow-hidden`}
                      style={{ animationDelay: stat.delay }}
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/0 to-${stat.color}-500/20 group-hover:from-${stat.color}-500/20 group-hover:to-${stat.color}-500/40 transition-all duration-300`} />
                      <stat.icon className={`w-8 h-8 mx-auto mb-3 text-${stat.color}-400 group-hover:scale-125 transition-transform`} />
                      <div className={`text-4xl font-bold text-${stat.color}-400 mb-1 tabular-nums`}>{stat.count}</div>
                      <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                      <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-${stat.color}-500/20 rounded-full blur-2xl group-hover:bg-${stat.color}-500/40 transition-all`} />
                    </div>
                  ))}
                </div>

                {/* Contact info with enhanced styling */}
                <div className="flex flex-wrap gap-6 mt-10 text-sm bg-gradient-to-r from-cyan-950/30 to-transparent border-l-4 border-cyan-500 pl-6 py-4">
                  <a 
                    href="mailto:rishi.joshi343@nmims.in" 
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:translate-x-1"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <Mail className="w-5 h-5" />
                    rishi.joshi343@nmims.in
                  </a>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-5 h-5" />
                    +91 9399979454
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    Indore, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Projects Section - 3D Card Grid */}
      <section id="projects" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Featured Work
            </h2>
            <p className="text-gray-400 text-xl">Experimental projects pushing boundaries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative perspective-1000"
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.15}s both`
                }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:rotate-x-2 overflow-hidden cursor-pointer">
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 blur-xl`} />
                  
                  {/* Holographic shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%]" style={{ transition: 'transform 0.8s' }} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500 font-mono">{project.year}</span>
                      </div>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                        <Layers className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 bg-${project.accentColor}-500/10 border border-${project.accentColor}-500/30 rounded-lg text-xs text-${project.accentColor}-400 font-medium hover:bg-${project.accentColor}-500/20 transition-all`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-${project.accentColor}-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white font-semibold transition-all hover:scale-105 flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>
          
          {/* More Projects Button */}
          <div className="flex justify-center">
            <a
              href="https://github.com/rishijoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Github className="w-6 h-6" />
                Explore More on GitHub
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section - 3D Rotating Constellation */}
      <section id="skills" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Tech Arsenal
            </h2>
            <p className="text-gray-400 text-xl">Building with cutting-edge technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category} 
                className="relative group"
                style={{ animation: `slideUp 0.8s ease-out ${idx * 0.1}s both` }}
              >
                <div 
                  className="relative bg-black/60 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/60 transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `rotateY(${skillsRotation * 0.05 * (idx % 2 === 0 ? 1 : -1)}deg)`
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        {category === 'languages' && <Code2 className="w-7 h-7 text-white" />}
                        {category === 'ai' && <Brain className="w-7 h-7 text-white" />}
                        {category === 'frameworks' && <Database className="w-7 h-7 text-white" />}
                        {category === 'areas' && <Cpu className="w-7 h-7 text-white" />}
                      </div>
                      <h3 className="text-3xl font-bold capitalize text-white">
                        {category}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {items.map((skill, i) => (
                        <div
                          key={i}
                          className="group/skill relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-4 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                          onMouseEnter={() => setCursorVariant('hover')}
                          onMouseLeave={() => setCursorVariant('default')}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover/skill:from-purple-500/20 group-hover/skill:to-pink-500/20 transition-all duration-300" />
                          <div className="relative text-sm font-semibold text-gray-300 group-hover/skill:text-white transition-colors">
                            {skill}
                          </div>
                          <div className="absolute top-0 right-0 w-8 h-8 bg-purple-500/20 rounded-full blur-xl group-hover/skill:bg-purple-500/40 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Corner glow */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/40 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent" />
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Journey
            </h2>
            <p className="text-gray-400 text-xl">Experience & achievements</p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-r from-${exp.color}-950/30 to-transparent backdrop-blur-xl border-l-4 border-${exp.color}-500 rounded-r-3xl p-8 hover:from-${exp.color}-950/50 transition-all duration-300 hover:translate-x-2`}
                style={{ animation: `slideUp 0.8s ease-out ${index * 0.2}s both` }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${exp.color}-500 to-${exp.color}-700 flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold text-${exp.color}-400 group-hover:text-${exp.color}-300 transition-colors`}>{exp.company}</h3>
                      <p className="text-lg text-gray-300">{exp.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0 bg-black/30 px-4 py-2 rounded-lg">{exp.period}</span>
                </div>
                <p className="text-gray-400 leading-relaxed pl-16">{exp.desc}</p>
                <div className={`absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-${exp.color}-500 animate-pulse`} />
              </div>
            ))}

            {/* Education */}
            <div 
              className="relative bg-gradient-to-r from-blue-950/30 to-transparent backdrop-blur-xl border-l-4 border-blue-500 rounded-r-3xl p-8 mt-12 group hover:from-blue-950/50 transition-all duration-300 hover:translate-x-2"
              style={{ animation: 'slideUp 0.8s ease-out 0.4s both' }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:rotate-12 transition-transform flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">Education</h3>
                  <p className="text-lg text-gray-300 font-semibold">SVKM's NMIMS</p>
                  <p className="text-gray-400">B.Tech in Computer Engineering</p>
                  <p className="text-sm text-gray-500 font-mono bg-black/30 px-3 py-1 rounded-lg inline-block mt-2">2022–2026</p>
                </div>
              </div>
              <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
            </div>

            {/* Certifications */}
            <div 
              className="relative bg-gradient-to-r from-orange-950/30 to-transparent backdrop-blur-xl border-l-4 border-orange-500 rounded-r-3xl p-8 group hover:from-orange-950/50 transition-all duration-300 hover:translate-x-2"
              style={{ animation: 'slideUp 0.8s ease-out 0.6s both' }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center group-hover:rotate-12 transition-transform flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4 group-hover:text-orange-300 transition-colors">Certifications</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-400 bg-black/20 px-4 py-2 rounded-lg hover:bg-black/40 transition-all">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-orange-500 animate-pulse" />
            </div>

            {/* Additional Activities */}
            <div 
              className="relative bg-gradient-to-r from-purple-950/30 to-transparent backdrop-blur-xl border-l-4 border-purple-500 rounded-r-3xl p-8 group hover:from-purple-950/50 transition-all duration-300 hover:translate-x-2"
              style={{ animation: 'slideUp 0.8s ease-out 0.8s both' }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center group-hover:rotate-12 transition-transform flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">Activities & Interests</h3>
                  <div className="space-y-2 text-gray-400">
                    <p className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Technex Hackathon (36hr): 2024, 2025
                    </p>
                    <p className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      Oracle by GDSC
                    </p>
                    <p className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-400" />
                      Volunteering: Amogh Memorial Welfare Foundation
                    </p>
                    <p className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      Interests: Swimming, Billiards
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-purple-500 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Magnetic Buttons */}
      <section id="contact" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Let's Build Together
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Open to opportunities in <span className="text-cyan-400 font-semibold">AI</span>, 
              <span className="text-purple-400 font-semibold"> ML</span>, and 
              <span className="text-pink-400 font-semibold"> Full-Stack Development</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href="mailto:rishi.joshi343@nmims.in"
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Email Me
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            
            <a
              href="tel:+919399979454"
              className="group relative px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white font-bold text-lg hover:bg-white/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <span className="relative flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Call Me
              </span>
            </a>
            
            <a
              href="https://github.com/rishijoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white font-bold text-lg hover:bg-white/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <span className="relative flex items-center gap-3">
                <Github className="w-6 h-6" />
                GitHub
              </span>
            </a>
          </div>

          {/* Footer with animated text */}
          <div className="mt-24 pt-12 border-t border-white/10">
            <p className="text-gray-500 text-sm font-mono mb-4">
              <span className="text-cyan-400">{'<'}</span>
              Designed & Built with ⚡ by Rishi Joshi
              <span className="text-cyan-400">{' />'}</span>
            </p>
            <p className="text-gray-600 text-xs">
              © 2025 • Powered by Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Back to top button with enhanced styling */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:scale-110 hover:rotate-12 transition-all duration-300 z-40 group"
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <span className="text-3xl group-hover:-translate-y-1 transition-transform">↑</span>
      </button>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Enhanced CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(5px, 10px); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-modalIn {
          animation: modalIn 0.3s ease-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }

        * {
          cursor: none;
        }

        a, button {
          cursor: none;
        }
      `}</style>
    </div>
  );
};

export default QuantumPortfolio;