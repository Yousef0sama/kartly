// Set a cookie
export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Get a cookie
export function getCookie(name) {
  const cookies = document.cookie.split('; ').reduce((acc, curr) => {
    const [key, val] = curr.split('=');
    acc[key] = val;
    return acc;
  }, {});
  return cookies[name];
}

// Delete a cookie
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
