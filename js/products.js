// imports

// apis
import getCategories from "./api/getCategories.js";
import getProducts from "./api/getProducts.js";

// renders
import renderProducts from "./render/renderProducts.js";
import renderCategoryOptions from "./render/renderCategoryOptions.js";

// handlers
import handleCategorySelect from "./handlers/handleCategorySelect.js";
import handleSearch from "./handlers/handleSearch.js";
import handlePagination from "./handlers/handlePagination.js";

// utils
import { setCookie } from "./utils/cookies.js";

// constants
import { itemsPerPage } from "./utils/consts.js";


document.addEventListener('DOMContentLoaded', async () => {

  setCookie('selectedCategory', '');

  const categories = await getCategories();
  const prod = await getProducts(2000, 0);
  const products = prod.products;

  renderCategoryOptions(categories);
  renderProducts(products, 1, itemsPerPage);
  handleCategorySelect(products);
  handleSearch(products);
  handlePagination(products);

});