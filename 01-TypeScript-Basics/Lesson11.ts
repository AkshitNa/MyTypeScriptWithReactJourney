class Animalia {
  name: string;

  constructor(name: string) {
    this.name = name; // 'this' refers to the current Animalia object
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dogias extends Animalia {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // calls the parent (Animalia) constructor
    this.breed = breed; // 'this' refers to the current Dogias object
  }

  makeSound() {
    super.makeSound(); // calls the parent method
    console.log(`${this.name} barks loudly.`); // 'this' refers to Dogias
  }
}

const myDogia = new Dogias("Bruno", "Labrador");
myDogia.makeSound();
