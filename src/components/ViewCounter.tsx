import React, { useState, useEffect } from 'react';
import { Eye, Users } from 'lucide-react';

const ViewCounter: React.FC = () => {
  const [viewCount, setViewCount] = useState(100); // Start from 100 as requested
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Track view and update count using API
  useEffect(() => {
    const trackView = async () => {
      try {
        // Determine API base URL based on environment
        const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        // For Netlify functions, use relative path in production
        const apiBaseUrl = isDevelopment ? 'http://localhost:3001/api' : '/.netlify/functions';
        
        // First, increment the view count on the server
        const incrementResponse = await fetch(`${apiBaseUrl}/view-count`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (incrementResponse.ok) {
          const incrementData = await incrementResponse.json();
          
          // Then, get the updated view count
          const viewResponse = await fetch(`${apiBaseUrl}/view-count`);
          if (viewResponse.ok) {
            const viewData = await viewResponse.json();
            setViewCount(viewData.totalViews);
          } else {
            console.error('Failed to fetch view count');
          }
        } else {
          console.error('Failed to increment view count');
        }
      } catch (error) {
        console.error('Error tracking view:', error);
        // Fallback to localStorage if API fails
        const totalViews = localStorage.getItem('total_views');
        const newTotal = totalViews ? parseInt(totalViews) + 1 : 101;
        localStorage.setItem('total_views', newTotal.toString());
        setViewCount(newTotal);
      } finally {
        setIsLoading(false);
      }
    };

    trackView();
  }, []);

  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

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
              <span className="text-sm font-medium text-white/80">Total Views</span>
            </div>
            <div className="flex items-end space-x-1">
              <span className="text-2xl font-bold tracking-tight">{formatCount(viewCount)}</span>
              <span className="text-green-300 text-sm mb-1 flex items-center">
                <span className="w-2 h-2 bg-green-300 rounded-full mr-1"></span>
                Actual
              </span>
            </div>
          </div>
        </div>

        {/* Connection status */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
        </div>
      </div>

      {/* Show button when hidden */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Show view counter"
        >
          <Eye className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ViewCounter;
