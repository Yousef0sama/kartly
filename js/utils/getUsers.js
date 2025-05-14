export default function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}