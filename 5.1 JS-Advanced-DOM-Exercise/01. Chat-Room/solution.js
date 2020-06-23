function solve() {
   let $chat = document.getElementById('chat_messages')
   let $inputField = document.getElementById('chat_input')
   let $sendButton = document.getElementById('send')

   $sendButton.addEventListener('click', function () {
      let $div = document.createElement('div')
      $div.classList.add('message', 'my-message')
      $div.textContent = $inputField.value
      $chat.appendChild($div)
      $inputField.value = ''
   })
}