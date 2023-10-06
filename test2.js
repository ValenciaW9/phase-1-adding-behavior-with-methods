///Here's an example:
   //In test2.js, you will have the describe blocks and tests for the Cat, Dog, and Bird classes from the second code snippet you provided. Here's an example:

const { expect } = require('chai');
const { Cat, Dog, Bird } = require('./classes.js');

  beforeEach(() => {
    cat = new Cat("Korat");
  });

  it("has a breed property", () => {
    expect(cat.breed).to.equal("Korat");
  });

describe("Dog", () => {
  let dog;

  beforeEach(() => {
    dog = new Dog("German Shorthaired");
  });

  it("has a breed property", () => {
    expect(dog.breed).to.equal("German Shorthaired");
  });
});

describe("Bird", () => {
  let bird;

  beforeEach(() => {
    bird = new Bird("Rainbow-colored");
  });

  it("has a color property", () => {
    expect(bird.color).to.equal("Rainbow-colored");
  });
});

