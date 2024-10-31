// About.js
import './about.css'

export const About = () => {
  return (
    <section id="about" className="relative py-20 text-white">
      {/* Blurred background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center blur-overlay"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.8)), url('https://ayyjntjqttcwfulpvggm.supabase.co/storage/v1/object/public/artworks/val.jpg')",
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold">What is <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>AimFlare</span>?</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          AimFlare is a revolutionary browser-based aim trainer designed for gamers looking to enhance their precision and reflexes. With dynamic drills and personalized feedback, we transform your aim into a competitive edge.
        </p>
      </div>
    </section>
  );
};
