import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and a love for creating
            innovative solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2" />
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-200 pl-4">
                  <h3 className="font-semibold">Bachelor of Computer Science - Internet of Things & Cyber Security with Block Chain Technology.</h3>
                  <p className="text-gray-600">QIS College of Engineering and Technology • 2022-2026</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Specialized in Software Engineering with a focus on web technologies.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h3 className="font-semibold">Intermediate in MPC</h3>
                  <p className="text-gray-600">Narayana Jr College • 2020-2022</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h3 className="font-semibold">SSC</h3>
                  <p className="text-gray-600">ST. Joseph's E.M.H. School • 2020</p>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </div>
    </div>
  );
}