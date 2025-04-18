//Inference
function add(a: number, b: number) {
    return a + b; // TypeScript knows this returns a number
  }

let result = add(2,3);
console.log(result);

//Annotation

let m: number | string;
m = 5;
console.log(m);
m = "Ramesh";
console.log(m);
