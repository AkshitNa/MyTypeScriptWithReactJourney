// Parent class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

// Child class
class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const myDog = new Dog("Buddy");
myDog.eat(); // ✅ Buddy is eating.
myDog.sleep(); // ✅ Buddy is sleeping.
myDog.bark(); // ✅ Buddy is barking.
