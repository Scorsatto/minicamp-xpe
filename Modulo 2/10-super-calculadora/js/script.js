var inputA = document.querySelector("#input-A");
var inputB = document.querySelector("#input-B");

function start() {
  var buttonCalculate = document.querySelector("#button-calculate");
  buttonCalculate.addEventListener("click", handleButtonClick);

  handleButtonClick();
}

function handleButtonClick() {
  var numberA = Number(inputA.value);
  var numberB = Number(inputB.value);

  sum(numberA, numberB);
  subtractionAB(numberA, numberB);
  subtractionBA(numberA, numberB);
  multiplication(numberA, numberB);
  divisionAB(numberA, numberB);
  divisionBA(numberA, numberB);
  potentiationAB(numberA, numberB);
  potentiationBA(numberA, numberB);
  squareRootA(numberA);
  squareRootB(numberB);
  factorialA(numberA);
  factorialB(numberB);
  percentageAB(numberA, numberB);
  percentageBA(numberA, numberB);
  average(numberA, numberB);
}

function sum(numberA, numberB) {
  var sum = document.querySelector("#sum");
  sum.textContent = fixedNumber(numberA + numberB);
}

function subtractionAB(numberA, numberB) {
  var subtractionAB = document.querySelector("#subtractionAB");
  subtractionAB.textContent = fixedNumber(numberA - numberB);
}

function subtractionBA(numberA, numberB) {
  var subtractionBA = document.querySelector("#subtractionBA");
  subtractionBA.textContent = fixedNumber(numberB - numberA);
}

function multiplication(numberA, numberB) {
  var multiplication = document.querySelector("#multiplication");
  multiplication.textContent = fixedNumber(numberA * numberB);
}

function divisionAB(numberA, numberB) {
  var divisionAB = document.querySelector("#divisionAB");
  divisionAB.textContent = fixedNumber(numberA / numberB);
}

function divisionBA(numberA, numberB) {
  var divisionBA = document.querySelector("#divisionBA");
  divisionBA.textContent = fixedNumber(numberB / numberA);
}

function potentiationAB(numberA, numberB) {
  var potentiationAB = document.querySelector("#potentiationAB");
  potentiationAB.textContent = fixedNumber(numberA ** numberB);
}

function potentiationBA(numberA, numberB) {
  var potentiationBA = document.querySelector("#potentiationBA");
  potentiationBA.textContent = fixedNumber(numberB ** numberA);
}

function squareRootA(numberA) {
  var squareRootA = document.querySelector("#squareRootA");
  squareRootA.textContent = fixedNumber(Math.sqrt(numberA));
}

function squareRootB(numberB) {
  var squareRootB = document.querySelector("#squareRootB");
  squareRootB.textContent = fixedNumber(Math.sqrt(numberB));
}

function factorialA(numberA) {
  var factorialA = document.querySelector("#factorialA");
  factorialA.textContent = fixedNumber(factorialize(numberA));
}

function factorialB(numberB) {
  var factorialB = document.querySelector("#factorialB");
  factorialB.textContent = fixedNumber(factorialize(numberB));
}

function percentageAB(numberA, numberB) {
    var percentageAB = document.querySelector("#percentageAB");
    percentageAB.textContent = fixedNumber(Math.ceil(numberB / numberA * 100)) + "%";
}

function percentageBA(numberA, numberB) {
    var percentageBA = document.querySelector("#percentageBA");
    percentageBA.textContent = fixedNumber(Math.ceil(numberA / numberB * 100)) + "%";
}

function average(numberA, numberB){
    var average = document.querySelector("#average");
    average.textContent = fixedNumber( (numberA + numberB) / 2);
}

function factorialize(number) {
  if (number === 0 || number === 1) return 1;

  for (var i = number - 1; i >= 1; i--) {
    number *= i;
  }

  return number;
}

function fixedNumber(number) {
  return number.toFixed(2).replace(".", ",").replace(",00", "");
}

start();
