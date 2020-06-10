function filterEmployees(input, criteria) {
  let arr = JSON.parse(input)
  let [crt1, crt2] = criteria.split('-')

  let numEmp = 0
  for (const emp of arr) {
    if (crt2 === 'all') {
      console.log(`${numEmp}. ${emp.first_name} ${emp.last_name} - ${emp.email}`);
      numEmp++
    } else if (emp[crt1] === crt2) {
      console.log(`${numEmp}. ${emp.first_name} ${emp.last_name} - ${emp.email}`);
      numEmp++
    }
  }
}

// filterEmployees(
//   `[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"}]`
//   ,'last_name-Johnson',
// )