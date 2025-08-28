import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Award, Calendar, Users, TrendingUp, Filter, Search, Star, Trophy, Target } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import HackathonCard from '../components/HackathonCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredProjects = [
    {
      title: "AI Resume Analyzer",
      description: "ML-powered tool that parses candidate resumes and scores them against job descriptions based on skills match, experience relevance, and keyword density. Features automated scoring, improvement recommendations, and audit logging for recruitment workflows.",
      tech: ["Next.js", "Node.js", "Supabase", "Python", "NLP", "PostgreSQL"],
      type: "Featured Project",
      status: "MVP Complete",
      impact: "40% reduction in screening time",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg",
      github: "https://github.com/priyanshudas00/ai-resume-analyzer",
      demo: "airesumeanalyzerr.streamlit.app/",
      category: "AI/ML"
    },
    {
      title: "Full-Stack Job Portal",
      description: "Comprehensive job portal with candidate onboarding, employer posting, staff dashboard, real-time notifications, and analytics. Built for college placement and external opportunities with role-based access control and advanced search capabilities.",
      tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Real-time APIs"],
      type: "Production System",
      status: "Active Development",
      impact: "Complete placement solution",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      github: "https://github.com/priyanshudas00",
      demo: "#",
      category: "Full-Stack"
    },
    {
      title: "Social Media Post Scheduler",
      description: "Automated scheduling tool for social media posts with calendar interface, queue management, and cron-triggered posting. Built for small teams needing cost-effective social media automation without heavy SaaS fees.",
      tech: ["Next.js", "Supabase", "Cron Jobs", "Social APIs"],
      type: "Course Project",
      status: "Prototype Complete",
      impact: "Automated posting workflows",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      github: "https://github.com/priyanshudas00",
      category: "Automation"
    },
    {
      title: "Event Management System",
      description: "End-to-end event management platform with registration flows, event listings, admin dashboards, and attendee management. Designed for campus and corporate events with comprehensive analytics and reporting.",
      tech: ["React", "Node.js", "Database Design", "Admin Panel"],
      type: "Course Project",
      status: "Completed",
      impact: "Streamlined event operations",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      github: "https://github.com/priyanshudas00",
      category: "Full-Stack"
    },
    {
      title: "NSKL Travels Platform",
      description: "Business concept and MVP for bus fleet management with route optimization, driver scheduling, fare management, and scalability planning for 100+ bus operations. Includes route profitability analysis and logistics optimization.",
      tech: ["Business Analysis", "Route Planning", "Fleet Management", "Logistics"],
      type: "Business Concept",
      status: "Research Phase",
      impact: "100+ bus scalability plan",
      image: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg",
      category: "Business"
    },
    {
      title: "Portfolio Website",
      description: "Production-ready portfolio showcasing projects, skills, and achievements with responsive design, GitHub integration, modern web practices, and comprehensive case studies for professional presentation.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      type: "Personal Project",
      status: "Live",
      impact: "Professional showcase",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      github: "https://github.com/priyanshudas00",
      demo: "#",
      category: "Frontend"
    }
  ];

