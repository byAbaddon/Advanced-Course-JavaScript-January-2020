function solve() {

  let text = document.getElementById('text').value
  let result = document.getElementById('result')
  let split = text.split(' ').filter(el => el !== ' ')
  let output = ''

  for (const el of split) {

    if (Number(el)) {
      output += String.fromCharCode(el)
    } else {
      let charTown = []
      for (let i = 0; i < el.length; i++) {
        charTown.push(el[i].charCodeAt(0))
      }
      let p = document.createElement('p')
      p.innerHTML = charTown.join(' ')
      result.appendChild(p)
    }
  }

  let p = document.createElement('p')
  p.innerText = output
  result.appendChild(p)
}