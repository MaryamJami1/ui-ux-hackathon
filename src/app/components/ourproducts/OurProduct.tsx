"use client"
import { useState, useEffect } from "react";
import { ShoppingCart } from 'lucide-react';
import { Badge } from "@/app/components/ui/Badge";
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from "../../context/CartContext";
import { Button } from '../ui/Button';
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  // Customized toast notification function
  const notify = () => {
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
    });
  };

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products", {
          method: "GET",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        console.log(data)
        
        
        const formattedProducts = data.map((product: any) => ({
          ...product,
          image: urlFor(product.image).url(),  
        }));

        setProducts(formattedProducts); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };    
    
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: product._id,  // Changed to use _id from Sanity
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: '',
      color: ''
    };
    addToCart(cartItem); // Add item to cart
    notify(); // Show the toast notification after adding the product
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product._id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.isSale && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sale
                </Badge>
              )}
              <Link href={`components/productDectription/${product._id}`} >
                <Image
                  src={product.image}  // Now this will be the processed image URL
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
              <Button
                className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
                onClick={() => handleAddToCart(product)} // Add to cart functionality
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
