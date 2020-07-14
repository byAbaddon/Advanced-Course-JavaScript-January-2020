function focus() {

    $('input').focus(function () {
        $(this).parent().addClass('focused')
    })

    $('input').focusout(function () {
        $(this).parent().removeClass('focused').fadeOut(500).fadeIn(800)
    })
}