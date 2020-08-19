function solve() {
	let $input = document.getElementById('input').value
	let $result = document.getElementById('resultOutput')

	let getWeight = $input.match(/\d/g).map(Number).reduce((a, b) => a + b)
	let sum = ''

	sum = getWeight.toString().split('').map(Number).reduce((a, b) => a + b)
	
	while (sum / 10 >= 1) {
		sum = sum.toString().split('').map(Number).reduce((a, b) => a + b)
	}


	let inputFilter = $input.slice(sum, -sum).match(/\d{1,8}/g)
	let text = ''

	for (let i = 0; i < inputFilter.length; i++) {
		let current = String.fromCharCode(parseInt(inputFilter[i], 2))
	   if (current.match(/\w+|\s+/gim)) {
			 	text += current
		 }	
	}

	$result.textContent = text
}