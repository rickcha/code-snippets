function swap(array, i, j) {
  //
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function permutations(array, left, result) {
  //
  if (left === array.length) {
    result.push(array.slice());
    return;
  }

  for (let i = left; i < array.length; i++) {
    //
    swap(array, left, i);
    permutations(array, left + 1, result);
    swap(array, i, left);
  }
}

function main() {
  const array = [1, 2, 3];
  const result = [];
  permutations(array, 0, result);
  console.log(JSON.stringify(result, null, 4));
}

main();
