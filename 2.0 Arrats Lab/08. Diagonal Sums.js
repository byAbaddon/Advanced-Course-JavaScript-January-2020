function diagonalSums(inputArr) {
  let arr = [...inputArr]
  let sumLeft = 0
  let sumRight = 0

  for (let i = 0; i < arr.length; i++) {
    sumLeft += arr[i][i]
    sumRight += arr[i][arr[i].length - i - 1]
  }

  console.log(sumLeft, sumRight);
}

// diagonalSums([
//   [3, 5, 17],
//   [-1, 7, 14],
//   [1, -8, 89]
// ])