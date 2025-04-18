//Any, Unknown, void, null and undefined

//Do not use "any" as typeScript failed to read it.
let randomValue: any = 10;
randomValue = "Now I'm a string";
randomValue = true;

console.log(randomValue); // true

//Use "unknown" as typeScript failed to read it.
let myValue: unknown;
myValue = true;
myValue = "Now I'm a string";

if(typeof myValue === "string"){
    console.log(myValue.toUpperCase());
}else{
    console.log("I am false");
}

//Use "void" when your function does not return anything.
function logMessage(message: string): void {
    console.log("Message:", message);
  }
  
  logMessage("Hello, TypeScript!");

//Let discuss this later, in more details.
let notAssigned: null = null;
let notInitialized: undefined = undefined;

console.log(notAssigned);     // null
console.log(notInitialized);  // undefined

//undefined
function greet(name?: string): void {

    if (name === undefined) {//if I do not pass any value to "name", it becomes undefined
      console.log("Hello, guest!");
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  greet();           // Hello, guest!
  greet("Charlie");  // Hello, Charlie!

/*  
Note: The ? after name makes the parameter optional, meaning:

1. You can call the function with or without providing that parameter.
2. If you don’t pass a value, name will automatically be undefined.

*/

  