function solve() {
  let $getAll = $('a')

  $getAll.on('click', function () {
    let $p = $(this).next()
    let getNum = +$p.text().match(/\d+/) + 1
    $p.text(`visited ${getNum} times`)
  })
}


// function solve() {   //--------(2)-------Fucking Judge Fuck off

//   let $getAll = document.querySelectorAll('a')

//   for (let i = 0; i < $getAll.length; i++) {
//     $getAll[i].addEventListener('click', function (e) {
//       let $p = e.target.parentNode.nextElementSibling
//       let getNum = +$p.textContent.match(/\d+/) + 1
//       $p.textContent = `visited ${getNum} times`
//     })  
//   }
// }