// imports

// constants
import { itemsPerPage } from '../utils/consts.js';


export default function renderPagination(products, currentPage) {
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const pageNumbers = document.querySelector('.page-numbers');

  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  pageNumbers.innerHTML = `page ${currentPage} of ${totalPages}`;

}
