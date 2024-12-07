import Image from "next/image"
import { ShoppingCart } from 'lucide-react'
import { Badge } from "@/app/components/ui/Badge"
import { Button } from "@/app/components/ui/Button"
import { Card, CardContent } from "@/app/components/ui/Card"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  badge?: {
    text: string
    variant: "default" | "secondary" | "destructive" | "outline"
  }
}

const products: Product[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    image: "/product/Image (5).png",
    badge: {
      text: "New",
      variant: "default",
    },
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 30,
    image: "/product/Image (9).png",
    badge: {
      text: "Sales",
      variant: "destructive",
    },
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    image: "/product/Image (10).png",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    image: "/product/Image (11).png",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight  mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden rounded-xl ">
              <CardContent className="p-0">
                <div className="relative">
                  {product.badge && (
                    <Badge
                      variant={product.badge.variant}
                      className="absolute top-4 left-4 z-10"
                    >
                      {product.badge.text}
                    </Badge>
                  )}
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button
                      size="icon"
                      className="rounded-full"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

