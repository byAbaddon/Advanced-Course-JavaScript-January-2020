function usernames(inputArr) {
  let arr = [...inputArr]
  let set = new Set(arr)

  let sort = [...set]
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .join('\n')

  console.log(sort);
}

// usernames(
//   ['Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston'
//   ]
// )