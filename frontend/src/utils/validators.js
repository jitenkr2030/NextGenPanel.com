export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  
    return (
      password.length >= minLength &&
      hasNumber.test(password) &&
      hasUpperCase.test(password) &&
      hasLowerCase.test(password) &&
      hasSpecialChar.test(password)
    );
  };
  
  export const validateRequired = (value) => value.trim() !== '';
  