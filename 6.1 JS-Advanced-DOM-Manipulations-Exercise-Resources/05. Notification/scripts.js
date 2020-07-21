function notify(message) {
    $('#notification').text(message)
                      .css('display', 'block')
                      .delay(2000).fadeOut()
}

//-------------------(2)----------- //fucking Judge

// function notify(message) { 
//     $('#notification').text(message).css('display','block')
//     setInterval(() => {
//         $('#notification').css('display','none')
//     }, 2000); 
// }


//-------------------(3)----------- //fucking Judge

// function notify(message) {
//     $('#notification').text(message).show().fadeOut(2000)
// }