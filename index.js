const screenDisplay = document.getElementById("screen-span");
console.log(screenDisplay);
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("delete");

let calculation = [];
let accumulativecalculation;
function calculate(button) {
  const value = button.textContent;

  if (value == "AC") {
    calculation = [];
    screenDisplay.textContent = "0";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativecalculation);
  } else if (value === "DEL") {
    const screentext = screenDisplay.textContent;
    console.log(screenDisplay.textContent.length);
    if (screenDisplay.textContent.length > 1) {
      screenDisplay.textContent = screentext.substring(0, screentext.length - 1);
    } else {
      screenDisplay.textContent = "0";
    }
  } else {
    calculation.push(value);
    accumulativecalculation = calculation.join("");
    screenDisplay.textContent = accumulativecalculation;
  }
}
console.log(calculation);
buttons.forEach((button) => button.addEventListener("click", () => calculate(button)));
const enterEl = document.getElementById("enter");
console.log(enterEl);
