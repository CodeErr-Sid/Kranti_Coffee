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
    <section className="features-section bg-white min-h-screen flex items-center px-6 sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col py-4 md:flex-row items-center">

        {/* First Half Features */}
        <div className="flex flex-col gap-4 p-2">
          {firstHalf.map((feature, index) => (
            <Feature
              key={index}
              featureHeading={feature.featureHeading}
              featureContent={feature.featureContent}
              featureIcon={feature.featureIcon}
            />
          ))}
        </div>

        {/* Center Image Section */}
        <div className="relative">
          <img
            className="absolute bottom-16 left-[-30px] z-10 h-3/4"
            src={assets.coffeePacket}
            alt="Coffee Packet"
          />
          <img className="relative z-20" src={assets.coffeePacket} alt="Coffee Packet" />
          <img
            className="absolute bottom-16 right-[-30px] z-10 h-3/4"
            src={assets.coffeePacket}
            alt="Coffee Packet"
          />
        </div>

        {/* Second Half Features */}
        <div className="flex flex-col gap-4 p-2">
          {secondHalf.map((feature, index) => (
            <Feature
              key={index + halfIndex}
              featureHeading={feature.featureHeading}
              featureContent={feature.featureContent}
              featureIcon={feature.featureIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;