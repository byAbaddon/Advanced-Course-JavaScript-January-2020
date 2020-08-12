function solve() {
  let text = document.getElementById('text').value
  let param = document.getElementById('naming-convention').value
  let result = document.getElementById('result')

  let wordsArr = text.toLowerCase().split(' ')
  let newWords = ''

  for (let i = 0; i < wordsArr.length; i++) {

    if (param === 'Camel Case') {
      if (i === 0) {
        newWords += wordsArr[i]
      } else {
        newWords += wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1)
      }

    } else if (param === 'Pascal Case') {
      newWords += wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1)
    } else {
      result.textContent = 'Error!'
      return
    }
  }

  result.textContent = newWords
}