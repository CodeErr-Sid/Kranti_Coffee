import React from 'react'
import CallToAction from '../CallToAction/CallToAction';

const Banner = ({ bannerHeading, bannerContent, bannerButtonContent, bannerBackgroundImage, isButtonAvailable = true }) => {
  return (
    <section
      className="features-section bg-black bg-cover bg-no-repeat bg-center flex items-center px-6 sm:px-8 md:p-16"
      style={{ backgroundImage: `url('${bannerBackgroundImage}')` }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 text-center py-12">
        <h1
          className='text-secondary font-tanAegan leading-[3.5rem] lg:leading-[3.5rem] text-2xl lg:text-4xl uppercase'
        >
          {bannerHeading}
        </h1>
        <p
          className='text-secondary text-xl font-quickSand font-medium w-11/12 lg:w-3/4 leading-[30px]'
        >
          {bannerContent}
        </p>
        {isButtonAvailable &&
          (<div className="w-full md:w-1/2">
            <CallToAction
              bgColor='white'
              fontColor='dark'
              content={bannerButtonContent}
            />
          </div>)
        }
      </div>
    </section>
  )
}

export default Banner