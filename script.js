function init (){
  writePassword(prompt);
}

function writePassword(prompt) {

generateBtn.addEventListener("click", prompt);
console.log(prompt);
var generateBtn = document.querySelector("#generate");
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

var writePassword = function (result) {

  var generatePassword = prompt("Enter no. of characters: ");

  if (!generatePassword) {
  return;
  }
  
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&* '.split;
  console.log(characters);
  var result = Math.random ().toString(30).slice(2);
  console.log ("New Password: " + result);
  
   alert("New Password: " + result);
   return writePassword(prompt);
  }
   
   writePassword()

