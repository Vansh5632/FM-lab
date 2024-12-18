import React from "react";
import { Link } from "react-router-dom";
import { BeakerIcon, CalculatorIcon, BookOpenIcon, ArrowRightIcon } from "lucide-react";

const HomePage = () => {
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

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center gap-3">
            <BookOpenIcon size={28} />
            About the Lab
          </h2>
          <p className="text-gray-600 text-lg text-center leading-relaxed">
            This Fluid Mechanics Lab is designed to provide students with hands-on experiments 
            and tools to understand the principles of fluid dynamics. Perform experiments 
            such as Bernoulli's theorem verification, metacentric height calculation, and 
            friction loss determination through interactive tools and calculators.
          </p>
        </div>
      </section>

      {/* Featured Experiments */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Featured Experiments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Metacentric Height",
                description: "Determine the metacentric height of a floating body to analyze its stability.",
                icon: "🚢"
              },
              {
                title: "Bernoulli's Theorem",
                description: "Verify Bernoulli's theorem and understand energy conservation in fluid flow.",
                icon: "💨"
              },
              {
                title: "Friction in Pipes",
                description: "Calculate the coefficient of friction for water flow in pipes.",
                icon: "🔧"
              }
            ].map((experiment, index) => (
              <div key={index} 
                className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4">{experiment.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{experiment.title}</h3>
                <p className="text-gray-600 mb-4">{experiment.description}</p>
                <Link to="/experiments" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium gap-2 
                  group transition-all duration-300">
                  Learn More 
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default HomePage;