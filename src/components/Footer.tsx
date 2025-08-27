import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
  <footer className="bg-slate-900 text-white dark:bg-slate-950 dark:text-slate-200 border-t border-slate-800 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white dark:text-slate-900" />
              </div>
              <span className="text-xl font-bold">Priyanshu Raj</span>
            </div>
            <p className="text-slate-400 dark:text-slate-400 max-w-md">
              Computer Science Engineering student passionate about building useful software 
              and AI tools. Currently seeking internship opportunities in full-stack development.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/priyanshudas00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-yellow-600 transition-colors"
              >
                <Github className="w-5 h-5 dark:text-yellow-300" />
              </a>
              <a
                href="https://linkedin.com/in/priyanshudas00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-yellow-600 transition-colors"
              >
                <Linkedin className="w-5 h-5 dark:text-yellow-300" />
              </a>
              <a
                href="mailto:rajpriyanshu9078@gmail.com"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-yellow-600 transition-colors"
              >
                <Mail className="w-5 h-5 dark:text-yellow-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/resume" className="text-slate-400 hover:text-white transition-colors">Resume</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Technologies</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Next.js & React</li>
              <li>TypeScript</li>
              <li>Supabase</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Priyanshu Raj. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;