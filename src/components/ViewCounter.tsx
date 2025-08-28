import React, { useState } from 'react';
import { Eye, Users } from 'lucide-react';

const ViewCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-4 shadow-2xl border-2 border-white/20 backdrop-blur-sm">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-600 transition-colors shadow-lg"
          aria-label="Close view counter"
        >
          ×
        </button>
        
        {/* Counter content */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="text-white">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-white/80" />
              <span className="text-sm font-medium text-white/80">View Counter Disabled</span>
            </div>
            <div className="flex items-end space-x-1">
              <span className="text-2xl font-bold tracking-tight">N/A</span>
            </div>
          </div>
        </div>




          <div className="w-4 h-4 bg-red-400 rounded-full border-2 border-white shadow-lg"></div>
