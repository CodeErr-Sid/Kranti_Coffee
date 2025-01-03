import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Banner from '../../Components/Banner/Banner'
import Process from '../../Components/Process/Process'
import Sourcing from '../../Components/Sourcing/Sourcing'
import Testimonials from '../../Components/Testimonials/Testimonials'
import assets from '../../assets/assets'
import LineSection from '../../Components/LineSection/LineSection'
import { slidesContent } from '../../data/Hero'
import { content } from '../../data/VerticalSlider'

const Home = () => {
    return (
        <section className='w-full h-full'>
            <Hero
                slides={slidesContent}
            />
            <Features />
            <Banner
                bannerHeading="Your Coffee Is on the House"
                bannerContent="Each cup tells a story of dedication and quality, bringing the farm's soul to your daily ritual. Savor the taste of authentic, farm-sourced coffee—on us! Just cover delivery."
                bannerButtonContent="Get Your Free Cup Now "
                bannerBackgroundImage={assets.coffeeBeansBg}
            />
            <Process />
            <Banner
                bannerHeading="Behind the Taste: Soil to Sip"
                bannerContent="From the richness of the earth to the altitude of the farms, every detail influences the flavor that reaches your cup. This is more than coffee; it’s a story of place, people, and the craft of cultivation. "
                bannerButtonContent="Get Your Free Cup Now "
                isButtonAvailable={false}
                bannerBackgroundImage={assets.coffeeCupBg}
            />
            <LineSection contentArray={content} />
            <Testimonials />
            <Banner
                bannerHeading="Enjoy our exotic coffee in diverse brews"
                bannerContent="Start your day with the rich, bold, and unique flavors of our expertly crafted coffee"
                bannerButtonContent="Get Now"
                bannerBackgroundImage={assets.coffeePowder}
            />
        </section>
    )
}

export default Home