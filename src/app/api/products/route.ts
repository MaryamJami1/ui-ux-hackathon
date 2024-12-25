import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const products = await client.fetch(`
        *[_type == "product"] | order(_updatedAt desc) {
          _id,
          title,
          price,
          originalPrice,
          "image": image.asset->url,
          isNew,
          isSale
        }
      `);
  
      console.log("Fetched Products:", products); // Debug here
      return NextResponse.json(products, {
        headers: {
          "Cache-Control": "no-store",
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
    }
  }
  