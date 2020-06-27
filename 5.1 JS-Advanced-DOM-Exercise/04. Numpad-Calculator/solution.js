function solve() {
    let sum = ''

    let calcField = $('#expressionOutput')
    let clear = $('.clear')
    let result = $('#resultOutput')
    let arr = ['/', 'x', '-', '+', '*']

    clear.on('click', function () {
        calcField.text('')
        result.text('')
        sum = ''
    })

    $('.keys button').on('click', function () {
        let key = $(this).text()

        if (key !== '=') {
            key === 'x' ? key = '*' : null
            if (arr.includes(key)) {
                sum += ` ${key} `
                calcField.text(sum)
            } else {
                sum += key
                calcField.text(sum)
            }

        } else {
            try {
                result.text(eval(calcField.text()))
            } catch {
                result.text('NaN')
            }
        }
    })
}