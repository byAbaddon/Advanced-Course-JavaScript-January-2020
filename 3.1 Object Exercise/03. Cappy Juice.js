function cappyJuice(inputArr) {
  let arr = [...inputArr]
  let obj = {}
  let set = new Set()

  for (const el of arr) {
    [drink, count] = el.split(' => ')

    if (!obj[drink]) {
      obj[drink] = 0
    }

    obj[drink] += +count
    obj[drink] >= 1000 ? set.add(drink) : null
  }

  set.forEach(el => console.log(el + ' => ' + Math.trunc(obj[el] / 1000)))
}

// cappyJuice(
//   ['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
//   ]
// )