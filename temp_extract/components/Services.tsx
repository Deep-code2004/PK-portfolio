
import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900">Our Services</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            A comprehensive suite of financial products to cater to all your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
