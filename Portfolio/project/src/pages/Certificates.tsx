import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import HTMLImage from '../assets/HTML.jpg'; 
import HunarImage from '../assets/Hunar.jpg'; 
import pyImage from '../assets/PYTHON.jpg'; 

export default function Certificates() {
  const certificates = [
    {
      name: 'Web Development Internship',
      issuer: 'Hunar Intern',
      date: 'December 2023',
      image: {HunarImage},
    },
    {
      name: 'HTML Projects Certification',
      issuer: 'Udemy',
      date: 'October 2023',
      image: {HTMLImage},
    },
    {
      name: 'Python Developer Certificate',
      issuer: 'SoloLearn',
      date: 'August 2023',
      image: {pyImage} ,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Certificates</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my expertise and commitment to
            continuous learning in web development and programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-bold text-lg">{cert.name}</h3>
                </div>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}