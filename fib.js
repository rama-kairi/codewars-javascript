// Write a Fibonacci function that takes a number and returns the nth number in the Fibonacci sequence.

const fib = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
};

// Onl Line Solution
const fib_ol = (num) =>
  num === 0 ? 0 : num === 1 ? 1 : fib_ol(num - 1) + fib_ol(num - 2);

// Return Array of Fibonacci Numbers
const fibArray = (num) => {
  let arr = [];
  for (let i = 0; i < num + 1; i++) {
    arr.push(fib(i));
  }
  return arr;
};

// Run Tests
console.log(fibArray(0)); // 0
console.log(fibArray(1)); // 1
console.log(fibArray(2)); // 1
console.log(fibArray(3)); // 2
console.log(fibArray(15)); // 610
