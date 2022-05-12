//given a string of characters, return a string of numbers made up of each
//character's corresponding TWO DIGIT number (a=01, b=02, etc)

let alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");

let finalOutputArray = [];

let submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", finalConversion);
let clearOutputButton = document.getElementById("clearOutputButton");
    clearOutputButton.addEventListener("click", clearAll);
let outputArea = document.getElementById("outputBox");


function finalConversion(){
    // outputArea.innerHTML = "";
    pushToArray(stringToArray(lowerCaseString(getUserInput())));
    outputToPage(createOutputString(finalOutputArray));
    finalOutputArray = [];
}

function clearAll(){
    document.getElementById("textInputBox").value = "";
    outputArea.innerHTML = "";
}

function convertChar(char){  //given a char, go through alphaArray and return its corresponding number as a string
    let numOfChar = (alphaArray.indexOf(char) + 1).toString()
    if(numOfChar.length < 2){
        return "0"+numOfChar;
    }else{
        return numOfChar;
    }
}
function outputToPage(string){
    outputArea.innerHTML = string;
}

function clearOutputBox(){
    outputArea.innerHTML = "";
}

function getUserInput(){
    let userInput = document.getElementById("textInputBox").value;
    return userInput;
}

function lowerCaseString (string){
    return string.toLowerCase();
}

function stringToArray (string){
    return string.split("");
}

function pushToArray(array){
    for(let i=0;i<array.length;i++){
        if(alphaArray.indexOf(array[i])>-1){
            finalOutputArray.push(convertChar(array[i]));
        }else{
            finalOutputArray.push(array[i]);
        }
        
    }
}

function createOutputString(array){
    return array.join("");
}





