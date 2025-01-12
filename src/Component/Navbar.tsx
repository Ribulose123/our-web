import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-white shadow-lg">
        <div className="flex justify-around items-center p-4">
          {/* Logo Section */}
          <h3 className="text-xl text-red-600 font-mono font-bold">
            Our Love Special
          </h3>

          {/* Hamburger Menu for Mobile */}
          <button
            className="text-gray-600 hover:text-gray-800 sm:hidden"
            onClick={handleToggle}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black font-medium transition duration-200"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black font-medium transition duration-200"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black font-medium transition duration-200"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden">
           <div className="absolute top-0 left-0 w-full bg-gray-800 rounded-bl-[10rem] z-50 flex flex-col items-end justify-between p-6 transition-all">

            <button className="text-gray-600 hover:text-gray-800 sm:hidden text-[23px]"
            onClick={handleToggle} >
                <FaTimes/>
            </button>
           <ul className="flex flex-col items-end space-y-4 py-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black font-medium transition duration-200"
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black font-medium transition duration-200"
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black font-medium transition duration-200"
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Contact
                </NavLink>
              </li>
            </ul>
           </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
