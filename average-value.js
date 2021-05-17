class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findAverageHelper(root) {
  const queue = [];
  const result = [];
  let total = 0;
  let count = 0;

  if (root) queue.push(root);
  queue.push(null);

  while (queue.length !== 0) {
    const removed = queue.shift();
    if (removed === null) {
      // push the result and reset
      result.push(total / count);
      total = 0;
      count = 0;

      queue.push(null);
      if (queue[0] === null) break;
    } else {
      total += removed.value;
      count++;

      if (removed.left) queue.push(removed.left);
      if (removed.right) queue.push(removed.right);
    }
  }

  console.log(result);
}

function findAverage(root) {
  findAverageHelper(root);
}

findAverage({
  value: 4,
  left: {
    value: 7,
    left: { value: 10 },
    right: { value: 2, right: { value: 6, left: { value: 2 } } },
  },
  right: { value: 9, right: { value: 6 } },
});
