
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
const letters = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","k","L","l","M",
                "m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];
let bigList = [];


const button = document.querySelector("#button");
// radiobuttons
const addNumber = document.getElementById("numbers");
const addSpecial = document.getElementById("specialCharacters");
const addLetters = document.getElementById("letters");
// const addLength = document.getElementById("input");


function buttonChecker(button, list) {
    if (button.checked) {
        alert(list);
        for (let i; i < list.length; i++){ 
            bigList.append(list[i]);
        }
        alert("yay");
        alert(bigList);
        }
            }
button.addEventListener("click",()=> {
    buttonChecker(addNumber, numbers);
    buttonChecker(addSpecial, specialCharacters);
    buttonChecker(addLetters, letters);
})          


// const radioButtons  = document.querySelectorAll('input[name="btn"]');
// button.addEventListener("click", ()=> {
//     for(const radioButton in radioButtons){
//         if (radioButton.checked) {
//             alert(radioButton);
//             console.lot(radioButton + "is checked");
//             break;
//         }
//     }

//     })


// addCharacter(addNumber, numbers);
// addCharacter(addSpecial, specialCharacters);
// addCharacter(addLetters, letters);
// addCharacter(addLength, numbers);
