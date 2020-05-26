function printArrayWithGivenDelimiter(inputArr) {
  let arr = [...inputArr]
  let separator = arr.pop()
  console.log(arr.join(separator));
}

// printArrayWithGivenDelimiter([
//   'How about no?',
//   'I',
//   'will',
//   'not',
//   'do',
//   'it!',
//   '_'
// ])