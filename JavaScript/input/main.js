let user;
let age;
document.getElementById("submit").onclick = function() {
    user = document.getElementById("name").value;
    age = document.getElementById("age").value;
    age = Number(age)
    document.getElementById("h1").textContent = `Hello ${user} Your ${age} Years old`;
    console.log(age, typeof age);
}