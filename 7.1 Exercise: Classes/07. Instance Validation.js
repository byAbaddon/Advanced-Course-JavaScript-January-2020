class CheckingAccount {

  constructor(clientId, email, firstName, lastName) {
    this.clientId = clientId
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
  }

  get clientId() {
    return this._clientId
  }

  set clientId(client) {
    if (!/^[1-9]{6}$/g.test(client)) {
      throw new TypeError('Client ID must be a 6-digit number')
    }
    return this._clientId
  }

  get email() {
    return this._email
  }

  set email(email) {
    if (!/\w+@\w{1,}/g.test(email)) {
      throw new TypeError('Invalid e-mail')
    }
    return this._email
  }

  get firstName() {
    return this._firstName
  }

  set firstName(fName) {
    if (!/[A-z]{3,20}/g.test(fName)) {
      if (/\W|\d/g.test(fName)) {
        throw new TypeError('First name must contain only Latin characters')
      }                      
      throw new TypeError('First name must be between 3 and 20 characters long')
    }

    return this._firstName
  }

  get lastName() {
    return this._lastName
  }

  set lastName(lName) {
    if (!/[A-z]{3,20}/g.test(lName)) {  
      throw new TypeError('Last name must be between 3 and 20 characters long')
    }
    if (/\W|\d/g.test(lName)) {
      throw new TypeError('Last name must contain only Latin characters')
    }
    return this._lastName
  }

}

//let acc = new CheckingAccount('1334', 'ivan@some.com', 'Ivan', 'Petrov')
//Output:  TypeError: Client ID must be a 6-digit number

//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
////Output: Invalid e-mail

// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
//// Output:'First name must be between 3 and 20 characters long'

// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Iv', 'P3trov')
// //Output: First name should only contain Latin letters

//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I1', 'Petrov')
//Output: TypeError: "First name must contain only Latin characters

// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivo', 'P')
//// Output:'Last name must be between 3 and 20 characters long'

//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
////Output: TypeError: Last name must contain only Latin characters


// letresult('131455', 'ivan@some.com', 'Ivan', 'P3trov')).to.throw(TypeError).which.has.property('message', 'Last name must contain only Latin characters');
// new result('131455', 'ivan@some.com', 'Ivan', 'Petrov');