function addItem() {
    let menu = $('#menu')
    let value = $('#newItemValue')
    let text = $('#newItemText')

    let option = $(`<option value="${value.val()}">${text.val()}</option>`)
    menu.append(option)
    value.val('')
    text.val('')
}