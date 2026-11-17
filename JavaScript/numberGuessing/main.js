
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min ;

console.log(answer);

let attemp = 0;
let guess;
let running = true;

while(running) {

    guess = window.prompt(`Guess the nubmer between ${min} - ${max}`);
    guess = Number(guess);
    if(isNaN(guess)) {
        window.alert(`The ${guess} Is not a number`);
    }
    if(guess < min || guess > max) {
        window.alert(`PLease enter a valid number`);
    }

    if(guess < answer) {
        window.alert(`To low Try again `);
        attemp++;
    } else if(guess > answer) {
        window.alert(`To Hig Try again `);
        attemp++;
    } else {
        window.alert(`Correct the answer was ${answer}. It took you ${attemp}`);
        running = false;
    }

}





