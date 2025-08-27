import React from 'react';
import { Download, Mail, Code2, Award, Users, TrendingUp, Target, Zap, BookOpen, Coffee, Heart, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = {
    'Core Development': [
      'JavaScript, TypeScript (Advanced)',
      'React, Next.js, Vite (Expert)',
      'Tailwind CSS, responsive design',
      'Node.js, Express concepts',
      'Supabase (auth, Realtime DB, storage, Postgres)',
      'PostgreSQL, basic MongoDB',
      'Git, GitHub, version control'
    ],
    'DevOps & Monitoring': [
      'Prometheus metrics collection',
      'Grafana dashboards & visualizations',
      'SLIs/SLOs design and enforcement',
      'Automated RCA and recovery workflows',
      'Docker basics, cron jobs',
      'Linux commands, shell scripting'
    ],
    'Data & AI': [
      'ML/AI tools with pretrained models',
      'NLP: resume parsing, keyword matching',
      'OpenCV for computer vision',
      'SQL queries and data cleaning',
      'Data-driven feature decisions'
    ],
    'Product & Soft Skills': [
      'Product requirement gathering',
      'User testing and MVP scoping',
      'Feature prioritization',
      'Technical writing and documentation',
      'Time management and project delivery',
      'Presentation and demo skills'
    ]
  };

  const achievements = [
    {
      title: '🥇 1st Place - AI4Community Hackathon',
      description: 'Built SRE platform with Prometheus monitoring and automated recovery among 70+ teams',
      date: 'May 2025',
      impact: 'System Resilience Excellence'
    },
    {
      title: '🏆 State Winner (2nd) - Srishti Hackathon',
      description: '36-hour accessibility suite for next billion users with voice and vision features',
      date: '2025',
      impact: 'Social Impact Recognition'
    },
    {
      title: '🚀 AI Resume Analyzer MVP',
      description: 'ML-powered resume analysis with 40% reduction in screening time',
      date: '2025',
      impact: 'Production-Ready Prototype'
    },
    {
      title: '💼 Full-Stack Job Portal',
      description: 'Complete placement solution with real-time notifications and role-based access',
      date: 'Ongoing',
      impact: 'Active Development'
    }
  ];

  const personalValues = [
    {
      icon: Heart,
      title: 'Impact-Driven',
      description: 'Focus on building solutions that solve real problems and create measurable value for users and businesses.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and methodologies to improve development efficiency and product quality.'
    },
    {
      icon: Target,
      title: 'Product-Minded',
      description: 'Strong emphasis on user experience, feature prioritization, and data-driven decision making.'
    },
    {
      icon: Coffee,
      title: 'Execution Focus',
      description: 'Bias toward shipping working prototypes quickly and iterating based on real user feedback.'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-yellow-900/30 dark:to-yellow-800/10 border border-blue-200 dark:border-yellow-700 text-blue-800 dark:text-yellow-300 rounded-full text-sm font-semibold mb-8">
            <BookOpen className="w-4 h-4 mr-2" />
            My Story & Background
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-yellow-300 mb-8">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">Priyanshu Raj</span>
          </h1>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl text-slate-700 dark:text-yellow-200 mb-8 leading-relaxed font-medium">
              I'm a <strong className="text-blue-600 dark:text-yellow-400">20-year-old engineering student from Darbhanga</strong> with a strong bias for building things that work in production.
            </p>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              My core strengths are <span className="font-semibold text-blue-600 dark:text-yellow-400">full-stack web development</span>, 
              <span className="font-semibold text-indigo-600 dark:text-yellow-300"> rapid prototyping</span>, and 
              <span className="font-semibold text-purple-600 dark:text-yellow-200"> product-driven engineering</span>.
            </p>
            <p className="text-lg text-slate-500 dark:text-yellow-200 leading-relaxed">
              I balance college life (CSE D Acharya Institute of Technology) with multiple practical projects D 
              from AI Resume Analyzers and Job Portals to Social Media Schedulers and Event Management systems. 
              My aim: secure a role that lets me contribute to product-led engineering while continuing to build and learn.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="group bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">B.Tech CSE</h3>
            <p className="text-slate-600 font-medium">Acharya Institute</p>
            <p className="text-sm text-blue-600 font-semibold">Batch 2026</p>
          </div>
          
          <div className="group bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">7.0</h3>
            <p className="text-slate-600 font-medium">Current CGPA</p>
            <p className="text-sm text-green-600 font-semibold">Strong Academic</p>
          </div>
          
          <div className="group bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">6+</h3>
            <p className="text-slate-600 font-medium">Live Projects</p>
            <p className="text-sm text-purple-600 font-semibold">Production Ready</p>
          </div>
          
          <div className="group bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">2</h3>
            <p className="text-slate-600 font-medium">Hackathon Wins</p>
            <p className="text-sm text-yellow-600 font-semibold">180+ Teams</p>
          </div>
        </div>

        {/* Personal Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Core <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide my approach to development and problem-solving
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalValues.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-200">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">My Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  I'm Priyanshu — a practical problem solver who learns by building. I enjoy turning messy real-world requirements into simple, maintainable systems. My interest lies at the intersection of web apps and lightweight AI — tools that make life easier for users and businesses.
                </p>
                <p className="text-lg">
                  I come from a lower-income background, and that perspective keeps me focused on building high-impact, resource-efficient solutions. I'm detail-oriented, I care about deadlines and execution, and I'm actively improving my communication and software engineering fundamentals.
                </p>
                <p className="text-lg">
                  My projects range from resume screening aids and staff portals to scheduling platforms and small-business logistical tools (bus-route optimization ideas and fleet management prototypes).
                </p>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Recent Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{achievement.description}</p>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-green-700">
                      {achievement.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Technical Skills */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technical <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive expertise across modern web development, DevOps practices, and AI tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skillList.map((skill, index) => (
                    <li key={index} className="flex items-center text-slate-600 hover:text-slate-900 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What I Do Enhanced */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-tr-3xl"></div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
              What I <span className="text-blue-600">Do</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Full-Stack Development</h3>
                <p className="text-slate-700 leading-relaxed">
                  Build full-stack web applications using Next.js, Supabase, and related modern stacks with focus on scalability and performance.
                </p>
              </div>
              
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">MVP Development</h3>
                <p className="text-slate-700 leading-relaxed">
                  Design and deliver project MVPs through complete product lifecycle: scoping → prototyping → launch → iteration.
                </p>
              </div>
              
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Product Analytics</h3>
                <p className="text-slate-700 leading-relaxed">
                  Analyze product usage and iterate quickly with focus on UX optimization and measurable impact on user workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
              I'm currently seeking internship opportunities where I can contribute to product-led engineering 
              while continuing to build and learn. Let's discuss how I can help your team create impactful solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Start Conversation
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;