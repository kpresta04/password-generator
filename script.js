// Assignment Code
var generateBtn = document.querySelector("#generateButton");
var copyBtn = document.querySelector("#copyButton");

var userChoice = {
  pwLength: null,
  pwdChars: ["abcdefghijklmnopqrstuvwxyz"]
};

function genPassword() {
  var pwdChars = userChoice.pwdChars;
  var pwdLen = userChoice.pwLength;
  var pwgen = Array(pwdLen)
    .fill(pwdChars)
    .map(function(x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join("");
  console.log(pwgen);
  console.log(pwgen.length);
}

function userPrompts() {
  userResponse = prompt("Enter password length from 8-128");

  userChoice.pwLength = parseInt(userResponse);
  // var pwdChars =
  //   "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // console.log(userChoice.pwLength);
  // console.log(typeof userChoice.pwLength);
  userResponse = confirm("Use special characters?");
  console.log(userResponse);

  if (userResponse) {
    userChoice.pwdChars.push("!@#$&");
  }

  userResponse = confirm("Use numeric characters?");
  console.log(userResponse);

  if (userResponse) {
    userChoice.pwdChars.push("0123456789");
  }

  userResponse = confirm(
    "Mix lower and uppercase? Click cancel for lowercase only"
  );
  console.log(userResponse);

  if (userResponse) {
    userChoice.pwdChars.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  console.log(userChoice.pwdChars);
  // pwgen = randPassword(userChoice.pwLength);
  userChoice.pwdChars = userChoice.pwdChars.join("");
  genPassword();
}

// Write password to the #password input
// function writePassword() {

//   //   var password = generatePassword();
//   //   var passwordText = document.querySelector("#password");

//   //   passwordText.value = password;

//   //   copyBtn.removeAttribute("disabled");
//   //   copyBtn.focus();
// }

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
