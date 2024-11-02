import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Features", "About", "Try", "Community"];

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <svg width="75" height="75">
              <image href="/AimFlare Logo Minimal.png" width="75" height="75" />
            </svg>
            <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-3xl font-bold">
              AimFlare
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="#get-started"
            className="hidden md:block bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded hover:shadow-lg transition duration-300"
          >
            Start Training
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } py-4 space-y-4`}
        >
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white transition duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#get-started"
            className="block w-full text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded hover:shadow-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Start Training
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;