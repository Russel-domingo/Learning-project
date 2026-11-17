// document.getElementById("myh1").textContent = "Hello Tangina mo Po";
// document.getElementById("myp").textContent = "Tangina mo tangina mo tangina mo tangina mo tangina mo tangina mo";

// let name = "Russel";
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = "Your name is " + name;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Is student ${isStudent}`;

// let name;

// document.getElementById("mybutton").onclick = function () {
//     name = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent = `Hello ${name}`;
// }


const pi = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function () {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}
