// imports

// api
import search from "./search.js";

// utils
import getProducts from "../api/getProducts.js"

export default async function getSuggestedProducts(currentProduct, limit = 4) {
  const keyword = [
    currentProduct.brand,
    currentProduct.category,
    ...(currentProduct.tags || [])
  ].join(" ");

  const products = await getProducts(200);

  const results = search(products.products, keyword)
  .filter(p => p.id !== currentProduct.id)
  .slice(0, limit);

  return results;
}