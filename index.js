

let allButtons = document.querySelectorAll(".button")
let button = document.getElementById("button")
let randomNumber = document.getElementById("firstBox")
let randomNumber2 = document.getElementById("secondBox")
let lengthButton = document.getElementById("setLength")
let copyButton = document.getElementById ("copy1")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let placeHolder = " "
let passwordLength = 15;

function setL(){
    let inputVar = document.getElementById("input").value
    passwordLength = inputVar;
}

lengthButton.addEventListener('click', setL) 

allButtons.forEach(allButtons => allButtons.addEventListener("mouseover", function(){
    allButtons.classList.toggle('buttonOver')
}))

allButtons.forEach(allButtons => allButtons.addEventListener("mouseleave", function(){
    allButtons.classList.toggle('buttonOver')
}))

button.addEventListener("mousedown", function randoLetters(){
    firstBox.classList.add('fit')
    placeHolder = " "
        for(let i = 0; i <= passwordLength; i++){
        let rand = Math.floor(Math.random()*characters.length);
        placeHolder += characters[rand]
        }
    randomNumber.textContent = placeHolder
})
button.addEventListener("mousedown", function randoLetters(){
    secondBox.classList.add('fit')
    placeHolder = " "
    for(let i = 0; i <= passwordLength; i++){
    let rand = Math.floor(Math.random()*characters.length);
    placeHolder += characters[rand]
    }
    randomNumber2.textContent = placeHolder
})

function copyText(TextToCopy){
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
    
    alert("Copied the text: " + TempText.value);
}
copyButton.addEventListener("click" , copyText)