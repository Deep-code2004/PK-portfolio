import React from 'react';
import { Service } from '../types';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 mr-2 flex-shrink-0">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
    </svg>
);


const ServiceCard: React.FC<Service> = ({ icon, title, description, providers }) => {
  const openApplyForm = () => {
    window.open('https://forms.gle/Zo2siqi5oH7h9U3t7', '_blank', 'noopener,noreferrer');
  };
    
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold font-display text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-700 mb-6 flex-grow">{description}</p>
      
      <div className="mb-6 border-t border-neutral-200 pt-6">
        <h4 className="font-semibold text-neutral-800 mb-3">Associated With:</h4>
        <ul className="space-y-2">
          {providers.map((provider, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span className="text-neutral-600">{provider}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={openApplyForm}
        className="mt-auto bg-secondary text-white font-semibold py-2 px-6 rounded-full w-full hover:bg-primary transition duration-300"
      >
        Apply Now
      </button>
    </div>
  );
};

export default ServiceCard;