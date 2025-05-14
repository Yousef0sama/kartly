export default function isPasswordValid(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*?])[A-Za-z\d@#$!%*?&]{8,20}$/;
  if (!passwordRegex.test(password)) {
    return 'Password must have : <br> - Upper case letter <br> - Lower case letter <br> - Number <br> Sign of { ! @ # $ % & * ? }';
  }
  return '';
}