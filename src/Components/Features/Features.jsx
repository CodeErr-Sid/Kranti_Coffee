import React from 'react'
import assets from '../../assets/assets'
import Feature from './Feature'
import FeaturesData from './FeaturesData.js'



const Features = () => {
  // Split the data into two equal parts
  const halfIndex = Math.ceil(FeaturesData.length / 2);
  const firstHalf = FeaturesData.slice(0, halfIndex);
  const secondHalf = FeaturesData.slice(halfIndex);

  return (
    <section className="features-section relative bg-white flex items-center px-6 sm:px-8 md:px-16 overflow-hidden">
      <div className="container mx-auto flex flex-col py-4 lg:flex-row items-center relative z-30">

        {/* First Half Features */}
        <div className="flex flex-col gap-4 p-2 flex-[2] order-2 lg:order-1">
          {firstHalf.map((feature, index) => (
            <Feature
              key={index}
              featureHeading={feature.featureHeading}
              featureContent={feature.featureContent}
              featureIcon={feature.featureIcon}
              alignMent="left"
            />
          ))}
        </div>

        {/* Center Image Section */}
        <div className="relative flex-[1] order-1 lg:order-2">
          <img className="relative z-20" src={assets.coffeePacketSlab} alt="Coffee Packet" />
        </div>

        {/* Second Half Features */}
        <div className="flex flex-col gap-4 p-2 flex-[2] order-3 lg:order-3">
          {secondHalf.map((feature, index) => (
            <Feature
              key={index + halfIndex}
              featureHeading={feature.featureHeading}
              featureContent={feature.featureContent}
              featureIcon={feature.featureIcon}
              alignMent="right"
            />
          ))}
        </div>
      </div>
      <img src={assets.coffeeBeansFalling} className='absolute right-0 z-0 w-1/2' alt="" />
    </section>
  );
};

export default Features;