import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Banner from '../../Components/Banner/Banner'
import Process from '../../Components/Process/Process'
import Sourcing from '../../Components/Sourcing/Sourcing'
import Testimonials from '../../Components/Testimonials/Testimonials'
import assets from '../../assets/assets'
import LineSection from '../../Components/LineSection/LineSection'

const Home = () => {
    return (
        <section className='w-full h-full'>
            <Hero />
            <Features />
            <Banner
                bannerHeading="Get free shipping on all U.S. orders over $100"
                bannerContent="There are people who can't start their day without having a freshly brewed cup of coffee and we without having a freshly brewed cup of coffee and we understand them"
                bannerButtonContent="Order Now"
                bannerBackgroundImage={assets.bannerBg}
            />
            <Process />
            <LineSection />
            <Testimonials />
            <Banner
                bannerHeading="Enjoy our exotic coffee in diverse brews"
                bannerContent="Start your day with the rich, bold, and unique flavors of our expertly crafted coffee"
                bannerButtonContent="Get Now"
                bannerBackgroundImage={assets.bannerBg}
            />
        </section>
    )
}

export default Home