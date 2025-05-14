export default function createProductDescription(description) {
  const productDescription = document.createElement('p');
  productDescription.textContent = description;
  return productDescription;
}