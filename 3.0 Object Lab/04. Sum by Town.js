function sumByTown(inputArr) {
  let arr = [...inputArr]
  let sumObj = {}
  arr.forEach((key, index) => index % 2 === 0 ? sumObj[key] = 0 : null)

  for (let i = 0; i < arr.length; i++) {
    if (sumObj.hasOwnProperty(arr[i])) {
      sumObj[arr[i]] += +arr[i + 1]
    }
  }

  console.log(JSON.stringify(sumObj));
}

// sumByTown(
//   ['Sofia',
//     '20',
//     'Varna',
//     '3',
//     'Sofia',
//     '5',
//     'Varna',
//     '4'
//   ]
// )
