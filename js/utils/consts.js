
const items = {
  desktop: 12,
  tablet: 9,
  mobile: 6,
};

let itemsPerPage;

if (window.innerWidth >= 1024) {
  itemsPerPage = items.desktop;
}
if (window.innerWidth < 1024 && window.innerWidth >= 768) {
  itemsPerPage = items.tablet;
}
if (window.innerWidth < 768) {
  itemsPerPage = items.mobile;
}

export { itemsPerPage };