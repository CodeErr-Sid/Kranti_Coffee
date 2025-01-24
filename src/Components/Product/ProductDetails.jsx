import React from 'react'
import { productDetails } from '../../data/productData'

const ProductDetails = () => {
    return (
        <section className='w-[90%] mx-auto p-4'>
            <h2 className="font-bold text-3xl my-4">Product Details</h2>
            <ul className="list-disc ml-4 text-xl mb-4">
                {productDetails.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                <p className='text-bold underline text-blue-600'>
                    <a target='_blank' href="/kranti-genral-list.pdf">
                        Offer list for January 2025
                    </a>
                </p>
            </ul>
        </section>
    )
}

export default ProductDetails