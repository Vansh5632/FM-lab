import { useNavigate } from "react-router-dom";
import ExperimentCard from "../components/ExperimentCard";
import experimentsData from "../data/exprimentData.json"; // Assuming your experiment data is in this file

const ExperimentsPage = () => {
  const navigate = useNavigate();

  // Handle click on experiment card and navigate to details page
  const handleExperimentClick = (id) => {
    navigate(`/experiment/${id}`);
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
          Each experiment is designed to help you understand fundamental
          concepts through practical application.
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
              onClick={() => handleExperimentClick(experiment.id)}
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
          Can't find what you're looking for? Can&apos;t find what you&apos;re
          looking for?
          <button>Contact Support</button>
        </p>
      </div>
    </div>
  );
};

export default ExperimentsPage;
