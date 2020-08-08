//let ex = 
(function () {
  let id = 0
  return class Extensible {
    constructor() {
      this.id = id++
    }

    extend(template) {
      for (const el in template) {
        if (typeof template[el] === 'function') {
          Extensible.prototype[el] = template[el]
        } else {
          this[el] = template[el]
        }
      }

    }
  }

}())

// let obj1 = new ex();
// let obj2 = new ex();
// let obj3 = new ex();
// console.log(obj1.id);
// console.log(obj2.id);
// console.log(obj3.id);