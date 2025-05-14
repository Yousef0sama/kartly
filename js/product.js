// imports

// api
import getProduct from "./api/getProduct.js";
import handleCart from "./handlers/handleCart.js";

// renders
import renderGallery from "./render/renderGallery.js";
import renderProductDetails from "./render/renderProductDetails.js";
import renderProducts from "./render/renderProducts.js";

// utils
import getSuggestedProducts from "./utils/getSuggestedProducts.js";


document.addEventListener("DOMContentLoaded", async () => {
  // get id from url
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // if theren't id redirect user to products page
  if (!id) {
    window.location.href = "/pages/products.html";
    return;
  }

  const product = await getProduct(id);

  if (product.message) {
    const container = document.querySelector(".product-container");
    container.innerHTML = `<p style="color:red;">❌ ${product.message}</p>`
  } else {
    const products = await getSuggestedProducts(product, 4)
    renderGallery(product.images, product.title);
    renderProductDetails(product);
    handleCart(product);
    renderProducts(products, 1);
  }

});
