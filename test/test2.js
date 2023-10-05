const { expect } = require('chai');
const { Cat, Dog, Bird } = require('./classes.js');

describe("Cat", () => {
  let cat;

  beforeEach(() => {
    cat = new Cat("Sasha", "female");
  });

  it("has a class of cat", () => {
    expect(new Cat()).to.be.an.instanceof(Cat);
  });

  it("cat.speak() returns '[name] says meow!'", () => {
    expect(cat.speak()).to.eq('Sasha says meow!');
  });
});

describe("Dog", () => {
  let dog;

  beforeEach(() => {
    dog = new Dog("Rufio", "male");
  });

  it("has a class of dog", () => {
    expect(new Dog()).to.be.an.instanceof(Dog);
  });

  it("dog.speak() returns '[name] says woof!'", () => {
    expect(dog.speak()).to.eq('Rufio says woof!');
  });
});

describe("Bird", () => {
  let bird, bird2;

  beforeEach(() => {
    bird = new Bird("Pablo", "male");
    bird2 = new Bird("Mable", "female");
  });

  it("has a class of Bird", () => {
    expect(new Bird()).to.be.an.instanceof(Bird);
  });

  it("bird.speak() returns 'It's me! [name], the parrot!'", () => {
    expect(bird.speak()).to.eq("It's me! Pablo, the parrot!");
  });

  it("bird2.speak() returns 'Squawk!'", () => {
    expect(bird2.speak()).to.eq('Mable says squawk!');
  });
});
In test2.js, you will have the describe blocks and tests for the Cat, Dog, and Bird classes from the second code snippet you provided. Here's an example:

const { expect } = require('chai');
const { Cat, Dog, Bird } = require('./classes.js');

describe("Cat", () => {
  let cat;

  beforeEach(() => {
    cat = new Cat("Korat");
  });

  it("has a breed property", () => {
    expect(cat.breed).to.equal("Korat");
  });
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

