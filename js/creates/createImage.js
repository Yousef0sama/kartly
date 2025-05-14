export default function createProductImage(thumbnail, title) {
  const container = document.createElement('div');
  container.classList.add('image-container');

  const skeleton = document.createElement('div');
  skeleton.classList.add('skeleton');

  const productImage = document.createElement('img');

  productImage.addEventListener('load', () => {
    skeleton.style.display = 'none';
    productImage.classList.add('loaded');
  });

  productImage.setAttribute('src', thumbnail);
  productImage.setAttribute('alt', title);
  productImage.setAttribute('loading', 'lazy');

  container.appendChild(skeleton);
  container.appendChild(productImage);

  return container;
}
