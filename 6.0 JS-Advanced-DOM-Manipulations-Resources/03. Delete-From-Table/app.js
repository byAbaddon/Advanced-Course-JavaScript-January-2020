function deleteByEmail() {

    let input = $('input')
    let isMatch = $(`tr td:contains(${input.val()})`)

    if (isMatch.length > 0 && input.val() !== '') {

        isMatch.each(function () {
            $(this).closest('tr').remove()
        })

        $('#result').text('Deleted.')
        
    } else {
        $('#result').text('Not found.')
    }
}