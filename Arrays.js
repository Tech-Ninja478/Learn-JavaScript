const myArray = ["A", "B", "C", "D", "E", "F"];

myArray[0] = "Aditya";
myArray[1] = 1001;
myArray[2] = false;

const firstItem = myArray.shift();

console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[2]);

myArray.splice(1, 1);

console.log(myArray);
console.log(myArray[1]);

const newArray = myArray.slice(2, 5);
console.log(newArray);

const newString = myArray.join();
console.log(newString);

console.log(myArray.reverse());

const newArrayA = ["A", "B", "C"];
const newArrayB = ["D", "E", "F"];

const newArray2 = [...newArrayA, ...newArrayB];
console.log(newArray2);
