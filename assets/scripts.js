const rangeEl = document.querySelector('input[type="range"]');
const inludeEl = document.querySelectorAll('input[type="checkbox"]');

const includes = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
};

const strength = [
  ["", ""],
  ["tooweak", "Too Weak"],
  ["weak", "Weak"],
  ["medium", "Medium"],
  ["strong", "Strong"],
];

rangeEl.addEventListener("change", function (event) {
  const lengthEl = document.querySelector(".length");
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

    const spanEl = document.createElement("span");

    indicatorEl.parentNode.children[1].innerText =
      strength[checkedEl.length][1];

    /*  if (event.target.checked) {
    }
    console.log("checked" + event.target.name); */
  });
});
