function addItem() {

    let $field = document.getElementById('newItemText')
    let $ul = document.getElementById('items')
    let createLi = document.createElement('li')

    createLi.textContent = $field.value
    $ul.appendChild(createLi)

    $field.value = ''
}