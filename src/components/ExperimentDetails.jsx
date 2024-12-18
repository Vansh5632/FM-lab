import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlaskConical, Microscope, Book, Calculator, AlertTriangle, Clipboard } from 'lucide-react';
import experimentsData from '../data/exprimentData.json';

const ExperimentDetailsPage = () => {
  const { id } = useParams();
  const [experiment, setExperiment] = useState(null);

  useEffect(() => {
    const selectedExperiment = experimentsData.find(exp => exp.id === Number(id));
    setExperiment(selectedExperiment);
  }, [id]);

  if (!experiment) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="text-center">
          <div className="animate-spin mb-4 mx-auto w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <p className="text-xl text-blue-800">Loading Experiment Details...</p>
        </div>
      </div>
    );
  }

  // Defensive check for missing properties
  const equipment = experiment.equipment || [];
  const procedure = experiment.procedure || [];
  const precautions = experiment.precautions || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex items-center">
            <FlaskConical className="w-12 h-12 mr-4 text-yellow-300" />
            <div>
              <h2 className="text-3xl font-bold mb-2">{experiment.title}</h2>
              <p className="text-blue-100 italic">{experiment.description}</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-700">
                <Microscope className="mr-2 text-blue-500" /> Experimental Setup
              </h3>
              <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{experiment.experimental_setup}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-700">
                <Book className="mr-2 text-blue-500" /> Theory
              </h3>
              <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{experiment.theory}</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-700">
                <Calculator className="mr-2 text-blue-500" /> Formula
              </h3>
              <div className="bg-indigo-50 p-4 rounded-lg text-gray-800 font-mono">
                {experiment.formula}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-700">
                <Clipboard className="mr-2 text-blue-500" /> Equipment
              </h3>
              <ul className="space-y-2 bg-blue-50 p-4 rounded-lg">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Procedure Section */}
        <div className="bg-blue-100 p-6">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
            <Clipboard className="mr-3 text-blue-600" /> Procedure
          </h3>
          <ol className="space-y-3 pl-6 list-decimal text-gray-800">
            {procedure.map((step, index) => (
              <li key={index} className="pl-2">{step}</li>
            ))}
          </ol>
        </div>

        {/* Precautions Section */}
        <div className="bg-red-50 p-6">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-red-800">
            <AlertTriangle className="mr-3 text-red-600" /> Safety Precautions
          </h3>
          <ul className="space-y-3 pl-6 list-disc text-red-900">
            {precautions.map((precaution, index) => (
              <li key={index} className="pl-2">{precaution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperimentDetailsPage;