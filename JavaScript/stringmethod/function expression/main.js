// function declaration = define a reusable block of code that performs a specific task

// function hello() {
//     console.log("hello");
// }

// function square(numbers) {
//     return Math.pow(numbers, 2);
// }

// function cube(numbers) {
//     return Math.pow(numbers, 3);
// }

// function isEven(numbers) {
//     return numbers % 2 ===0;
// }

// function isOdd(numbers) {
//     return numbers % 2 !== 0;
// }

// function sum (total, index) {
//     return total + index;
// }


// function expression = a way to define function as value or variables

// 1. Callback in asynchronous operations
// 2. Higher-order function
// 3. Closure
// 4. Event Lesteners

const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map(function(numbers) {
    return Math.pow(numbers, 2);
});

const cube = numbers.map(function(numbers) {
    return Math.pow(numbers, 3);
});

const evenNumbers = numbers.filter(function(numbers) {
    return numbers % 2 === 0;
});

const oddNumbers = numbers.filter(function(numbers) {
    return numbers % 2 !== 0;
});

const sum = numbers.reduce(function(total, index) {
    return total + index;
})



console.log(square)
console.log(cube);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(sums);