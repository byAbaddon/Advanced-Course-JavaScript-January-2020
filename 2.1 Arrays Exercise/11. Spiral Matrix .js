function spiralMatrix(r, c) {
  let str = ''

  for (let row = 1; row <= r; row++) {
    for (let col = 1; col <= c; col++) {
     
      str += col
    }
     console.log(str);
     str = ''
  }

}

spiralMatrix(3, 3)