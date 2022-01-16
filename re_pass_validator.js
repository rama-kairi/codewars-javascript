// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

const rePassValidator = (password) => {
  // Your code here
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(
    password
  );
};

// Run Tests
console.log(rePassValidator('Ab1')); // false
console.log(rePassValidator('abcd1234')); // false
console.log(rePassValidator('Abcd1234')); // true
console.log(rePassValidator('abcd1234Z')); // true
console.log(rePassValidator('abcd1234z')); // true
console.log(rePassValidator('abcd1234Zz')); // true
console.log(rePassValidator('abcd1234Zzz')); // true
console.log(rePassValidator('abcd1234Zzzz')); // true
