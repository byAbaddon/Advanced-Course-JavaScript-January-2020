function storeCatalogue(inputArr) {
  let arr = [...inputArr]
  let obj = {}

  for (const el of arr) {
    let [product, price] = el.split(' : ')
    let key = product.slice(0, 1)

    if (!obj[key]) {
      obj[key] = []
    }
    obj[key].push(' ' + product + ': ' + price)
  }

  let sortKeys = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

  for (const [key, val] of sortKeys) {
    console.log(key);
    console.log(val.sort().join('\n'));
  }
}

// storeCatalogue(
//   [
//     "Banana : 2",
//     "Rubic's Cube : 5",
//     "Raspberry P : 4999",
//     "Rolex : 100000",
//     "Rollon : 10",
//     "Rali Car : 2000000",
//     "Pesho : 0.000001",
//     "Barrel : 10",
//   ]
// )