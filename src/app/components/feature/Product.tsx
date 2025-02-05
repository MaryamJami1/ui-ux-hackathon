"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { Card, CardContent } from "@/app/components/ui/Card";
import { useCart } from "@/app/context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchFeaturedProducts } from "@/sanity/lib/feature";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  image: {
    asset: {
      url: string;
    };
  };
  badge?: string;
  description?: string;
  inventory?: number;
  tags: string[];
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  // Fetch featured products on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFeaturedProducts(4);
      setProducts(data);
    };
    fetchData();
  }, []);

  const notify = () => {
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
    });
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product._id} className="group overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <div className="relative">
                    {product.badge && (
                      <Badge
                        variant="default"
                        className="absolute top-4 left-4 z-10"
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <div className="aspect-square overflow-hidden">
                      <Link href={`components/productDectription/${product._id}`}>
                        <Image
                          src={product.image.asset.url}
                          alt={product.title}
                          height={400}
                          width={400}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">{product.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">${product.price}</span>
                        {product.priceWithoutDiscount && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.priceWithoutDiscount}
                          </span>
                        )}
                      </div>
                      <Button
                        size="icon"
                        className="rounded-full"
                        aria-label="Add to cart"
                        onClick={() => {
                          addToCart({
                            id: product._id,
                            name: product.title,
                            price: product.price,
                            image: product.image.asset.url,
                            quantity: 1,
                            size: "M",
                            color: "Red",
                          });
                          notify();
                        }}
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
    </>
  );
}
