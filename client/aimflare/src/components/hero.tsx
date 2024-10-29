import React from 'react';

const Hero = () => {
    return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          {/* Background Animation (Example: gradient animation or image) */}
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 animate-pulse"></div>
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-6xl text-white font-bold drop-shadow-lg">Unleash Your Precision</h1>
          <p className="mt-4 text-lg text-gray-200">Train your aim, improve your game.</p>
          <a 
            href="#features" 
            className="mt-6 inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg transform transition duration-300 hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    );
  };
  
  export default Hero;