import { ShoppingCart } from 'lucide-react'
import { Badge } from "@/app/components/ui/Badge"
import NewsletterInstagram from '../Instagram'
import Image from 'next/image'
import products from '../productsData'


export default function AllProducts() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <h1 className="text-3xl font-semibold text-[#1C1B1F] tracking-tight  mb-8">All Products</h1>

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
             
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
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
      <NewsletterInstagram/>
    </div>
  )
}

