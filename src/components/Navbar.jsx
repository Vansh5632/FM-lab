import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full">
      {/* Main Navbar - Sticky with Scroll Effect */}
      <nav
        className={`bg-white shadow-md ${
          isScrolled ? "shadow-lg" : ""
        } sticky top-0 z-50 transition-shadow duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24 gap-4">
            {/* Left Side Name */}
            <div className="hidden md:block flex-1 text-right">
              <div className="text-lg font-semibold text-gray-800 animate-fadeIn hover:text-blue-600 transition-colors duration-300">
                Dr. B.R. Ambedkar National
              </div>
              <div className="text-lg font-semibold text-gray-800 animate-fadeIn hover:text-blue-600 transition-colors duration-300">
                Institute Of Technology
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center px-8">
              <div className="group relative">
                <img
                  src={Image}
                  alt="University Logo"
                  className="h-20 w-20 object-contain transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300">
                  <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Side Name (Punjabi) */}
            <div className="hidden md:block flex-1 text-left">
              <div className="text-lg font-semibold text-gray-800 animate-fadeIn hover:text-blue-600 transition-colors duration-300">
                ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਰਾਸ਼ਟਰੀ
              </div>
              <div className="text-lg font-semibold text-gray-800 animate-fadeIn hover:text-blue-600 transition-colors duration-300">
                ਤਕਨਾਲੋਜੀ ਸੰਸਥਾਨ, ਜਲੰਧਰ
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-gray-100 md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              {["Home", "Calculators", "Experiments"].map((item) => {
                const toPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = location.pathname === toPath;

                return (
                  <Link
                    key={item}
                    to={toPath}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative group text-gray-700 font-medium hover:text-blue-600 transition-all"
                  >
                    <span
                      className={`group-hover:animate-slideIn ${
                        isActive ? "text-blue-600" : ""
                      }`}
                    >
                      {item}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Navbar - Main Navigation Links */}
      <nav className="bg-gray-100 border-b sticky top-24 z-40 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-4 md:gap-12 h-12 items-center">
            {["Home", "Calculators", "Experiments"].map((item) => {
              const toPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === toPath;

              return (
                <Link
                  key={item}
                  to={toPath}
                  className="relative group"
                >
                  <span
                    className={`text-gray-700 font-medium transition-all duration-300 group-hover:text-blue-600 ${
                      isActive ? "text-blue-600" : ""
                    }`}
                  >
                    {item}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
