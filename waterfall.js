function waterfallHelper(array, column, row, percentage, result, direction) {
  const left = column - 1 >= 0 && array[row][column - 1] === 0;
  const right = column + 1 < array[0].length && array[row][column + 1] === 0;

  if (row + 1 >= array.length) {
    console.log(column, row, direction, percentage);
    result[column] += percentage * 100;
    return;
  }

  if (array[row + 1][column] === 0) {
    waterfallHelper(array, column, row + 1, percentage, result, "down");
  } else {
    if (direction === "left" && left) {
      waterfallHelper(array, column - 1, row, percentage, result, direction);
    } else if (direction === "right" && right) {
      waterfallHelper(array, column + 1, row, percentage, result, direction);
    } else if (direction === "down") {
      if (left)
        waterfallHelper(array, column - 1, row, percentage / 2, result, "left");

      if (right)
        waterfallHelper(
          array,
          column + 1,
          row,
          percentage / 2,
          result,
          "right"
        );
    }
  }
}

function waterfallStreams(array, source) {
  // Write your code here.
  const result = new Array(array[0].length).fill(0);
  waterfallHelper(array, source, 0, 1, result, "down");
  return result;
}

// Do not edit the line below.
exports.waterfallStreams = waterfallStreams;
