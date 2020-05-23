function mathOperations(...inputArr) {
  let [num1, num2, operator] = [...inputArr]
  console.log(eval(num1 + operator + num2));
}

//mathOperations(3, 5.5, '*') //16.5