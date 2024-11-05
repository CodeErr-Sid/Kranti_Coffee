import React from 'react'
import CallToAction from '../CallToAction/CallToAction';
import assets from '../../assets/assets'

const Banner = ({ bannerHeading, bannerContent, bannerButtonContent, bannerBackgroundImage, isButtonAvailable = true }) => {
  return (
    <section
      className="features-section bg-black bg-cover bg-no-repeat bg-center flex items-center py-32 px-6 sm:px-8 md:px-16"
      style={{ backgroundImage: `url('${bannerBackgroundImage}')` }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 text-center py-12">
        <h1
          className='text-secondary font-tanAegan text-5xl uppercase w-4/5'
          style={{ lineHeight: "102px" }}
        >
          {bannerHeading}
        </h1>
        <p
          className='text-secondary text-xl font-quickSand font-medium w-3/4'
          style={{ lineHeight: "30px" }}
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