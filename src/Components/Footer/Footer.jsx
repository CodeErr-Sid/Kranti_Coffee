import React from 'react'
import assets from '../../data/assets.js';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'
import CallToAction from '../CallToAction/CallToAction.jsx';
import { FaLocationPin } from 'react-icons/fa6';


const Footer = () => {


  const phoneNumber = '8438807386'
  const address = 'Al Fahidi District, Dubai, UAE'

  return (
    <section className="features-section bg-primary flex items-center py-12 px-6 sm:px-8 md:px-16">
      <div className="container flex flex-col items-left gap-4 items-center justify-around">
        <div className="logo-section w-1/5">
          <img src={assets.logo} alt="" />
        </div>
        <div className="social-media-section">
          <div className="flex gap-4 justify-around">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={35} className="text-primary bg-white rounded-full p-2" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={35} className="text-primary bg-white rounded-full p-2" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={35} className="text-primary bg-white rounded-full p-2" />
            </a>
          </div>
        </div>
        <CallToAction
          bgColor="white"
          fontColor="dark"
          content={'GET NOW'}
        />
        <div className='flex flex-row gap-2 font-semibold font-monteserrat text-white text-xl'>
          <FaLocationPin />
          <a href="https://maps.app.goo.gl/n5CWr8zzUfTZSd3R8">
            <p>
              {address}
            </p>
          </a>
        </div>
        <div className='flex flex-row gap-2 font-semibold font-monteserrat text-white text-xl'>
          <FaPhone />
          <a href={`tel:${phoneNumber}`}>
            <p>
              {phoneNumber}
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer