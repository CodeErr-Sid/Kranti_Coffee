import React, { useState } from "react";
import assets from "../../data/assets";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import styles from './product.module.css'

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex w-[80%] bg-white rounded-lg overflow-hidden">
        {/* Left Section: Image */}
        <div className="w-1/2 bg-[#F9FAFC]">
          <img
            src={assets.coffeePacketSlab}
            alt="Product"
            className="w-[70vh] mx-auto py-4 h-full object-contain aspect-square"
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
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

          {/* Quantity Counter + Buy Button */}
          <div className="flex items-center justify-start gap-4">
            {/* Counter */}
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
            </div>

            {/* Buy Now Button */}
            <button className="bg-primary text-white px-6 py-3 hover:bg-teal-500 flex flex-row gap-2 items-center">
              <FaBagShopping color="white" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
