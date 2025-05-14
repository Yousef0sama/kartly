export default function isNameValid(name) {
  const nameRegex = /^[\p{L}]{2,50}$/u;
  if (!nameRegex.test(name)) {
    return 'Name must have only letters';
  }
  return '';
}
