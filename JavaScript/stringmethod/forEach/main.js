// forEach() = method used to iterate over the elements
//             of an array and apply specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array provided

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(toCapitalize);
fruits.forEach(display);

function toUpperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function toLowecase(element, index, array) {
    array[index] = element.toLowecase();
}

function toCapitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element) {
    console.log(element)
}