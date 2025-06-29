import React, { useState } from 'react';
import { ExternalLink, Github, Code, Calendar, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-violet-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 animate-fade-up`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
            <Code className="w-6 h-6 text-violet-400" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center text-purple-400">
            <Zap className="w-4 h-4 mr-1" />
            <span className="text-xs font-mono">LIVE</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-800 text-xs text-violet-300 rounded-full border border-violet-500/30 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-lg hover:from-violet-700 hover:to-violet-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm font-semibold">Live Demo</span>
          </a>

          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-semibold">Source Code</span>
          </a>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-500/20 to-transparent"></div>
    </div>
  );
};

export default ProjectCard;
