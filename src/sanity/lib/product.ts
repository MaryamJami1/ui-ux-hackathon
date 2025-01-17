import { client } from "./client";

export async function fetchProducts() {
  const query = `*[_type == "products"] {
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
