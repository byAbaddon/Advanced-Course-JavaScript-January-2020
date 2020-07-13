function attachGradientEvents() {
    $('#gradient').mousemove(function (e) {
        $("#result").text(Math.floor(e.offsetX / e.target.clientWidth * 100) + '%')
    })
}


//------------------------------(2)----------------- //Fucking Judge  WTF

// function attachGradientEvents() { 
//     $('#gradient').mousemove(function (e) {
//         $("#result").text(Math.round(+((e.pageX - 10) / 3) % 100) + "%");    
//     })
// }

//-------------------------------(3)--------------- //Fucking Judge  WTF

// function attachGradientEvents() { 
//         $('#gradient').mousemove(function (e) {
//             $("#result").text(~~((e.offsetX / 3) % 100) + "%")
//         })

//         $('#gradient').mouseout(() => $("#result").text('0%'))
//     }