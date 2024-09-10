// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">CityConnect</h1>
        <button
          className="block lg:hidden text-gray-600 hover:text-blue-500"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-500 py-2 px-4">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 py-2 px-4">Projects</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 py-2 px-4">Dashboard</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
