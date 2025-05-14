// imports

// creates
import createProductImage from "../creates/createImage.js";
import createProductTitle from "../creates/createTitle.js";
import createProductBrand from "../creates/createBrand.js";
import createProductRating from "../creates/createRating.js";
import createProductPrice from "../creates/createPrice.js";
import createProductButton from "../creates/createButton.js";

// constants
import { itemsPerPage } from "../utils/consts.js";

export default function renderProducts(products, currentPage) {

  const productContainer = document.querySelector('.products-container');

  // create a document fragment to improve performance
  // by reducing the number of reflows and repaints in the DOM
  const fragment = document.createDocumentFragment();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  productsToShow.forEach(product => {
    // create product card
    const productCard = document.createElement('a');
    productCard.classList.add('product-card', 'card', 'rounded');
    productCard.setAttribute('href', '/pages/product.html?id=' + product.id);

    const productImage = createProductImage(product.thumbnail, product.title);
    const productTitle = createProductTitle(product.title);
    const productBrand = createProductBrand(product.brand);
    const productRating = createProductRating(product.rating);
    const productPrice = createProductPrice(product.price, product.discountPercentage);
    const productSeeMore = createProductButton('see more');

    // add elements to product card
    productCard.append(productImage, productTitle, productBrand, productRating, productPrice, productSeeMore);

    // add product card to fragment
    fragment.appendChild(productCard);
  });

  // add all product cards at once to container
  productContainer.innerHTML = ''; // clear previous products
  productContainer.appendChild(fragment); // append the fragment to the container
}
