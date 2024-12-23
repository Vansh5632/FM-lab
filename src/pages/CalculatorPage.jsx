import React from 'react';
import CalculationCard from '../components/CalculationCard'; // Import
import calculateData from '../data/calculateData.json'; // Import the JSON file

const CalculatorPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Experiments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculateData.map((experiment) => (
          <CalculationCard key={experiment.id} experiment={experiment} />
        ))}
      </div>
    </div>
  );
};

export default CalculatorPage;
