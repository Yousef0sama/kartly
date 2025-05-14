// imports

import getUsers from "./getUsers.js";
import saveUsers from "./saveUsers.js";
import { setCookie } from "./cookies.js";

export default function createUser({ firstName, lastName, email, phone, address, password }) {
  const users = getUsers();
  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id: newId,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    address: address.trim(),
    password,
  };

  setCookie('user', newId);
  users.push(newUser);
  saveUsers(users);
}