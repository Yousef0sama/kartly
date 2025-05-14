// imports

// handlers
import { showError } from "./handlers/handleError.js";

// utils
import checkInputs from "./utils/checkInputs.js";
import isEmailExist from "./utils/isEmailExist.js";
import createUser from "./utils/createUser.js";
import { setCookie } from "./utils/cookies.js";

// run when dom is loaded
document.addEventListener("DOMContentLoaded", function () {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const submit = document.querySelector(".submit");

  // Don't delete +20;
  phone.addEventListener("input", (e) => {
    if (!e.target.value.startsWith("+20")) {
      e.target.value = "+20";
    }
  });

  submit.addEventListener("click", function () {
    const inputs = [firstName, lastName, email, password, confirmPassword, phone, address];
    const valid = checkInputs(inputs);

    if (valid) {
      if (isEmailExist(email.value)) {
        showError(email, "Email is Exist");
        return;
      }

      createUser({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        password: password.value,
      });

      window.location.href = '/';
    }
  });
});