const hackathons = [
    {
      title: "AI4Community - SRE & Predictive Maintenance",
      position: "🥇 1st Place",
      event: "AI4ComUnity Hackathon - Acharya Institutes",
      date: "9-10 May 2025",
      teams: "70+ teams",
      description: "Built comprehensive SRE platform with Prometheus monitoring, Grafana dashboards, automated RCA logic, and recovery workflows. Demonstrated real-world DevOps practices with fault injection and stress testing for system resilience.",
      tech: ["Node.js", "Prometheus", "Grafana", "DevOps", "SRE", "Kubernetes"],
      achievement: "Winner among 70+ teams for system resilience and reliability excellence",
      images: ["Ai4com1.jpeg", "ai4com2.jpeg", "ai4com3.jpeg"]
    },
    {
      title: "Accessibility Suite for Next Billion Users",
      position: "🏆 State Winner",
      event: "Srishti Hackathon 2025 - Acharya Institute of Technology",
      date: "23- 25 May 2025",
      teams: "110 teams",
      description: "36-hour build: multi-modal accessibility platform with Scheme Analyzer (PDF to regional languages), Grievance Handler (voice input), Bus Buddy Bol (transit helper), and Sign Language Translator using OpenCV and computer vision.",
      tech: ["OpenCV", "Dwani.io", "n8n", "TypeScript", "Google Maps API"],
      achievement: "🏆 State Winner • Competition Winner • Accessibility Suite for Next Billion Users • Srishti Hackathon 2025 - Acharya Institute of Technology",
      images: ["srishti1.jpeg", "srishti2.jpeg"]
    }
  ];

  const categories = ['All', 'AI/ML', 'Full-Stack', 'Frontend', 'Automation', 'Business'];

  const filteredProjects = featuredProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-yellow-900/30 dark:to-yellow-800/10 border border-blue-200 dark:border-yellow-700 text-blue-800 dark:text-yellow-300 rounded-full text-sm font-semibold mb-8">
            <Trophy className="w-4 h-4 mr-2" />
            Portfolio Showcase • 6+ Projects • 2 Hackathon Wins
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-yellow-300 mb-8">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Full-stack applications, AI tools, and hackathon projects built with modern technologies and product-thinking approach. 
            Each project demonstrates end-to-end development skills and real-world problem solving.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-blue-100 dark:bg-yellow-900/30 text-blue-800 dark:text-yellow-300 px-6 py-3 rounded-full border border-blue-200 dark:border-yellow-700">
              <Code className="w-5 h-5 mr-2" />
              <span className="font-semibold">6+ Live Projects</span>
            </div>
            <div className="flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full border border-yellow-200">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-semibold">2 Hackathon Wins</span>
            </div>
            <div className="flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full border border-green-200">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-semibold">Production-Ready MVPs</span>
            </div>
          </div>
        </div>

        {/* Hackathon Achievements */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              Competition Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hackathon <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven track record of building innovative solutions under pressure and winning recognition 
              at state and institutional levels among 180+ competing teams.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hackathons.map((hackathon, index) => (
              <HackathonCard key={index} {...hackathon} />
            ))}
          </div>
        </section>

        {/* Project Filters */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Featured <span className="text-blue-600">Projects</span>
              </h2>
              <p className="text-lg text-slate-600">
                Detailed project showcases with architecture decisions and measurable outcomes
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors w-full sm:w-64"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  title="Select project category" // Added title for accessibility
                  className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </section>

        {/* Technical Approach */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
          
          <div className="relative text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Technical Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My development philosophy focuses on practical solutions, rapid prototyping, and measurable impact through modern technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Modern Stack</h3>
              <p className="text-slate-600 leading-relaxed">
                Next.js, React, TypeScript, Supabase, and Tailwind CSS for rapid, scalable development with best practices
              </p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Product Thinking</h3>
              <p className="text-slate-600 leading-relaxed">
                MVP scoping, user-centered design, and iterative development based on real feedback and analytics
              </p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Measurable Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Focus on quantifiable outcomes, performance metrics, and real-world problem solving with data-driven decisions
              </p>
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Development Timeline</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key milestones and achievements in my development journey
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <div className="space-y-12">
                <div className="flex items-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">AI4Community Hackathon Win</h3>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">May 2025</span>
                    </div>
                    <p className="text-slate-600">1st Place - SRE & Predictive Maintenance System among 70+ teams</p>
                  </div>
                </div>
                
                <div className="flex items-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">Srishti Hackathon State Winner</h3>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">2025</span>
                    </div>
                    <p className="text-slate-600">2nd Winner - Accessibility Suite (36-hour build) among 110 teams</p>
                  </div>
                </div>
                
                <div className="flex items-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">AI Resume Analyzer MVP</h3>
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Jan 2025</span>
                    </div>
                    <p className="text-slate-600">ML-powered resume screening with 40% time reduction</p>
                  </div>
                </div>
                
                <div className="flex items-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">Full-Stack Job Portal</h3>
                      <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Mar 2025</span>
                    </div>
                    <p className="text-slate-600">Ongoing development - Complete placement solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Interested in My Work?</h2>
            <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
              Each project represents a learning journey and a step toward building production-ready solutions. 
              I'm always eager to discuss technical approaches, share insights, and explore collaboration opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://github.com/priyanshudas00"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Code className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                View GitHub Profile
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-6 h-6 mr-3" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;