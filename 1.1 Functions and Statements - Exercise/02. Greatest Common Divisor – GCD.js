function greatestCommonDivisor(n1, n2) {
  while (n2) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }

  return (n1);
}

//console.log(greatestCommonDivisor(2154, 458));