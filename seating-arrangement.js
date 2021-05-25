function findDifference(array) {
  array.sort();
  const length = array.length;
  array.push(array[length - 1]);
  array.push(array[length - 2]);

  let max = 0;
  for (let i = 1; i < array.length - 1; i++) {
    max = Math.max(Math.abs(array[i - 1] - array[i + 1]), max);
  }
  return max;
}

function main() {
  const array = [5, 10, 6, 8];
  findDifference();
}

main();
