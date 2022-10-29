const prompt = require("prompt-sync")({ sigint: true });
obj = {
  Espresso: { milk: 60, cream: 75, latte: 100 },
  Cappuccino: { milk: 80, cream: 90, latte: 120 },
  Latte: { milk: 100, cream: 125, latte: 150 },
};

class CoffeeHouse {
  constructor() {
    this.coffeeName = undefined;
    this.addOn = undefined;
    this.quantity = 1;
  }

  // getter
  get coffeeName() {
    return this.name;
  }

  get addOnName() {
    return this.addOn;
  }

  get quantity(){
    return this.quantity;
  }
  // setter
  set coffeeName(x) {
    this.name = x;
  }

  set addOnName(y) {
    this.addOn = y;
  }

  set quantity(z){
    this.quantity = z;
  }

  bill() {
    let coffee = this.coffeeName;
    let addOn = this.addOnName;
    let total = 0;
    console.log("             Receipt\n--------------------------------");

    console.log(`Item                        Price              Quantity`);

    console.log(`\n${coffee} with ${addOn}            ${obj[coffee][addOn]}`);
    total += obj[coffee][addOn];
    console.log(
      `                   ==================\n                    Total:       ${total}\n                   ==================`
    );
    console.log("Thank You");
  }
}

function menu() {
  console.log("Welcome to Coffee House");
  console.log("Product/Add-on     Milk    Cream    Latte");
  console.log("Espresso            60       75      100");
  console.log("Cappuccino          80       90      125");
  console.log("Latte              100      125      150");
}

let c = new CoffeeHouse();

let coffeeIn, condition;
let count = 0, Quantity;
do {
    console.log("\nEnter 1 for Espresso with milk\nEnter 2 for Espresso with Cream\nEnter 3 for Espresso with latte"
    );
    console.log(
      "\nEnter 4 for Cappuccino with milk\nEnter 5 for Cappuccino with Cream\nEnter 6 for Cappuccino with latte"
    );
    console.log(
      "\nEnter 7 for Latte with milk\nEnter 8 for Latte with Cream\nEnter 9 for Latte with latte"
    );
  
    coffeeIn = parseInt(prompt("what would you like to order? <- "));
    Quantity = prompt("how many would you like to order ?");
    console.log('--------------------------------------------------');
    count++;
    switch (coffeeIn) {
      case 1:
        c.coffeeName = "Espresso";
        c.addOnName = "milk";
    
        break;
      case 2:
        c.coffeeName = "Espresso";
        c.addOnName = "cream";
        break;
      case 3:
        c.coffeeName = "Espresso";
        c.addOnName = "latte";
        break;
      case 4:
        c.coffeeName = "Cappuccino";
        c.addOnName = "milk";
    
        break;
      case 5:
        c.coffeeName = "Cappuccino";
        c.addOnName = "cream";
        break;
      case 6:
        c.coffeeName = "Cappuccino";
        c.addOnName = "latte";
        break;
      case 7:
        c.coffeeName = "Latte";
        c.addOnName = "milk";
    
        break;
      case 8:
        c.coffeeName = "Latte";
        c.addOnName = "cream";
        break;
      case 9:
        c.coffeeName = "Latte";
        c.addOnName = "latte";
        break;
      default:
        console.log("please enter correct input");
    }
    condition = prompt("do you want to continue? y/n");
  }
 while (condition != 'n');

 
console.log(c.coffeeName, c.addOnName);
c.bill();
