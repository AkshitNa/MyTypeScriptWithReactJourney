//Calling Callback Function

function greetUser(name: string, callback: (greeting: string) => void): void {
  const message = "Hello, " + name;
  callback(message); //Calling the callback function
}

greetUser("Alice", (greeting) => {
  console.log(greeting);
});


