function solve() {
    let string = document.getElementById('text').value
    let n = document.getElementById('number').value

    spStr(string, n)

    function spStr(string, n) {
        let indexCounter = 0

        if (string.length % n !== 0) {
            let len = string.length
            let symbolsCount = 0

            while (len % n !== 0) {
                len %= n
                len++
                symbolsCount++
            }

            for (let i = 0; i < symbolsCount; i++) {
                string += string[indexCounter]
                indexCounter++
            }

        }
        let pattern = new RegExp(`.{${n}}`,'g') 
        string = string.match(pattern)
         
        document.getElementById('result').innerHTML = string.join(' ')
    }

}




//---------------------------(2)---------FUCKING JUDGE-------------------
// function solve() {
//     let text = document.getElementById('text').value
//     let num = document.getElementById('number').value
//     let result = ''

//     if (text.length > num) {
//         result = text.match(/.{2}|.{1,2}$/gm)
//         if (result[result.length - 1].length === 1) {
//             result += text.slice(0, 1)

//         }

//     } else {

//         for (let i = 0; i < num; i++) {
//             if (text.length === i) {
//                 num -= i - 1
//                 for (let j = 0; j < num; j++) {
//                     result += text.charAt(j)

//                 }

//             }
//             result += text.charAt(i)
//         }
//     }

//   result = result.split(',').join(' ')
//   document.getElementById('result').textContent = result
// }