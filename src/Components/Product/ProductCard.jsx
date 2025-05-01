import React, { useState } from "react";
import assets from "../../data/assets";
import { FaWhatsapp } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import QuantitySelector from "./QuantitySelector";
import MediaGallery from './MediaGallery'

const ProductCard = () => {

  const mediaData = [
    // { src: assets.productImage1, type: "image" },
    // { src: assets.productImage2, type: "image" },
    { src: assets.productImage3, type: "image" },
    { src: assets.productImage1, type: "image" },
    { src: assets.productVideo, type: "video" },
  ]


  return (
    <section className="flex justify-center items-center min-h-screen p-4 mt-[72px]">
      <div className="flex flex-col lg:flex-row w-[90%] bg-white gap-4 rounded-lg overflow-hidden">
        {/* Left Section: Image */}
        <div className="w-full h-full lg:w-1/2">
          <MediaGallery media={mediaData} />
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2 lg:p-8 flex flex-col justify-center">
          {/* Product Name + Price */}
          <div className="mb-6 flex flex-col gap-2 justify-start items-start">
            <h1 className="text-3xl font-bold text-gray-800 font-quickSand">Sample Specialty Coffee</h1>
            <p className="text-sm text-gray-500 mt-1 font-quickSand font-normal">Lot RN2, Carbonic Maceration, Ratnagiri Estates, Chikmagalur, India </p>
          </div>

          {/* Rating
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="yellow" className="mr-1" />
            ))}
            <span className="ml-2 text-gray-600">(ratings)</span>
          </div> */}

          {/* Product Description Placeholder */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-700 font-quickSand">Description</h1>
            {/* <h4 className="text-lg text-gray-500 mt-2">High-quality gourmet food item.</h4> */}
            <p className="text-sm text-gray-500 mt-1 font-quickSand">
              Kranti Coffee delivers artisan-crafted perfection with handpicked beans from exclusive regions, offering a rich, bold flavor and captivating aroma. Perfect for any brewing method, each batch ensures a unique, authentic coffee experience, thanks to expert sample roasting and the finest quality beans.
            </p>
          </div>

          {/* Quantity Counter + Buy Button */}
          <div className="flex flex-col items-center justify-start gap-4 font-quickSand">

            <Dropdown options={["30kg Vacuumed Box (15+15)", "60kg Jute bags"]} onSelect={(selected) => console.log(selected)} title="Select Variant" />
            <QuantitySelector initialQuantity={1} minQuantity={1} maxQuantity={2} onQuantityChange={(quantity) => console.log(quantity)} title="Select Quantity" />

            {/* Buy Now Button */}
            <a target="_blank" href="https://wa.me/+971506581227?text=Hi%20I%E2%80%99m%20interested%20to%20order%20samples%20and%20I%20am%20a%20home%20brewer%2Fcoffee%20company" className="w-full">
              <button className="bg-primary w-full text-center  text-xl justify-center border-[1px] border-solid border-primary text-white px-6 py-3 hover:bg-white hover:text-primary flex flex-row gap-2 items-center transition-all duration-500 ease-in-out">
                <FaWhatsapp />
                <span className="font-quickSand font-normal text-base">Let's Go</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
