import { Calendar, Code, Database, Github, Linkedin, Network, Shield, Twitter, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ContactInfo, Project } from '../types';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo: ContactInfo = {
    github: 'https://github.com/ei-sanu',
    twitter: 'https://twitter.com/SomeshR82674271',
    linkedin: 'https://linkedin.com/in/www.linkedin.com/in/somesh-biswal-b73576320'
  };


  const projects: Project[] = [
    {
      id: 1,
      title: "CyberCipher",
      description: "Advanced encryption tools for the modern digital age. Secure your messages with military-grade Caesar cipher technology.",
      image: "/images/project1.png",
      liveLink: "https://cybercipherx.vercel.app",
      sourceCode: "https://github.com/ei-sanu/CyberCipherintern.git",
      technologies: ["React", "TypeScript", "Security"]
    },
    {
      id: 2,
      title: "Password Strength Analyzer",
      description: "Advanced security tools powered by AI technology. Protect your digital identity with enterprise-grade security.",
      image: "/images/project2.png",
      liveLink: "https://passwordstrengthner.vercel.app/",
      sourceCode: "https://github.com/ei-sanu/passwordstrengthner",
      technologies: ["React", "TypeScript", "Security"]
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Secure data encryption and decryption service with blockchain integration for enhanced data integrity.",
      image: "https://images.pexels.com/photos/1181712/pexels-photo-1181712.jpeg?auto=compress&cs=tinysrgb&w=500",
      liveLink: "https://project-gamma-demo.com",
      sourceCode: "https://github.com/ei-sanu/project-gamma",
      technologies: ["Blockchain", "Solidity", "Web3", "Encryption"]
    },
    {
      id: 4,
      title: "Project Delta",
      description: "AI-powered vulnerability assessment tool with automated penetration testing capabilities.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500",
      liveLink: "https://project-delta-demo.com",
      sourceCode: "https://github.com/ei-sanu/project-delta",
      technologies: ["AI/ML", "Python", "TensorFlow", "Security"]
    }
  ];

  const skills = [
    { icon: Shield, name: "Cybersecurity", color: "text-violet-400" },
    { icon: Network, name: "Network Safety", color: "text-purple-400" },
    { icon: Database, name: "Data Protection", color: "text-indigo-400" },
    { icon: Code, name: "Secure Coding", color: "text-fuchsia-400" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 69, 255, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
      </div>

      {/* Header - Updated title */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center animate-pulse">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Somesh Biswal
                </h1>
                <p className="text-gray-400 text-sm">Security Researcher</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-violet-400" />
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-violet-400" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Updated content */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
              Internship Projects Showcase
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A comprehensive journey through cybersecurity and network safety,
              showcasing advanced projects focused on secure development practices.
            </p>
          </div>

          {/* Duration Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-3 rounded-full border border-gray-600 mb-12 animate-fade-up">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="font-mono text-sm">
              <span className="text-gray-400">Duration:</span>
              <span className="text-white ml-2">1 Month</span>
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className={`w-8 h-8 ${skill.color} mx-auto mb-2`} />
                <p className="text-sm font-semibold text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4 animate-fade-up">
              Featured Projects
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-up">
              Four comprehensive projects demonstrating expertise in cybersecurity,
              network safety, and modern web development technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section - Updated content */}
      <section className="relative z-10 px-6 py-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <Zap className="w-12 h-12 text-fuchsia-400 mx-auto mb-6 animate-pulse" />
            <h4 className="text-3xl font-bold text-white mb-6">Key Learnings</h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              During this intensive internship period, I gained comprehensive knowledge in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h5 className="font-semibold text-violet-400">Cybersecurity</h5>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Threat Detection & Analysis</li>
                  <li>• Penetration Testing</li>
                  <li>• Vulnerability Assessment</li>
                  <li>• Security Protocols</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-purple-400">Network Safety</h5>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Network Monitoring</li>
                  <li>• Intrusion Detection Systems</li>
                  <li>• Data Encryption</li>
                  <li>• Secure Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="relative z-10 px-6 py-16 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-violet-500/30 transition-all duration-500">
            <div className="mb-6">
              <a
                href="https://somesh.social"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                  Developed by Somesh Biswal
                </h4>
              </a>
              <p className="text-gray-400">Cybersecurity Enthusiast & Frontend Developer</p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A passionate developer focused on creating secure, elegant, and user-centric digital experiences.
              Specializing in cybersecurity implementations and modern frontend development with Proficiency in
              React, TypeScript, and secure coding practices.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://somesh.social"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <span className="text-sm font-semibold">Visit Portfolio</span>
              </a>
              <a
                href="https://www.somesh.social/#contact"
                className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-sm font-semibold">Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated content */}
      <footer className="relative z-10 px-6 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Somesh Biswal • Internship Projects Portfolio • All rights reserved
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This portfolio showcases projects developed during my internship period.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
