const myObj = { name: "Aditya" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["East", "Sleep", "Game"],
  beverage: {
    morning: "Coffee",
    afternoon: "Nothing",
    evening: "coffee",
  },

  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

console.log(anotherObj.action());

// Inheritance

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrooom!";
  },
};

const car = Object.create(vehicle);
car.door = 4;
car.engine = function () {
  return "Whooosh!";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
  return "Shhhhh.....";
};

console.log(tesla.engine());
