function solve() {
    let output = document.getElementById('result')
    let input = JSON.parse(document.getElementById('arr').value);

    let nameP = /[A-Z][a-z]*\s[A-Z][a-z]+|[A-Z]\s[A-Z]/g
    let phoneP = /(\+359\s\d\s\d+\s\d+)|(\+359-\d-\d+-\d+)/g
    let emailP = /\b[a-z0-9]+@[a-z]+\.[a-z]{2,3}\b/g

    let regExp = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359([- ])\d(\3)\d{3}(\3)\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/g;

    input.forEach(el => {

        if (regExp.test(el)) {
            let name = el.match(nameP)
            let p = document.createElement('p')
            p.textContent = `Name: ${name}`
            output.appendChild(p)

            let phone = el.match(phoneP)
            p = document.createElement('p')
            p.textContent = `Phone Number: ${phone}`
            output.appendChild(p)

            let email = el.match(emailP)
            p = document.createElement('p')
            p.textContent = `Email: ${email}`
            output.appendChild(p)

            p = document.createElement('p');
            p.textContent = '- - -';
            output.appendChild(p);
        } else {
            p = document.createElement('p')
            p.textContent = 'Invalid data'
            output.appendChild(p)

            p = document.createElement('p');
            p.textContent = '- - -';
            output.appendChild(p);

        }

    });
    //["George Smith +359 2 123 456 George@gmail.com", "G S +359-5-759-684 valid@gmail.com", "Smith +359-5 789 654 smith@gmail.com"]

}