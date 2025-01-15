import React from "react";
import assets from "../../data/assets";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import StepComponent from "./StepComponent";

const ProductCard = () => {

  return (
    <section className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row w-[90%] bg-white gap-4 rounded-lg overflow-hidden">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 bg-[#F9FAFC]">
          <img loading="lazy"
            src={assets.coffeePacketSlab}
            alt="Product"
            className="w-[70vh] mx-auto py-4 h-full object-contain aspect-square"
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2 lg:p-8 flex flex-col justify-center">
          {/* Product Name + Price */}
          <div className="mb-6 flex justify-between items-center bg-[#F9FAFC]">
            <h1 className="text-3xl font-bold text-gray-800 p-4">Saumon Gravlax</h1>
            <h1 className="text-2xl font-semibold text-white bg-primary p-4">$19</h1>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="yellow" className="mr-1" />
            ))}
            <span className="ml-2 text-gray-600">(ratings)</span>
          </div>

          {/* Product Description Placeholder */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-700">Description</h1>
            <h4 className="text-lg text-gray-500 mt-2">High-quality gourmet food item.</h4>
            <p className="text-sm text-gray-500 mt-1">Perfect for special occasions and premium dining experiences.</p>
          </div>

          <StepComponent />

          {/* Quantity Counter + Buy Button */}
          <div className="flex items-center justify-start gap-4">
            {/* Counter
            <div className="flex items-center gap-8">
              <button
                className="text-xl text-white p-2 bg-primary rounded-full"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="text-xl text-white p-2 bg-primary rounded-full"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FaPlus />
              </button>
            </div> */}

            {/* Buy Now Button */}
            <a href="https://wa.me/918438807386?text=Hello%20I%20am%20interested%20in%20your%20services" className="w-full">
              <button className="bg-primary w-full text-center text-xl justify-center border-[1px] border-solid border-primary text-white px-6 py-3 hover:bg-white hover:text-primary flex flex-row gap-2 items-center transition-all duration-500 ease-in-out">
                <FaBagShopping /> Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
