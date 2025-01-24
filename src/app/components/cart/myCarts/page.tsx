"use client"
import { useCart } from '@/app/context/CartContext';
import { Heart, Trash2 } from 'lucide-react';
import Image from "next/image";

export default function ShoppingCartHeader() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="w-full max-w-7xl mx-auto px-2 m-10 lg:px-28 lg:py-1 font-inter">
      <h1 className="text-2xl font-medium mb-6">Bag</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {cartItems.length > 0 ? (
            cartItems.map((item: any) => (
              <div key={item.id} className="flex gap-6 p-4 bg-white shadow rounded-lg border border-gray-200">
                <div className="w-[150px] h-[150px] bg-gray-100 relative">
                  <Image
                    src={item.image}
                    alt={`Product Image ${item.id}`}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.color}</p>
                      <div className="mt-4 flex gap-8">
                        <div>
                          <span className="text-gray-600">Size:</span>
                          <span className="ml-2 font-medium">{item.size}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Quantity:</span>
                          <span className="ml-2 font-medium">{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">MRP:</p>
                      <p className="text-lg font-semibold text-gray-800">${item.price}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <button
                      className="text-gray-600 hover:text-gray-900 transition"
                      onClick={() => removeFromCart(item.id)}  // Remove item from cart
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 transition">
                      <Heart className="w-5 h-5" />
                    </button>
                    {/* Buttons for increasing and decreasing quantity */}
                    <button
                      onClick={() => increaseQuantity(item.id)} // Increase quantity from context
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => decreaseQuantity(item.id)} // Decrease quantity from context
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-white shadow rounded-lg border border-gray-200 p-6 h-[20rem]">
          <h2 className="text-2xl font-medium text-gray-800">Summary</h2>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-800">
                ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery & Handling</span>
              <span className="text-gray-800 font-medium">Free</span>
            </div>
            <div className="pt-4 flex justify-between border-t border-gray-200">
              <span className="font-medium text-gray-800">Total</span>
              <span className="font-medium text-gray-800">
                ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-[#00A5AB] text-white font-semibold rounded-full py-3 px-4 mt-4 hover:bg-[#008f94] transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
