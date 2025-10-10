
import React from 'react';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, title, avatar }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        <svg className="absolute top-0 left-0 w-16 h-16 text-neutral-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.33,12.49c0,2.4,1.4,4.22,4.24,4.22c0,3.31-2.68,5.99-5.99,5.99C3.12,22.7,0,19.58,0,15.12C0,10.09,4.41,6.08,9.33,6.08v6.41Z" />
          <path d="M22.67,12.49c0,2.4,1.4,4.22,4.24,4.22c0,3.31-2.68,5.99-5.99,5.99c-4.46,0-7.58-3.12-7.58-7.58c0-5.03,4.41-9.04,9.33-9.04v6.41Z" />
        </svg>
        <p className="relative text-neutral-700 italic text-lg mb-6 flex-grow">"{quote}"</p>
      </div>
      
      <div className="mt-auto border-t border-neutral-200 pt-6 flex items-center">
        <img className="w-12 h-12 rounded-full object-cover mr-4" src={avatar} alt={name} />
        <div>
          <p className="font-bold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
