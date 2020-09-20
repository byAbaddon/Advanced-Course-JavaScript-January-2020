()=> {

  class Melon {
    constructor(weight, melonSort) {
      if (new.target === Melon) {
        throw new TypeError("Abstract class cannot be instantiated directly");
      }                 
        this.weight = +weight;
        this.melonSort = melonSort;
        this._elementIndex = weight * melonSort.length; 
    }
   
    get elementIndex() {
      return this._elementIndex;
    }
   
    toString() {
      return `Element: ${this.namE}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`
    }
  
  }
  
  class Watermelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort)
      this.namE = 'Water'
    }
  
    toString() {
      return super.toString()
    }
  }
  
  class Firemelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort)
      this.namE = 'Fire'
    }
  
    toString() {
      return super.toString()
    }
  }
  
  class Earthmelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort)
      this.namE = 'Earth'
    }
  
    toString() {
      return super.toString()
    }
  }
   
  class Airmelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort)
      this.namE = 'Air'
    }
  
    toString() {
      return super.toString()
    }
  }
  
  class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
      super(weight, melonSort)
      this.namE = 'Water';
        this.arr = ['Fire', 'Earth', 'Air','Water' ];
        this.s = 0;
     }
  
    morph() {
       this.namE = this.arr[this.s++  % 4];
    }
  
  }
  
     return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
   }