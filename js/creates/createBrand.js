export default function createProductBrand(brand) {
  const productBrand = document.createElement('p');
  productBrand.textContent = 'brand: ';

  const productBrandSpan = document.createElement('span');
  productBrandSpan.classList.add('colored-text');
  productBrandSpan.textContent = brand;
  productBrand.appendChild(productBrandSpan);

  return productBrand;
}