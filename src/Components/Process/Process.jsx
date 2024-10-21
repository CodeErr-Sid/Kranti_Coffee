import React from 'react'
import assets from '../../assets/assets';

const coffeeFeatures = [
  {
    id: 1,
    title: "Easy to Order",
    content: "Ordering your delicious morning coffee is a breeze—just one click and it’s on its way!",
    image: assets.cartMobileHand, // replace with actual image path or URL
  },
  {
    id: 2,
    title: "Fastest Delivery",
    content: "Before you know it, your order will arrive right at your doorstep, fresh and ready!",
    image: assets.truckDelivery, // replace with actual image path or URL
  },
  {
    id: 3,
    title: "Quality Coffee",
    content: "Quality handpicked coffee beans guarantee a bold and exotic flavor in your daily cup.",
    image: assets.starCoffeeBeans, // replace with actual image path or URL
  },
];



const Process = () => {
  return (
    <section className="features-section bg-primary text-secondary flex items-center px-6 sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col py-8 md:flex-row items-center">
        {
          coffeeFeatures && coffeeFeatures.map((item, index) => (
            <div
              key={item.id || index}
              className='flex flex-col justify-around items-center text-center gap-2'
            >
              <div className="icon-container w-1/4 mb-2">
                <img className='object-contain aspect-square' src={item.image} alt="" />
              </div>
              <h5 className='font-tanAegan font-normal text-base uppercase'>
                {item.title}
              </h5>
              <p className='font-quickSand font-medium w-3/4'>
                {item.content}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Process