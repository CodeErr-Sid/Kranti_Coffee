import React from 'react'
import ProductCard from '../Components/Product/ProductCard'
import HeroBanner from '../Components/Product/HeroBanner'
import ProductDetails from '../Components/Product/ProductDetails'
import FAQ from '../Components/Product/FAQ'
import { faqs } from '../data/productData'

const Product = () => {
    return (
        <section>
            {/* <HeroBanner /> */}
            <ProductCard />
            <ProductDetails />
            <FAQ faqs={faqs} />
        </section>
    )
}

export default Product