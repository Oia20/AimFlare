export const Features = () => {
    const featuresList = [
      { title: "Dynamic Drills", description: "Over 10,000 drills tailored to improve your aim." },
      { title: "Progress Tracking", description: "Detailed analytics to monitor your improvements." },
      { title: "Personalization Options", description: "Customize sensitivity and crosshair for your needs." },
      { title: "Community Challenges", description: "Engage with others and climb the leaderboard." },
    ];
  
    return (
      <section id="features" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold">Features that Elevate Your Game</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresList.map((feature, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-700 p-6 rounded-lg shadow-md transition transform hover:scale-105">
                <h3 className="text-3xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };