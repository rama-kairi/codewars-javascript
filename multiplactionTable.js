// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (num) => {
  let result = [];
  for (let i = 1; i < num + 1; i++) {
    let row = [];
    for (let j = 1; j < num + 1; j++) {
      row.push(i * j);
    }
    result.push(row);
  }
  return result;
};

// One Line Solutions
const multiplicationTable_ol = (n) =>
  Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i + 1) * (j + 1))
  );

// One Line Solutions
const multiplicationTable_ol_an = (s) =>
  Array(s)
    .fill()
    .map((a, i) =>
      Array(s)
        .fill()
        .map((e, j) => (1 + i) * (1 + j))
    );

// Run tests
console.log(multiplicationTable_ol_an(3));
// [[1,2,3],[2,4,6],[3,6,9]]
console.log(multiplicationTable_ol_an(4));
// [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]
