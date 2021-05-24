function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, i, j) {
  let left = i;
  let right = j;
  let number = array[i];
  while (left < right) {
    while (array[left] <= number) {
      left++;
    }
    while (array[right] > number) {
      right--;
    }

    if (left < right) swap(array, left, right);
  }

  swap(array, i, left - 1);
  return left - 1;
}

function quickSort(array, l, r) {
  if (l < r) {
    const index = partition(array, l, r);
    quickSort(array, l, index - 1);
    quickSort(array, index + 1, r);
  }
}

const array = [5, 4, 2, 6, 3];
quickSort(array, 0, array.length - 1);
console.log(array);
