function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]{2,}/g
    let email = $('#email').focus().addClass('error')

    email.change('click', function () {
        if ($(this).val().match(pattern)) {
            email.removeClass('error')
        } else {
            email.addClass('error')
        }
    })
}
