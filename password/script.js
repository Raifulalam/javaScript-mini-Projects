function generatePass(length, includeLowerCase, includeUpperCase, includeNumber, includeSpecialChars) {
    const lowerCasechar = "abcdefghijklmnopqrstuvwxyz;"
    const upperCasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ;"
    const numberchar = "0123456789;"
    const specialChar = "!@#$%^&*()_+~`|}{[]"
    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase ? lowerCasechar : "";
    allowedChar += includeUpperCase ? upperCasechar : "";
    allowedChar += includeNumber ? numberchar : "";
    allowedChar += includeSpecialChars ? specialChar : "";
    // console.log(allowedChar)
    if (length <= 0) {
        return `Password lenght must be at least 1`
    }
    if (allowedChar.length === 0) {
        return `Password must contains at least one Character`
    }
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[index];
    }

    return password;
}
const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSpecialChars = false;
let password = '';
const btn = document.getElementById('generate');
const result = document.getElementById('result');
btn.addEventListener('click', () => {
    password = generatePass(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSpecialChars);
    result.innerHTML = `New password : ` + password
})
console.log(password)