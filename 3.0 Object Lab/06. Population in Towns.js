function populationsInTowns(inputArr) {
  let arr = [...inputArr]
  let townsObj = {}
  for (const el of arr) {
    let [town, population] = el.split(' <-> ')
    townsObj.hasOwnProperty(town) ? townsObj[town] += +population : townsObj[town] = +population
  }

  for (const el in townsObj) {
     console.log(el + ' : ' + townsObj[el]);
  }
}

// populationsInTowns(
//   ['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000'
//   ])