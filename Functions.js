//Function Declaration Syntax

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 6));

function getUserfromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserfromEmail("SomeRandom@gmail.com"));

//Anonymous Function

const getUserfromEmail2 = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserfromEmail("Player1@gmail.com"));

//Arrow Function

const getUserfromEmail3 = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserfromEmail("Dave@gmail.com"));

//Experiment

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("jAnUaRy"));
