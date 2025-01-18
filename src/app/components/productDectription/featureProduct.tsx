"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../ui/Card";
import { useEffect, useState } from "react";
import { fetchFeaturedProducts } from "@/sanity/lib/feature";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge?: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: {
    _id: string;
    title: string;
  };
  description: string;
  inventory: number;
  tags: string[];
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFeaturedProducts(5);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (!products.length) {
    return <div className="text-center py-6">No featured products available.</div>;
  }

  return (
    <section className="w-full px-4 py-8 md:px-6 lg:px-[8rem] lg:pt-[6rem]">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-wider">FEATURED PRODUCTS</h2>
          <Link
            href="../Shop/shop"
            className="text-sm border-b border-black hover:opacity-70 transition-opacity"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card key={product._id} className="border-none shadow-none">
              <CardContent className="p-0">
                <Link href={`/components/productDectription/${product._id}`} className="space-y-3">
                  <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-lg">
                    <Image
                      src={product.image.asset.url}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 text-sm mt-3 flex justify-between px-2">
                    <h3 className="font-medium text-gray-900 text-base">
                      {product.title}
                    </h3>
                    <p className="font-medium text-sm">${product.price}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
