
function rollDice() {

    const rollOfDice = document.getElementById("rollOfDice").value;
    const result = document.getElementById("result");
    const diceImages = document.getElementById("diceImages");

    let results = [];
    let images = [];

    for(let i = 0; i < rollOfDice; i++) {
        const dice = Math.floor(Math.random() * 6) + 1;
        results.push(dice);
        images.push(`<img src="photos/Dice-${dice}-b.svg.png">`);

    }
    result.textContent = `Dice: ${results.join("-")}`;
    diceImages.innerHTML = images.join("");


}