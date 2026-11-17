// clss = provides a more structure and cleaner way to 
//        work with objects compare to traditional constructor function
//        ex. static keyword, encapsulation, inheritance


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display_Product() {
        console.log("Product: " + this.name);
        console.log("Price: " + this.price.toFixed(2));
    }

    calculateTotal(saleteTax) {
        return this.price + (this.price * saleteTax);
    }

}

const tax = 0.10;

const product1 = new Product("Keyboard", 600);
const product2 = new Product("Gaming Chair", 2500);
const product3 = new Product("Mouse Pad", 500);

const totalPriceP1 = product1.calculateTotal(tax);
const totalPriceP2 = product2.calculateTotal(tax);
const totalPriceP3 = product3.calculateTotal(tax);
product1.display_Product();
console.log(totalPriceP1.toFixed(2));
product2.display_Product();
console.log(totalPriceP2.toFixed(2));
product3.display_Product();
console.log(totalPriceP3.toFixed(2));

