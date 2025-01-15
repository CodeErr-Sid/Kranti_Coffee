import React from 'react'

const HeroBanner = () => {
    return (
        <header className='p-4 bg-[#F9FAFC] mt-[69px] h-[29vh] grid place-items-center'>
            <div className='flex flex-row justify-between items-center w-[80%] mx-auto'>
                <h1 className='text-black font-monteserrat text-[40px] font-semibold'>
                    Shop Page
                </h1>
                <div className='p-4 bg-primary w-1/5 text-center'>
                    <p className='text-white text-base font-semibold'>HOME/SHOP</p>
                </div>
            </div>
        </header>
    )
}

export default HeroBanner