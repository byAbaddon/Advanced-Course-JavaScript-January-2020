function fromJSONToHTMLTable(inputArr) {
  let arr = JSON.parse(inputArr)

  let tagKeys = ''
  let tagValue = ''

  let sanitizeInput = str => str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  console.log(`<table>`);
  Object.keys(arr[0]).forEach(el => {
    tagKeys += `<th>${el}</th>`.trim()
  });
  console.log(`<tr>${tagKeys}</tr> `);

  for (let i = 0; i < arr.length; i++) {
    Object.values(arr[i]).forEach(el => {
      el = sanitizeInput(String(el));
      tagValue += `<td>${el}</td>`
    });
    console.log(`<tr>${tagValue}</tr>`);
    tagValue = ''
  }

  console.log(`</table>`);
}

// fromJSONToHTMLTable(
//   ['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']
// )

