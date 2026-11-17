// rest parametrs = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into array

//                  spread = expands an array into seperate elements
//                  rest = bundles seperate elements into an array


function sum(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

function getAverage(...numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return Math.floor(result / numbers.length);

}

let number1 = 10;
let number2 = 20;


const result = sum(number1, number2);
const average = getAverage(80,75,79,80,90,87);

console.log(average);
console.log(result);