import React, { useState, useEffect } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loader1 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set loader to disappear after exactly 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Cleanup timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={`flex justify-center h-screen items-center transition-opacity duration-500 linear ${loading ? 'opacity-1' : 'opacity-0'}`}>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#114030"
                    outerCircleColor="#114030"
                    innerCircleColor="#114030"
                    barColor="#114030"
                    ariaLabel="circles-with-bar-loading"
                    visible={true}
                />
            </div>
        </>
    );
};

export default Loader1;
