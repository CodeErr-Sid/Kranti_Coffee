import React from 'react';
import { motion } from 'framer-motion';
import assets from '../../data/assets.js';
import Feature from './Feature';
import FeaturesData from './FeaturesData.js';

const Features = () => {
  const halfIndex = Math.ceil(FeaturesData.length / 2);
  const firstHalf = FeaturesData.slice(0, halfIndex);
  const secondHalf = FeaturesData.slice(halfIndex);

  // Animation Variants
  const leftSlideFade = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightSlideFade = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="features-section relative bg-white flex items-center px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col py-4 lg:flex-row items-center relative z-30">

        {/* First Half Features */}
        <div className="flex flex-col gap-4 p-2 flex-[2]">
          {firstHalf.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}  // Trigger when 20% of element is visible
              variants={leftSlideFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Feature
                featureHeading={feature.featureHeading}
                featureContent={feature.featureContent}
                featureIcon={feature.featureIcon}
                alignMent="left"
              />
            </motion.div>
          ))}
        </div>

        {/* Center Image Section */}
        <motion.div
          className="relative flex-[2]"
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.9 }} // Trigger when 30% of image is visible
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img className="relative z-20" src={assets.coffeeSplash} alt="Coffee Cup Splash" />
        </motion.div>

        {/* Second Half Features */}
        <div className="flex flex-col gap-4 p-2 flex-[2]">
          {secondHalf.map((feature, index) => (
            <motion.div
              key={index + halfIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={rightSlideFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Feature
                featureHeading={feature.featureHeading}
                featureContent={feature.featureContent}
                featureIcon={feature.featureIcon}
                alignMent="right"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
