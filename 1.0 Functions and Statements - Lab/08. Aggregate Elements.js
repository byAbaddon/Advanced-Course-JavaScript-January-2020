function aggregateElements(inputArr) { 
  let arr = [...inputArr]
  let sum = arr.reduce((a, b) => a + b)
  let inverse = arr.reduce((a, b) =>   a  + 1 / b, 0)
  let conCat = arr.join('')
  console.log(`${sum}\n${inverse}\n${conCat}`);
}

// aggregateElements([2, 4, 8, 16])  ///0.9375