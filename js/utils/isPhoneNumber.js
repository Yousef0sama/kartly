export default function isPhoneNumber(phone) {
  const phoneRegex = /^\+20(10|11|12|15)[0-9]{8}$/;
  if(!phoneRegex.test(phone)) {
    return 'Enter a valid phone number';
  }
  return '';
}