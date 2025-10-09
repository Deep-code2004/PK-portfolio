import React from 'react';
import pkImage from './pk.png';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-neutral-900 leading-tight">
              Your Trusted Partner in <span className="text-primary">Financial Security</span>
            </h1>
            <p className="mt-4 text-xl font-display text-neutral-600 max-w-xl mx-auto">
              Securing your financial future, one step at a time.
            </p>
            <p className="mt-6 text-lg text-neutral-700 max-w-xl mx-auto">
              Expert guidance in insurance, loans, and investments to help you achieve your financial goals and protect what matters most.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToServices}
                className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Services
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-neutral-200 text-neutral-900 font-semibold py-3 px-8 rounded-full hover:bg-neutral-300 transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
