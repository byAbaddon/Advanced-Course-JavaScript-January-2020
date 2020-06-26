
function solve() {   //-----------------//copy - Paste 100pts//-------------------- FUCKING JUDGE    
	let selectElements = document.getElementById('selectMenuTo');

	let optionFirstElement = document.createElement('option');
	optionFirstElement.value = 'binary';
	optionFirstElement.textContent = 'Binary';

	let optionSecondElement = document.createElement('option');
	optionSecondElement.value = 'hexadecimal';
	optionSecondElement.textContent = 'Hexadecimal';

	selectElements.appendChild(optionFirstElement);
	selectElements.appendChild(optionSecondElement);

	let buttonElement = document.getElementsByTagName('button')[0];

	buttonElement.addEventListener('click', clickEvent);

	function clickEvent(e) {
		let selectMenuToElement = document.getElementById('selectMenuTo');
		let inputNumber = document.getElementById('input').value;

		if (selectMenuToElement.value === 'binary') {
			let binaryResult = Number(inputNumber).toString(2);
			let resultElement = document.getElementById('result');
			resultElement.value = binaryResult;
		} else if (selectMenuToElement.value === 'hexadecimal') {
			let hexadeicmalResult = Number(inputNumber).toString(16);
			let resultElement = document.getElementById('result');
			resultElement.value = hexadeicmalResult.toUpperCase();
		}
	};
}







//-------(2)-----------------------XYYX------Correct but-FUCKING JUDGE -  50 pts



// function solve() {

//     let $felidOne = document.getElementById('input')
//     let $felidThree = document.getElementById('selectMenuTo')
//     let $felidResult = document.getElementById('result')
//     let $button = document.querySelector('button')


//     let firsOptions = $felidThree.firstElementChild
//     let secondOptionsClone = firsOptions.cloneNode(true)
//     firsOptions.value = 'Binary'
//     firsOptions.textContent = 'Binary'

//     secondOptionsClone.value = 'Hexadecimal'
//     secondOptionsClone.textContent = 'Hexadecimal'
//     $felidThree.appendChild(secondOptionsClone)

//     $button.addEventListener('click', function () {
//         $felidThree.value === 'Binary' ?
//             $felidResult.value = Number($felidOne.value).toString(2) :
//             $felidResult.value = Number($felidOne.value).toString(16).toUpperCase()
//         //$felidOne.value = ''         
//     })
// }






//-------(3)-----------------------YXXY------Correct but-FUCKING JUDGE -  50 pts



// function solve() {

//     let $numberField = document.querySelector('#input')
//     let $convertTo = document.querySelector('#selectMenuTo')
//     let $btn = document.querySelector('#container button')
//     let $result = document.querySelector('#result')
  
//     $convertTo.innerHTML = `
//     <option selected value="Hexadecimal">Hexadecimal</option>
//     <option selected value="Binary">Binary</option>
//      ` 
//      $btn.addEventListener('click',function () {

//         $convertTo.value === 'Binary' ?
//         $result.value = (Number($numberField.value)).toString(2) :
//         $result.value = Number($numberField.value).toString(16).toUpperCase()

 
//      })

//   }