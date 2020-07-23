function encodeAndDecodeMessages() {    //copy Paste  

  let encodeButton = document.getElementsByTagName('button')[0];
	let decodeButton = document.getElementsByTagName('button')[1];

	encodeButton.addEventListener('click', encodeClickEvent);
	decodeButton.addEventListener('click', decodeClickEvent);

	function encodeClickEvent(e) {
		let messageTextArea = document.getElementsByTagName('textarea')[0];
		let message = messageTextArea.value;
		let decodeMessage = '';

		for (let i = 0; i < message.length; i++) {
			decodeMessage += `${String.fromCharCode(message.charCodeAt(i) + 1)}`;			
		}

		let decodeTextArea = document.getElementsByTagName('textarea')[1];
		decodeTextArea.value = decodeMessage;

		messageTextArea.value = '';
	};

	function decodeClickEvent(e) {
		let messageTextArea = document.getElementsByTagName('textarea')[1];
		let message = messageTextArea.value;
		let encodeMessage = '';		

		for (let i = 0; i < message.length; i++) {
			encodeMessage += `${String.fromCharCode(message.charCodeAt(i) - 1)}`;			
		}
		
		let encodeTextArea = document.getElementsByTagName('textarea')[1];
		encodeTextArea.value = encodeMessage;
	};
}


//-----------------------------------------(2) 75pts  inaccurate condition FUCK OFF

// function encodeAndDecodeMessages() {

//   let fieldOne = $('#main div:eq(0) textarea')
//   let btnEncode = $('#main button:eq(0)')

//   let fieldTwo = $('#main div:eq(1) textarea')
//   let btnDecode = $('#main button:eq(1)')

//   btnEncode.on('click', function () {
//     let codeText = ''
//     fieldTwo.val('')

//     let text = fieldOne.val()
//     for (let i = 0; i < text.length; i++) {
//       codeText += String.fromCharCode((text.charCodeAt(i) + 1))
//     }

//     fieldTwo.val(codeText)
//     fieldOne.val('')
//   })

//   btnDecode.on('click', function () {
//     let text = fieldTwo.val()
//     let codeTextTwo = ''
//     for (let i = 0; i < text.length; i++) {
//       codeTextTwo += String.fromCharCode((text.charCodeAt(i) - 1))
//     }

//      fieldTwo.val(codeTextTwo)
//   })

// }