import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const ExperimentCard = ({ title, description, onClick, icon }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden 
        hover:shadow-lg hover:border-blue-200 cursor-pointer transition-all duration-300 p-6 
        relative transform hover:-translate-y-1 shadow-md" 
    >
      {/* Card Content Container */}
      <div className="relative z-10">
        {/* Icon and Title Row */}
        <div className="flex items-center gap-3 mb-3">
          {icon && (
            <span className="text-2xl bg-blue-50 p-2 rounded-lg 
              group-hover:bg-blue-100 transition-colors duration-300">
              {icon}
            </span>
          )}
          <h2 className="text-xl font-semibold text-gray-800 
            group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Action Button */}
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          View Details
          <ArrowRightIcon size={16} 
            className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ExperimentCard;