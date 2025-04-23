import React, { useState } from "react";
import assets from '../../data/assets.js';
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Our Speciality", id: "ifeatures" },
    { title: "Our Sourcing", id: "isourcing" },
    { title: "Contact", id: "icontact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="transition-[background] bg-primary shadow-md duration-500 ease-in-out fixed w-full z-50 top-0 start-0 border-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="/">
            <img
              loading="lazy"
              src={assets.logo}
              alt="Logo"
              width={133}
              height={43}
            />
          </Link>
        </div>

        {/* Order Now Button & Menu Toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/product">
            <button className="hidden uppercase rounded-lg lg:inline-block px-8 py-1 bg-accent text-secondary font-tanAegan font-normal">
              Order Now
            </button>
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none"
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

        {/* Navigation Menu */}
        <div
          className={`transition-all duration-500 ease-in-out transform md:transition-none lg:p-2 ${isMenuOpen
            ? "max-h-screen translate-y-0 opacity-100"
            : "max-h-0 -translate-y-10 opacity-0"
            } items-center overflow-hidden justify-between w-full md:flex md:w-auto md:order-1 lg:static lg:opacity-100 lg:max-h-full lg:translate-y-0`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navLinks.map(({ title, id }) => (
              <li key={id}>
                {location.pathname === "/" ? (
                  <ScrollLink
                    to={id}
                    smooth={true}
                    duration={500}
                    offset={-80} // Adjust for navbar height
                    className="transition-all duration-500 ease-in-out capitalize block py-2 px-3 rounded text-white md:bg-transparent md:p-0 hover:-translate-y-2 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {title}
                  </ScrollLink>
                ) : (
                  <HashLink
                    to={`/#${id}`}
                    smooth
                    className="transition-all duration-500 ease-in-out capitalize block py-2 px-3 rounded text-white md:bg-transparent md:p-0 hover:-translate-y-2 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {title}
                  </HashLink>
                )}
              </li>
            ))}
            <li className="mt-2 md:hidden">
              <Link to="/product">
                <button className="self-center uppercase rounded-lg lg:inline-block px-8 py-1 bg-accent text-secondary font-tanAegan font-normal">
                  Order Now
                </button>
              </Link>
            </li>
            <li className="mt-4 w-fit ml-2 md:hidden">
              <div className="social-media-section">
                <div className="flex gap-4 justify-around">
                  <a href="https://www.instagram.com/kranticoffee/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={35} className="text-primary bg-white rounded-full p-2" />
                  </a>
                  <a href="https://www.linkedin.com/company/kranticoffee/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={35} className="text-primary bg-white rounded-full p-2" />
                  </a>
                  <a href=" https://www.facebook.com/kranticoffeeuae" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={35} className="text-primary bg-white rounded-full p-2" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

