function argumentInfo(...arr) {
  let obj = {}
  for (const el of arr) {
    console.log(`${typeof el}: ${el}`);

    if (!obj[typeof el]) {
      obj[typeof el] = 0
    }
      obj[typeof el]++   
  }

  obj =  Object.entries(obj).sort((a,b) => b[1] - a[1])

  for (let val of obj) {
    console.log(val[0] + ' = ' + val[1])
  }
}

// argumentInfo(1 , 2, 'cat', 42, function () {console.log('Hello world!')})