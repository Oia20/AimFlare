
import FPSLanding from "./FPSlanding";
import React from "react";
import './TryIt.css'

const Crosshair: React.FC = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '5px',
    height: '5px',
    background: 'yellow',
    borderRadius: '50%',
    zIndex: 100,
  }}/>
);
export const TryIt: React.FC = () => {
    return (
      <section id="about" className="py-10 bg-gradient-to-b from-gray-900 to-gray-900 text-white h-content">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-8">Give It A Shot!</h2>
        </div>
        <div className="flex align-center justify-center relative">
            <div className="w-content gameplay">
            <FPSLanding />
            <Crosshair />
            </div>
        </div>
      </section>
    );
  };