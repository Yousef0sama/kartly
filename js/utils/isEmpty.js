export default function isEmpty(input) {
  if (!input.trim()) {
    return 'This feild is required';
  }
  return '';
}