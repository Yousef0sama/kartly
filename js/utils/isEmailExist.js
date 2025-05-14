// imports

import getUsers from "./getUsers.js";

export default function isEmailExist(email) {
  const users = getUsers();
  return users.some(user => user.email === email.trim());
}