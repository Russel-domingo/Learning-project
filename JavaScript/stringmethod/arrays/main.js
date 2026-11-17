// ------- CREATING AN ARRAY ---------

const fruits = ["apple", "coconut", "banana"];


// Add at the last index
fruits.push("pineapple");

// Remove the last item from the array
fruits.pop();

// Add an item to the start of an array
fruits.unshift("Tangina mo"); 

// Remove the item at the beginning
fruits.shift();

// Getting the length of the array
let fruitLength = fruits.length;

// Find the index of an element using indexOf() function
let index = fruits.indexOf("coconut"); // returns 2

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// sort an array
const sortedFruits = fruits.sort();

// sort in reverse 
const reverseFruits = fruits.sort().reverse();
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruitLength);
console.log(index);
console.log(sortedFruits);
console.log(reverseFruits);


const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities = data.split(",");
console.log(cities.length);

const commaSeperated = cities.join(",");
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

for (let j = cities.length - 1; j >= 0; j--) {
    console.log(cities[j])
}

console.log(commaSeperated);
