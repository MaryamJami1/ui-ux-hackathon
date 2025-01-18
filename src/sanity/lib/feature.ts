import { client } from "./client";

export async function fetchFeaturedProducts(limit: number) {
  const query = `*[_type == "products" && "featured" in tags] | order(_createdAt desc) [0...${limit}] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    image {
      asset -> {
        _id,
        url
      }
    },
    category -> {
      _id,
      title
    },
    description,
    inventory,
    tags
  }`;

  const products = await client.fetch(query);
  return products;
}
