//rest parameters = (...rest) allow a function work with a variable number of argument by bundling them into an array
//                            spread = expands an array into seperate elements
//                            rest = bundles seperate elements into array

function sum(...numbers) { // you can pass many variable in this function

    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

function average(...grade) {

    let result = 0;
    for (let i = 0; i < grade.length; i++) {
        result += grade[i];
    }
    return result / grade.length;
}
let grades = average(80,90,84,86,88,89,80);
let numbers = sum(1,2,3,4,5);
console.log(grades.toFixed(2));
console.log(numbers);
