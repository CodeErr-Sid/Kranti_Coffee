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
    <section className="features-section relative bg-white flex items-center px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col py-4 lg:flex-row items-center relative z-30">

        {/* First Half Features */}
        <div className="flex flex-col gap-4 p-2 flex-[2]">
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
        <div className="relative flex-[2]">
          <img className="relative z-20" src={assets.coffeeSplash} alt="Coffee Cup Splash" />
        </div>

        {/* Second Half Features */}
        <div className="flex flex-col gap-4 p-2 flex-[2]">
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
    </section>
  );
};

export default Features;

