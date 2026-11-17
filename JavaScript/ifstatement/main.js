const submit = document.getElementById("submit");
const input = document.getElementById("age");
const label = document.getElementById("h2");

let age;

submit.onclick = function() {
    age = input.value;
    age = Number(age);
    
    if(age >= 100) {
        label.textContent = `Your to old to enter this website`;
    } else if (age >= 18) {
        label.textContent = `Your can enter this website`;
    } else if (age < 0) {
        label.textContent = `Your age can't be 0`;
    } else {
        label.textContent = `You must be 18+ to enter this website`;
    }
}
