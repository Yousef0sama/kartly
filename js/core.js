// imports

// utils
import { deleteCookie, getCookie } from "./utils/cookies.js";

window.addEventListener('DOMContentLoaded', async () => {

  window.addEventListener("load", () => {
    setTimeout(() => {
      const log = document.getElementById("log");
      const user = getCookie('user');
      if (user) {
        log.textContent = 'log out';
        log.setAttribute('href', '#');
      } else {
        log.textContent = 'log in';
        log.setAttribute('href', '/pages/login.html');
      }

      log.addEventListener('click', () => {
        if (log.textContent === 'log out') {
          deleteCookie('user');
          log.setAttribute('href', '/pages/login.html');
          log.textContent = 'log in';
        }
      })
    }, 100)
  });

});