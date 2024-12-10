"use client"
import Image from "next/image"
import FeaturedProducts from "../featureProduct"
import { useEffect, useState } from "react"
import productList from "./products"

interface Product {
    id: number
    title: string
    price: number
    originalPrice?: number
    image: string
    isNew?: boolean
    isSale?: boolean
    description: string
}

export default function Page({ params }: { params: { discription: string } }) {
    const [product, setproduct] = useState<Product>();
    useEffect(() => {
        setproduct(productList.filter(val => val.id === Number(params.discription))[0])
    }, [])
    if (product) {
        return (
            <div className="container mx-auto px-4 py-11 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Image Section */}
                    <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                            src={product.image}
                            alt="Product Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col space-y-6 p-5 lg:py-[4rem] rounded-lg md:p-8 ">
                        {/* Product Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.title}</h1>

                        {/* Price Button */}
                        <div className="flex items-center justify-between mb-4">
                            <button className="bg-[#029FAE] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                ${product.price}
                            </button>
                        </div>

                        {/* Product Description */}
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                            {product.description}
                        </p>

                        {/* Add to Cart Button */}
                        <button className="bg-[#029FAE] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition w-[6rem] sm:w-[7rem] md:w-[8rem] duration-300">
                            Add to Cart
                        </button>

                    </div>
                </div>


                <FeaturedProducts />
            </div>
        )
    }
}

