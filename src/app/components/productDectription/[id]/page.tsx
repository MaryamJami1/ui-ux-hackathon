"use client";
import Image from "next/image";
import FeaturedProducts from "../featureProduct";
import { useEffect, useState } from "react";
import { Button } from "../../ui/Button";
import { useCart } from "@/app/context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch the product based on the dynamic id from Sanity
    async function fetchProduct() {
      try {
        const fetchedProduct = await client.fetch(
          `*[_type == "product" && _id == $id][0]{
            _id,
            title,
            price,
            originalPrice,
            description,
            image
          }`,
          { id: params.id }
        );

        // Resolve image URL using urlFor
        if (fetchedProduct?.image) {
          fetchedProduct.image = urlFor(fetchedProduct.image).url();
        }

        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [params.id]);

  // Toast notification
  const notify = (productName: string) => {
    toast.success(`product added to cart!`, {
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
        image: product.image,
        quantity: 1,
        size: "M", // Default size (you can change this to user-selected size)
        color: "Red", // Default color (you can change this to user-selected color)
      };

      addToCart(cartItem);
      notify(product.title); // Notify with the product name
    }
  };

  if (product) {
    return (
      <>
        <div className="flex flex-col md:flex-row gap-8 px-11 py-11 max-w-6xl mx-auto lg:px-[5rem] lg:py-[4rem]">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            {product.image && (
              <Image
                src={product.image}
                alt={product.title}
                width={350}  // Adjusted width for a more moderate size
                height={350} // Adjusted height to maintain aspect ratio
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
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
        <FeaturedProducts />
      </>
    );
  }

  return <p>Loading...</p>;
}
