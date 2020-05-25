function smallestTwoNumbers(inputArr) {
  let arr = [...inputArr].sort((a, b) => a - b)
  return arr[0] + ' ' + arr[1]
}

//console.log(smallestTwoNumbers([30, 15, 50, 5]));