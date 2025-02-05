"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/sanity/lib/product"; // API Function
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  category: {
    title: string; // Assuming the category is an object with a `title` string field
  }
  image: {
    asset: {
      url: string;
    };
  };
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products on component load
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Fetched products:", data); // Log fetched data to check category field
        setProducts(data);
        setFilteredProducts(data); // Set all products initially
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  // Handle category change
  const handleCategoryChange = (e: any) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // Filter products based on selected category
    filterProducts(category, sortOrder);
  };

  // Handle sort change
  const handleSortChange = (e: any) => {
    const sortBy = e.target.value;
    setSortOrder(sortBy);

    // Sort products based on selected order
    filterProducts(selectedCategory, sortBy);
  };

  // Filter and sort products
  const filterProducts = (category: string, sortBy: string) => {
    let filtered = [...products];
    console.log("Filtering products for category:", category); // Log selected category

    // Filter by category
    if (category !== "All") {
      filtered = filtered.filter(product => product.category.title === category);
      ;
      
    }

    console.log("After category filter:", filtered); // Log products after filtering

    // Sort by price or popularity
    if (sortBy === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popularity") {
      // Assuming we have a popularity attribute, or you can use another sorting mechanism
      filtered = filtered.sort((a, b) => b.price - a.price); // Replace with actual logic
    }

    console.log("After sorting:", filtered); // Log products after sorting

    // Update filtered products state
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-12 lg:px-[7rem] py-20">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shop Our Collection</h1>
      </header>

      {/* Filter and Sort Section */}
      <section className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 p-4 rounded-lg shadow-md">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none bg-white shadow-sm transition-all duration-300 hover:border-teal-500"
        >
          <option value="All">All Categories</option>
          <option value="Wing Chair">Wing Chairs</option>
          <option value="Wooden Chair">Wooden Chairs</option>
          <option value="Desk Chair">Desk Chairs</option>
        </select>

        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none bg-white shadow-sm transition-all duration-300 hover:border-teal-500"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <div className="relative h-48">
              <Link href={`../productDectription/${product._id}`}>
                <Image
                  src={product.image.asset.url}
                  alt={product.title}
                  layout="fill"
                  objectFit="top"
                />
              </Link>
            </div>

            <div className="p-4 text-center">
              <h2 className="text-lg font-medium text-gray-700">{product.title}</h2>
              <p className="text-teal-600 font-semibold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="bg-white mt-12 p-8 text-center rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates on new arrivals and offers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600"
          />
          <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
