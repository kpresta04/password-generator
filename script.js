// Assignment Code
var generateBtn = document.querySelector("#generateButton");
var copyBtn = document.querySelector("#copyButton");

var userChoice = {
  pwLength: null,
  pwdChars: ["abcdefghijklmnopqrstuvwxyz"],
  lowerChars: "abcdefghijklmnopqrstuvwxyz",
  numberChars: "123456789",
  upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

function pwChecker(password, subArray) {
  //Checks each character in the array if its included in the password
  for (var i = 0; i < subArray.length; i++) {
    if (password.includes(subArray[i])) {
      console.log("Pw contains " + subArray[i]);
      return true;
    }
  }
}

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
  var valid = false;
  var lowerSub = userChoice.lowerChars.split("");
  var numberSub = userChoice.numberChars.split("");
  var specialSub = ["!", "@", "#", "$", "&", "*"];
  var upperSub = userChoice.upperChars.split("");

  console.log(lowerSub);
  console.log(pwChecker(pwgen, lowerSub));

  pwChecker(pwgen, numberSub);
  pwChecker(pwgen, specialSub);
  pwChecker(pwgen, upperSub);

  // var specialSub = ["!", "@", "#", "$", "&", "*"],
  //   length = specialSub.length;
  // while (length--) {
  //   if (pwgen.indexOf(specialSub[length]) != -1) {
  //     console.log("Pw contains special characters");
  //     valid = true;
  //   }
  // }
  writePassword(pwgen);
  userChoice.pwdChars = ["abcdefghijklmnopqrstuvwxyz"];
}

function userPrompts() {
  //A series a prompts to get criteria for the password
  userResponse = prompt("Enter password length from 8-128");
  console.log(typeof userResponse);
  console.log(userResponse);

  if (userResponse === null) {
    //pass because user pressed Cancel
    //
  } else {
    while (
      //Verify user entered a valid number

      isNaN(Number(userResponse)) ||
      Number(userResponse) < 8 ||
      Number(userResponse) > 128
    ) {
      userResponse = prompt(
        "Invalid input. Enter a number from 8-128 for password length"
      );
    }

    userChoice.pwLength = parseInt(userResponse);

    userResponse = confirm("Use special characters?");
    console.log(userResponse);

    if (userResponse) {
      userChoice.pwdChars.push("!@#$&*");
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
    // console.log(userChoice.pwdChars[0].split(""));
    // pwgen = randPassword(userChoice.pwLength);
    userChoice.pwdChars = userChoice.pwdChars.join("");
    genPassword();
  }
}
// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#pgenerator");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
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
