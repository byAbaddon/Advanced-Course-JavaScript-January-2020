function processOddNumbers(inputArr) {
  let arr = inputArr.filter((el, i) => i % 2 !== 0)
    .map(el => el * 2)
    .reverse()
  return arr
}

//console.log(processOddNumbers([10, 15, 20, 25]));