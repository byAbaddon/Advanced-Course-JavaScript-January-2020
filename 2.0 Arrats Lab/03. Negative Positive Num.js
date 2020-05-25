function negativePositiveNumbers(inputArr) {

  let negativeNum = []
  let positiveNum = []

  for (const el of inputArr) {
    if (el < 0) {
      negativeNum.push(el)
    } else {
      positiveNum.push(el)
    }
  }

  negativeNum.sort((a, b) => a + b)
  positiveNum.sort((a, b) => a + b)
  let unionArr = [...negativeNum, ...positiveNum]
  return unionArr
}

//console.log(negativePositiveNumbers([7, -2, 8, 9]));
