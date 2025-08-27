import React from 'react';
import { ExternalLink, Code, TrendingUp, Calendar, Star, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  type: string;
  status: string;
  impact: string;
  image: string;
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  type,
  status,
  impact,
  image,
  github,
  demo
}) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'mvp complete':
      case 'completed':
      case 'live':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'active development':
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'research phase':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'featured project':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'production system':
        return 'bg-gradient-to-r from-blue-600 to-indigo-600';
      case 'business concept':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      default:
        return 'bg-gradient-to-r from-slate-600 to-slate-700';
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-200 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className={`inline-flex items-center px-3 py-1.5 ${getTypeColor(type)} text-white text-xs font-bold rounded-full shadow-lg`}>
            <Star className="w-3 h-3 mr-1" />
            {type}
          </span>
          <span className={`inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full border ${getStatusColor(status)} shadow-lg`}>
            {status}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex space-x-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Code className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>
        
        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Impact Badge */}
        <div className="flex items-center mb-6 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <TrendingUp className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
          <span className="text-sm font-semibold text-green-700">
            {impact}
          </span>
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all duration-300 group/btn"
            >
              <Code className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              View Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-300 group/btn"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              Live Demo
            </a>
          )}
          {!demo && !github && (
            <div className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-500 rounded-xl text-sm font-semibold cursor-not-allowed">
              <Calendar className="w-4 h-4 mr-2" />
              Coming Soon
            </div>
          )}
        </div>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;