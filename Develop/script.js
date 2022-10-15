// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword () { 
// prompt for password criteria: upper, lower, number, special
  var isUppercase = confirm("Would you like uppercase letters in your password?")
  var isLowercase = confirm("Would you like lowercase letters in your password?")
  var isNumber = confirm("Would you like numbers in your password?")
  var isSpecial = confirm("Would you like special characters in your password?")
// prompt for password length: 8-128
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)")

// use if statement to add criteria arrays to passwordText

  if (isUppercase) {
    uppercase.concat(passwordText)
  }
  if (isLowercase) {
    lowercase.concat(passwordText)
  }
  if (isNumber) {
    numbers.concat(passwordText)
  }
  if (isNumber) {
    special.concat(passwordText)
  }
}

generatePassword()