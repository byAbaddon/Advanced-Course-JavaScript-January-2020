function addRemoveElements(inputArr) {
  let arr = [...inputArr]
  let collectionsArr = []
  let num = 1

  while (arr.length > 0) {
    let command = arr.shift()
    command === 'add' ? collectionsArr.push(num++) : collectionsArr.pop(num++)
  }

  console.log(collectionsArr.length > 0 ? collectionsArr.join('\n') : 'Empty');
}

// addRemoveElements(
//   ['add',
//     'add',
//     'remove',
//     'add',
//     'add'
//   ]
// )