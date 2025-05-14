export default function handleCart(product) {

  const addToCart= document.querySelector('.add-to-cart');
  const plusBtn = addToCart.querySelector('#plus');
  const minusBtn = addToCart.querySelector('#minus');
  const count = addToCart.querySelector('#count');
  const addToCartBtn = addToCart.querySelector(".btn");

  let countValue = Number(count.textContent);

  plusBtn.addEventListener('click', () => {
    countValue++;
    count.textContent = countValue;
  })

  minusBtn.addEventListener('click', () => {
    if(countValue > 0) {
      countValue--;
      count.textContent = countValue;
    }
  })

  addToCartBtn.addEventListener('click', () => {
    const price = ((product.price - (product.price * product.discountPercentage/100)) * countValue).toFixed(2);
    if (countValue > 0) {
      alert(`${countValue} from ${product.title} added to cart price is ${price}`);
    }
    countValue = 0;
    count.textContent = '0';
  });

}