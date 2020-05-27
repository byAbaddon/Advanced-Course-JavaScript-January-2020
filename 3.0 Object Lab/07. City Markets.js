function cityMarkets(inputArr) {
  let arr = [...inputArr]
  let townsObj = {}

  for (const el of arr) {
    let [town, product, amountAndPrice] = el.split(' -> ')
    let [amount, price] = amountAndPrice.split(' : ')
    let sum = amount * price

    if (!townsObj.hasOwnProperty(town)) {
      townsObj[town] = [product + ' : ' + sum]
    } else {
      townsObj[town].push(product + ' : ' + sum)
    }
  }

  for (const [key, val] of Object.entries(townsObj)) {
    console.log(`Town - ${key}`);
    val.forEach(val =>
      console.log(`$$$${val}`)
    );
  }
}

// cityMarkets(
//   ['Sofia -> Laptops HP -> 200 : 2000',
//     'Sofia -> Raspberry -> 200000 : 1500',
//     'Sofia -> Audi Q7 -> 200 : 100000',
//     'Montana -> Portokals -> 200000 : 1',
//     'Montana -> Qgodas -> 20000 : 0.2',
//     'Montana -> Chereshas -> 1000 : 0.3'
//   ]
// )