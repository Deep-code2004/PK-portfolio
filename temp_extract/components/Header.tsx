import React from 'react';

const Header: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-display text-primary">
          <a href="#">Pankaj Khatri</a>
        </div>
        <nav>
          <button
            onClick={scrollToContact}
            className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-secondary transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;