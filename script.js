// Assignment Code
var generateBtn = document.querySelector("#generateButton");
var copyBtn = document.querySelector("#copyButton");

var userChoice = {
  pwLength: null,
  specialChar: false,
  numericChar: false,
  lowerCase: true,
  upperCase: false
};

function userPrompts() {
  userResponse = prompt("Enter password length from 8-128");

  userChoice.pwLength = parseInt(userResponse);

  console.log(userChoice.pwLength);
  console.log(typeof userChoice.pwLength);
  userResponse = confirm("Use special characters?");
  userChoice.specialChar = userResponse;

  userResponse = confirm("Use numeric characters?");
  userChoice.numericChar = userResponse;

  userResponse = confirm(
    "Mix lower and uppercase? Click cancel for lowercase only"
  );
  if (userResponse) {
    userChoice.upperCase = true;
  }
}

// Write password to the #password input
function writePassword() {
  userChoice.pwLength = "hello";
  console.log(userChoice.pwLength);
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");

  //   passwordText.value = password;

  //   copyBtn.removeAttribute("disabled");
  //   copyBtn.focus();
}

function copyToClipboard() {
  var copyText = document.getElementById("pgenerator");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied to clipboard");
}

// Add event listener to generate button
generateBtn.addEventListener("click", userPrompts);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);
