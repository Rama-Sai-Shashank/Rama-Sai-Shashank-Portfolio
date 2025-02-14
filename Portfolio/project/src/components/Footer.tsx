import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}