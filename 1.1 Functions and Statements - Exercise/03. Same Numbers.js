function sameNumbers(n) {
  let arr = String(n).split('').map(Number)
  let sum = arr.reduce((a, b) => a + b)
  let isEquals = new Set(arr).size == 1
  console.log(`${isEquals}\n${sum}`);
}

// sameNumbers(1234)  //f 10
// sameNumbers(2222222) /t 14