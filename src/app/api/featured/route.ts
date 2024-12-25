import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  try {
    const featuredProducts = await client.fetch(
      '*[_type == "product" && isFeatured == true]{_id, title, price, originalPrice, isNew, isSale, isFeatured, "image": image.asset->url}'
    );

    return NextResponse.json(featuredProducts, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return NextResponse.json(
      { error: "Error fetching featured products" },
      { status: 500 }
    );
  }
}
