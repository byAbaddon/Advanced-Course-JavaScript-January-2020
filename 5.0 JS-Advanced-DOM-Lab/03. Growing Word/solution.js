function growingWord() { //----------------------------(1)-------Fucking Judge Fuck off

  let firstColorElement = $('#colors > div').first()
  let getColor = firstColorElement.text()
  $('#colors').append(firstColorElement)

  let $p = $('#exercise p')
  $p.css('color', `${getColor}`)
  $p.css('font-size', '4px')

  let getNumber = document.querySelector('div.conditions').lastElementChild
  let text = getNumber.textContent
  let size = text.match(/\d+/)[0]

   $p.css('font-size', `${+size+ 2}px`)

  getNumber.textContent = +size + 2

}




// function growingWord() { //----------------------------(2)-------Fucking Judge Fuck off

//   let colorCollection = document.getElementById('colors')
//   let firstChild = colorCollection.firstElementChild
//   let getColor = firstChild.textContent

//   colorCollection.firstChild.remove()
//   colorCollection.appendChild(firstChild)

//   let paragraph = document.querySelector('#exercise p')

//   let si = document.querySelector('div.conditions').lastElementChild
//   let text = si.textContent
//   let size = text.match(/\d+/)[0]

//   paragraph.style = `color: ${getColor}; font-size: ${+size}px`
//   si.textContent = +size + 2
// }