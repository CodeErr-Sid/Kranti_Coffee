import React from 'react'
import CallToAction from '../CallToAction/CallToAction'

const Hero = () => {
  return (
    <section className="bg-primary text-secondary min-h-screen flex items-center px-6 sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="text-left md:text-left md:w-1/2 space-y-4 sm:space-y-6">
          <p className="font-semibold font-quickSand text-sm sm:text-base">
            lorem ipsum
          </p>
          <h1
            className="font-tanAegan font-normal text-4xl uppercase"
            style={{ lineHeight: "1.5" }}
          >
            Start Your Day Right with a Perfect Cup
          </h1>
          <p className="font-quickSand font-medium text-sm sm:text-base md:text-lg w-full sm:w-11/12">
            Experience the bold, authentic flavors of our premium coffee, carefully sourced from the finest farms. Every sip brings you closer to nature’s finest harvest.
          </p>
          <CallToAction content="Order Now" bgColor="accent" fontColor="secondary" />
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500"
            alt="Hero"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero