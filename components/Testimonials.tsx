
import React from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900">What My Clients Say</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Real stories from people I've helped secure their financial future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
