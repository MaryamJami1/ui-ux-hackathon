"use client";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { Button } from "../ui/Button";
import { toast, ToastContainer } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toast CSS
import { useState, useEffect } from "react";
import { fetchProducts } from "@/sanity/lib/product"; // Sanity fetch function

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
  tags: string[]; // Tags like 'featured', 'instagram', etc.
  description?: string;
}

export default function OurProduct() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(); 
      setProducts(data.slice(7, 16)); // Display 8 products
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

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: product._id,
      name: product.title,
      price: product.price,
      image: product.image.asset.url,
      quantity: 1,
    };
    addToCart(cartItem);
    notify();
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product._id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.tags.includes("featured") && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.tags.includes("gallery") && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sale
                </Badge>
              )}
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
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.priceWithoutDiscount && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.priceWithoutDiscount}
                    </span>
                  )}
                </div>
              </div>
              <Button
                className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer /> {/* Toast notifications */}
    </div>
  );
}
