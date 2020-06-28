function solve() {

    let input = $('input')
    $('button').on('click', function () {
        let getFirstLetter = input.val()[0].toUpperCase()
        let inputField = getFirstLetter + input.val().slice(1,).toLowerCase()
        let position = inputField.charCodeAt() - 65
        let li = $('ol li').eq(position)
        if (position >= 0 && position <= 26) {
            if (li.text().length === 0) {
                li.text(inputField)
            } else {
                let moreNames = li.text() + ', ' + inputField
                li.text(moreNames)
            }
        }

        input.val('')
    })
}