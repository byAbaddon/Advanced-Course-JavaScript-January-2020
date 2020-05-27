function countWordsInText(inputArr) {
  let arr = String(inputArr).split(/\W+/)
  let obj = {}
  for (const el of arr) {
  
    if (!obj.hasOwnProperty(el)) {
      el !== '' ?  obj[el] = 1 : null
    } else {
      obj[el] += 1
    }
  }

  console.log(JSON.stringify(obj));
}

//countWordsInText(["Far too slow, you're far too slow."])