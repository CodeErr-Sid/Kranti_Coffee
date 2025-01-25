import { useState } from "react";

const MediaGallery = ({ media }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="w-full h-full flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row">
            {/* Left Part: Thumbnails */}
            <div className="w-full lg:w-[20%] h-full flex flex-row lg:flex-col justify-center items-center gap-1 bg-transparent px-1">
                {media.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-1 justify-between cursor-pointer border-4 rounded-md transition-all ${index === selectedIndex ? "border-primary" : "border-transparent"
                            }`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item.type === "video" ? (
                            <video
                                src={item.src}
                                className="w-full h-full object-cover aspect-square"
                            />
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
            <div className="w-full lg:w-[80%] flex items-center justify-center bg-gray-200">
                {media[selectedIndex].type === "video" ? (
                    <video
                        src={media[selectedIndex].src}
                        controls
                        className="w-full h-full object-cover aspect-square"
                    />
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
