const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+"
};

const length = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

length.addEventListener("input", function () {
    lengthValue.textContent = length.value;
});

function generatePassword() {

    let chars = characters.lowercase;
    let password = "";

    if (document.getElementById("uppercase").checked) {
        chars += characters.uppercase;
    }

    if (document.getElementById("numbers").checked) {
        chars += characters.numbers;
    }

    if (document.getElementById("symbols").checked) {
        chars += characters.symbols;
    }

    for (let i = 0; i < length.value; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
    document.getElementById("message").textContent = "Password generated! ✅";
}

function copyPassword() {

    const password = document.getElementById("password").value;

    if (password === "") {
        document.getElementById("message").textContent =
            "Pehle password generate karo!";
        return;
    }

    navigator.clipboard.writeText(password);

    document.getElementById("message").textContent =
        "Password copied! 📋";
}

generatePassword();