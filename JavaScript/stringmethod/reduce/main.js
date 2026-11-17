// .reduce() = reduce the element of an array to a single value

const numbers = [10, 20, 30, 40, 50, 60, 70];

let total = numbers.reduce(sum);
let maxNumber = numbers.reduce(getMax);
let minNumber = numbers.reduce(getMinimum);

console.log(total); // 280
console.log(maxNumber); // 70
console.log(minNumber); // 10
function sum (total, index) {
    return total + index;
}


function getMax(max, element) {
    return Math.max(max, element);
}

function getMinimum(min, index) {
    return Math.min(min, index);
}