"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchCategories } from "@/sanity/lib/categories";

type Category = {
    _id: string;
    title: string;
    image: {
        asset: {
            url: string;
        };
    };
    products: number | string; // Accept both number or string for products
};


export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]); // Use Category type

    useEffect(() => {
        // Fetch categories data on component mount
        async function getCategories() {
            const data = await fetchCategories();
            setCategories(data);
        }
        getCategories();
    }, []);

    return (
        <section className="w-full px-4 py-[7rem] md:px-6">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold tracking-tight mb-8">Top Categories</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category._id} // Now TypeScript knows that _id exists
                            className="group relative overflow-hidden rounded-lg"
                        >
                            <div className="aspect-[4/3] w-full">
                                <Image
                                    src={category.image.asset.url} // Fetch the image URL
                                    alt={category.title}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="absolute bottom-0 p-6">
                                    <h3 className="mb-2 font-inter text-xl font-medium text-white">
                                        {category.title}
                                    </h3>
                                    <p className="font-inter text-sm text-gray-200">
                                        {category.products} {/* Products count */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
