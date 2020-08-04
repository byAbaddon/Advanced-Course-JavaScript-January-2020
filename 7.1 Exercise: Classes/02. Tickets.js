function myFun(inputArr, criterion) {
  let arr = []

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination
      this.price = Number(price)
      this.status = status
    }
  }

  for (const el of inputArr) {
    let [destination, price, status] = el.split('|')
    let ticket = new Ticket(destination, price, status)
    arr.push(ticket)
  }

  if (criterion === 'price') {
    return arr.sort((a, b) => a[criterion] > b[criterion])
  }

  return arr.sort((a, b) => a[criterion].localeCompare(b[criterion]))

}

// console.log(
//   myFun(['Philadelphia|94.20|available',
//       'New York City|95.99|available',
//       'New York City|95.99|sold',
//       'Boston|126.20|departed'
//     ],
//     'destination')
// );


