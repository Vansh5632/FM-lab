import React from 'react';
import ExperimentCard from '../components/ExperimentCard';

// Sample experiment data
const experimentsData = [
  {
    id: 1,
    title: "Metacentric Height",
    description: "Determine the metacentric height of a floating body to analyze its stability in fluid mechanics. This experiment helps understand buoyancy and floating stability concepts.",
    icon: "🚢"
  },
  {
    id: 2,
    title: "Bernoulli's Theorem",
    description: "Verify Bernoulli's theorem and understand the relationship between pressure, velocity, and elevation in fluid flow through a variable cross-section pipe.",
    icon: "💨"
  },
  {
    id: 3,
    title: "Reynolds Number",
    description: "Study the transition from laminar to turbulent flow and calculate Reynolds number using a glass tube setup with different flow rates.",
    icon: "🌊"
  },
  {
    id: 4,
    title: "Impact of Jet",
    description: "Analyze the force exerted by a jet of water on different types of vanes and verify the principles of momentum exchange.",
    icon: "💧"
  },
  {
    id: 5,
    title: "Friction in Pipes",
    description: "Determine major and minor losses in pipe flow and calculate friction factors for different pipe materials and configurations.",
    icon: "🔧"
  },
  {
    id: 6,
    title: "Orifice and Mouthpiece",
    description: "Study the flow characteristics and coefficient of discharge for different types of orifices and mouthpieces.",
    icon: "🕳️"
  }
];

const ExperimentsPage = () => {
  const handleExperimentClick = (experiment) => {
    console.log('Selected experiment:', experiment);
    // Handle navigation or modal opening here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Fluid Mechanics Experiments
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Explore our collection of interactive fluid mechanics experiments. 
          Each experiment is designed to help you understand fundamental concepts 
          through practical application.
        </p>
      </div>

      {/* Experiments Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experimentsData.map((experiment) => (
            <ExperimentCard
              key={experiment.id}
              title={experiment.title}
              description={experiment.description}
              icon={experiment.icon}
              onClick={() => handleExperimentClick(experiment)}
            />
          ))}
        </div>
      </div>

      {/* No Experiments Found Message (shown when data is empty) */}
      {experimentsData.length === 0 && (
        <div className="text-center text-gray-600 mt-12">
          No experiments available at the moment.
        </div>
      )}

      {/* Optional Footer Section */}
      <div className="container mx-auto px-4 mt-12 text-center text-gray-600">
        <p>
          Can't find what you're looking for? 
          <button className="text-blue-600 hover:underline ml-2">
            Contact Support
          </button>
        </p>
      </div>
    </div>
  );
};

export default ExperimentsPage;