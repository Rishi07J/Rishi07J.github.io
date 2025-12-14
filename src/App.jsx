import React, { useState, useEffect } from 'react';
import { Brain, Code2, Cpu, Database, Layers, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, ExternalLink, Github, Sparkles, Zap, Rocket, ChevronDown, FileText } from 'lucide-react';


export default function QuantumPortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalText, setTerminalText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const fullText = "$ init --ai-engineer\n> Rishi Joshi\n> Building intelligent systems...";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  // Scroll detection for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'OneClouds',
      year: '2025',
      desc: 'Multi-Cloud Storage Platform with encrypted file management integrating Google Drive, OneDrive and Dropbox using OAuth, FastAPI and SQLAlchemy.',
      tech: ['FastAPI', 'OAuth', 'SQLAlchemy', 'Encryption'],
      github: 'https://github.com/Rishi07J/oneclouds',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
      title: 'Room-Wise Object Detection',
      year: '2025',
      desc: 'Computer vision application using YOLOv8 and CLIP to detect unique objects across rooms and intelligently remove duplicates with FastAPI backend.',
      tech: ['YOLOv8', 'CLIP', 'FastAPI', 'OpenCV'],
      github: 'https://github.com/Rishi07J/Room-wise-Unique-Object-Detection',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
    },
    {
      title: 'Self-Learning LLM Chatbot',
      year: '2025',
      desc: 'Adaptive chatbot powered by LangChain and Groq API with feedback-driven learning system and MongoDB storage for context retention.',
      tech: ['LangChain', 'Groq API', 'MongoDB', 'NLP'],
      github: 'https://github.com/Rishi07J/feedback-chatbot',
      gradient: 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)'
    },
    {
      title: 'Multimodal Biometric CNN',
      year: '2024',
      desc: 'Fusion-based authentication system combining iris and fingerprint recognition using TensorFlow with custom preprocessing pipeline.',
      tech: ['TensorFlow', 'CNN', 'Computer Vision', 'Biometrics'],
      github: 'https://github.com/Rishi07J/AN-ENHANCED-MULTIMODAL-BIOMETRIC-SYSTEM-BASED-ON-CONVOLUTIONAL-NEURAL-NETWORKS',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)'
    }
  ];

  const skills = {
    languages: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
    ai: ['TensorFlow', 'PyTorch', 'CLIP', 'YOLOv8', 'Scikit-learn', 'LangChain', 'OpenCV'],
    frameworks: ['FastAPI', 'Flask', 'MongoDB', 'Firebase', 'Pinecone', 'Render', 'Vercel'],
    areas: ['LLMs', 'NLP', 'Computer Vision', 'OOP', 'DSA', 'Databases']
  };

  const experience = [
    {
      company: 'VKAPS IT Solutions',
      role: 'AI & Automation Intern',
      period: 'May 2025 – Jun 2025',
      desc: 'Worked on automation workflows and AI-powered system optimization.'
    },
    {
      company: 'Bhardwaj Innovation',
      role: 'Tech Intern',
      period: 'Jan 2024 – May 2024',
      desc: 'Developed frontend features for the company website using React, HTML, CSS, and JavaScript.'
    }
  ];

  const certifications = ['AWS Cloud Architecting', 'Kubernetes', 'Prompt Engineering', 'IBM Python for Data Science', 'Tableau'];

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
{/* Nav */}
<nav
  style={{
    position: 'fixed',
    top: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 40,
    background: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(20px)',
    borderRadius: '9999px',
    padding: '0.5rem',
    display: 'flex',
    gap: '0.5rem',
    border: '1px solid rgba(255,255,255,0.1)'
  }}
