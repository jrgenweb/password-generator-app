const rangeEl = document.querySelector('input[type="range"]');
const inludeEl = document.querySelectorAll('input[type="checkbox"]');

const btnGenerate = document.querySelector(".btn-generate");
btnGenerate.addEventListener("click", handleBtnGenerate);
const btnCopy = document.querySelector(".btn-copy");
btnCopy.addEventListener("click", handleBtnCopy);

const lengthEl = document.querySelector(".length");
const resultIpt = document.getElementById("result_input");

const alphabets = "ABCDEFGHIJKLMNOPQRSTUYVWZ"; //letters
const symbols = "!()-.?[]_`~;:@#$%^&*+="; //allowed symbols

const strength = [
  ["", ""],
  ["tooweak", "Too Weak"],
  ["weak", "Weak"],
  ["medium", "Medium"],
  ["strong", "Strong"],
];

rangeEl.addEventListener("change", function (event) {
  const val = event.target.value;
  lengthEl.innerText = val;
});

/**add event listener for checkboxes */
inludeEl.forEach((element) => {
  element.addEventListener("click", function (event) {
    const checkedEl = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    const indicatorEl = document.querySelector(".generator__indicators");
    indicatorEl.dataset.strength = strength[checkedEl.length][0]; //setting dataset for css

    indicatorEl.parentNode.children[1].innerText =
      strength[checkedEl.length][1]; //show text for equivalent strength
  });
});

function handleBtnCopy(e) {
  e.preventDefault();
  navigator.clipboard.writeText(resultIpt.value);
  btnCopy.querySelector("span").classList.add("show");
}
function handleBtnGenerate(e) {
  e.preventDefault();
  generate();
  btnCopy.querySelector("span").classList.remove("show"); //hide copied text
}

function getRandomAlphabet(uppercase = false) {
  const randomIndex = Math.round(Math.random() * (alphabets.length - 1));

  if (uppercase) return alphabets[randomIndex];
  return alphabets[randomIndex].toLowerCase();
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
function getRandomSymbol() {
  const randomIndex = Math.round(Math.random() * (symbols.length - 1));

  return symbols[randomIndex];
}

function generate() {
  const includes = document.querySelectorAll('input[name="includes"]:checked');
  let length = Number(lengthEl.innerText);
  let types = [];
  let result = "";
  includes.forEach((element) => {
    types.push(element.dataset.type);
  });

  result.length != length;
  while (result.length != length) {
    const randomTypeIndex = Math.round(Math.random() * (types.length - 1));

    switch (types[randomTypeIndex]) {
      case "uppercase":
        result += getRandomAlphabet(true);
        break;
      case "lowercase":
        result += getRandomAlphabet(false);
        break;
      case "symbol":
        result += getRandomSymbol();
        break;
      case "number":
        result += getRandomNumber();
        break;
      default:
        break;
    }
  }

  resultIpt.value = result;
}
