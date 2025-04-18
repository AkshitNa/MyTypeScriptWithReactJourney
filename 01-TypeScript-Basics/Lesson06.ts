interface User {
  myName: string;
  age: number;
  height?: number; //optional
}

function getUserDetails(userDetails: User) {
  if (userDetails.height !== undefined) {
    console.log(
      `The username is ${userDetails.myName}, their age and height are ${userDetails.age} and ${userDetails.height} respectively!`
    );
  } else {
    console.log(
      `The username is ${userDetails.myName} and their age is ${userDetails.age}`
    );
  }
}

getUserDetails({
  myName: "Akshit",
  age: 25,
});

getUserDetails({
  myName: "Akshita",
  age: 29,
  height: 25,
});
