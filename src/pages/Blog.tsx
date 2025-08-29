import React, { useState, useRef } from 'react';
import { Calendar, Clock, ArrowRight, Code, Award, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import FirstFullStackApp from './FirstFullStackApp';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  featured?: boolean;
  image: string;
  link?: string;
  component?: React.ComponentType;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const downloadPDF = async () => {
    if (modalContentRef.current && selectedPost) {
      const canvas = await html2canvas(modalContentRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${selectedPost.title}.pdf`);
    }
  };

  const blogPosts = [
    {
      title: "Building an AI Resume Analyzer: From Idea to MVP",
      excerpt: "Complete walkthrough of developing an ML-powered resume analysis tool, from product scoping to deployment. Includes architecture decisions, NLP implementation, and performance optimization.",
      category: "Full-Stack Development",
      readTime: "15 min read",
      date: "Coming Soon",
      tags: ["AI/ML", "Next.js", "Product Development"],
      featured: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "How I Built a Job Portal with Next.js + Supabase",
      excerpt: "Architectural decisions, authentication patterns, and database design for a full-stack job portal. Covers real-time features, role-based access control, and deployment strategies.",
      category: "Technical Deep Dive",
      readTime: "12 min read",
      date: "Coming Soon",
      tags: ["Next.js", "Supabase", "Full-Stack"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Winning AI4Community: SRE & Monitoring in 48 Hours",
      excerpt: "Case study of building a comprehensive SRE platform with Prometheus, Grafana, and automated recovery workflows. Lessons learned from hackathon pressure and team collaboration.",
      category: "Hackathon Experience",
      readTime: "10 min read",
      date: "Coming Soon",
      tags: ["DevOps", "SRE", "Hackathon"],
      featured: true,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80"
    },
    {
      title: "Route Research for Profitable Long-Distance Buses",
      excerpt: "Methodology and dataset analysis for identifying profitable bus routes in India. Business research, market analysis, and scaling considerations for NSKL Travels concept.",
      category: "Business Analysis",
      readTime: "8 min read",
      date: "Coming Soon",
      tags: ["Business", "Research", "Logistics"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Step-by-Step: Ship Your First Full-Stack App as a Student",
      excerpt: "Practical guide for computer science students to build and deploy their first production-ready web application. Covers planning, development, testing, and deployment.",
      category: "Student Guide",
      readTime: "20 min read",
      date: "Coming Soon",
      tags: ["Tutorial", "Student Life", "Web Development"],
      link: "/blog/first-full-stack-app",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      component: FirstFullStackApp
    },
    {
      title: "Lessons Learned: Balancing College and Product Work",
      excerpt: "Time management strategies, project prioritization, and maintaining quality while juggling academics and building real-world applications. Personal insights and practical tips.",
      category: "Personal Development",
      readTime: "7 min read",
      date: "Coming Soon",
      tags: ["Productivity", "Student Life", "Career"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const categories = ["All", "Technical Deep Dive", "Hackathon Experience", "Student Guide", "Business Analysis"];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto" ref={modalContentRef}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700" title="Close the modal">
                <X className="w-6 h-6" />
              </button>
            </div>
            {selectedPost.component ? (
              // Render the custom component if it exists
              <div className="prose max-w-none mb-6">
                <selectedPost.component />
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {selectedPost.date} | 
                    <Clock className="w-4 h-4 inline mx-1" />
                    {selectedPost.readTime}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedPost.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="prose max-w-none mb-6">
                  <p>{selectedPost.excerpt}</p>
                  <p className="mt-4">Full article content would be displayed here...</p>
                  <p className="mt-4">This is a placeholder for the complete article content.</p>
                  <p className="mt-4">In a real implementation, this would show the entire article.</p>
                </div>
              </>
            )}
            <div className="flex justify-between mt-6">
              <button 
                onClick={downloadPDF}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                title="Download the article as a PDF"
              >
                <Download className="w-5 h-5 mr-2" />
                Download as PDF
              </button>
              <button 
                onClick={closeModal}
                className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200"
                title="Close the modal"
              >
                <X className="w-5 h-5 mr-2" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-yellow-300 mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            In-depth articles about full-stack development, AI tools, hackathon experiences, and lessons learned from building real-world applications as a computer science student.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-blue-100 dark:bg-yellow-900/30 text-blue-800 dark:text-yellow-300 px-4 py-2 rounded-full">
              <Code className="w-4 h-4 mr-2" />
              <span className="font-medium">Technical Tutorials</span>
            </div>
            <div className="flex items-center bg-green-100 dark:bg-yellow-900/30 text-green-800 dark:text-yellow-300 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 mr-2" />
              <span className="font-medium">Hackathon Stories</span>
            </div>
            <div className="flex items-center bg-purple-100 dark:bg-yellow-900/30 text-purple-800 dark:text-yellow-300 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-medium">Student Insights</span>
            </div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Blog Coming Soon!</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              I'm currently working on detailed technical articles and case studies. Each post will be 1,500–5,000 words with complete code examples, architecture diagrams, and practical insights from real projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>

        {/* Planned Articles Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Planned Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 ${
                  post.featured ? 'ring-2 ring-blue-200' : ''
                }`}
              >
                {post.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  {post.featured && (
                    <div className="flex items-center mb-3">
                      <Award className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-xs font-semibold text-yellow-700 uppercase tracking-wide">Featured</span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <button 
                      onClick={() => openModal(post)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Complete Code Examples</h3>
              <p className="text-slate-600">
                Full implementation details with GitHub repositories, setup instructions, and deployment guides.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Real Project Insights</h3>
              <p className="text-slate-600">
                Lessons learned from hackathons, architectural decisions, and performance optimization strategies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Student Perspective</h3>
              <p className="text-slate-600">
                Practical advice for balancing academics with real-world development and career preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
