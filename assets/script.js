var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*";
function init() {

generateBtn.addEventListener("click", function(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
});


}

function random (str){
  return str[Math.floor(Math.random() * str.length)] 
}

var generatePassword = function () {
var password = ""
var passwordOptions = ""

  var length = parseInt(prompt("Please enter a length between 8 and 128 characters: ")); 

while (length < 8 || length > 128 || isNaN(length) ) {
  length = parseInt(prompt("Please enter a length between 8 and 128 characters: "))
  }
  
var includeUppercase = confirm("Do you want your password to contain uppercase?")
var includeLowercase = confirm("Do you want your password to contain lowercase?")
var includeSpecialChar = confirm("Do you want your password to contain special characters?")
var includeNumbers= confirm("Do you want your password to contain numbers?")
if (includeUppercase) {
password += random(uppercase)
passwordOptions += uppercase
}
if (includeLowercase) {
  password += random(lowercase)
  passwordOptions += lowercase
  }
  if (includeSpecialChar) {
    password += random(special)
    passwordOptions += special
    }
  if (includeNumbers) {
      password += random(numbers)
      passwordOptions += numbers
      }
   for (var i = password.length; i < length ; i++) {
    password += random(passwordOptions)
   }
   return password

  }
  

   init()
