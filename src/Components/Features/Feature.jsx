import React from "react";

const Feature = ({ featureHeading, featureContent, featureIcon }) => {

    return (
        <div className='flex flex-row items-center justify-around bg-primary text-secondary rounded-lg p-4'>
            <div className='text-center flex flex-col gap-4'>
                <h1 className='font-tanAegan font-normal text-lg capitalize'>{featureHeading}</h1>
                <p className='font-quickSand font-normal text-base'>{featureContent}</p>
            </div>
            <div className='w-3/12'>
                <img src={featureIcon} alt={featureHeading} />
            </div>
        </div>
    )

}

export default Feature;