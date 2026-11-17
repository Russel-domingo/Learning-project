// .filter() = creates a new aray by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let words = ["tanginamo", "gago", "inutil", "tarantado", "haliparot"];

// let evenNumbers = numbers.filter(isEven);
// let oddNumbers = numbers.filter(isOdd);

// console.log(evenNumbers);
// console.log(oddNumbers);

let shortWords = words.filter(getshortWords);
let longWords = words.filter(getlongWords);

console.log(shortWords);
console.log(longWords);
function isEven(elements) {
    return elements % 2 === 0;
}

function isOdd(elements) {
    return elements % 2 !== 0;
}

function getshortWords(elements) {
    return elements.length <= 6;
}

function getlongWords(elements) {
    return elements.length > 6;
}