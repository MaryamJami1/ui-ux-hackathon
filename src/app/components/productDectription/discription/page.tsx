import Image from "next/image"
import FeaturedProducts from "../featureProduct"

export default function ProductDescription() {
    return (
        <div className="container mx-auto px-4 py-11 lg:px-[10rem] ">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative aspect-square">
                    <Image
                        src="/product/Image (9).png"
                        alt="Product Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col space-y-6 lg:py-10 lg:px-10 p-5 rounded-lg ">
                    <h1 className="text-4xl font-bold text-gray-800">Ergonomic Office Chair</h1>
                    <div className="flex items-center justify-between mb-4">
                        <button className="bg-[#029FAE] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                            $299.99
                        </button>
                       
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Experience ultimate comfort with our ergonomic office chair. Designed to provide excellent lumbar support,
                        this chair features adjustable height, tilt, and armrests. The breathable mesh back keeps you cool during
                        long work sessions, while the plush seat cushion ensures all-day comfort.
                    </p>
                    <button className="bg-[#029FAE] hover:bg-teal-600 text-white font-semibold py-1 px-2 rounded transition duration-300">
                            Add to Cart
                        </button>
                </div>

            </div>

            <FeaturedProducts/>
        </div>
    )
}

