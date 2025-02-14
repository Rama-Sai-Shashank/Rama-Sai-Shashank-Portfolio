import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '../assets/profile.jpg'; 

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="relative">
        <img
          src={profileImage}
          alt="Hero background"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl md:text-2xl mb-8">Full Stack Developer & Designer</p>
            <a
              href="/about"
              className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-600 leading-relaxed">
              I specialize in creating beautiful, functional, and user-friendly websites and applications.
              With expertise in both front-end and back-end development, I can bring your digital vision to life.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <div className="space-y-4">
              {['React', 'Node.js', 'TypeScript', 'Python', 'MySQL'].map((skill) => (
                <div key={skill} className="bg-gray-100 p-3 rounded-lg">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}