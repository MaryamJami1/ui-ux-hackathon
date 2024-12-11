import Image from "next/image";
import { FaShippingFast, FaHandSparkles, FaMoneyBillWave, FaRecycle } from "react-icons/fa";

export default function AboutPage() {
    return (
        <main className="min-h-screen lg:px-[8rem]">
            <div className="flex flex-col md:flex-row justify-between  items-stretch pt-20">
                {/* About Us Section */}
                <section className="bg-[#007B7B] mx-4 flex-1 px-10 py-16 md:py-6 flex flex-col justify-center">
                    <div className="max-w-2xl mx-auto w-full">
                        <h1 className="text-white font-inter text-3xl md:text-3xl font-bold mb-6">
                            About Us - Comforty
                        </h1>
                        <p className="text-white/90 font-inter text-lg md:text-sm leading-relaxed mb-12">
                            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in
                            ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with
                            functionality.
                        </p>
                        <button className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white font-inter px-8 py-3 rounded-md text-lg">
                            View collection
                        </button>
                    </div>
                </section>

                {/* Chair Image Section */}
                <div className="flex-1 relative">
                    <Image
                        src="/product/Image Block.png"
                        alt="chair"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Features Section */}
            <section className=" px-6 bg-white pt-[7rem]">
                <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                    What Makes Our Brand Different
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <FaShippingFast size={40} className="text-[#007580]" />,
                            title: "Next day as standard",
                            description:
                                "Order before 3pm and get your order the next day as standard.",
                        },
                        {
                            icon: <FaHandSparkles size={40} className="text-[#007580]" />,
                            title: "Made by true artisans",
                            description:
                                "Handmade crafted goods made with real passion and craftsmanship.",
                        },
                        {
                            icon: <FaMoneyBillWave size={40} className="text-[#007580]" />,
                            title: "Unbeatable prices",
                            description:
                                "For our materials and quality, you won't find better prices anywhere.",
                        },
                        {
                            icon: <FaRecycle size={40} className="text-[#007580]" />,
                            title: "Recycled packaging",
                            description:
                                "We use 100% recycled materials to ensure our footprint is more manageable.",
                        },
                    ].map((feature, index) => (
                        <div key={index} className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Products Section */}
            <section className="py-16 px-4 bg-white pt-[8rem]">
    <h2 className="text-2xl md:text-3xl font-semibold mb-12 lg:ml-[7rem]">
        Our Popular Products
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        {/* Left Side: Sofa */}
        <div className="max-w-sm lg:ml-[6.5rem] bg-transparent rounded-lg overflow-hidden">
            <div className="relative">
                <Image
                    src="/product/nathan-fertig-FBXuXp57eM0-unsplash.jpg"
                    alt="The Poplar suede sofa"
                    height={400}
                    width={400}
                    className="w-full h-64 object-cover"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-black">The Poplar suede sofa</h3>
                <p className="text-[#007580] text-lg font-medium">$99.00</p>
            </div>
        </div>

        {/* Right Side: Two Chairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mr-[5rem]">
            {/* Top Chair */}
            <div>
                <div className="max-w-xs bg-transparent rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="h-64">
                        <Image
                            src="/product/Parent (1).png"
                            alt="The Dandy Chair"
                            height={400}
                            width={400}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="p-4 text-center">
                        <h2 className="text-lg font-semibold text-black">The Dandy Chair</h2>
                        <p className="text-[#007580] text-sm mt-2">$99.00</p>
                    </div>
                </div>
            </div>

            {/* Bottom Chair */}
            <div>
                <div className="max-w-xs  bg-transparent rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="h-64">
                        <Image
                            src="/product/Parent (2).png"
                            alt="The Dandy Chair"
                            height={400}
                            width={400}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="p-4 text-center">
                        <h2 className="text-lg font-semibold text-black">The Dandy Chair</h2>
                        <p className="text-[#007580] text-sm mt-2">$99.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


        </main>
    );
}
