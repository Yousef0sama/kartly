export default async function getProducts(limit = 10, skip = 0) {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return { products: [] };
  }
}
