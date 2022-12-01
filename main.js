
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


// this function inserts items from a new list into a desired (existingList) list and returns the new edited list
function addList(existingList, newList) {
    for (let i = 0; i < newList.length; i++){
        existingList.push(newList[i]);
    }
    console.log(" this is the big List " + existingList);
    }

//this function is in charge of 3 things;
// first it creates an existing link between the desired list above and a button
// second it checks if a specific radio button is checked to further engaged the list associated with that radio button
// third it runs the previosly metntioned addList() function to add the asociated list to the main list called bigList, and returns it
function buttonChecker(button, list) {
    if (button.checked) {    
       return addList(bigList, list);        
        }        
    }

// this function is in charge of creating the random password, it uses the previouly provided bigList with all the characters inside
// to generate it
function passwordGenerator(list) {
    let password = [];
    max = list.length;
    for (let i = 0; i< 12; i++){
        let number = Math.floor(Math.random() * max);
        password.push(list[number]);
    }
    return password; 
}
button.addEventListener("click",()=> {
    buttonChecker(addNumber, numbers);
    buttonChecker(addSpecial, specialCharacters);
    buttonChecker(addLetters, letters);
    
    if (bigList.length < 1) {
        alert("you need to choose an option below");
    } else{
        const password = passwordGenerator(bigList);
        alert(password);
    };    
})          
