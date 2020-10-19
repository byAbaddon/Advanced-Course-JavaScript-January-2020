function solve() {

   function createDomElement(elementType, text, classes, attributes, event) {
      let element = ''
      if (elementType) {
         element = document.createElement(elementType)
      }

      if (text) {
         element.textContent = text
      }

      if (classes) {
         classes.forEach((el) => element.classList.add(el)) // ['classOne' , 'classTwo']
      }

      if (attributes) {
         attributes.forEach((el) => element.setAttribute(el.k, el.v)) // [{}]   [{'id','btn'}]  
      }

      if (event) {
         element.addEventListener(event[0], event[1]) //['click', myFunction]
      }

      return element
   }

   const $author = document.getElementById('creator')
   const $title = document.getElementById('title')
   const $category = document.getElementById('category')
   const $content = document.getElementById('content')
   const $btnCreate = document.querySelector('form button')


   $btnCreate.addEventListener('click', function (e) {
      e.preventDefault()

      if ($author.value !== '' && $title.value !== '' && $category.value !== '' && $content.value !== '') {


         let article = createDomElement('article')
         let h1 = createDomElement('h1', $title.value)

         let p1 = createDomElement('p', 'Category: ')
         let strong1 = createDomElement('strong', $category.value)
         let p2 = createDomElement('p', 'Creator: ')
         let strong2 = createDomElement('strong', $author.value)
         let p3 = createDomElement('p', $content.value)
         let div = createDomElement('div', undefined, ['buttons'])
         let btn1 = createDomElement('button', 'Delete', ['btn', 'delete'], undefined, ['click', btnDelete])
         let btn2 = createDomElement('button', 'Archive', ['btn', 'archive'], undefined, ['click', btnArchive])

         article.appendChild(h1)

         p1.appendChild(strong1)
         article.appendChild(p1)

         p2.appendChild(strong2)
         article.appendChild(p2)

         article.appendChild(p3)

         div.appendChild(btn1)
         div.appendChild(btn2)
         article.appendChild(div)

         let section = document.querySelector('main section').appendChild(article)
      }


   })

   function btnDelete(e) {
      e.target.parentNode.parentNode.remove()
   }

   function btnArchive(e) {
      let getTitle = e.target.parentNode.parentNode.childNodes[0].textContent
      let li = createDomElement('li', getTitle)
      let archive = document.querySelector('.archive-section > ul:nth-child(2)').appendChild(li)
      e.target.parentNode.parentNode.remove()


      let listLi = archive.parentNode.querySelectorAll('li')
      Array.from(listLi).sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => {
            archive.parentNode.appendChild(li)
         });

   }
}



   
  






