import createProductPrice from "../creates/createPrice.js";
import createProductRating from "../creates/createRating.js";

export default function renderProductDetails (product) {
  // get elements
  const info = document.querySelector('.info');
  const title = info.querySelector('.title');
  const rating = createProductRating(product.rating);
  const price = createProductPrice(product.price, product.discountPercentage);

  const details = document.querySelector('.details');
  const brand = details.querySelector('#brand');
  const description = details.querySelector('#description');

  // fill elements
  title.textContent = product.title;
  info.append(rating, price);

  brand.textContent = product.brand;
  description.querySelector('#data').textContent = product.description;
}