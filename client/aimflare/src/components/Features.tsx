import React from "react";
import { Target, LineChart, Sliders, Trophy, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const Features: React.FC = () => {
  const featuresList: Feature[] = [
    {
      title: "Browser Based",
      description: "Train instantly in your browser. No downloads, no waiting - just pure improvement.",
      icon: Target
    },
    {
      title: "Progress Analytics",
      description: "Track every aspect of your improvement with detailed performance metrics.",
      icon: LineChart
    },
    {
      title: "Full Customization",
      description: "Match your game settings perfectly with custom sensitivity and crosshairs.",
      icon: Sliders
    },
    {
      title: "Global Rankings",
      description: "Compare your scores globally and climb the competitive leaderboards.",
      icon: Trophy
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Features that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Define Excellence
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every feature is crafted to enhance your training experience and accelerate your improvement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 
                          border border-gray-700 hover:border-blue-500/50 transition-all duration-500"
              >
                {/* Precision Circle Background (matching hero) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-32 h-32 rounded-full border-2 border-blue-500" />
                  <div className="absolute w-24 h-24 rounded-full border-2 border-purple-500" />
                  <div className="absolute w-16 h-16 rounded-full border-2 border-blue-500" />
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center
                                transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-2 
                              group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a 
            href="#try" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 
                     rounded-full text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 
                     transition-all duration-300"
          >
            Start Training Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;