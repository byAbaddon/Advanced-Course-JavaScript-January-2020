function solve() {

  let tx = $('textarea')
  let arrProducts = new Set()
  let btnCheck = $('button.checkout')
  let totalPrice = 0

  btnCheck.on('click', function () {
    tx.append(`You bought ${Array.from(arrProducts).join(', ')} for ${totalPrice.toFixed(2)}.`)
    $('.add-product').attr('disabled', true)
    $('.add-product').css('color', 'red')
    $(this).attr('disabled', true)
  })

  $('button').on('click', function (el) {
    let getProduct = el.target.parentElement.previousElementSibling.firstElementChild.textContent
    let getPrice = el.target.parentNode.nextElementSibling.textContent
    tx.append(`Added ${getProduct} for ${getPrice} to the cart.\n`)
    arrProducts.add(getProduct)
    totalPrice += +getPrice
  })

}