
function generatePassword() {
    const lowerCase = document.getElementById("lowerCase");
    const upperCase = document.getElementById("upperCase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");
    const result = document.getElementById("result");
    const passwordLength = document.getElementById("passwordLength").value;

    const Lowercase = "abcdefghijklmnopqrstuvwsyz";
    const Uppercase = "ABCDEFGHIKLLMNOPQRSTUVWSYZ";
    const Number = "0123456789";
    const Symbols = "!@#$%^&*()_+";

    let allowedPassword = "";
    let password = "";

    if(lowerCase.checked) {
        allowedPassword += Lowercase;
    } else {
        allowedPassword += "";
    }

    if(upperCase.checked) {
        allowedPassword += Uppercase;
    } else {
        allowedPassword += "";
    }

    if(numbers.checked) {
        allowedPassword += Number;
    }else {
        allowedPassword += "";
    }

    if (symbols.checked) {
        allowedPassword += Symbols;
    } else {
        allowedPassword += "";
    }

    if(allowedPassword.length === 0) {
        result.textContent = `at least 1 character needed`;
    }

    if(passwordLength <= 5) {
        result.textContent = `The length of the password must be 6 above`
    }


    for(let i = 0; i < passwordLength; i++) {
        const randomChar = Math.floor(Math.random() * allowedPassword.length);
        password += allowedPassword[randomChar];
    }

    result.textContent = password;

    


}