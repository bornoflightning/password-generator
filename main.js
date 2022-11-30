
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
const letters = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","k","L","l","M",
                "m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];
const bigList = [];

const addNumber = document.getElementById("numbers").checked;
const addSpecial = document.getElementById("special-characters").checked;
const addLetters = document.getElementById("letters").checked;
const addLength = document.getElementById("input").checked;

function addCharacter(id, list) {
    if (id) {
        bigList.concact(list);
        alert(bigList);
    }
    
}


addCharacter(addNumber, numbers);
addCharacter(addSpecial, specialCharacters);
addCharacter(addLetters, letters);
addCharacter(addLength, numbers);
