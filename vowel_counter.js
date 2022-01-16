// Write a function that takes a string and returns the number (count) of vowels contained within it.

const vowelCounter = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    vowels.includes(str[i]) ? count++ : null;
  }
  return count;
};

// One Line Solution
const vowelCounter_ol = (str) => str.match(/[aeiou]/gi)?.length || 0;

// Run Tests
console.log(vowelCounter_ol('hello')); // 2
console.log(vowelCounter_ol('aeiou')); // 5
console.log(vowelCounter_ol('why')); // 0
console.log(vowelCounter_ol('aeiouaeiou')); // 10
console.log(vowelCounter_ol('aeiouaeiouaeiou')); // 15
