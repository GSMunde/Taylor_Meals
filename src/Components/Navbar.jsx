import React, { useState } from 'react';
import Logo from '../Image/Logo.png'; // Adjust the path to your logo file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border rounded-md bg-white shadow py-2 w-full mx-auto px-6 mb-8 mt-4">
      <div className="flex justify-between items-center">
        <img width="80" src={Logo} alt="Logo" className="cursor-pointer" />

        {/* Hamburger Icon for mobile view */}
        <div className="block md:hidden">
          <button
            className="text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 font-bold items-center w-full md:w-auto">
          <h3 className="cursor-pointer hover:text-pink-500">Home</h3>
          <p className="cursor-pointer hover:text-pink-500">About Us</p>
          <p className="cursor-pointer hover:text-pink-500">Contact</p>
          <button className="btn btn-outline-primary font-bold cursor-pointer py-2 px-4 rounded-md shadow border border-pink-500 text-[#d64796] hover:bg-pink-500 hover:text-white">
            Login / Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 font-bold">
          <h3 className="cursor-pointer hover:text-pink-500">Home</h3>
          <p className="cursor-pointer hover:text-pink-500">About Us</p>
          <p className="cursor-pointer hover:text-pink-500">Contact</p>
          <button className="btn btn-outline-primary font-bold cursor-pointer py-2 px-4 rounded-md shadow border border-pink-500 text-[#d64796] hover:bg-pink-500 hover:text-white">
            Login / Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
