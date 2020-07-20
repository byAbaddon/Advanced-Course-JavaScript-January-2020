function create(words) {

   for (let i = 0; i < words.length; i++) {
      $('#content').append($(`<div><p style="display : none">${words[i]}</p></div>`))
   }

   $('div').on('click', function () {
      $(this).children('p').css('display', 'block')
   })

}