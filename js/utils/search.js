export default function search(products, keyword = "") {

  // if no keyword return all categoryFiltered products
  if (!keyword.trim()) {
    return products;
  }

  // advanced keyword search with scoring
  const keywords = keyword.toLowerCase().split(" ").filter(word => word.trim() !== "");
  const scoredResults = products.map(product => {
    let score = 0;

    keywords.forEach(kw => {
      if (product.title?.toLowerCase().includes(kw)) score += 3;
      if (product.description?.toLowerCase().includes(kw)) score += 2;
      if (product.brand?.toLowerCase().includes(kw)) score += 2;
      if (Array.isArray(product.tags) && product.tags.some(tag => tag.toLowerCase().includes(kw))) score += 1;
    });

    return {
      product,
      score
    };
  });

  return scoredResults
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.product);
}

