function generatePassword (length, lowerCase, upperCase, numbers, symbols) {

    const loweCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+=";

    let allowdPassword = "";
    let password = "";

    if (lowerCase) {
        allowdPassword += loweCaseChars;
    } else {
        allowdPassword += "";
    }

    if (upperCase) {
        allowdPassword += upperCaseChars;
    } else {
        allowdPassword += "";
    }

    if (numbers) {
        allowdPassword += numbersChars;
    } else {
        allowdPassword += "";
    }

    if (symbols) {
        allowdPassword += symbolsChars;
    } else {
        allowdPassword += "";
    }
    
    if (length <= 0) {
        return '(Password length must be al least 1)';
    }
    
    if (allowdPassword.length === 0) {
        return '(At lease 1 set of characters needs to be selecterd)';
    }

    for (let i = 0; i < length; i++) {

        
        const random = Math.floor(Math.random() * allowdPassword.length) + 1;
        password += allowdPassword[random];
    }
    return password;
}


const passwordLength = 12;
const includeLoweCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLoweCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);