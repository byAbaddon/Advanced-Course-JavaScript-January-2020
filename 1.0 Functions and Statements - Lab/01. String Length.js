function stringLength(...arr) {
  let sum = arr.map(el => el.length).reduce((a, b) => a + b)
  console.log(`${sum}\n${Math.floor(sum / 3)}`)
}

//stringLength('chocolate', 'ice cream', 'cake')