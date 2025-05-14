// imports

// renders
import renderProducts from "../render/renderProducts.js";

// handlers
import handlePagination from "./handlePagination.js";

// utils
import {setCookie} from "../utils/cookies.js";
import filterByCategory from "../utils/filterCategory.js";

export default function handleCategorySelect(products) {
  document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const options = wrapper.querySelector('.custom-options');
    const icon = wrapper.querySelector('.custom-select-icon');

    wrapper.addEventListener('click', (e) => {
      icon.classList.toggle('bx-chevron-down');
      icon.classList.toggle('bx-chevron-up');
      trigger.classList.toggle('active');
      if (e.target.classList.contains('custom-option')) {
        const selectedCategory = e.target.getAttribute('data-value');
        trigger.textContent = e.target.textContent;
        options.style.display = 'none';
        const filteredProducts = filterByCategory(products, selectedCategory);
        setCookie('selectedCategory', selectedCategory);
        renderProducts(filteredProducts, 1);
        handlePagination(filteredProducts);
      } else {
        options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
      }
    });

    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        options.style.display = 'none';
      }
    });
  });
}
