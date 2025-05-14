export default function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}