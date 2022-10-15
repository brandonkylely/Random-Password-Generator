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
  var isUppercase = confirm("Would you like uppercase letters in your password?");
  var isLowercase = confirm("Would you like lowercase letters in your password?");
  var isNumber = confirm("Would you like numbers in your password?");
  var isSpecial = confirm("Would you like special characters in your password?");
  // prompt for password length: 8-128
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");

  // if statement to ensure user enters correct length
  if (passwordLength < 8 || passwordLength > 129) {
    passwordLength = prompt("How many characters would you like your password to be? Please enter a valid number. (8-128)");
  } else {

    // use if statement to add criteria arrays to passwordText
    var includedCharacters = [];

    if (isUppercase) {
      includedCharacters = includedCharacters.concat(uppercase)
    };
    if (isLowercase) {
      includedCharacters = includedCharacters.concat(lowercase)
    };
    if (isNumber) {
      includedCharacters = includedCharacters.concat(numbers)
    };
    if (isSpecial) {
      includedCharacters = includedCharacters.concat(special)
    };

    // console.log(includedCharacters);

    function getRandomInt(min, max) {
      min = Math.ceil(0);
      max = Math.floor(includedCharacters.length);
      return Math.floor(Math.random() * (max - min) + min);
    }

    var password = "";
    // i =1 to get same # as passwordLength
    if (i = 1, i < passwordLength, i++) {
      // randomize letters from includedCharacters by using random numbers to choose array value
      password = password + includedCharacters[getRandomInt(0, includedCharacters.length)]
    }
    return(password)
  }
}

