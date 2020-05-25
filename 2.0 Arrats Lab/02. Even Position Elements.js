function evenPositionElement(inputArr) {
  let arr = [...inputArr]
  return arr.filter((el, i) => i % 2 === 0).join(' ')
}

//console.log(evenPositionElement(['20', '30', '40']));