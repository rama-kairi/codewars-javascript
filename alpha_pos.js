// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")

const alphabetPosition = (text) => {
  let arr = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let textArr = text.toLowerCase().split('');
  for (let i = 0; i < textArr.length; i++) {
    alphabet.includes(textArr[i])
      ? arr.push(alphabet.indexOf(textArr[i]) + 1)
      : null;
  }
  return arr.join(' ');
};

// one line solution
const alphabetPosition_ol = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map((x) => x.charCodeAt(0) - 96)
    .join(' ');

// Run Tests
console.log(alphabetPosition_ol("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
