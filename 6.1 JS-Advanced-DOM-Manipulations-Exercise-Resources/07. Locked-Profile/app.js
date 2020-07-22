function lockedProfile() {

    $('button').on('click', function () {
        let lock = $(this).parent().children().next('input')[0].checked
       
        if (!lock) {
            if ($(this).text() === 'Show more') {
                $(this).prev().css('display', 'block')
                $(this).text('Hide it')
            } else {
                $(this).prev().css('display', 'none')
                $(this).text('Show more')
            }
        }
    })
}

//--------------------------------------(2)----------------------Fucking Judge
// function lockedProfile() {

//     $('button').on('click', function () {

//         let lock = event.target.parentNode.children[2]
    
//         if (lock.checked !== true) {
//             if (event.target.textContent === 'Show more') {
//                 event.target.previousElementSibling.style = "display: block"
//                 event.target.textContent = 'Hide it'
//             } else {
//                 event.target.previousElementSibling.style = "display: none"
//                 event.target.textContent = 'Show more'
//             }
//         }

//     })
// }



