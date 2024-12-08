import { Heart, Trash2 } from 'lucide-react';
import Image from "next/image";

export default function ShoppingCartHeader() {
    return (
        <div className="w-full max-w-7xl mx-auto px-2  m-10 lg:px-28 lg:py-1 font-inter ">
            <h1 className="text-2xl font-medium mb-6">Bag</h1>

            <div className="grid md:grid-cols-3 gap-8">


                <div className="md:col-span-2 space-y-8">
                    {[
                        { id: 1, src: "/hot/item-category 1.png" },
                        { id: 2, src: "/category/Image (10).png" },
                    ].map((item) => (
                        <div key={item.id} className="flex gap-6 p-4 bg-white shadow rounded-lg border border-gray-200">
                            <div className="w-[150px] h-[150px] bg-gray-100 relative">
                                <Image
                                    src={item.src}
                                    alt={`Product Image ${item.id}`}
                                    width={150}
                                    height={150}
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-lg font-medium">Library Stool Chair</h3>
                                        <p className="text-gray-600 mt-1">Ashen Slate/Cobalt Bliss</p>
                                        <div className="mt-4 flex gap-8">
                                            <div>
                                                <span className="text-gray-600">Size:</span>
                                                <span className="ml-2 font-medium">L</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Quantity:</span>
                                                <span className="ml-2 font-medium">1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-600">MRP:</p>
                                        <p className="text-lg font-semibold text-gray-800">$99</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <button className="text-gray-600 hover:text-gray-900 transition">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-900 transition">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
                    <h2 className="text-2xl font-medium text-gray-800">Summary</h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-800">$198.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Estimated Delivery & Handling</span>
                            <span className="text-gray-800 font-medium">Free</span>
                        </div>
                        <div className="pt-4 flex justify-between border-t border-gray-200">
                            <span className="font-medium text-gray-800">Total</span>
                            <span className="font-medium text-gray-800">$198.00</span>
                        </div>
                        <button className="w-full bg-[#00A5AB] text-white font-semibold rounded-full py-3 px-4 mt-4 hover:bg-[#008f94] transition-colors">
                            Member Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
