import createProductImage from "../creates/createImage.js";

export default function renderGallery (images, title) {

  // create a document fragment to improve performance
  // by reducing the number of reflows and repaints in the DOM
  const fragment = document.createDocumentFragment();

  // get gallery from document
  const gallery = document.querySelector('.gallery');

  // create elements
  const mainImg = document.createElement('div');
  const imagesContainer = document.createElement('div');

  // add classes
  mainImg.classList.add('main-image')
  imagesContainer.classList.add('images', 'center')

  // add deafualt main img
  mainImg.appendChild(createProductImage(images[0], title));

  images.forEach(image => {
    imagesContainer.appendChild(createProductImage(image, title));
  });

  fragment.append(mainImg, imagesContainer);

  gallery.appendChild(fragment);

  const imgs = imagesContainer.querySelectorAll('img');
  imgs.forEach(image => {

    const src = image.src;

    image.addEventListener('click', () => {
      mainImg.innerHTML = '';
      mainImg.appendChild(createProductImage(src, title));
    })

  })

}