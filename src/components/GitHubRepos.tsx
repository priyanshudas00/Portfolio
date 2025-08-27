import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, GitFork, Code, Loader, Calendar, Eye, TrendingUp } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
  watchers_count: number;
  size: number;
}

const GitHubRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/priyanshudas00/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <div className="relative">
          <Loader className="w-12 h-12 animate-spin text-blue-600" />
          <div className="absolute inset-0 w-12 h-12 border-4 border-blue-200 rounded-full animate-ping"></div>
        </div>
        <p className="text-slate-600 mt-4 font-medium">Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Code className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Unable to Load Repositories</h3>
        <p className="text-slate-600 mb-8">There was an issue connecting to GitHub. Please visit my profile directly.</p>
        <a
          href="https://github.com/priyanshudas00"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          Visit GitHub Profile
        </a>
      </div>
    );
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'from-yellow-400 to-yellow-600',
      TypeScript: 'from-blue-500 to-blue-700',
      Python: 'from-green-500 to-green-700',
      Java: 'from-orange-500 to-red-600',
      HTML: 'from-red-400 to-red-600',
      CSS: 'from-blue-400 to-blue-600',
      React: 'from-cyan-400 to-cyan-600',
      'C++': 'from-pink-500 to-pink-700',
    };
    return colors[language] || 'from-gray-400 to-gray-600';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Updated yesterday';
    if (diffDays < 7) return `Updated ${diffDays} days ago`;
    if (diffDays < 30) return `Updated ${Math.ceil(diffDays / 7)} weeks ago`;
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatSize = (size: number) => {
    if (size < 1024) return `${size} KB`;
    return `${(size / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-8">
      {/* GitHub Profile Summary */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">GitHub Profile</h3>
            <p className="text-slate-300">@priyanshudas00 • Live repositories and contributions</p>
          </div>
          <a
            href="https://github.com/priyanshudas00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Profile
          </a>
        </div>
      </div>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200 overflow-hidden transform hover:-translate-y-2"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate text-lg">
                    {repo.name}
                  </h3>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                {repo.description || 'A repository showcasing development skills and project implementation'}
              </p>

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full hover:bg-blue-200 transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      +{repo.topics.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-bold text-slate-900">{repo.stargazers_count}</span>
                  </div>
                  <p className="text-xs text-slate-500">Stars</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <GitFork className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="font-bold text-slate-900">{repo.forks_count}</span>
                  </div>
                  <p className="text-xs text-slate-500">Forks</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Eye className="w-4 h-4 text-green-500 mr-1" />
                    <span className="font-bold text-slate-900">{repo.watchers_count}</span>
                  </div>
                  <p className="text-xs text-slate-500">Watchers</p>
                </div>
              </div>

              {/* Language and Update Info */}
              <div className="flex items-center justify-between">
                {repo.language && (
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getLanguageColor(repo.language)} mr-2`}></div>
                    <span className="text-sm font-medium text-slate-700">{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center text-slate-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="text-xs">{formatDate(repo.updated_at)}</span>
                </div>
              </div>

              {/* Repository Size */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Repository size: {formatSize(repo.size)}</span>
                  <div className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/priyanshudas00"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl font-semibold hover:from-slate-800 hover:to-slate-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
          View All Repositories
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default GitHubRepos;