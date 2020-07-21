function attachEventsListeners() {
    let [d, h, m, s] = [0, 0, 0, 0]

    $('input').on('click', function () {
        let result = (this.id).slice(0, -3)
        let getVal = $(this).prev().val()

        switch (result) {
            case 'days':
                d = getVal
                h = getVal * 24
                m = h * 60
                s = m * 60
                break;
            case 'hours':
                d = getVal / 24
                h = getVal
                m = h * 60
                s = m * 60
                break;
            case 'minutes':

                h = getVal / 60
                m = getVal
                s = m * 60
                d = h / 24
                break;
            case 'seconds':
                s = getVal
                m = s / 60
                h = m / 60
                d = h / 24

                break;
        }

        $('#days').val(d)
        $('#hours').val(h)
        $('#minutes').val(m)
        $('#seconds').val(s)

    })
}