"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { Card, CardContent } from "@/app/components/ui/Card";
import { useCart } from "@/app/context/CartContext"; // Import the cart context
import { toast, ToastContainer } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications

interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
  isFeatured?: boolean;
  image: string;
}

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]); // State to store fetched products
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("/api/featured", {
          method: "GET", // Ensure GET method is specified
        });
        if (!response.ok) {
          throw new Error("Failed to fetch featured products");
        }
        const data = await response.json();
        setProducts(data); // Set fetched products to state
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong!");
        }
        setLoading(false);
      }
    };
  
    fetchFeaturedProducts();
  }, []);
  
  // Customized toast notification function
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
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product._id} className="group overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <div className="relative">
                    {product.isNew && (
                      <Badge
                        variant="default"
                        className="absolute top-4 left-4 z-10"
                      >
                        New
                      </Badge>
                    )}
                    {product.isSale && (
                      <Badge
                        variant="destructive"
                        className="absolute top-4 left-4 z-10"
                      >
                        Sale
                      </Badge>
                    )}
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">{product.title}</h3>
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
                        onClick={() => {
                          addToCart({
                            id: product._id,
                            name: product.title,
                            price: product.price,
                            image: product.image,
                            quantity: 1, // Default quantity
                            size: "M", // Static or dynamic value (e.g., "M")
                            color: "Red", // Static or dynamic value (e.g., "Red")
                          });
                          notify(); // Show the toast notification
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
      <ToastContainer />
    </>
  );
}
