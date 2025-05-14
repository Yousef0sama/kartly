export function showError(input, message) {
  let error = input.parentElement.querySelector(".error-message");
  if (!error) {
    error = document.createElement("div");
    error.className = "error-message";
    input.parentElement.appendChild(error);
  }
  error.innerHTML = message;
}

export function clearError(input) {
  let error = input.parentElement.querySelector(".error-message");
  if (error) error.innerHTML = "";
}