export default function createProductButton(text) {
  const productSeeMore = document.createElement('button');
  productSeeMore.classList.add('btn', 'rounded');
  productSeeMore.textContent = text;
  return productSeeMore;
}