>
  {['hero', 'projects', 'skills', 'experience', 'contact'].map((s) => (
    <button
      key={s}
      onClick={() => {
        const el = document.getElementById(s);
        if (!el) return;

        const yOffset = -140; // navbar offset
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });

        // update active section AFTER scroll starts
        setActiveSection(s);

        // optional: update URL hash AFTER animation
        setTimeout(() => {
          window.history.replaceState(null, '', `#${s}`);
        }, 600);
      }}
      style={{
        padding: '0.5rem 1.5rem',
        borderRadius: '9999px',
        border: 'none',
        background:
          activeSection === s
            ? 'linear-gradient(90deg, #22d3ee, #3b82f6)'
            : 'transparent',
        color: activeSection === s ? '#000' : '#9ca3af',
        fontWeight: 500,
        textTransform: 'capitalize',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      {s}
    </button>
  ))}

  {/* Resume Button */}
  <button
    onClick={() =>
      window.open(
        'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing',
        '_blank'
      )
    }
    style={{
      padding: '0.5rem 1.4rem',
      borderRadius: '9999px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      background: 'linear-gradient(90deg, #a855f7, #ec4899)',
      color: '#fff',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 10px 30px -10px rgba(236,72,153,0.7)'
    }}
  >
    <FileText size={16} />
    Resume
  </button>
</nav>


      {/* Hero */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '5rem', left: '5rem', width: '24rem', height: '24rem', background: 'rgba(6,182,212,0.2)', borderRadius: '50%', filter: 'blur(120px)' }} />
        <div style={{ maxWidth: '72rem', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', padding: '3rem', border: '1px solid rgba(6,182,212,0.3)' }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.2)' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ marginLeft: '1rem', fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}></span>
            </div>
            
            <div style={{ fontFamily: 'monospace', marginBottom: '2rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e', lineHeight: 1.2 }}>
                {terminalText.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                <span style={{ color: '#22d3ee' }}>█</span>
              </div>
              <div style={{ marginTop: '2rem', padding: '1rem', paddingLeft: '1.5rem', borderLeft: '4px solid #06b6d4' }}>
                <p style={{ color: '#22d3ee', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>// System Overview</p>
                <p style={{ color: '#9ca3af', lineHeight: 1.6 , fontSize: '1.125rem'}}>
                  Aspiring AI and Software Engineer specializing in <span style={{ color: '#22d3ee', fontWeight: 600 }}>machine learning</span>, 
                  <span style={{ color: '#a855f7', fontWeight: 600 }}> LLM-powered systems</span>, and 
                  <span style={{ color: '#22c55e', fontWeight: 600 }}> backend architectures</span>. 
                  Building scalable, intelligent solutions with a focus on security and automation.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: Brain, count: 8, label: 'Projects', color: '#22d3ee' },
                { icon: Code2, count: 5, label: 'Languages', color: '#a855f7' },
                { icon: Award, count: 5, label: 'Certifications', color: '#22c55e' },
                { icon: Briefcase, count: 2, label: 'Internships', color: '#f97316' }
              ].map((stat, i) => (
                <div key={i} style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}50`, borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
                  <stat.icon style={{ width: '2rem', height: '2rem', margin: '0 auto 0.75rem', color: stat.color }} />
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: stat.color }}>{stat.count}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.875rem', padding: '1rem', paddingLeft: '1.5rem', background: 'linear-gradient(90deg, rgba(6,182,212,0.2), transparent)', borderLeft: '4px solid #06b6d4' }}>
              <a href="mailto:rishijoshi3107@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22d3ee', textDecoration: 'none' }}>
                <Mail size={20} /> rishijoshi3107@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
                <Phone size={20} /> +91 9399979454
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
                <MapPin size={20} /> Indore, India
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <ChevronDown style={{ width: '2rem', height: '2rem', color: '#22d3ee', animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '84rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Featured Work
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.25rem' }}>Experimental projects pushing boundaries</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {projects.map((p, i) => (
              <div key={i} style={{ background: 'linear-gradient(135deg, rgba(31,41,55,0.8), rgba(0,0,0,0.8))', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{p.title}</h3>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>{p.year}</span>
                  </div>
                  <div style={{ width: '4rem', height: '4rem', background: p.gradient, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Layers style={{ width: '2rem', height: '2rem' }} />
                  </div>
                </div>
                <p style={{ color: '#9ca3af', marginBottom: '1.5rem', lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={{ padding: '0.25rem 0.75rem', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '0.5rem', fontSize: '0.75rem', color: '#22d3ee' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button onClick={() => setSelectedProject(p)} style={{ flex: 1, padding: '0.75rem', background: p.gradient, borderRadius: '0.75rem', border: 'none', color: '#fff', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <ExternalLink size={16} /> View Details
                  </button>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.75rem', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <a href="https://github.com/Rishi07J" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', background: 'linear-gradient(90deg, #0891b2, #3b82f6)', borderRadius: '1rem', color: '#fff', fontWeight: 'bold', fontSize: '1.125rem', textDecoration: 'none' }}>
              <Github size={24} /> Explore More on GitHub <Rocket size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '84rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', background: 'linear-gradient(90deg, #a855f7, #ec4899, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Tech Arsenal
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {Object.entries(skills).map(([cat, items], i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(168,85,247,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', background: 'linear-gradient(135deg, #a855f7, #ec4899)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {cat === 'languages' && <Code2 size={28} />}
                    {cat === 'ai' && <Brain size={28} />}
                    {cat === 'frameworks' && <Database size={28} />}
                    {cat === 'areas' && <Cpu size={28} />}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textTransform: 'capitalize' }}>{cat}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {items.map((skill, j) => (
                    <div key={j} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', background: 'linear-gradient(90deg, #22c55e, #14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((exp, i) => (
              <div key={i} style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.2), transparent)', backdropFilter: 'blur(20px)', borderLeft: '4px solid #06b6d4', borderRadius: '0 1.5rem 1.5rem 0', padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22d3ee' }}>{exp.company}</h3>
                    <p style={{ fontSize: '1.125rem', color: '#d1d5db' }}>{exp.role}</p>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>{exp.period}</span>
                </div>
                <p style={{ color: '#9ca3af' }}>{exp.desc}</p>
              </div>
            ))}
            <div style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.2), transparent)', backdropFilter: 'blur(20px)', borderLeft: '4px solid #3b82f6', borderRadius: '0 1.5rem 1.5rem 0', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <div style={{ width: '3rem', height: '3rem', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa', marginBottom: '0.5rem' }}>Education</h3>
                  <p style={{ fontSize: '1.125rem', color: '#d1d5db', fontWeight: 600 }}>SVKM's NMIMS</p>
                  <p style={{ color: '#9ca3af' }}>B.Tech in Computer Engineering</p>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', display: 'inline-block', marginTop: '0.5rem' }}>2022–2026</span>
                </div>
              </div>
            </div>
            <div style={{ background: 'linear-gradient(90deg, rgba(249,115,22,0.2), transparent)', backdropFilter: 'blur(20px)', borderLeft: '4px solid #f97316', borderRadius: '0 1.5rem 1.5rem 0', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <div style={{ width: '3rem', height: '3rem', background: 'linear-gradient(135deg, #f97316, #ea580c)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={24} />
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fb923c', marginBottom: '1rem' }}>Certifications</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                    {certifications.map((cert, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', background: 'rgba(0,0,0,0.2)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
                        <div style={{ width: '0.5rem', height: '0.5rem', background: '#fb923c', borderRadius: '50%' }} />
                        <span style={{ fontSize: '0.875rem' }}>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Let's Build Together
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '3rem' }}>
            Open to opportunities in <span style={{ color: '#22d3ee', fontWeight: 600 }}>AI</span>, <span style={{ color: '#a855f7', fontWeight: 600 }}>ML</span>, and <span style={{ color: '#ec4899', fontWeight: 600 }}>Full-Stack Development</span>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="mailto:rishijoshi3107@gmail.com" style={{ padding: '1.25rem 2.5rem', background: 'linear-gradient(90deg, #06b6d4, #3b82f6)', borderRadius: '1rem', color: '#fff', fontWeight: 'bold', fontSize: '1.125rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={24} /> Email Me →
            </a>
            <a href="tel:+919399979454" style={{ padding: '1.25rem 2.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: '#fff', fontWeight: 'bold', fontSize: '1.125rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone size={24} /> Call Me
            </a>
            <a href="https://github.com/Rishi07J" target="_blank" rel="noopener noreferrer" style={{ padding: '1.25rem 2.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: '#fff', fontWeight: 'bold', fontSize: '1.125rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Github size={24} /> GitHub
            </a>
          </div>
          <div style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
              <span style={{ color: '#22d3ee' }}>{'<'}</span> Designed & Built by Rishi Joshi <span style={{ color: '#22d3ee' }}>{' />'}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '4rem', height: '4rem', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', borderRadius: '1rem', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 20px 50px -12px rgba(6,182,212,0.5)' }}>↑</button>

      {/* Modal */}
      {selectedProject && (
        <div onClick={() => setSelectedProject(null)} style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)' }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '56rem', width: '100%', background: 'linear-gradient(135deg, #1f2937, #000)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid #06b6d4' }}>
            <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '2.5rem', height: '2.5rem', background: 'rgba(239,68,68,0.2)', border: '1px solid #ef4444', borderRadius: '50%', color: '#fff', fontSize: '1.25rem', cursor: 'pointer' }}>✕</button>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '4rem', height: '4rem', background: selectedProject.gradient, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{selectedProject.title}</h3>
                <span style={{ color: '#9ca3af' }}>{selectedProject.year}</span>
              </div>
            </div>
            <p style={{ fontSize: '1.125rem', color: '#d1d5db', lineHeight: 1.7, marginBottom: '2rem' }}>{selectedProject.desc}</p>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#9ca3af', marginBottom: '0.75rem' }}>TECH STACK</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {selectedProject.tech.map((t, i) => (
                  <span key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '0.5rem', color: '#22d3ee', fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 1.5rem', background: 'linear-gradient(90deg, #06b6d4, #3b82f6)', borderRadius: '0.75rem', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
                <Github size={20} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
  html {
    scroll-behavior: smooth;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #06b6d4, #3b82f6);
    border-radius: 5px;
  }
`}</style>

    </div>
  );
}