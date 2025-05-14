export default async function getCategories() {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}