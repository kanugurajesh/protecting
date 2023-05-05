const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

function randomgenerator() {
    return Math.floor(Math.random() * characters.length);
}

function generatePassword() {
    let password = "";
    for (let i = 0; i < 16; i++) {
        password += characters[randomgenerator()];
    }
    return password;
}

let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");

document.getElementsByClassName("middle")[0].addEventListener("click", function () {
    text1.textContent = generatePassword();
    text2.textContent = generatePassword();
})

document.getElementById("icon1").addEventListener("click", function () {
    navigator.clipboard.writeText(text1.textContent);
    alert("Copied to clipboard");
})

document.getElementById("icon2").addEventListener("click", function () {
    navigator.clipboard.writeText(text2.textContent);
    alert("Copied to clipboard");
})