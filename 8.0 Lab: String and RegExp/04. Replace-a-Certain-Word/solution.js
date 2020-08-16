function solve() {

        let $fieldWord = document.getElementById('word').value
        let $fieldText = JSON.parse(document.getElementById('text').value);
        
        let searchingWord = $fieldText[0].split(' ')[2].toLowerCase()
        let text = ''

        let $fieldResult = document.getElementById('result')
        let p = document.createElement('p')
        let re = new RegExp(searchingWord, "gim");


        for (let i = 0; i < $fieldText.length; i++) {
             let result = $fieldText[i].replace(re, $fieldWord)
             let p = document.createElement('p')
             p.textContent = result
             $fieldResult.appendChild(p)
        }
    }



    // "JavaScript",
    //     ["I love pROgRaMminG",
    //         "proGramMing is fun",
    //         "ProgrAmmIng.",
    //         "JSProgramming", "!@#$proGRAMming!@#$"
    //     ]

