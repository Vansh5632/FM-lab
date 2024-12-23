import React, { useState } from 'react';

const CalculationCard = ({ experiment }) => {
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);

  const handleInputChange = (inputName, value) => {
    setInputValues((prev) => ({
      ...prev,
      [inputName]: parseFloat(value),
    }));
  };

  const calculateResult = () => {
    const hasAllInputs = experiment.inputs.every(
      (input) =>
        inputValues[input.split(' ')[0]] !== undefined &&
        !isNaN(inputValues[input.split(' ')[0]])
    );

    if (hasAllInputs) {
      try {
        const formula = new Function(
          ...Object.keys(inputValues),
          `return ${experiment.calculate}`
        );
        const result = formula(...Object.values(inputValues));
        setResult(result);
      } catch (error) {
        setResult('Error in calculation formula');
      }
    } else {
      setResult('Please fill all fields with valid numbers');
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4 border-b pb-2">
          <span className="text-3xl">{experiment.icon}</span>
          <h3 className="text-2xl font-semibold text-gray-800">{experiment.title}</h3>
        </div>
        <p className="text-gray-700 mb-6">{experiment.description}</p>

        <div className="mb-4">
          <div className="text-sm font-medium text-gray-600 mb-2">Formula:</div>
          <div className="bg-gray-200 p-3 rounded-md text-gray-800 font-mono">
            {experiment.formula}
          </div>
        </div>

        <div className="space-y-4">
          {experiment.inputs.map((input) => (
            <div key={input} className="flex items-center gap-3">
              <span className="text-gray-500 w-1/4">{input.split(' ')[0]}</span>
              <input
                type="number"
                placeholder={input}
                onChange={(e) =>
                  handleInputChange(input.split(' ')[0], e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <button
            onClick={calculateResult}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:ring-2 focus:ring-blue-300"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-300 rounded-md">
              <p className="text-lg font-semibold text-blue-600">
                Result: {typeof result === 'number' ? result.toFixed(4) : result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculationCard;
