function solve() {

  let $firstTextarea = $('textarea').first()
  let $lastTextarea = $('textarea').last()

  let $btnGenerate = $('button').first().on('click', function () {
    if ($firstTextarea.val() !== '')
    JSON.parse($firstTextarea.val()).forEach(function (el) {

      $('table').append(`<tr> <td><img src = ${el.img}></td>
                              <td>${el.name}</td>
                              <td>${el.price}</td>
                              <td>${el.decFactor}</td> 
                              <td><input type="checkbox"/></td>
                         </tr>`)
    })
                                                      
    $firstTextarea.val('')
  })
  
 let checkBox = $('input')
     checkBox.attr("disabled", false);
$('button').last().on('click', function () {
  $lastTextarea.text('')
  let totalPrice = 0;
  let averages = 0;
  let averageCount = 0
  let goods = [];

 let getChecked = $('input[type="checkbox"]').toArray().map(el => {
            if (el.checked === true) {
              averages += +el.parentNode.previousElementSibling.textContent
              totalPrice += +el.parentNode.previousElementSibling.previousElementSibling.textContent
              goods.push(el.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
              averageCount++

            }
        });

       $lastTextarea.text(`Bought furniture: ${goods.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averages /averageCount }`) 
})

}