import { useRef, useState } from "react";
import './Product.css'

const MediaGallery = ({ media }) => {
    const [selectedIndex, setSelectedIndex] = useState(media.length - 1);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="w-full h-full flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row">
            {/* Left Part: Thumbnails */}
            <div className="w-full lg:w-[20%] h-full flex flex-row lg:flex-col justify-center items-center gap-1 bg-transparent px-1">
                {media.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-1 relative justify-between cursor-pointer border-4 rounded-md transition-all ${index === selectedIndex ? "border-primary" : "border-transparent"
                            }`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item.type === "video" ? (
                            <>
                                <video
                                    src={item.src}
                                    className="w-full h-full object-cover aspect-square"
                                />
                                <div className="absolute top-[-38%] lg:top-[-7%] left-1/2 transform-center-ll">
                                    <button className="button is-play w-12 h-12 lg:w-14 lg:h-14 cursor-pointer bg-primary">
                                        <div className="button-icon is-play">
                                            <svg height="100%" width="100%" fill="#ffffff">
                                                <polygon className="triangle" points="5,0 30,15 5,30"></polygon>
                                                <path className="path" d="M5,0 L30,15 L5,30z" fill="none" stroke="#ffffff" strokeWidth="1"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </>

                        ) : (
                            <img
                                src={item.src}
                                alt="Thumbnail"
                                className="w-full h-full object-cover aspect-square"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Right Part: Big Image/Video */}
            <div className="w-full lg:w-[80%] flex items-center justify-center bg-gray-200"
                onClick={handlePlayPause}
            >
                {media[selectedIndex].type === "video" ? (
                    <>
                        <video
                            ref={videoRef}
                            src={media[selectedIndex].src}
                            className="w-full h-full object-cover aspect-square"

                        />
                        <button className={`absolute button is-play cursor-pointer bg-primary transition-all duration-150 ease-linear ${isPlaying ? 'opacity-0' : 'opacity-1'}`}>
                            <div className="button-outer-circle has-scale-animation"></div>
                            <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                            <div className="button-icon is-play">
                                <svg height="100%" width="100%" fill="#ffffff">
                                    <polygon className="triangle" points="5,0 30,15 5,30"></polygon>
                                    <path className="path" d="M5,0 L30,15 L5,30z" fill="none" stroke="#ffffff" strokeWidth="1"></path>
                                </svg>
                            </div>
                        </button>
                    </>


                ) : (
                    <img
                        src={media[selectedIndex].src}
                        alt="Selected"
                        className="w-full h-full object-cover aspect-square"
                    />
                )}


            </div>


        </div>
    );
};

export default MediaGallery;

// Usage Example
// <MediaGallery media={[{ src: "video.mp4", type: "video" }, { src: "image1.jpg", type: "image" }, { src: "image2.jpg", type: "image" }, { src: "image3.jpg", type: "image" }, { src: "image4.jpg", type: "image" }]} />
