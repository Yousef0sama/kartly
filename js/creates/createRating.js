export default function createProductRating(rating) {
  const StarsFull = Math.floor(rating);
  const StarsHalf = rating % 1 >= 0.5 ? 1 : 0;
  const StarsEmpty = 5 - StarsFull - StarsHalf;

  const productRating = document.createElement('p');
  productRating.classList.add('rating', 'colored-text');

  const productRatingStars = document.createElement('span');

  // create full stars
  for (let i = 0; i < StarsFull; i++) {
    const star = document.createElement('i');
    star.classList.add('bx', 'bxs-star');
    productRatingStars.appendChild(star);
  }

  // create half star if necessary
  if (StarsHalf === 1) {
    const star = document.createElement('i');
    star.classList.add('bx', 'bxs-star-half');
    productRatingStars.appendChild(star);
  }

  // create empty stars
  for (let i = 0; i < StarsEmpty; i++) {
    const star = document.createElement('i');
    star.classList.add('bx', 'bx-star');
    productRatingStars.appendChild(star);
  }

  // add rating to product rating
  productRating.appendChild(productRatingStars);
  productRating.appendChild(document.createTextNode(` ${rating}`));

  return productRating;
}