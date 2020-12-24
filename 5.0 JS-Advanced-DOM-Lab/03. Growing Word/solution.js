function growingWord() {
    const colors = ['blue', 'green', 'red'];

    const paragraph = document.getElementsByTagName('p')[2];

    let color = paragraph.style.color;
    paragraph.style.color = !color ? 'blue' : colors[(colors.indexOf(color) + 1) % colors.length];

    let fontSize = paragraph.style.fontSize.replace('px', '');
    paragraph.style.fontSize = (!fontSize ? '2' : fontSize * 2) + 'px';
}



//----------------------------(2)-----------------------------Fucking Judge

// function growingWord() { 

//   let firstColorElement = $('#colors > div').first()
//   let getColor = firstColorElement.text()
//   $('#colors').append(firstColorElement)

//   let $p = $('#exercise p')
//   $p.css('color', `${getColor}`)
//   $p.css('font-size', '4px')

//   let getNumber = document.querySelector('div.conditions').lastElementChild
//   let text = getNumber.textContent
//   let size = text.match(/\d+/)[0]

//    $p.css('font-size', `${+size+ 2}px`)

//   getNumber.textContent = +size + 2

// }




// function growingWord() { //----------------------------(3)-------Fucking Judge

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
