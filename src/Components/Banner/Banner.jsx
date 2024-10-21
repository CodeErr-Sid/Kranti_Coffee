import React from 'react'
import CallToAction from '../CallToAction/CallToAction';
import assets from '../../assets/assets'

const Banner = ({ bannerHeading, bannerContent, bannerButtonContent, bannerBackgroundImage }) => {
  return (
    <section
      className="features-section bg-accent bg-contain bg-no-repeat bg-center flex items-center px-6 sm:px-8 md:px-16"
      style={{ backgroundImage: `url('${bannerBackgroundImage}')` }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 text-center py-12">
        <h1
          className='text-secondary font-tanAegan text-5xl uppercase'
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
        <div className="w-full md:w-1/2">
          <CallToAction
            bgColor='white'
            fontColor='dark'
            content={bannerButtonContent}
            widthRatio="1/2"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner