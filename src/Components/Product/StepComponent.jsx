import React from 'react';
import { FaCircle } from 'react-icons/fa';

const StepComponent = () => {
  const steps = [
    {
      number: '01',
      title: 'Add to the cart and place an order',
      description: 'Porro comitron pera nemo veniam.',
    },
    {
      number: '02',
      title: 'Enter your phone number and address',
      description: 'Eligendi adipisci numquam.',
    },
    {
      number: '03',
      title: 'Enjoy your favorite food at home!',
      description: 'Nneccessitatibus praesentium.',
    },
  ];

  return (
    <section className="flex justify-center space-x-8 my-10">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          {/* Step Number */}
          <div className="text-yellow-500 font-bold text-4xl flex justify-center items-center space-x-2">
            <span className="font-extrabold tracking-wider outline-text">{step.number}</span>
          </div>
          {/* Step Title */}
          <h2 className="text-gray-800 font-semibold text-lg mt-4">{step.title}</h2>
          {/* Step Description */}
          <p className="text-gray-500 mt-2">{step.description}</p>
        </div>
      ))}
    </section>
  );
};

export default StepComponent;
