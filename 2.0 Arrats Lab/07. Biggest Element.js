function biggestElement(inputArr) {
  let collectionsArr = []

  for (const el of inputArr) {
    collectionsArr.push(el)
  }

  return Math.max(...collectionsArr.flat())
}

// console.log(biggestElement([
//   [3, 5, 7, 12],
//   [-1, 4, 33, 2],
//   [8, 3, 0, 4],
// ]))