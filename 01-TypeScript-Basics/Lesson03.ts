//Refernce

//Array
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "cherry"];

//Genric Way
let booleans: Array<boolean> = [true, false, true];
let games: Array<String> = ["Football", "Cricket", "Tennis"];

//Iteration

//Using For Loop
for (let i = 0; i < games.length; i++) {
  console.log(games[i]);
}

//Using For...of Loop
for (let game of games) {
    console.log(game);
  }

//Using For Each Loop
games.forEach((game, index) => {
    console.log(`${index + 1}: ${game}`);
  });

//Using Map Function
let uppercasedGames = games.map(game => game.toUpperCase());
console.log(uppercasedGames); // ["FOOTBALL", "CRICKET", "TENNIS"]

//Tuple
let person: [string, number] = ["Alice", 30];
// person[0] must be string, person[1] must be number

let product: [string, number, boolean] = ["Laptop", 1500, true];

//Iteration
for (let i = 0; i < product.length; i++) {
    console.log(product[i]);
  }

//Destructuring Tuples
let [computerName, price, availability] = product;
console.log(price);

//ENUM
enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
  }
  
  let favoriteColor: Color = Color.Green;
  console.log(favoriteColor); // Output: 1

//use ENUM with Equalto Sign
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  
  let move: Direction = Direction.Left;
  console.log(move); // Output: LEFT
