import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import name from "../assets/name.jpg"
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex justify-between  py-6 max-width">
        {/* Logo Section */}
        <div className="logo-section" >
        <NavLink to="/">
        <img
        src={name}
        alt="Logo"
        className="h-12 w-12 object-contain"
        />
  </NavLink>
        </div>
        <div className="flex justify-between items-center py-2 md:py-7">
       
        
      </div>
        

        {/* Navigation Section */}
        <nav
          className={`${
            !isOpen ? "hidden" : null
          } md:flex flex-col md:flex-row justify-between items-center`}
        >
          {/* Navigation Links */}
          <ul className="dark:text-light-content font-medium text-xl md:text-xl md:flex items-center md:space-x-12">
            <li className="pb-2 md:pb-0">
              <NavLink to="/" onClick={toggleClass} >
                <span className="text-yellow-600">Home</span>
              </NavLink>
            </li>
            <li className="pb-2 md:pb-0">
              <NavLink to="/about" onClick={toggleClass}
              >
                <span className="text-yellow-600">
                  About
                </span>
              </NavLink>
            </li>
            <li className="pb-2 md:pb-0">
              <NavLink to="/technologies" onClick={toggleClass}>
              <span className="text-yellow-600">
                Technologies
              </span>
                
              </NavLink>
            </li>
            <li className="pb-2 md:pb-0">
              <NavLink to="/projects" onClick={toggleClass}>
              <span className="text-yellow-600">
                Projects
              </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleClass}>
              <span className="text-yellow-600">
                Contact
              </span>
                
              </NavLink>
            </li>
          </ul>

         
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleClass}
          className="md:hidden text-2xl focus:outline-none "
        >
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden absolute top-9 right-6"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* {isOpen ? "Close" : "Menu"} */}
        </button>
      </div>
    </header>
  );
}

export default Header;
