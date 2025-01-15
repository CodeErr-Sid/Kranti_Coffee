import React from 'react'
import assets from '../../data/assets.js';


const coffeeFeatures = [
  {
    id: 1,
    title: "Easy to Order",
    content: "Sustainable Speciality Green Coffee Suppliers",
    image: assets.process1, // replace with actual image path or URL
  },
  {
    id: 2,
    title: "Fastest Delivery",
    content: "Exclusive micro-lots that are all stored in-house",
    image: assets.process2, // replace with actual image path or URL
  },
  {
    id: 3,
    title: "Quality Coffee",
    content: "Ready to <br/> Re-Export",
    image: assets.process3, // replace with actual image path or URL
  },
];



const Process = () => {
  return (
    <section className="features-section bg-primary text-secondary flex items-center px-6 sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col gap-4 lg:gap-0 py-8 md:flex-row items-center">
        {
          coffeeFeatures && coffeeFeatures.map((item, index) => (
            <div
              key={item.id || index}
              className='flex flex-col justify-around items-center text-center gap-2'
            >
              <div className="icon-container w-1/4 mb-2">
                <img className='object-contain aspect-square' src={item.image} alt="" />
              </div>
              {/* <h5 className='font-tanAegan font-normal text-base uppercase'>
                {item.title}
              </h5> */}
              <p
                className="font-quickSand font-medium w-1/2"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Process