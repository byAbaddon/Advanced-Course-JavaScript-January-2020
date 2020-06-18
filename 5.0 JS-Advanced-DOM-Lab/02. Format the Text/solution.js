function solve() {

  let getText = document.getElementById('input').textContent
  let arrText = [...getText.split('.')]
  arrText.unshift('buffer')
  arrText.pop()

  let createP = document.createElement('p')
  let currentText = ''

  let divOutput = document.getElementById('output')
      
  for (let i = 1; i <= arrText.length; i++) {
    if ( arrText[i] !==  undefined) {
       currentText += arrText[i] + '. '
    }
   
    if (i % 3 === 0) {
      createP = document.createElement('p')
      createP.textContent = currentText
      divOutput.appendChild(createP)
      currentText = ''
    }
  }

  createP = document.createElement('p')
  createP.textContent = currentText
  divOutput.appendChild(createP)

}