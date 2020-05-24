function calorieObject(inputArr) {
  let arr = [...inputArr]
  let calorie_obj = {}

  while (arr.length > 0) {
    let key = arr.shift()
    let value = arr.shift()
    calorie_obj[key] = +value
  }

  console.log(calorie_obj);
}

//calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])