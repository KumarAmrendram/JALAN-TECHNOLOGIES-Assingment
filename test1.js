const prompt = require("prompt-sync")({ sigint: true });

obj = {
  espresso: { milk: 60, cream: 75, latte: 100 },
  cappuccino: { milk: 80, cream: 90, latte: 120 },
  Latte: { milk: 100, cream: 125, latte: 150 },
};

class CoffeeHouse {
  constructor() {
    this.coffeeName = undefined;
    this.addOn = undefined;
    this.quantity = undefined;
  }

  // getter
  get coffeeName() {
    return this.name;
  }

  get addOnName() {
    return this.addOn;
  }

  get Quantity(){
    return this.quantity;
  }


  // setter
  set coffeeName(x) {
    this.name = x;
  }

  set addOnName(y) {
    this.addOn = y;
  }

  set Quantity(z){
    this.quantity = z;
  }

  buyCoffee(cName,aName,quantity){
    this.coffeeName = cName;
    this.addOnName = aName;
    this.quantity = quantity;
  }


  bill() {
    console.log(this.coffeeName, this.addOnName, this.quantity);
  }
}

let c = new CoffeeHouse();
c.buyCoffee('espresso','milk',1);
c.bill();

console.log(c);