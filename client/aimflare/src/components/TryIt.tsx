
import FPSLanding from "./FPSlanding";
import React from "react";
import { ArrowRight, Target } from "lucide-react";
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
    zIndex: 40,
  }}/>
);
export const TryIt: React.FC = () => {

    const infinite = () => {
      window.open("/infinite", "_blank");
    }
    return (
      <section id="try" className="py-10 bg-gradient-to-b from-gray-900 to-gray-900 text-white h-content">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Give It A Shot!
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Experience the precision and fluidity of AimFlare right in your browser.
            No downloads required - jump straight into training!
          </p>
        </div>
        <div className="flex align-center justify-center relative">
            <div className="w-content gameplay">
            <FPSLanding />
            <Crosshair />
            </div>
        </div>
        <div className="mt-16 text-center" onClick={infinite}>
          <a 
            href="#try" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 
                     rounded-full text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 
                     transition-all duration-300"
          >
            Play Infinite Without Signing In
            <Target className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    );
  };