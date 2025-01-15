import React from "react";

const Feature = ({ featureHeading, featureContent, featureIcon, alignMent }) => {

    let flexDirection;

    switch (alignMent) {
        case "left":
            flexDirection = "row"
            break;
        case "right":
            flexDirection = "row-reverse";
            break;
        case "center":
            flexDirection = "row"
            break;
    }

    return (
        <div className={`flex flex-row-reverse lg:flex-${flexDirection} gap-4 items-center justify-around bg-primary text-secondary rounded-lg p-4`}>
            <div className={`text-right lg:text-${alignMent == "left" ? "right" : "left"} flex flex-col gap-4`}>
                <h1 className='font-tanAegan font-normal text-lg capitalize'>{featureHeading}</h1>
                <p className='font-quickSand font-normal text-base'>{featureContent}</p>
            </div>
            <div className='w-3/12'>
                <img loading="lazy" src={featureIcon} alt={featureHeading} />
            </div>
        </div>
    )

}

export default Feature;