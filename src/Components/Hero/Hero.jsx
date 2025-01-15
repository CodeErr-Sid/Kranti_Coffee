import React from 'react';
import CallToAction from '../CallToAction/CallToAction';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const HeroWithCarousel = ({ slides }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,  // Ensures that pagination dots are clickable
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 60000,  // Change to 15000 for 15 seconds
      }}
      loop={true}
    >
      {/* Map through the slides array and render each slide */}
      {slides && slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section
            className="text-secondary lg:mt-8 min-h-screen lg:min-h-[87vh] flex items-center px-6 sm:px-8 md:px-16 bg-no-repeat bg-cover bg-bottom drop-shadow-custom"
            style={{ backgroundImage: `url("${slide.backgroundImage}")` }}
          >

            {!slide.backgroundImage && slide.backgroundVideo && (
              <video
                className="absolute inset-0 -z-10 w-full h-full object-cover"
                src={slide.backgroundVideo}
                type="video/mp4"
                autoPlay
                loop
                muted
              />
            )}

            <div className="container mx-auto flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className={`md:text-left md:w-1/2 space-y-4 sm:space-y-6 flex flex-col items-center md:items-start md:justify-center text-center lg:text-left ${slide.contentBoxClassName}`}>
                <h1 className={`font-tanAegan font-normal text-2xl lg:text-4xl lg:leading-[76px] uppercase ${slide.titleClassName}`}>
                  {slide.title}
                </h1>
                <p className={`font-quickSand font-medium text-base lg:text-xl sm:text-base w-full ${slide.contentClassName}`}>
                  {slide.content}
                </p>
                <CallToAction
                  content="Order Now For Free"
                  bgColor="white"
                  fontColor="accent"
                  className={slide.CTAClassName}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroWithCarousel;
