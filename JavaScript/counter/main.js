//counter

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("counterLabel");
let counter = 0;

decrease.onclick = function () {
    counter--;
    countLabel.textContent = counter;
}

reset.onclick = function () {
    counter = 0;
    countLabel.textContent = counter;
}

increase.onclick = function () {
    counter++;
    countLabel.textContent = counter;
}
