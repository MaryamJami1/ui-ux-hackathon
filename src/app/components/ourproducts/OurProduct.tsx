import { ShoppingCart } from 'lucide-react'
import { Badge } from "@/app/components/ui/Badge"
import Image from 'next/image'
import Link from 'next/link'
interface Product {
  id: number
  title: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

export default function OurProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/product/Image (5).png",
      isNew: true
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/product/Image (9).png",
      isSale: true
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/product/Image (10).png"
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/product/Image (11).png"
    },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/category/Image (10).png",
      isNew: true
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/hot/card (2).png",
      isSale: true
    },
    {
      id: 7,
      title: "Library Stool Chair",
      price: 20,
      image: "/product/Image (12).png"
    },
    {
      id: 8,
      title: "Library Stool Chair",
      price: 20,
      image: "/hot/card (1).png"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight  mb-8"> Our Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.isSale && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )}
              <Link href={'components/productDectription/discription'} 
             
        >
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

