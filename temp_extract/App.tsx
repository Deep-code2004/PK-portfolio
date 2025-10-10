
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-700 font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <About />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;