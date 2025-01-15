import React from 'react'
import assets from '../../data/assets.js';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <section className="features-section bg-primary flex items-center py-12 px-6 sm:px-8 md:px-16">
      <div className="container flex flex-col items-left gap-4  lg:flex-row lg:items-center justify-around">
        <div className="logo-section w-1/5">
          <img src={assets.logo} alt="" />
        </div>
        <div className="navlinks">
          <ul className='md:ml-8 text-secondary text-base lg:text-xl font-monteserrat font-semibold flex flex-col gap-2'>
            <a href="#">
              <li className="capitalize">About</li>
            </a>
            <a href="#">
              <li className="capitalize">People Services</li>
            </a>
            <a href="#">
              <li className="capitalize">Process Services</li>
            </a>
            <a href="#">
              <li className="capitalize">Tech Solutions</li>
            </a>
            <a href="#">
              <li className="capitalize">Contact us</li>
            </a>
          </ul>
        </div>
        <div className="navlinks">
          <ul className='md:ml-8 text-secondary text-base lg:text-xl font-monteserrat font-semibold flex flex-col gap-2'>
            <a href="#">
              <li className="capitalize">About</li>
            </a>
            <a href="#">
              <li className="capitalize">People Services</li>
            </a>
            <a href="#">
              <li className="capitalize">Process Services</li>
            </a>
            <a href="#">
              <li className="capitalize">Tech Solutions</li>
            </a>
            <a href="#">
              <li className="capitalize">Contact us</li>
            </a>
          </ul>
        </div>
        <div className="social-media-section">
          <button className='bg-white py-0.5 text-dark font-monteserrat font-semtext-base lg:text-xl w-full rounded-md mb-4'>Get Services</button>
          <div className="flex gap-4 justify-around">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={35} className="text-blue-600 bg-white rounded-full p-2" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={35} className="text-pink-500 bg-white rounded-full p-2" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={35} className="text-red-600 bg-white rounded-full p-2" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={35} className="text-blue-700 bg-white rounded-full p-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer