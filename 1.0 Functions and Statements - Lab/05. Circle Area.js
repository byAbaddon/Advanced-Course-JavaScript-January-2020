function circleArea(n) {
  let type = typeof n
  if (type === 'number') {
    console.log((n ** 2 * Math.PI).toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${type}.`)
  }
}

//circleArea(5) //78.54