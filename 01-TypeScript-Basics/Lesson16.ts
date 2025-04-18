//Method Overloading

function overloadingFunc(a: string): void;
function overloadingFunc(a: string, b: number): number;

function overloadingFunc(a: any, b?: any): any {
  if (typeof a === "string" && b === undefined) {
    console.log("hey");
    return;
  }

  if (typeof a === "string" && typeof b === "number") {
    return 123;
  }

  throw new Error("something is wrong");
}

overloadingFunc("hey"); // Output: hey
console.log(overloadingFunc("hey", 12)); // Output: 123