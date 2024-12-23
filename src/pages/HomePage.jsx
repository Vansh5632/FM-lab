import React from "react";
import { Link } from "react-router-dom";
import { BeakerIcon, CalculatorIcon, BookOpenIcon, ArrowRightIcon } from "lucide-react";
import Image1 from "../assets/lab1.jpeg";
import Image2 from "../assets/lab2.jpeg";
import Image3 from "../assets/lab3.jpeg";
import Image4 from "../assets/lab4.jpeg";

const HomePage = () => {
  const experiments = [
    {
      id: 1,
      title: "Metacentric Height",
      description: "Determine the metacentric height of a floating body to analyze its stability.",
      icon: "🚢"
    },
    {
      id: 2,
      title: "Bernoulli's Theorem",
      description: "Verify Bernoulli's theorem and understand energy conservation in fluid flow.",
      icon: "💨"
    },
    {
      id: 3,
      title: "Friction in Pipes",
      description: "Calculate the coefficient of friction for water flow in pipes.",
      icon: "🔧"
    }
  ];

  // Corrected gallery images array
  const galleryImages = [
    Image1,
    Image2,
    Image3,
    Image4
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-500 hover:scale-105">
            Fluid Mechanics Lab
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-blue-100">
            Welcome to the interactive Fluid Mechanics Lab. Explore experiments and calculators 
            for fluid dynamics concepts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/experiments">
              <button className="w-full sm:w-auto bg-white text-blue-600 font-medium px-8 py-3 rounded-lg 
                hover:bg-blue-50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                flex items-center justify-center gap-2">
                <BeakerIcon size={20} />
                Explore Experiments
              </button>
            </Link>
            <Link to="/calculators">
              <button className="w-full sm:w-auto bg-blue-700 text-white font-medium px-8 py-3 rounded-lg 
                hover:bg-blue-600 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                flex items-center justify-center gap-2">
                <CalculatorIcon size={20} />
                Use Calculators
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other sections remain the same... */}

      {/* Image Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Explore the Lab
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-64 object-cover transform transition-all duration-300 hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;