import React from 'react';
import { Calendar, Users, Award, Code, Trophy, Star, Target, Zap } from 'lucide-react';

interface HackathonCardProps {
  title: string;
  position: string;
  event: string;
  date: string;
  teams: string;
  description: string;
  tech: string[];
  achievement: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  position,
  event,
  date,
  teams,
  description,
  tech,
  achievement
}) => {
  const getPositionGradient = (position: string) => {
    if (position.includes('1st')) {
      return 'from-yellow-400 via-yellow-500 to-orange-500';
    } else if (position.includes('2nd') || position.includes('State Winner')) {
      return 'from-purple-400 via-purple-500 to-pink-500';
    }
    return 'from-blue-400 via-blue-500 to-indigo-500';
  };

  const getPositionIcon = (position: string) => {
    if (position.includes('1st')) {
      return Trophy;
    } else if (position.includes('2nd') || position.includes('State Winner')) {
      return Star;
    }
    return Award;
  };

  const PositionIcon = getPositionIcon(position);

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-yellow-200 transform hover:-translate-y-3">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/30 to-red-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-8 lg:p-10">
        {/* Header with Position Badge */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${getPositionGradient(position)} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                <PositionIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className={`text-2xl font-bold bg-gradient-to-r ${getPositionGradient(position)} bg-clip-text text-transparent`}>
                  {position}
                </span>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                    Competition Winner
                  </span>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-blue-600 font-bold text-lg mb-6">{event}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-50 rounded-2xl p-4 group-hover:bg-blue-50 transition-colors">
            <div className="flex items-center text-slate-600 group-hover:text-blue-600 transition-colors">
              <Calendar className="w-5 h-5 mr-3" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide">Event Date</p>
                <p className="font-bold">{date}</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 group-hover:bg-purple-50 transition-colors">
            <div className="flex items-center text-slate-600 group-hover:text-purple-600 transition-colors">
              <Users className="w-5 h-5 mr-3" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide">Competition</p>
                <p className="font-bold">{teams}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          {description}
        </p>

        {/* Tech Stack with Enhanced Design */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Technology Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 border border-yellow-200 group-hover:border-yellow-300 transition-colors">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-yellow-800 mb-2">Key Achievement</h4>
              <p className="text-sm font-medium text-yellow-700 leading-relaxed">
                {achievement}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-600/5 via-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default HackathonCard;