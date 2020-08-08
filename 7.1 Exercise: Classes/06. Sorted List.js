class List {
  constructor() {
    this.size = 0;
    this.arr = [];
  }

  add(element) {
    this.size++;
    this.arr.push(element);
    return (this.arr = this.arr.sort((a, b) => {
      return a - b;
    }));
  }

  remove(index) {
    if(index >= 0 && index < this.size){

    this.size--;
    let el = this.arr[index];
    return (this.arr = this.arr.filter(i => {
      return i !== el;
    }));
   }
  }
  get(index) {
   return this.arr[index];
  }
}