export default function renderCategoryOptions(categories) {
  const categoryOptions = document.querySelector('.custom-options');
  categoryOptions.style.display = 'none';

  // create a document fragment to improve performance
  // by reducing the number of reflows and repaints in the DOM
  const fragment = document.createDocumentFragment();

  categories.forEach(category => {
    const option = document.createElement('div');
    option.classList.add('custom-option', 'pointer');
    option.setAttribute('data-value', category.slug);
    option.textContent = category.name;
    fragment.appendChild(option);
  });
  categoryOptions.appendChild(fragment);
}
