const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass-el1")
let passEl2 = document.getElementById("pass-el2")




function generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < 15; i++) {
        let randomChar = Math.floor(Math.random() * characters.length)
        randomPassword += characters[randomChar]
    }
    return randomPassword
}

function displayGenerated() {
    passEl1.textContent = generatePassword()
    passEl2.textContent = generatePassword()
}

