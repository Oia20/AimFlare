import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex justify-center bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
      {/* Background Graphic for Aim Precision */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="relative">
          {/* Circle with increasing percentage effect */}
          <div className="w-96 h-96 rounded-full border-8 border-blue-700 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-8 border-gray-900 animate-pulse" style={{ transform: 'scale(0.9)' }} />
            <div className="absolute inset-0 rounded-full border-8 border-blue-700 animate-pulse" style={{ transform: 'scale(0.8)' }} />
            <div className="absolute inset-0 rounded-full border-8 border-gray-900 animate-pulse" style={{ transform: 'scale(0.7)' }} />
            <div className="absolute inset-0 rounded-full border-8 border-blue-700 animate-pulse" style={{ transform: 'scale(0.6)' }} />
            <div className="absolute inset-0 rounded-full border-8 border-gray-900 animate-pulse" style={{ transform: 'scale(0.5)' }} />
            <div className="absolute inset-0 rounded-full bg-blue-900 border-gray-900 animate-pulse" style={{ transform: 'scale(0.1)' }} />

          </div>
        </div>
      </div>

      <div className="relative text-center z-10 mt-36">
        <h1 className="text-6xl text-white font-bold drop-shadow-lg">Unleash Your Precision</h1>
        <p className="mt-4 text-lg text-gray-100">Train your aim, improve your game.</p>
        <a 
          href="#features" 
          className="mt-6 inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          Get Started
        </a>
        <div className="mt-8 bg-gray-700 border-2 border-blue-500 text-gray-200 text-sm font-semibold rounded-full px-6 py-2 w-fit m-auto">
          <p>100% Open-Source, Browser-Based, No Download Required</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
