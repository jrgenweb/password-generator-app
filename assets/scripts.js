const rangeEl = document.querySelector('input[type="range"]');
const inludeEl = document.querySelectorAll('input[type="checkbox"]');

const btnGenerate = document.querySelector(".btn-generate");
btnGenerate.addEventListener("click", handleBtnGenerate);
const btnCopy = document.querySelector(".btn-copy");
btnCopy.addEventListener("click", handleBtnCopy);

const lengthEl = document.querySelector(".length");

const resultIpt = document.getElementById("result_input");

const alphabets = "ABCDEFGHIJKLMNOPQRSTUYVWZ";
const symbols = "!()-.?[]_`~;:@#$%^&*+=";

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

inludeEl.forEach((element) => {
  element.addEventListener("click", function (event) {
    const checkedEl = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    console.log(checkedEl.length);

    const indicatorEl = document.querySelector(".generator__indicators");
    indicatorEl.dataset.strength = strength[checkedEl.length][0];

    indicatorEl.parentNode.children[1].innerText =
      strength[checkedEl.length][1];

    /*  if (event.target.checked) {
    }
    console.log("checked" + event.target.name); */
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
  btnCopy.querySelector("span").classList.remove("show");
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

  const divide = Math.floor(length / types.length);
  if (divide === 0 || divide === Infinity) {
    return;
  }

  let firstCycle = true;

  /** Első nekifutás */

  /* utána random választunk a lehetőségek közül */

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

  console.log(result);
  resultIpt.value = result;
}
