const submit = document.getElementById("sumbit");
const labelSubscribe = document.getElementById("labelSubscribe");
const labelPayment = document.getElementById("labelPayment");
const subScribe = document.getElementById("subscribe");
const gcash = document.getElementById("gcash");
const paymaya = document.getElementById("paymaya");
const cash = document.getElementById("cash");

submit.onclick = function () {

    if(subScribe.checked) {
        labelSubscribe.textContent = `You are subscribe!`;
    } else {    
        labelSubscribe.textContent = `You are Not subscribe!`;
    }

    if(gcash.checked) {
        labelPayment.textContent = `You are paying with gcash`;
    } else if (paymaya.checked) {
        labelPayment.textContent = `You are paying with paymaya`;
    } else if (cash.checked) {
        labelPayment.textContent = `You are paying with cash`;
    } else {
        labelPayment.textContent = `Please select a payment`;
    }
}