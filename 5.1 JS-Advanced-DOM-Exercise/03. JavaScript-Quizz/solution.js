function solve() {

  let section = document.querySelectorAll("#quizzie section");
  let result = document.querySelector('#results')
  let h1 = document.querySelector('#results li h1')
  let correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ];

  let counter = 0;
  let increase = 0;

  document.addEventListener("click", function (e) {
    correctAnswers.includes(e.target.textContent) ? counter++ : null
    section[increase].style.display = "none"
    increase++;
    if (increase < 3) {
      section[increase].style.display = "block"
    }

    if (increase === 3) {
      result.style.display = 'block'
      h1.innerHTML = counter === 3 ?
        `You are recognized as top JavaScript fan!` :
        `You have ${counter} right answers`
    }
  })
}