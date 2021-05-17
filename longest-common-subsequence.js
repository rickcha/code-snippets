function findMax(str1, str2) {
  return str1.length > str2.length ? str1 : str2;
}

function subsequenceHelper(str1, str2, cache, row, col) {
  if (row < 0 || col < 0) {
    return "";
  }

  if (str1[row] === str2[col]) {
    cache[row + "," + col] = str1[row] + cache[row - 1 + "," + (col - 1)];
  } else {
    cache[row + "," + col] = findMax(
      cache[row + "," + (col - 1)],
      cache[row - 1 + "," + col]
    );
  }
}

function longestCommonSubsequence(str1, str2) {
  // Write your code here.
  const cache = {};
  subsequenceHelper(str1, str2, cache, str1.length - 1, str2.length - 1);
  console.log(cache);
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;
