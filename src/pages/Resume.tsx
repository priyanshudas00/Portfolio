import React from 'react';
import { Download, ExternalLink, Award, Code, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      role: "Project Lead - AI Resume Analyzer",
      company: "Independent Project",
      duration: "Jan 2025 – Present",
      description: [
        "Led design and implementation of web-based resume analysis tool using Next.js and Node.js",
        "Implemented frontend UI, resume parsing pipeline, and ML-powered scoring system",
        "Achieved 40% improvement in candidate screening efficiency in prototype tests",
        "Built end-to-end solution with PostgreSQL database and Supabase authentication"
      ],
      tech: ["Next.js", "Node.js", "Python", "NLP", "Supabase", "PostgreSQL"]
    },
    {
      role: "Full-Stack Developer - Job Portal",
      company: "College & External Placement",
      duration: "Mar 2025 – Present",
      description: [
        "Architected and developed comprehensive job portal with candidate and employer workflows",
        "Implemented real-time notifications, role-based access control, and analytics dashboard",
        "Built staff management system with vehicle/fare management features (NSKL Travels integration)",
        "Currently in active development with production deployment planned"
      ],
      tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Real-time APIs"]
    },
    {
      role: "Hackathon Winner - AI4Community",
      company: "Acharya Institutes",
      duration: "May 2025",
      description: [
        "Led team to 1st place victory among 70+ teams for SRE & Predictive Maintenance project",
        "Architected monitoring flows with Prometheus, Grafana dashboards, and automated RCA",
        "Implemented fault injection testing and recovery workflows for production-like scenarios",
        "Demonstrated end-to-end incident management with measurable MTTR reduction"
      ],
      tech: ["Node.js", "Prometheus", "Grafana", "DevOps", "SRE Practices"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Acharya Institute of Technology, Bengaluru",
      duration: "2022 - 2026 (Expected)",
      gpa: "7.0 CGPA",
      coursework: ["Data Structures & Algorithms", "Database Systems", "Web Development", "Software Engineering", "Operating Systems", "Computer Networks"]
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
    "Frontend Development": ["React", "Next.js", "Vite", "Tailwind CSS", "Responsive Design"],
    "Backend & Databases": ["Node.js", "Express", "Supabase", "PostgreSQL", "MongoDB (Basic)"],
    "DevOps & Monitoring": ["Prometheus", "Grafana", "Docker (Basic)", "Linux Commands", "Shell Scripting"],
    "AI/ML & Data": ["NLP Basics", "OpenCV", "Resume Parsing", "Keyword Extraction", "Data Analysis"],
    "Tools & Others": ["Git", "GitHub", "Postman", "VS Code", "Figma", "Vercel", "Netlify"]
  };

  const achievements = [
    "🥇 1st Place - AI4Community Hackathon (May 2025) - 70+ teams",
    "🏆 State Winner (2nd) - Srishti Hackathon 2025 - 110 teams",
    "🚀 Built and deployed 6+ production-ready web applications",
    "⚡ AI Resume Analyzer: 40% reduction in screening time",
    "📱 Full-stack Job Portal with real-time features",
    "🎯 Maintained 7.0 CGPA while building multiple projects"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Priyanshu Raj
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Computer Science Engineering Student | Full-Stack Developer | AI Tools Builder
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Darbhanga, Bihar, India</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>priyanshu.raj@example.com</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Available Immediately</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Resume
            </button>
            <a
              href="https://github.com/priyanshudas00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <Award className="w-6 h-6 mr-2 text-blue-600" />
            Professional Summary
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed">
              Motivated Computer Science Engineering student (CSE — Acharya Institute of Technology, Batch 2026) with hands-on experience building full-stack web applications, lightweight AI tools, and production-like prototypes. Proven ability to architect end-to-end systems (Next.js, Supabase, Node.js), design SRE/monitoring workflows (Prometheus & Grafana), and rapidly prototype high-impact solutions in hackathons and coursework. Strong product orientation — scopes features, ships MVPs, measures outcomes, and iterates. Seeking internships or early-career full-stack / site reliability / product engineering roles.
            </p>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-md border border-slate-100">
                <div className="text-2xl mr-3">{achievement.split(' ')[0]}</div>
                <div className="text-slate-700">{achievement.substring(achievement.indexOf(' ') + 1)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Professional Experience & Projects</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm mt-1 md:mt-0">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-slate-500 text-sm">{edu.duration}</p>
                  <p className="text-green-600 font-semibold">{edu.gpa}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Hindi</span>
                  <span className="text-sm text-slate-500">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">English</span>
                  <span className="text-sm text-slate-500">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Kannada/Tulu</span>
                  <span className="text-sm text-slate-500">Basic</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Availability</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Duration:</strong> 4-6 months internship</p>
                <p><strong>Location:</strong> Remote / Hybrid / On-site</p>
                <p><strong>Expected CTC:</strong> 7+ LPA (negotiable)</p>
                <p><strong>Notice Period:</strong> Immediate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Contribute</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Looking for internship opportunities where I can contribute to product-led engineering while continuing to build and learn. Let's discuss how I can help your team create impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;