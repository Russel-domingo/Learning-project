//------------------Constructor---------------

function Car(maker, model, year, color) {
    this.maker = maker;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car('ford', 'Mustang', 2024, 'blue');
const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

console.log(car1.maker);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car1.drive();
car2.drive();
car3.drive();

// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// console.log("Date is: " + day + "/" + month + "/" + year);



