function uniqueSequences(inputArr) {
  let matrix = inputArr.map(JSON.parse)
  let collection = []

  for (const el of matrix) {
    let current = el.sort((a, b) => b - a)
   // JSON.stringify(current) === JSON.stringify(...collection) ? null : collection.push(current)  //Judge error
    collection.some((el) => el.reduce((a, b) => a + b) === current.reduce((a, b) => a + b)) ? null : collection.push(current)
  }

  collection.sort((a, b) => a.length - b.length).forEach(row => {
    console.log('[' + row.join(', ') + ']');
  });
}

// uniqueSequences(
//   ["[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"
//   ]
// )