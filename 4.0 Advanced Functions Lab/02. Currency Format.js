function formatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + ' ' + result;
  else return result + ' ' + symbol;
}

//-----------------------------------------------------send only this function
function money(v) {
  return function (value) {
    return v(",", "$", true, value);
  };
}
//------------------------------------------------------

let dollarFormatter = money(formatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71