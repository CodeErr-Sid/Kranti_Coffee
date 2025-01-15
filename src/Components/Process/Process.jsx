import React from 'react';
import { motion } from 'framer-motion';
import assets from '../../data/assets.js';

const coffeeFeatures = [
  {
    id: 1,
    title: "Easy to Order",
    content: "Sustainable Speciality Green Coffee Suppliers",
    image: assets.process1,
  },
  {
    id: 2,
    title: "Fastest Delivery",
    content: "Exclusive micro-lots that are all stored in-house",
    image: assets.process2,
  },
  {
    id: 3,
    title: "Quality Coffee",
    content: "Ready to <br/> Re-Export",
    image: assets.process3,
  },
];

const animationVariants = [
  {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
];

const Process = () => {
  return (
    <section className="features-section bg-primary text-secondary flex items-center px-6 sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col gap-4 lg:gap-0 py-8 md:flex-row items-center">
        {coffeeFeatures.map((item, index) => (
          <motion.div
            key={item.id || index}
            className="flex flex-col justify-around items-center text-center gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animationVariants[index]}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="icon-container w-1/4 mb-2">
              <img className="object-contain aspect-square" src={item.image} alt="" />
            </div>
            <p
              className="font-quickSand font-medium w-1/2"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
