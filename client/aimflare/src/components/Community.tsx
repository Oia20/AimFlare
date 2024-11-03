import React from "react";
import { Github, Radio, Users, Code2 } from "lucide-react";

export const Community = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "10K+" },
    { icon: Code2, label: "GitHub Stars", value: "2.5K" },
    { icon: Radio, label: "Discord Members", value: "15K+" },
  ];

  return (
    <section id="community" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Join the AimFlare Community
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Connect with fellow gamers and developers. Contribute to our open-source project, 
            share your progress, and be part of our growing community.
          </p>

          {/* Social Links */}
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="https://github.com/Oia20/AimFlare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all duration-300 w-full md:w-auto"
            >
              <Github className="w-6 h-6 mr-3" />
              <span>Star us on GitHub</span>
            </a>

            <a 
              href="https://reddit.com/r/aimflare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all duration-300 w-full md:w-auto"
            >
              {/* Custom Reddit Icon */}
              <svg 
                className="w-6 h-6 mr-3" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              <span>Join r/AimFlare</span>
            </a>
          </div>

    
        </div>
      </div>
    </section>
  );
};

export default Community;