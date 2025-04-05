import React from 'react';

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center
    w-full overflow-hidden"
      style={{ backgroundImage: "url('/header.jpg')" }}
      id="header">
      <div className="container text-center mx-auto px-6 md:px-20 lg:px-32 text-white">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block
          max-w-3xl font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
          From seven seas to the dream of freedom.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="" className="border border-white rounded px-6 py-2 text-sm sm:text-base
            hover:drop-shadow-[10px_10px_10px_rgba(0,0,0,1.5)] transition duration-300">
            Our Services
          </a>
          <a href="" className="px-6 py-2 bg-blue-600 rounded text-sm sm:text-base
            hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
