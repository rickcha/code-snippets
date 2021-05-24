function reverseList(array) {
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function reverse(array, i, j) {
  const start = array.slice(0, i);
  const reversed = reverseList(array.slice(i, j));
  const end = array.slice(j, array.length);
  return [].concat(start, reversed, end);
}

function inOrder(array) {
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1];
    const curr = array[i];
    if (prev > curr) return false;
  }
  return true;
}

function minOperationsHelper(arr, start, count = 0) {
  if (inOrder(arr) === true) {
    return count;
  }

  let min = Infinity;
  for (let i = start; i < arr.length; i++) {
    for (let j = i + 2; j <= arr.length; j++) {
      const reversed = reverse(arr, i, j);
      const response = minOperationsHelper(reversed, i + 1, count + 1);
      if (min > response) min = response;
    }
  }
  return min;
}

function minOperations(arr) {
  return minOperationsHelper(arr, 0);
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printInteger(n) {
  var out = "[" + n + "]";
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printInteger(expected);
    out += " Your output: ";
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var n_1 = 5;
var arr_1 = [1, 2, 5, 4, 3];
var expected_1 = 1;
var output_1 = minOperations(arr_1);
check(expected_1, output_1);

var n_2 = 3;
var arr_2 = [3, 1, 2];
var expected_2 = 2;
var output_2 = minOperations(arr_2);
check(expected_2, output_2);
