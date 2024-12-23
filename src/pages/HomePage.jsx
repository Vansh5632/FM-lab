import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BeakerIcon, 
  CalculatorIcon, 
  BookOpenIcon, 
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GraduationCapIcon,
  FlaskConicalIcon,
  BookIcon
} from "lucide-react";
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

  const galleryImages = [
    Image1,
    Image2,
    Image3,
    Image4
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FlaskConicalIcon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Experiments</h3>
              <p className="text-gray-600">
                Hands-on learning with real-time data collection and analysis tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCapIcon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
              <p className="text-gray-600">
                Comprehensive study materials and video tutorials for each experiment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookIcon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Documentation</h3>
              <p className="text-gray-600">
                Automatic report generation and data export capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Experiments Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Experiments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiments.map((exp) => (
              <div key={exp.id} className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <Link to={`/experiment/${exp.id}`}>
                  <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More 
                    <ArrowRightIcon size={16} />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Explore the Lab
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg relative aspect-video">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-500 transform ${
                    index === currentSlide ? "translate-x-0" : "translate-x-full"
                  }`}
                  style={{ left: `${(index - currentSlide) * 100}%` }}
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                  hover:bg-white transition-all duration-200 shadow-lg"
              >
                <ChevronLeftIcon size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                  hover:bg-white transition-all duration-200 shadow-lg"
              >
                <ChevronRightIcon size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${currentSlide === index ? "bg-white w-4" : "bg-white/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in exploring the fascinating world of fluid mechanics through hands-on experiments.
          </p>
          <Link to="/experiments">
            <button className="bg-white text-blue-600 font-medium px-8 py-3 rounded-lg
              hover:bg-blue-50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Start Experimenting
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;