function findSquareRoot(target, error) {
  let low = 0;
  let high = target;
  let mid = (high + low) / 2;
  let diff = target - mid * mid;
  while (error < Math.abs(diff)) {
    //
    if (diff < 0) {
      high = mid;
    } else {
      low = mid;
    }
    mid = (high + low) / 2;
    diff = target - mid * mid;
  }
  console.log(mid);
}

function main() {
  //
  findSquareRoot(11, 0.5);
}

main();
