const input = document.getElementById("input");
const farenheit = document.getElementById("fahrenheit");
const celcius = document.getElementById("celcius");
const result = document.getElementById("result");

let temp;

function convert() {

    if(farenheit.checked) {
        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "°F"
    } 
    else if(celcius.checked){
        temp = Number(input.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + "°C";
    }else {
        result.textContent = "Select a Unit";
    }
}