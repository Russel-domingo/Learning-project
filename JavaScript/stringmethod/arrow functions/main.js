// arrow functions = a consise way to write function expression good for simple function that you use only once
//                   (parameters) => some code

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 2));

const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((elements) => elements % 2 !== 0);
const total = numbers.reduce((accumulator, index) => accumulator + index);

console.log(squares);
console.log(evenNums);
console.log(oddNums);
console.log(total);