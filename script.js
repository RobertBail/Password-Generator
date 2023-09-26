function writePassword() {

generateBtn.addEventListener("click", writePassword, prompt);
var generateBtn = document.querySelector("#generate");
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

var writePassword = function () {

  var generatePassword = prompt("Enter no. of characters: ");

  if (!generatePassword) {
  return;
  }

  var result = Math.random ().toString(18).toUpperCase().slice(2);
  console.log (result);

   alert("New Password: " + result);
   return writePassword(prompt);
   
   }
   
   writePassword()

