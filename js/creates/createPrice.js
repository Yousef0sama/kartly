export default function createProductPrice(price, discount) {
  
  const priceAfterDiscount = (price - (price * discount / 100)).toFixed(2);

  const productPrice = document.createElement('div');
  productPrice.classList.add('price');

  // create product price after discount
  const productPriceAfterDiscount = document.createElement('span');
  productPriceAfterDiscount.classList.add('colored-text');
  productPriceAfterDiscount.textContent = `$${priceAfterDiscount}`;
  productPrice.appendChild(productPriceAfterDiscount);

  // create product price before discount
  const productPriceBeforeDiscount = document.createElement('sub');
  const productPriceDelete = document.createElement('del');
  productPriceDelete.textContent = `$${price}`;
  productPriceBeforeDiscount.appendChild(productPriceDelete);
  productPrice.appendChild(productPriceBeforeDiscount);

  // create product discount
  const productDiscount = document.createElement('div');
  productDiscount.classList.add('discount-badge', 'rounded');
  productDiscount.textContent = `${discount}%`;
  productPrice.appendChild(productDiscount);

  return productPrice;
}