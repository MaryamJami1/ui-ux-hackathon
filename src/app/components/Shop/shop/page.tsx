"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('');

  const handleCategoryChange = (e:any) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e:any) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="container mx-auto px-12 lg:px-[7rem] py-20">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shop Our Collection</h1>
      </header>

      {/* Filter and Sort Section */}
      <section className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600"
        >
          <option value="All">All Categories</option>
          <option value="Furniture">Furniture</option>
          <option value="Chairs">Chairs</option>
          <option value="Tables">Tables</option>
        </select>

        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20">
        {/* Product Cards */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="top"
              />
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
        <p className="text-gray-600 mb-6">Get the latest updates on new arrivals and offers.</p>
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

const products = [
  {
    id: 1,
    title: 'Elegant Chair',
    price: 120,
    image: '/category/Image (9).png',
  },
  {
    id: 2,
    title: 'Modern Sofa',
    price: 240,
    image: '/hot/card.png',
  },
  {
    id: 3,
    title: 'Wooden Chair',
    price: 180,
    image: '/product/Image (12).png',
  },
  {
    id: 4,
    title: 'Cozy Armchair',
    price: 99,
    image: '/category/Image (10).png',
  },
  {
    id: 5,
    title: 'Stylish Sofa',
    price: 75,
    image: '/product/nathan-fertig-FBXuXp57eM0-unsplash.jpg',
  },
  {
    id: 6,
    title: 'Office Desk',
    price: 200,
    image: '/category/Image (11).png',
  },
  {
    id: 7,
    title: 'stylish orangey',
    price: 50,
    image: '/hot/item-category 1.png',
  },
  {
    id: 8,
    title: 'Comfy Beanbag',
    price: 85,
    image: '/product/Image (9).png',
  },
];
