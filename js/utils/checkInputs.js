// imports

// handlers
import { showError, clearError } from "../handlers/handleError.js";

// utils
import isEmpty from "./isEmpty.js";
import checkLength from "./checkLength.js";
import isNameValid from "./isValidName.js";
import isEmail from "./isEmail.js";
import isPasswordValid from './isValidPassword.js';
import isPhoneNumber from './isPhoneNumber.js';

export default function checkInputs(inputs) {
  let passwordValue = '';

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    clearError(input);

    // Check if field is empty
    const emptyError = isEmpty(input.value);
    if (emptyError) {
      showError(input, emptyError);
      return false;
    }

    // Validate name fields
    if (input.id === 'firstName' || input.id === 'lastName') {
      const lengthError = checkLength(input.value, 2, 50);
      if (lengthError) {
        showError(input, lengthError);
        return false;
      }

      const nameError = isNameValid(input.value);
      if (nameError) {
        showError(input, nameError);
        return false;
      }
    }

    // Validate email field
    if (input.id === 'email') {
      const lengthError = checkLength(input.value, 6, 100);
      if (lengthError) {
        showError(input, lengthError);
        return false;
      }

      const emailError = isEmail(input.value);
      if (emailError) {
        showError(input, emailError);
        return false;
      }
    }

    // Validate password field
    if (input.id === 'password') {
      passwordValue = input.value;

      const lengthError = checkLength(input.value, 8, 20);
      if (lengthError) {
        showError(input, lengthError);
        return false;
      }

      const passError = isPasswordValid(input.value);
      if (passError) {
        showError(input, passError);
        return false;
      }
    }

    // Validate confirm password field
    if (input.id === 'confirmPassword') {
      if (input.value !== passwordValue) {
        showError(input, "Password doesn't match");
        return false;
      }
    }

    // Validate phone number field
    if (input.id === 'phone') {
      const phoneError = isPhoneNumber(input.value);
      if (phoneError) {
        showError(input, phoneError);
        return false;
      }
    }

    // Validate address field
    if (input.id === 'address') {
      const addressError = checkLength(input.value, 4, 250);
      if (addressError) {
        showError(input, addressError);
        return false;
      }
    }
  }

  return true;
}
