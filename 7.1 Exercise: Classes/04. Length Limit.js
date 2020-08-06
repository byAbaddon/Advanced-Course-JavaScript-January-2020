class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString
    this.innerLength = innerLength
  }

  increase(inc) {
    this.innerLength += inc
  }

  decrease(dec) {
    if (this.innerLength - dec < 0) {
      this.innerLength = 0
    } else {
      this.innerLength -= dec
    }
  }

  toString() {
    let result = ''
    if (this.innerString.length <= this.innerLength) {
      result = this.innerString
    } else {
      result = this.innerString.slice(0, this.innerLength) + '...'
    }

    return result
  }
  
}

// let s = new Stringer("Viktor", 6);
// console.log(s.toString()); // Viktor

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4);
// console.log(test.toString()); // Test