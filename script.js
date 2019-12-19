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

var checkBoxes = {
  hasLower: true,
  hasUpper: true,
  hasSymbol: true,
  hasNumber: true
};
copyBtn.addEventListener("click", copyToClipboard);

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  checkBoxes.hasLower = lowercaseEl.checked;
  checkBoxes.hasUpper = uppercaseEl.checked;
  checkBoxes.hasNumber = numbersEl.checked;
  checkBoxes.hasSymbol = symbolsEl.checked;

  if (length < 8 || length > 128) {
    alert("Password length must be between 8-128");
  } else {
    resultEl.innerText = generatePassword(
      checkBoxes.hasLower,
      checkBoxes.hasUpper,
      checkBoxes.hasNumber,
      checkBoxes.hasSymbol,
      length
    );
  }
});

function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );
  // console.log(typesArr);

  // Do nothing if no options selected
  if (typesCount === 0) {
    alert("No options selected");
    return "";
  }

  // Loop adds 1 char for each type while i < length
  for (var i = 0; i < length; i++) {
    if (checkBoxes.hasUpper) {
      generatedPassword += getRandomUpper();
    }
    if (checkBoxes.hasLower) {
      generatedPassword += getRandomLower();
    }

    if (checkBoxes.hasNumber) {
      generatedPassword += getRandomNumber();
    }
    if (checkBoxes.hasSymbol) {
      generatedPassword += getRandomSymbol();
    }
  }

  // console.log(generatedPassword);

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

function copyToClipboard() {
  var copyText = document.getElementById("result");
  const password = copyText.textContent;

  if (!password) {
    return;
  }

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied to clipboard");
}
