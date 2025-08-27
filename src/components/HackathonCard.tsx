import React, { useState, useEffect } from 'react';
import { Calendar, Users, Award, Code, Trophy, Star, Target, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import Ai4com1 from '../media/Ai4com1.jpeg';
import ai4com2 from '../media/ai4com2.jpeg';
import ai4com3 from '../media/ai4com3.jpeg';
import srishti1 from '../media/srishti1.jpeg';
import srishti2 from '../media/srishti2.jpeg';

const imageMap: { [key: string]: string } = {
  'Ai4com1.jpeg': Ai4com1,
  'ai4com2.jpeg': ai4com2,
  'ai4com3.jpeg': ai4com3,
  'srishti1.jpeg': srishti1,
  'srishti2.jpeg': srishti2,
};

interface HackathonCardProps {
  title: string;
  position: string;
  event: string;
  date: string;
  teams: string;
  description: string;
  tech: string[];
  achievement: string;
  images?: string[];
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  position,
  event,
  date,
  teams,
  description,
  tech,
  achievement,
  images = []
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
  <div className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900/80 rounded-3xl shadow-xl dark:shadow-yellow-400/20 hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-yellow-200 dark:hover:border-yellow-400 transform hover:-translate-y-3 backdrop-blur-md">
      {/* Image Carousel at the top */}
      {images.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageMap[images[currentImageIndex]]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 bg-slate-100 dark:bg-slate-800"
          />
          
          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          {/* Image indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Gradient Background - Removed yellowish tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
  <div className={`relative p-8 lg:p-10 ${images.length > 0 ? '' : 'pt-8'} dark:bg-slate-900/60 dark:text-yellow-200 rounded-3xl`}> 
        {/* Header with Position Badge */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${getPositionGradient(position)} dark:from-yellow-400 dark:to-yellow-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                <PositionIcon className="w-6 h-6 text-white dark:text-slate-900" />
              </div>
              <div>
                <span className={`text-2xl font-bold bg-gradient-to-r ${getPositionGradient(position)} dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent`}>
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
            
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-yellow-300 mb-3 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-blue-600 dark:text-yellow-400 font-bold text-lg mb-6">{event}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 group-hover:bg-blue-50 dark:group-hover:bg-yellow-900/30 transition-colors">
            <div className="flex items-center text-slate-600 dark:text-yellow-300 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors">
              <Calendar className="w-5 h-5 mr-3 dark:text-yellow-400" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide">Event Date</p>
                <p className="font-bold">{date}</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 group-hover:bg-purple-50 dark:group-hover:bg-yellow-900/30 transition-colors">
            <div className="flex items-center text-slate-600 dark:text-yellow-300 group-hover:text-purple-600 dark:group-hover:text-yellow-400 transition-colors">
              <Users className="w-5 h-5 mr-3 dark:text-yellow-400" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide">Competition</p>
                <p className="font-bold">{teams}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
          {description}
        </p>

        {/* Tech Stack with Enhanced Design */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-yellow-300 mb-3 uppercase tracking-wide">Technology Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-yellow-900/30 dark:to-yellow-800/10 text-blue-700 dark:text-yellow-200 text-sm font-semibold rounded-full border border-blue-200 dark:border-yellow-700 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-yellow-400 dark:hover:to-yellow-600 dark:hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Achievement Highlight - Removed yellowish tint */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-yellow-900/30 dark:via-yellow-800/10 dark:to-yellow-900/10 rounded-2xl p-6 border border-blue-200 dark:border-yellow-700 group-hover:border-blue-300 dark:group-hover:border-yellow-400 transition-colors">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-yellow-400 dark:to-yellow-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-5 h-5 text-white dark:text-slate-900" />
            </div>
            <div>
              <h4 className="font-bold text-blue-800 dark:text-yellow-300 mb-2">Key Achievement</h4>
              <p className="text-sm font-medium text-blue-700 dark:text-yellow-200 leading-relaxed">
                {achievement}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect - Removed yellowish tint */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Corner Accent - Removed yellowish tint */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default HackathonCard;
