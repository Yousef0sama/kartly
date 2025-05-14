export default function createProductTitle(title) {
  const productTitle = document.createElement('h3');
  if (title.length > 20) {
    title = title.slice(0, 20) + '...';
  }
  productTitle.textContent = title;
  return productTitle;
}