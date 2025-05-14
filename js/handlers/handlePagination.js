// imports

// renders
import renderProducts from '../render/renderProducts.js';
import renderPagination from '../render/renderPagination.js';

// constants
import { itemsPerPage } from '../utils/consts.js';

export default function handlePagination(products) {

  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');

  let currentPage = 1;

  nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      currentPage++;
      renderProducts(products, currentPage);
      renderPagination(products, currentPage);
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts(products, currentPage);
      renderPagination(products, currentPage);
    }
  });

  renderPagination(products, currentPage);

}
