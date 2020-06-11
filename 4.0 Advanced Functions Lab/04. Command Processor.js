function commandProcessor() {

//-------------------------------------------------send only this function
function solution() {
  let str = ''

     function append(string) {
      return str +=string
     }

     function removeStart(n) {
      return str = str.slice(n, Infinity)
     }

     function removeEnd(n)  {
      return str = str.slice(0, -n)
     }

     function print() {
     console.log(str);
     
     }

     return {append ,removeStart ,removeEnd, print}
}
//----------------------------------------------------------------------------------
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
}

commandProcessor()


