function solve() {   //copy paste    
   Array.from(document.getElementsByTagName('img')).forEach(img => {
       img.addEventListener('click', clickEvent);
   });

   function clickEvent(e) {
       let card = e.target;
       card.src = './images/whiteCard.jpg'
       card.removeEventListener('click', clickEvent);

       let player = card.parentNode;
       let spanElements = document.getElementById('result').children;

       if (player.id === 'player1Div') {
           spanElements[0].textContent = card.name;
       } else if (player.id === 'player2Div') {
           spanElements[2].textContent = card.name;
       }

       if (spanElements[0].textContent && spanElements[2].textContent) {
           let winner;
           let loser;

           if (Number(spanElements[0].textContent) > Number(spanElements[2].textContent)) {
               winner = document.querySelector(`#player1Div img[name='${spanElements[0].textContent}']`);
               loser = document.querySelector(`#player2Div img[name='${spanElements[2].textContent}']`);
           } else {
               loser = document.querySelector(`#player1Div img[name='${spanElements[0].textContent}']`);
               winner = document.querySelector(`#player2Div img[name='${spanElements[2].textContent}']`);
           }

           winner.style.border = '2px solid green';
           loser.style.border = '2px solid red';

           document.getElementById('history').textContent += `[${spanElements[0].textContent} vs ${spanElements[2].textContent}] `;

           spanElements[0].textContent = '';
           spanElements[2].textContent = '';
       }
   };
}




//---------------------------------------(wrong condition 66pts  Fucking Judge)----------------------------------------


// function solve() {    

//    let cardOne = ''
//    let cardTwo = ''
//    let $result = $('#result span')
//    let $history = $('#history')
//    let addResult = ''
//    let loop = 0

//    document.addEventListener("click", function (e) {
//       //debugger
//       if (loop < 1) {

//          $(e.target).attr("src", "images/whiteCard.jpg")
//          cardOne = e.target //.name
//          $result.first().text(cardOne.name)

//          loop++
//       } else {

//          $(e.target).attr("src", "images/whiteCard.jpg")
//          cardTwo = e.target.name
//          $result.last().text(cardTwo)

//          if (+cardOne.name > +cardTwo) {
//             $(cardOne).css("border", "2px solid green")
//             $(e.target).css("border", "2px solid red")
//          } else {
//             $(e.target).css("border", "2px solid green")
//             $(cardOne).css("border", "2px solid red")
//          }

//          //add result to history 
//          let one = $result.first().text()
//          let two = $result.last().text()
//          if (one <= two) {
//             addResult += `[${one} vs ${two}] `
//           } else {
//             addResult += `[${two} vs ${one}] `
//          }

//          $history.text(addResult)
//          $result.first().text('')
//          $result.last().text('')
//          loop = 0
//       }
//    })
// }