class Person {

  public name: string; // This is a property, not a standalone variable. Therefore, you cannot use let or const.
  public height: string; // This is a property, not a standalone variable. Therefore, you cannot use let or const.
  age: number = 0; // This is a property, not a standalone variable. Therefore, you cannot use let or const.

  //Note: By defualt: these properties are "public", so you can remove the "public" keyword.

  // Constructor
  constructor(name: string, height: string) {
    this.name = name;
    this.height = height;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name}, I'm ${this.age} years old and my height is ${this.height}. `
    );
  }

  greet2 = () => {
    console.log("Hello");
  }
}

let obj1 = new Person("Ram", "20 cm");
obj1.greet();
obj1.greet2();
