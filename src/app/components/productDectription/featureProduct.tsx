"use client"
import Link from "next/link"
import Image from "next/image"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: 99,
      image: "/category/Image (11).png"
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: 99,
      image: "/product/Image (5).png"
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: 99,
      image: "/product/Image (12).png"
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: 99,
      image: "/product/Image (9).png"
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: 99,
      image: "/category/Image (9).png"
    }
  ]

  return (
    <section className="px-2 pt-12 md:px-6 ">
      <div className="w-full max-w-[100rem] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-wider">
            FEATURED PRODUCTS
          </h2>
          <Link 
            href="/products" 
            className="text-md border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6 overflow-x-auto lg:pt-4 hide-scrollbar">
          {products.map((product) => (
            <div key={product.id} className="min-w-[170px] space-y-4 lg:px-1">
              <div className="aspect-square relative bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

