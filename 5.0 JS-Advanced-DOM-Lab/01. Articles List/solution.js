function createArticle() {
  let getTitleText = document.getElementById('createTitle').value
  let getTextareaText = document.getElementById('createContent').value

  let article = document.createElement('article')
  let h3 = document.createElement('h3')
  let p = document.createElement('p')

  if (getTitleText !== '' && getTextareaText !== '') {

    document.getElementById('articles').appendChild(article)
    article.appendChild(h3).textContent = getTitleText
    article.appendChild(p).textContent = getTextareaText
    document.getElementById('createTitle').value = ''
    document.getElementById('createContent').value = ''
   
  }

}

/* • Стойността на заглавието от входа на заглавието трябва да бъде елемент от заглавие 3 <h3>
     • Текстът на съдържанието от текстовия елемент трябва да бъде параграф <p>
     • И двата нови създадени елемента (h3 и p) трябва да бъдат добавени към нов елемент на артикула <член>
     • Текущият елемент на артикула трябва да бъде добавен към секцията, която има статии за id (#articles)
     • Трябва да създадете нов елемент на статия, само ако заглавието и съдържанието не са празни
     • След натискане на бутона трябва да изчистите стойността на заглавието и текстовата стойност
*/