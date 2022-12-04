

// here we create the lists holding the elements that will be chosen to create a password
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                 "w", "x", "y", "z"];
const upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q,", "R", "S", "U", "V",
                    "W", "X", "Y", "Z"];

// variables used for test() function as RegExp
const numberCode = /[0-9]/;
const specialCode = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const lowerCode = /[abcdefghijklmnopqrstuvwxyz]/;
const upperCode = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;

// master list where all characters accepted will be added to be used for password generator
let bigList = [];

// variable for main submit button that requests the creation of a password
const button = document.querySelector("#button");
// radiobutton variables 
const addNumber = document.getElementById("numbers");
const addSpecial = document.getElementById("specialCharacters");
const addLowerCase = document.getElementById("lowerCase");
const addUpperCase = document.getElementById("upperCase");



// this function inserts items from a new list into a desired (existingList) list and returns the new edited list
// used to insert lists of letters and characters into master list that is empty at the moment
function addList(existingList, newList) {
    for (let i = 0; i < newList.length; i++){
        existingList.push(newList[i]);
    };
};

//this function is in charge of 3 things;
// first it creates an existing link between the desired list above and a button
// second it checks if a specific radio button is checked to further engaged the list associated with that radio button
// third it runs the previosly metntioned addList() function to add the asociated list to the main list called bigList, and returns it
function buttonChecker(button, list) {
    // this checks which radio buttons are checked to include certain characters
    if (button.checked) {    
    // this returns the list to ensure it is changed and characters are not lost
       return addList(bigList, list);        
    };        
};

// this function has the job of checking to ensure that the password the give character atleast once
function passwordChecker(password, button, flag) {    
    if (button.checked == false) {
        return true;
    } else {              
        if(flag.test(password)== true) {            
            return true;
        }else {
            return false;   
        };
    };
};

// checks to see
function buttonChecker2(button){
    if (button.checked) {
        return button.checked == false;
    };
};

// this function is in charge of creating the random password, it uses the previouly provided bigList with all the characters inside
// to generate it requires the argument of a list to pick the items from using and index, and an argument of how long the list should be
// the list is provided by the proejcts master list and the length by the varialbe attached to the text box in app
function passwordGenerator(list, listLength) {
    // create an array to store randomly created characters
    let password = [];
    // max length is dictated by argument of lenght
    max = listLength;
    // this for loop runs for the length argument provided
    for (let i = 0; i< listLength; i++){
        // a random number is created which will be used to access an index location on the master list, 
        //thus we give it the length of master list, or rather bigList
        let number = Math.floor(Math.random() * list.length);
        // here we add the randomly created character to the password
        password.push(list[number]);
    };
    return password; 
};

// this fucntion displays the password to the main screen
// created a separate a fucntion to keep code clean and not run under callback for button.Eventlistener direclty
function passwordDisplay(length) {
    // functions checking for clicked buttons along with paired lists as arguments
    buttonChecker(addNumber, numbers);
    buttonChecker(addSpecial, specialCharacters);
    buttonChecker(addLowerCase, lowerCase);
    buttonChecker(addUpperCase, upperCase);
    // we want to keep bad users from breaking the app, here we check to ensure that the input in the text box is a digit 
    // before continuing, provides an alert if input is wrong.
    if (isNaN(length)){
        alert("please type in a number, that is not a number")
    } else if(length < 8 || length > 128){
        alert("your digit needs to be between 8 and 128")
    } else {
        // here we have a sentinel that ensures that atleast 1 of the radio buttons was chosen, if not, an alert is given.
        if (bigList.length < 1) {
            alert("you need to choose an option below");
        } else{

            // use join to return password as a single string instead of list with strings separated by commas
            const password = passwordGenerator(bigList, length).join("");

            return password;

        };
        
    };
};


// here we have a listener that puts it all together when our submit button is pressed 
button.addEventListener("click",(e)=> {
    // this prevents page from clearing after clicking submit
    e.preventDefault();
    // this variable requests the length size of list, which was provided as input in this text form and assigns the provided id by value
    var addLength = parseInt(document.getElementById("input").value);
       
    // we store the password provided and provide the argument for the variable of length created 
    let password = passwordDisplay(addLength);   

    // these variables are assigned the boolean provided by functions to ensure each character type happens atleast once
    let nums = passwordChecker(password, addNumber, numberCode );
    let spec =passwordChecker(password, addSpecial, specialCode);
    let lows = passwordChecker(password, addLowerCase, lowerCode);
    let upps = passwordChecker(password, addUpperCase, upperCode);

    // this adds our password to HTML file and posts on front page the result
    document.getElementById("finalPassword").innerHTML = "YOUR PASSWORD IS:   " + password;  
});
