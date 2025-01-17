
import { client } from "./client";

export async function fetchCategories() {
  const query = `*[_type == "categories"] {
    _id,
    title,
    image {
      asset -> {
        _id,
        url
      }
    },
    products
  }`;

  const categories = await client.fetch(query);
  return categories;
}
