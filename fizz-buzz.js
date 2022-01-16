// if number is divisible by 3, print fizz
// if number is divisible by 5, print buzz
// if number is divisible by 3 and 5, print fizzbuzz
// if number is not divisible by 3 or 5, print number

const fizzBuzz = (num) =>
  num % 3 === 0 && num % 5 === 0
    ? 'fizzbuzz'
    : num % 3 === 0
    ? 'fizz'
    : num % 5 === 0
    ? 'buzz'
    : num;

console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
