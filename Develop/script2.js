//Characters for Password
var generateBtn = document.querySelector("#generate");

var characterLength = 4;
var choiceArray = [];


var specialSymbols = ["!", "#", "$", "%"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function prompt () {
choiceArray = [];

userChoice = window.prompt("Choose a password length between 8 and 128");


if (userChoice < 8 || userChoice > 128) {
  alert ("You have to choose a number between 8 and 128")
  return false;
}

if (confirm("Do you want to include lowercase letters?")) {
  choiceArray = choiceArray.concat(lowerCaseLetters);
}

if (confirm("Do you want to include Uppercase Letters?")) {
  choiceArray = choiceArray.concat(upperCaseLetters);
}

  if (confirm("Do you want to include special characters?")) {
    choiceArray = choiceArray.concat(specialSymbols);
  }
  if (confirm("Do you want to include numbers?")) {
    choiceArray = choiceArray.concat(numbers);
  }
  return true;
}

function generatePassword(){
  var password = "";
  for(var i = 0; i < userChoice; i++) {
  var random = Math.floor(Math.random() * choiceArray.length);
  password = password + choiceArray[random];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var promptTrue = prompt();

  if (promptTrue) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
