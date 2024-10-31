

// About.js
import FPSLanding from "./FPSlanding";

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
export const TryIt = () => {
    return (
      <section id="about" className="py-10 bg-gradient-to-br from-gray-700 to-gray-900 text-white h-content">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold">Give It A Shot!</h2>
        </div>
        <div className="flex align-center justify-center relative">
            <div className="w-content shadow-xl">
            <FPSLanding />

            <Crosshair />
            </div>
        </div>
      </section>
    );
  };