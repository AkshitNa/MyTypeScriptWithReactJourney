class Voter {
  private _age: number = 0; // private property

  // Getter
  get age(): number {
    return this._age;
  }

  // Setter
  set age(value: number) {
    if (value >= 18) {
      this._age = value;
    } else {
      console.log("Cannot vote");
    }
  }
}

const voter = new Voter();
voter.age = 25; // ✅ Setter is called
console.log(voter.age); // ✅ Getter is called — Output: 25

voter.age = 5; // ❌ Cant vote



