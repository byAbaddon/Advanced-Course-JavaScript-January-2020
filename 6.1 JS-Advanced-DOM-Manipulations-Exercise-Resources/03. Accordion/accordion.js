function toggle() {
    let span = $('span')

    if (span.text() === 'More') {
        span.text('Less')
        $('#extra').css('display', 'block')
    } else {
        span.text('More')
        $('#extra').css('display', 'none')
    }
}