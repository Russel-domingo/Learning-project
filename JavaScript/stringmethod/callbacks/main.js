// CALLBACK = a function that is passed as an argument
//            to another function.
//              
//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interactions with databases
sum(displayPage, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result)
}

function displayPage(result) {
    document.getElementById("myh1").textContent = result;
}