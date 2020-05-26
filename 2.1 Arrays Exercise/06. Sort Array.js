function sortAnArrayByTwoCriteria(inputArr) {
  let arr = [...inputArr]
  let sortArr = arr
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)

  console.log(sortArr.join('\n'));
}

// sortAnArrayByTwoCriteria(
//   ['test',
//     'Deny',
//     'omen',
//     'Default'
//   ]
// )