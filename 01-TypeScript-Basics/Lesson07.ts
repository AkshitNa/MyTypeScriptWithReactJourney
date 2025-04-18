interface User {
  myName: string;
  age: number;
  height?: number; // optional
}

// Extend the User interface
interface PremiumUser extends User {
  isPremium: boolean;
  membershipLevel: string;
}

function getMyUserDetails(userDetails: User) {
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

function getPremiumUserDetails(user: PremiumUser) {
  console.log(
    `${user.myName} is a premium user with ${user.membershipLevel} membership.`
  );
}

// Regular users
getMyUserDetails({
  myName: "Akshit",
  age: 25,
});

getMyUserDetails({
  myName: "Akshita",
  age: 29,
  height: 25,
});

// Premium user
getPremiumUserDetails({
  myName: "Riya",
  age: 35,
  height: 160,
  isPremium: true,
  membershipLevel: "Gold",
});

//Note: Interface Merging if they have same name.
interface Elf {
  name: string;
}

interface Elf {
  age: number;
}

function getMeDetails(obj: Elf) {
  console.log(obj.age);
  console.log(obj.name);
}


