import React from 'react'
import assets from '../../data/assets.js';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'
import CallToAction from '../CallToAction/CallToAction.jsx';
import { FaLocationPin } from 'react-icons/fa6';


const Footer = () => {


  const phoneNumber = '971506581227'
  const address = 'Al Fahidi District, Dubai, UAE'

  return (
    <footer id='icontact' className="features-section bg-primary flex items-center py-12 px-6 sm:px-8 md:px-16">
      <div className="container flex flex-col items-left gap-4 items-center justify-around">
        <div className="logo-section w-1/5">
          <img loading="lazy" src={assets.logo} alt="" />
        </div>
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
        {/* <CallToAction
          bgColor="white"
          fontColor="dark"
          content={'GET NOW'}
        /> */}
        <p className='flex flex-col md:flex-row gap-1 md:gap-2 items-center text-center font-semibold font-monteserrat text-white text-xl'>
          KRANTI LLC
        </p>
        <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center text-center font-semibold font-monteserrat text-white text-xl'>
          <FaLocationPin />
          <a target="_blank" href="https://maps.app.goo.gl/n5CWr8zzUfTZSd3R8">
            <p>
              {address}
            </p>
          </a>
        </div>
        <div className='flex flex-row gap-1 md:gap-2 items-center text-center font-semibold font-monteserrat text-white text-xl'>
          <FaPhone />
          <a target="_blank" href={`tel:${phoneNumber}`}>
            <p>
              {phoneNumber}
            </p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer