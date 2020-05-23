function sumOfNumbers(start, end) {
  let result = 0

  for (let i = +start; i <= +end; i++) {
    result += +i
  }

  return result
}

//sumOfNumbers('-8', '20') //174