class Pizza {
  constructor(size) {
    (this.size = size), (this.crust = "Original");
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzacrust) {
    this.crust = pizzacrust;
  }
}

class speacialityPizza extends Pizza {
  constructor(size) {
    super(size);
    this.type = "Non-Veg";
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} Pizza has 8 slices`);
  }
}

const mySpeciality = new speacialityPizza("Medium");
mySpeciality.slice();
