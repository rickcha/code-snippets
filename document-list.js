// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);

// millions of docs: millions of list of millions of list documents

/*

[
  [11, 7, 4, 3],
  [8, 7, 2],
  [12, 5, 2]
]

[12, 11, 8]

clarifications:
0 < document size,

data structure: max heap



time complexity: O()
space complexity: O()


test cases:

*/

class MaxHeap {
  constructor() {
    this.list = [];
  }

  insert(value) {
    this.list.push(value);
    let childIdx = this.list.length - 1;
    let parentIdx = Math.floor(childIdx / 2);
    while (this.list[childIdx] > this.list[parentIdx] && parentIdx >= 0) {
      this.swap(childIdx, parentIdx);
      childIdx = parentIdx;
      parentIdx = Math.floor(childIdx / 2);
    }
  }

  swap(i, j) {
    const temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }
}

function insert(result, value) {
  result.push(value);
  let idx = result.length - 1;
  while (idx > 0 && result[idx] > result[idx - 1]) {
    swap(result, idx, idx - 1);
    idx = idx - 1;
  }
  result.splice(3);
}

function swap(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

function topThreeNumbers(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const value = matrix[i][j];
      if (result.length >= 3 && value < result.length - 1) {
        j = matrix[i].length;
        continue;
      }
      insert(result, value);
    }
  }

  return result;
}

const input = [
  [11, 7, 4, 3],
  [8, 7, 2],
  [12, 5, 2],
];

console.log(topThreeNumbers(input));
