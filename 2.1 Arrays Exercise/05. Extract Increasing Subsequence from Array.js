function extractIncreasingSubsequenceFromArray(inputArr) {
  let arr = [...inputArr]
  let result = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (result <= arr[i]) {
      result = arr[i]
      console.log(result);
    }
  }
}

// extractIncreasingSubsequenceFromArray(
//   [1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
// )