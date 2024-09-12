import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import icons from Lucide React

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
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} {/* Use Lucide icons */}
        </button>
        <div
          className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <Link to="/" className="text-gray-600 hover:text-blue-500 py-2 px-4">
              Home
            </Link>
            <Link to="/citizen-portal" className="text-gray-600 hover:text-blue-500 py-2 px-4">
              Citizen Portal
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-500 py-2 px-4">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
