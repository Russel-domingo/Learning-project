
// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");
// const reset = document.getElementById("reset");
// const label = document.getElementById("count");

// let count = 0;

// increase.onclick = function() {
//     count++;
//     label.textContent = count;
// }

// decrease.onclick = function() {
//     count--;
//     label.textContent = count;
// }

// reset.onclick = function() {
//     count = 0;
//     label.textContent = count;
// }


let count = 0;

document.getElementById("increase").onclick = function() {
    count++;
    document.getElementById("count").textContent = count;
}

document.getElementById("decrease").onclick = function() {
    count--;
    document.getElementById("count").textContent = count;
}

document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("count").textContent = count;
}