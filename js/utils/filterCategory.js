export default function filterByCategory(products, category) {
  if (!category || category === "all") {
    return products;
  }

  return products.filter(product => product.category === category);
}