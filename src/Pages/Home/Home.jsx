import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Banner from '../../Components/Banner/Banner'
import Process from '../../Components/Process/Process'
import Sourcing from '../../Components/Sourcing/Sourcing'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Home = () => {
    return (
        <section className='w-full h-full'>
            <Hero />
            <Features />
            <Banner />
            <Process />
            <Sourcing />
            <Testimonials />
            <Banner />
        </section>
    )
}

export default Home