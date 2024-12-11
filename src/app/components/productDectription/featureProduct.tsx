"use client"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "../ui/Card"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Stool Chair",
      price: 99,
      image: "/category/Image (11).png"
    },
    {
      id: 2,
      name: "Stool Chair",
      price: 99,
      image: "/product/Image (5).png"
    },
    {
      id: 3,
      name: "Home Chair",
      price: 99,
      image: "/product/Image (12).png"
    },
    {
      id: 4,
      name: "comfort Sofa",
      price: 99,
      image: "/product/Image (9).png"
    },
    {
      id: 5,
      name: "Wooden Chair",
      price: 99,
      image: "/category/Image (9).png"
    }
  ]

  return (
    <section className="w-full px-9 py-8 md:px-6   lg:px-[8rem] lg:pt-[6rem]">
      <div className="container mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="flex items-center px-4 justify-between mb-8 lg:px-4">
          <h2 className="text-2xl font-bold tracking-wider">
            FEATURED PRODUCTS
          </h2>
          <Link
            href="/products"
            className="text-sm border-b border-black hover:opacity-70 transition-opacity"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-1">
          {products.map((product) => (
            <Card key={product.id} className="border-none shadow-none w-[10rem]">
              <CardContent className="p-0">
                <Link href={`/products/${product.id}`} className="space-y-3">
                  <div className="overflow-hidden w-[12rem] h-[12rem]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={224}
                      height={224}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 text-sm mt-3 mb-5 flex justify-between px-6">
                    <h3 className="font-medium text-gray-900 text-base">
                      {product.name}
                    </h3>
                    <p className="font-medium text-sm">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

