import React from 'react';
import { motion } from 'framer-motion';
import CallToAction from '../CallToAction/CallToAction';

const Banner = ({ bannerHeading, bannerContent, bannerButtonContent, bannerBackgroundImage, isButtonAvailable = true }) => {

  // Animation Variants
  const slideDownFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="features-section bg-black bg-cover bg-no-repeat bg-center flex items-center px-6 sm:px-8 md:p-16"
      style={{ backgroundImage: `url('${bannerBackgroundImage}')` }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 text-center py-12">

        {/* Animated Heading */}
        <motion.h1
          className="text-secondary font-tanAegan leading-[3.5rem] lg:leading-[3.5rem] text-2xl lg:text-4xl uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}  // Trigger when 30% of the element is visible
          variants={slideDownFadeIn}
          transition={{ duration: 0.8 }}
        >
          {bannerHeading}
        </motion.h1>

        {/* Animated Content */}
        <motion.p
          className="text-secondary text-xl font-quickSand font-medium w-11/12 lg:w-3/4 leading-[30px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {bannerContent}
        </motion.p>

        {/* Animated Button */}
        {isButtonAvailable && (
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpFadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CallToAction
              bgColor="white"
              fontColor="dark"
              content={bannerButtonContent}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Banner;
