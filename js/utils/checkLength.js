export default function checkLength(str, minLength, maxLength) {
  if (str.trim().length < minLength || str.trim().length > maxLength) {
    return `It must be between ${minLength} and ${maxLength}`;
  }
  return '';
}