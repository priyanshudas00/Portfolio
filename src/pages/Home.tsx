import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail, ExternalLink, Award, Users, Code2, Zap, Trophy, Target, Rocket, Star, ArrowRight, ChevronDown } from 'lucide-react';
import GitHubRepos from '../components/GitHubRepos';
import ProjectCard from '../components/ProjectCard';
import HackathonCard from '../components/HackathonCard';

const Home = () => {
  const featuredProjects = [
    {
      title: "AI Resume Analyzer",
      description: "ML-powered tool that parses candidate resumes and scores them against job descriptions with skills matching, keyword density analysis, and improvement recommendations. Built with Next.js and advanced NLP techniques.",
      tech: ["Next.js", "Node.js", "Supabase", "Python", "NLP", "PostgreSQL"],
      type: "Featured Project",
      status: "MVP Complete",
      impact: "40% reduction in screening time",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg",
      github: "https://github.com/priyanshudas00",
      demo: "#"
    },
    {
      title: "Full-Stack Job Portal",
      description: "Comprehensive job portal with candidate onboarding, employer posting, staff dashboard, real-time notifications, and analytics. Complete placement solution with role-based access control.",
      tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Real-time APIs"],
      type: "Production System",
      status: "Active Development",
      impact: "Complete placement solution",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      github: "https://github.com/priyanshudas00",
      demo: "#"
    },
    {
      title: "NSKL Travels Platform",
      description: "Business concept and MVP for bus fleet management with route optimization, driver scheduling, fare management, and scalability planning for 100+ bus operations.",
      tech: ["Business Analysis", "Route Planning", "Fleet Management", "Logistics"],
      type: "Business Concept",
      status: "Research Phase",
      impact: "100+ bus scalability plan",
      image: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg",
      github: "https://github.com/priyanshudas00"
    }
  ];

  const hackathons = [
    {
      title: "AI4Community - SRE & Predictive Maintenance",
      position: "🥇 1st Place",
      event: "AI4ComUnity Hackathon - Acharya Institutes",
      date: "9-10 May 2025",
      teams: "70+ teams",
      description: "Built comprehensive SRE platform with Prometheus monitoring, Grafana dashboards, automated RCA logic, and recovery workflows. Demonstrated real-world DevOps practices with fault injection and stress testing.",
      tech: ["Node.js", "Prometheus", "Grafana", "DevOps", "SRE"],
      achievement: "Winner among 70+ teams for system resilience and reliability",
      images: ['Ai4com1.jpeg', 'ai4com2.jpeg', 'ai4com3.jpeg']
    },
    {
      title: "Accessibility Suite for Next Billion Users",
      position: "🏆 State Winner",
      event: "Srishti Hackathon 2025 - Acharya Institute of Technology",
      date: "2025",
      teams: "110 teams",
      description: "36-hour build: multi-modal platform with Scheme Analyzer, Grievance Handler, Bus Buddy Bol, and Sign Language Translator using voice, vision, and regional language support.",
      tech: ["OpenCV", "Dwan.io", "n8n", "TypeScript", "Google Maps API"],
      achievement: "State-level recognition for inclusive design and social impact",
      images: ['srishti1.jpeg', 'srishti2.jpeg']
    }
  ];

  const stats = [
    { icon: Trophy, label: "Hackathon Wins", value: "2", color: "from-yellow-400 to-orange-500" },
    { icon: Code2, label: "Live Projects", value: "6+", color: "from-blue-500 to-cyan-500" },
    { icon: Target, label: "CGPA", value: "7.0", color: "from-green-500 to-emerald-500" },
    { icon: Rocket, label: "Graduation", value: "2026", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 text-green-800 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              Available for Internships • CSE 2026 • Hackathon Winner
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Hi — I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Priyanshu Raj
              </span>
            </h1>
            
            {/* Primary Tagline */}
            <p className="text-2xl md:text-3xl text-slate-700 mb-6 max-w-5xl mx-auto font-medium">
              Building useful software — from{' '}
              <span className="text-blue-600 font-semibold">job portals</span> to{' '}
              <span className="text-indigo-600 font-semibold">AI resume tooling</span>
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed">
              Computer Science Engineering student (CSE, Batch 2026) at Acharya Institute of Technology. 
              I build real-world web apps and AI tools that solve recruitment, scheduling, and logistics challenges.
            </p>
            
            {/* Secondary Tagline */}
            <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto">
              <strong className="text-blue-600">Passionate about:</strong> Practical projects, product-thinking, and shipping minimal-viable solutions fast<br />
              <strong className="text-indigo-600">Currently seeking:</strong> Internship or entry-level roles in full-stack development, data engineering, or product-focused engineering
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:bg-slate-50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Quick <span className="text-blue-600">Overview</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key metrics and achievements that define my journey as a developer and student
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Achievements with Premium Design */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 text-yellow-800 rounded-full text-sm font-semibold mb-6">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {hackathons.map((hackathon, index) => (
              <HackathonCard key={index} {...hackathon} />
            ))}
          </div>
          
          {/* Achievement Highlights */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">1st Place</h3>
                <p className="text-slate-600">AI4Community Hackathon<br />70+ teams</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">State Winner</h3>
                <p className="text-slate-600">Srishti Hackathon 2025<br />110+ teams</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">36 Hours</h3>
                <p className="text-slate-600">Rapid prototyping<br />Production-ready demos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Enhanced Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Code2 className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Full-stack applications and AI tools built with modern technologies and product-thinking approach. 
              Each project demonstrates end-to-end development skills and real-world problem solving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What I <span className="text-blue-600">Do</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My core expertise spans full-stack development, rapid prototyping, and product-driven engineering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Full-Stack Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Build full-stack web applications using Next.js, Supabase, and related modern stacks with focus on scalability and user experience.
              </p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">MVP Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Design and deliver project MVPs through complete product lifecycle: scoping → prototyping → launch → iteration.
              </p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Product Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Analyze product usage and iterate quickly with focus on UX optimization and measurable impact on user workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Repositories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-6">
              <Code2 className="w-4 h-4 mr-2" />
              Live Code
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              GitHub <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">Repositories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Live code repositories showcasing various projects, experiments, and contributions. 
              All projects include comprehensive documentation and setup instructions.
            </p>
          </div>
          <GitHubRepos />
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technical <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive skill set spanning modern web development, AI tools, and DevOps practices
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Supabase',
              'PostgreSQL', 'Python', 'Prometheus', 'Grafana', 'OpenCV', 'Git'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-semibold text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              View Complete Skills
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-purple-600/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm actively seeking internship opportunities where I can contribute to product-led engineering, 
            learn from experienced teams, and continue building impactful solutions. Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Start Conversation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/priyanshudas00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Code2 className="w-6 h-6 mr-3" />
              View GitHub Profile
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
          
          {/* Quick Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Email Response</h3>
              <p className="text-blue-100 text-sm">24-48 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Work Preference</h3>
              <p className="text-blue-100 text-sm">Remote • Hybrid • On-site</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Award className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Availability</h3>
              <p className="text-blue-100 text-sm">Immediate • 4-6 months</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;