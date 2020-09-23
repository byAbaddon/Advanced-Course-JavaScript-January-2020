describe('Tested c#', function () {

  it("should throw error if no arguments were given", function () {
    expect(() => Console.writeLine()).to.throw(TypeError);
  })

  it('Result must be:object?', function () {
    let object = {
      name: "Ali",
      age: 22
    };
    expect(Console.writeLine(object)).to.equal(JSON.stringify(object))
  })
  it('Result must be:object sting', function () {
    let string = 'Hello'
    expect(Console.writeLine(string)).to.equal('Hello')
  })

  it('Result must be:object empty ', function () {
    let string = ''
    expect(Console.writeLine(string)).to.be.empty
  })

  it('Result must be:object Error  first argument must be string', function () {
    let num = 100;
    let string = 1 + "This {0}two arguments";
    expect(() => Console.writeLine(string, string, "two")).to.throw(Error);

  })

  it('Result must be:object RangeError ', function () {

    let string = "This {0} is {1} two arguments, but must be three.";
    expect(() => Console.writeLine(string, "one", "two", "three")).to.throw(RangeError);

  })

  it('Result must be:object Replace arguments ', function () {
    let string = "This num {0} < {1}.";
    expect(Console.writeLine(string, "one", "two")).to.equal("This num one < two.");

  })

  it('Result must be:object  ', function () {

    expect(() => Console.writeLine("WTF {100}", "valid")).to.throw(RangeError);

  })

  it("", function () {
    let string = "This is {0} should {1} maby {2} not work.";
    expect(() => Console.writeLine(string, "one", "be")).to.throw(RangeError);
  });

})