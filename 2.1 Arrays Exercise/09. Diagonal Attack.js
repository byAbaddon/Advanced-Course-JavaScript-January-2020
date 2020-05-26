function diagonalAttack(inputArr) {
  let arr = [...inputArr]
  let sumLeft = 0
  let sumRight = 0

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i].split(' ')
    sumLeft += +row[i]
    sumRight += +row[row.length - i - 1]
  }

  //console.log(sumLeft, sumRight);

  if (sumLeft !== sumRight) {
    for (const el of arr) {
      console.log(el);
     
    }
     return
  } 

  //up
  for (let i = 0; i < 1; i++) {
    console.log(arr[i][i] + ' ' + String(sumLeft).repeat(arr.length-2) + ' ' +arr[i][arr.length - i - 1]);
    
  }

  //middle
  for (let i = 0; i < arr.length - 2; i++) {
    console.log(String(sumLeft).repeat(arr.length-2) + ' ' + arr[i][arr.length - i - 1] + ' ' + String(sumLeft).repeat(arr.length-2));
    
  }


//buttom
  for (let i = 0; i < 1; i++) {
    console.log(arr[i][i] + ' ' + String(sumLeft).repeat(arr.length-2) + ' ' + arr[i][arr.length - i - 1]);
  
  }


}

diagonalAttack(
  ['1 1 0',
    '1 1 1',
    '1 1 1'
  ]
)

// diagonalAttack(
//   ['5 3 12 3 1',
//   '11 4 23 2 5',
//   '101 12 3 21 10',
//   '1 4 5 2 2',
//   '5 22 33 11 1']
// )