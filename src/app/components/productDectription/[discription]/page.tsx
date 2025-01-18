"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../../ui/Button";
import { useCart } from "@/app/context/CartContext";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import { fetchProducts } from "@/sanity/lib/product";
import FeaturedProducts from "../featureProduct";

interface Product {
  _id: string; // Sanity ID type should be a string
  title: string;
  price: number;
  originalPrice?: number;
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function Page({ params }: { params: { discription: string } }) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const { addToCart } = useCart(); // Destructure addToCart from context

  // UseEffect to fetch and filter the product based on the Sanity ID (discription)
  useEffect(() => {
    console.log("discription param:", params.discription); // Log the discription param to verify it
    const fetchProduct = async () => {
      try {
        const products = await fetchProducts(); // Fetch all products
        console.log("Fetched products:", products); // Log the fetched products for debugging

        const selectedProduct = products.find(
          (val: Product) => val._id === params.discription
        );

        console.log("Selected product:", selectedProduct); // Log the selected product for debugging
        setProduct(selectedProduct); // Set the selected product in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, [params.discription]);

  // Customized toast notification function
  const notify = () => {
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
    });
  };

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product._id,
        name: product.title,
        price: product.price,
        image: product.image.asset.url,
        quantity: 1, // Default quantity to 1
        size: "M", // Default size
        color: "Red", // Default color
      };

      addToCart(cartItem); // Add item to cart
      notify(); // Show the toast notification
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading state while the product is being fetched
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 px-5 py-5 max-w-6xl mx-auto lg:px-[5rem] lg:py-[4rem]">
        {/* Product Image */}
        <div className="w-full md:w-1/3"> {/* Adjusted width here */}
          <Image
            src={product.image.asset.url} // Use the correct image URL from Sanity
            alt={product.title}
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center"> {/* Adjusted width here */}
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline">{`${product.price}$`}</Button>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Add to Cart Button */}
          <Button className="w-full md:w-[10rem]" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Featured Products Section */}
      <FeaturedProducts />
    </>
  );
}
