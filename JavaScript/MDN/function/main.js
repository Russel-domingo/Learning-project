const textBox = document.querySelector("#textBox");
const outPut = document.querySelector("#outPut");

// textBox.addEventListener("keydown", function (event) {
//     outPut.textContent = `You pressed ${event.key}.`;
// });

textBox.addEventListener("keydown", (event) =>{
    outPut.textContent = `You pressed ${event.key}.`;
});