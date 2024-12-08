"use client"
import Link from "next/link";
import { Phone, ShoppingCart, HelpCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full font-inter">
      {/* Top Banner */}
      <div className="w-full bg-[#2B2A4C] text-white px-4 py-2.5">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Free Shipping On All Orders Over $50</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>Eng</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <Link href="/components/Faqs/faqs" className="hover:text-gray-200">
              Faqs
            </Link>
            <Link
              href="/help"
              className="flex items-center gap-1 hover:text-gray-200"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Need Help</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-[#00B4B4]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
            <span className="text-2xl font-semibold">Comforty</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/components/cart/myCarts"
              className="flex items-center gap-2 hover:text-gray-600"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="bg-[#00B4B4] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                2
              </span>
            </Link>
            <button
              className="block md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div
            className={`flex-col md:flex md:flex-row justify-between items-center md:h-14 transition-all ${menuOpen ? "flex" : "hidden md:flex"
              }`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              {["Home", "Shop", "Product", "Contact Us", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Product"
                        ? "/components/AllProducts/product"
                        : item === "Contact Us"
                          ? "/components/contact_us/contact"
                           : item === "Home"
                          ? "/"
                           : item === "About"
                          ? ""
                          : `/${item.toLowerCase()}`
                    }
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>


            <div className="flex items-center gap-2 text-gray-600 mt-4 md:mt-0">
              <span>Contact:</span>
              <Link
                href="tel:(808) 555-0111"
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <Phone className="w-4 h-4" />
                <span>(808) 555-0111</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
