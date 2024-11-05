import React from 'react'
import CallToAction from '../CallToAction/CallToAction'
import assets from '../../assets/assets'
import { Filter } from 'lucide-react'

const Hero = () => {
  return (
    <section
      className="text-secondary min-h-[87vh] flex items-center px-6 sm:px-8 md:px-16 bg-no-repeat bg-contain bg-bottom drop-shadow-custom"
      style={{ backgroundImage: `url("${assets.krantiHeroBg}")` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="text-left md:text-left md:w-1/2 space-y-4 sm:space-y-6">
          <p className="font-semibold w-11/12 font-quickSand text-sm sm:text-base">
            lorem ipsum
          </p>
          <h1
            className="font-tanAegan font-normal text-4xl uppercase"
            style={{ lineHeight: "76px" }}
          >
            Start Your Day Right with a Perfect Cup
          </h1>
          <p className="font-quickSand font-medium text-sm sm:text-base md:text-lg w-full sm:w-11/12">
            Experience the bold, authentic flavors of our premium coffee, carefully sourced from the finest farms. Every sip brings you closer to nature’s finest harvest.
          </p>
          <CallToAction
            content="Order Now For Free" 
            bgColor="white" 
            fontColor="accent"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero