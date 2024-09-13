import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">CityConnect</h1>
        <div className="flex items-center">
          <button
            className="block lg:hidden text-gray-600 hover:text-blue-500 mr-4"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
            onClick={handleLoginClick}
          >
            <LogIn className="h-5 w-5 mr-2" />
            Login
          </button>
        </div>
      </div>
      <div
        className={`lg:flex lg:items-center ${
          isOpen ? "block" : "hidden"
        } container mx-auto px-6 pb-4`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500 py-2 px-4">
            Home
          </Link>
          <Link
            to="/citizen-portal"
            className="text-gray-600 hover:text-blue-500 py-2 px-4"
          >
            Citizen Portal
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-blue-500 py-2 px-4"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
