function jsonTable(inputArr) {
  let arr = [...inputArr]
  console.log('<table>');
 for (const el of arr) {
   let current = JSON.parse(el)
   console.log('      <tr>');
      for (const el in current) {
        console.log(`\t    <td>${current[el]}</td>`);   
      }
  
      console.log('      </tr>');
 }

 console.log('</table>');
}

// jsonTable(
//   ['{"name":"Pesho","position":"Promenliva","salary":100000}',
//   '{"name":"Teo","position":"Lecturer","salary":1000}',
//   '{"name":"Georgi","position":"Lecturer","salary":1000}']
// )