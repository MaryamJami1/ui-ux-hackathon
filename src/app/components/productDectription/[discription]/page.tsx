"use client"
import Image from "next/image"
import FeaturedProducts from "../featureProduct"
import { useEffect, useState } from "react"
import productList from "./products"
import { Button } from "../../ui/Button"

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
        return ( <>
            <div className="flex flex-col md:flex-row gap-8 px-11 py-11 max-w-6xl mx-auto lg:px-[5rem] lg:py-[4rem]">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <Button variant="outline">{`${product.price}$`}</Button>
                    </div>

                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <Button className="w-full md:w-[10rem] ">Add to Cart</Button>
                </div>


              
            </div>
              <FeaturedProducts/>
             </>
        )
    }
}

