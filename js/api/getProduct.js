export default async function getProduct(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}
