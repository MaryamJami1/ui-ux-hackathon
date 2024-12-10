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
            <div className="container mx-auto px-4 py-11 lg:px-[10rem] ">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="relative aspect-square">
                        <Image
                            src={product.image}
                            alt="Product Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col space-y-6 lg:py-4 lg:px-10 p-5 rounded-lg ">
                        <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
                        <div className="flex items-center justify-between mb-4">
                            <button className="bg-[#029FAE] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                ${product.price}
                            </button>

                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                        <button className="bg-[#029FAE] hover:bg-teal-600 text-white font-semibold py-2 px-2 rounded transition w-[8rem] duration-300">
                            Add to Cart
                        </button>
                    </div>

                </div>

                <FeaturedProducts />
            </div>
        )
    }
}

