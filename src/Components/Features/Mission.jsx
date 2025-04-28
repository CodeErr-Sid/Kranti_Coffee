import React from 'react'
import { motion } from 'framer-motion'
import assets from '../../data/assets'

const missionData = [
    {
        title: "Farmer Empowerment",
        description: "We work directly with farmers to ensure fair pay, shared growth, and generational sustainability.",
        imgSrc: assets.farmerEmpowerment,
        bgOverlay: "rgb(203, 108, 230,0.5)",
    },
    {
        title: "Inclusivity",
        description: "From farms to cups, we create space for every Flavor, Voice, Story, and Identity.",
        imgSrc: assets.Inclusivity,
        bgOverlay: "rgba(225, 205, 140, 0.5)" // #e1cd8c
    },
    {
        title: "Accessibility",
        description: "We make high-quality coffee simple, affordable, and enjoyable - No jargon, No gatekeeping.",
        imgSrc: assets.Accessiblity,
        bgOverlay: "rgb(8 110 57 / 50%)" // #1e3b2c
    },
];


const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const Mission = () => {
    return (
        <section className='px-4 py-8 space-y-4'>
            <motion.h3
                className='text-center font-tanAegan font-semibold text-3xl text-primary'
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {"क्रांति Kranti • noun • /kraːn.t̪i/"}
            </motion.h3>

            <motion.p
                className='text-center font-quickSand font-medium text-xl text-primary'
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                --{"Bring the Change, A Revolution"}--
            </motion.p>

            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 w-full gap-4 h-auto md:h-[500px]">
                {missionData.map((data, index) => {
                    const gridPlacement =
                        index === 0
                            ? "md:col-start-1 md:row-start-1 md:row-span-2"
                            : index === 1
                                ? "md:col-start-2 md:row-start-1"
                                : "md:col-start-2 md:row-start-2";

                    return (
                        <motion.div
                            key={index}
                            className={`relative flex justify-center items-center text-center p-6 rounded-xl overflow-hidden ${gridPlacement}`}
                            variants={fadeInVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div
                                className="absolute inset-0 bg-center z-0"
                                style={{ backgroundImage: `url(${data.imgSrc})` }}
                            />

                            <div
                                className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white p-4 rounded-md"
                                style={{ backgroundColor: data.bgOverlay }}
                            >
                                <h6 className="text-2xl font-semibold mb-2 font-tanAegan">{data.title}</h6>
                                <p className="text-xl font-quickSand">{data.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    )
}

export default Mission
