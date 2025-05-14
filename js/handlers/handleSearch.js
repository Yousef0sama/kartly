// imports

// renders
import renderProducts from "../render/renderProducts.js";

// handlers
import handlePagination from "./handlePagination.js";

// utils
import filterByCategory from "../utils/filterCategory.js";
import search from "../utils/search.js";
import { getCookie } from "../utils/cookies.js";

export default function handleSearch(prod) {

  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');

  function performSearch() {
    const selectedCategory = getCookie('selectedCategory');
    let products = prod;

    if (selectedCategory) {
      products = filterByCategory(products, selectedCategory);
    }

    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = search(products, searchValue);
    renderProducts(filteredProducts, 1);
    handlePagination(filteredProducts,);
  }

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}
