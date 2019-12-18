// Assignment Code
var generateBtn = document.querySelector("#generateButton");
var copyBtn = document.querySelector("#copyButton");

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  if (length < 8 || length > 128) {
    alert("Password length must be between 8-128");
  } else {
    resultEl.innerText = generatePassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      length
    );
  }
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  // Doesn't have a selected type
  if (typesCount === 0) {
    return "";
  }

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

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
