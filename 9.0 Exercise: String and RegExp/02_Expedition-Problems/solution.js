function solve() {

  let str = document.getElementById('string').value
  let text = document.getElementById('text').value
  let $result = document.getElementById('result')

  let textResult = text.match(`${str}(.+)${str}`)[1]

  let pattern = /(east|north).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gim;
  let result = text.match(pattern)

 // let north = String(result).match(/(north.+)/gim)[0].slice(-9).replace(',', '.')

  let reEN;
  let eastMatch;
  let northMatch;

  while ((reEN = pattern.exec(text)) !== null) {
    if (reEN[1].toLowerCase() === 'east') {
      eastMatch = reEN
    } else {
      northMatch = reEN
    }


  }

  let p = document.createElement('p')
  p.textContent = `${northMatch[2]}.${northMatch[3]} N`
  $result.appendChild(p)

  p = document.createElement('p')
  p.textContent = `${eastMatch[2]}.${eastMatch[3]} E`
  $result.appendChild(p)

  p = document.createElement('p')
  p.textContent = `Message: ${textResult}`
  $result.appendChild(p)

}