function autoEngineeringCompany(inputArr) {
  let arr = [...inputArr]
  let companyObj = {}

  for (const el of arr) {
    let [brand, model, produce] = el.split(' | ')

    if (!companyObj[brand]) {
      companyObj[brand] = {}
    }

    let nestedModelObj = companyObj[brand]

    if (!nestedModelObj[model]) {
      nestedModelObj[model] = +produce
    } else {
      nestedModelObj[model] += +produce
    }

    companyObj[brand] = nestedModelObj
  }

  for (const [key, val] of Object.entries(companyObj)) {
    console.log(key);

    for (const [model, count] of Object.entries(val)) {
      console.log(`###${model} -> ${count}`);
    }
  }
}

// autoEngineeringCompany([
//   'Audi | Q7 | 1000',
//   'Audi | Q6 | 100',
//   'BMW | X5 | 1000',
//   'BMW | X6 | 100',
//   'Citroen | C4 | 123',
//   'Volga | GAZ-24 | 1000000',
//   'Lada | Niva | 1000000',
//   'Lada | Jigula | 1000000',
//   'Citroen | C4 | 22',
//   'Citroen | C5 | 10'
// ])