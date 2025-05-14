
// imports

// utils
import {setCookie} from './utils/cookies.js'
import checkInputs from './utils/checkInputs.js';
import { showError } from './handlers/handleError.js';
import isEmailExist from './utils/isEmailExist.js';
import getUsers from './utils/getUsers.js';

// Wait until the document is fully loaded to attach event listener
document.addEventListener("DOMContentLoaded", () => {

  const email = document.getElementById("email");
  const password = document.getElementById("Lpassword");
  const rememberMe = document.getElementById("rememberMe");
  const submit = document.getElementById("submit")


  // Listen for the form submission event
  submit.addEventListener("click", () => {
    const inputs = [email, password];
    const valid = checkInputs(inputs);

    if (valid) {
      const isExist = isEmailExist(email.value);
      if (!isExist) {
        showError(email, 'email or password is wrong');
        showError(password, 'email or password is wrong');
      } else {
        const users = getUsers();
        const user = users.filter(u => u.email === email.value)[0];
        if (user.password !== password.value) {
          showError(email, 'email or password is wrong');
          showError(password, 'email or password is wrong');
        } else {
          if (rememberMe.checked) {
            setCookie('user', user.id, 30);
            location.href = '/'
          }
        }
      }
    }

  });
});
