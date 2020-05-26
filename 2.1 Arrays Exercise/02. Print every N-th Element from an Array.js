function printEveryNthElementFromAnArray(inputArr) {
  let arr = [...inputArr]
  let steps = +arr.pop()
  arr.filter((el, i) => i % steps === 0).forEach(el => console.log(el))
}

// printEveryNthElementFromAnArray(
//   [ '5',
//     '20',
//     '31',
//     '4',
//     '20',
//     '2'
//   ])