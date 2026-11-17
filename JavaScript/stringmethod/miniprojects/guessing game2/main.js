const randomNumber = Math.floor(Math.random() * 100 + 1);

let attempt = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt("Please enter a number between 1 and 100");
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    } else if (guess > 100 || guess < 1) {
        window.alert("Please enter a number between 1 and 100.");
    } else {
        attempt++; 

        if (guess === randomNumber) {
            window.alert(`Congratulations! It took you ${attempt} attempts.`);
            running = false;
        } else if (guess > randomNumber) {
            window.alert("TOO HIGH!");
        } else if (guess < randomNumber) {
            window.alert("TOO LOW!");
        }
    }
}
