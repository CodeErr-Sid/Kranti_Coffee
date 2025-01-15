import React, { useState } from "react";
import assets from '../../data/assets.js';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "About", id: "home" },
    { title: "Our Speciality", id: "plans" },
    { title: "Our Sourcing", id: "about" },
    { title: "Contact", id: "testimonials" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to the specific section
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      <nav
        className={`transition-[background] bg-primary shadow-md duration-500 ease-in-out fixed w-full z-50 top-0 start-0 border-none`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link to='/'>
              <img
                src={assets.logo}
                alt="Logo"
                width={133}
                height={43}
                className="h-8"
              />
            </Link>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to='/product'>
              <button color="gray" className="hidden uppercase rounded-lg lg:inline-block px-8 py-1 bg-accent text-secondary font-tanAegan font-normal">
                Order Now
              </button>
            </Link>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out transform md:transition-none ${isMenuOpen
              ? "max-h-screen translate-y-0 opacity-100"
              : "max-h-0 -translate-y-10 opacity-0"
              } items-center overflow-hidden justify-between w-full md:flex md:w-auto md:order-1 lg:static lg:opacity-100 lg:max-h-full lg:translate-y-0`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navLinks.map(({ title, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleScroll(id)}
                    className="transito-all duration-500 ease-in-out capitalize block py-2 px-3 rounded text-white md:bg-transparent md:p-0 hover:-translate-y-2"
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

