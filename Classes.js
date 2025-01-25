class Pizza {
  crust = "Original";
  #sauce = "Traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaSize) {
    this.crust = pizzaSize;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} Sauce ${this.#size} pizza`
    );
  }
}

const myPizza = new Pizza("Large");
myPizza.hereYouGo();
console.log(myPizza.crust);
