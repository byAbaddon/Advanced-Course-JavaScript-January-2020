function addItem() {
    let $field = $('#newText')
    let $ul = $('#items')
    $ul.append(`<li>${$field.val()}<a href="#">[Delete]</a></li>`)

    $('ul li a').on('click', function (e) {
        e.target.parentElement.remove()
    })

    $field.value = ''
}