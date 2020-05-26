function magicMatrices(inputArr) {
  let arr = [...inputArr]
  let sumRow = arr[0].reduce((a, b) => a + b)
  let [sumCol1, sumCol2, sumCol3] = [0, 0, 0]

  for (let row = 0; row < arr.length; row++) {
    let current = arr[row].reduce((a, b) => a + b)
    if (current !== sumRow) {
      console.log(false);
      return
    }

    sumCol1 += arr[row][0]
    sumCol2 += arr[row][1]
    sumCol3 += arr[row][2]
  }

  console.log(sumCol1 === sumCol2 && sumCol2 === sumCol3 ? true : false)
}

// magicMatrices([
//   [4, 5, 6],
//   [6, 5, 4],
//   [5, 5, 5]
// ])

// magicMatrices([
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1]])