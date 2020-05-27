function lowestPricesInCities(inputArr) {
  let arr = [...inputArr]
  let map = new Map()

  for (const el of arr) {
    let [town, product, price] = el.split(' | ')

    if (!map.get(product)) {
      map.set(product, new Map());
    }

    map.get(product).set(town, Number(price));
  }

  for (const [product, val] of map) {
    let lowestPrice = Infinity
    let townWithLowestPrice = ''
    for (const [town, price] of val) {
      if (price < lowestPrice) {
        lowestPrice = price;
        townWithLowestPrice = town;
      }
    }

    console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
  }
}

// lowestPricesInCities(
//   [
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10',
//   ]
// )



