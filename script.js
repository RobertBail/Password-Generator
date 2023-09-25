function writePassword() {

generateBtn.addEventListener("click", writePassword);
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

  const result= Math.random ().toString(36).substring(2, 30);
  console.log (result);

   alert("New Password: " + result);
   return writePassword(prompt);
   
   }
   
   writePassword()


