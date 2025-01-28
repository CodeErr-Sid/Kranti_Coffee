import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';

const FAQ = ({ faqs }) => {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <section className="w-full p-0 mt-12 mb-24">
            <div className="container flex items-center justify-center mx-auto mt-28 flex-col gap-2">
                <h1 className="text-center text-4xl md:text-5xl font-bold">Got Questions?</h1>
                <p className='text-center text-2xl md:text-2xl text-customGreen'>We hear you</p>

                <div className='border-2 border-black w-[90%] md:w-[90%] mt-12'>
                    {faqs.map((faq, index) => (
                        <div key={index} className={`border-b-2 border-black ${index === faqs.length - 1 ? 'border-none' : ''}`}>
                            <div className="p-4" onClick={() => toggleVisibility(index)}>
                                <div className='flex justify-between py-2'>
                                    <h1 className='text-2xl md:text-3xl font-quickSand font-semibold'>{faq.question}</h1>
                                    <h1 className='text-3xl md:text-4xl font-quickSand font-semibold cursor-pointer' onClick={() => toggleVisibility(index)}>
                                        {visibleIndex === index ? (<FaCaretUp />) : (<FaCaretDown />)}
                                    </h1>
                                </div>
                                {visibleIndex === index && (
                                    <div className="flex flex-col text-[1rem] md:text-xl mt-2 font-quickSand">
                                        <h2>{faq.answer}</h2>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
