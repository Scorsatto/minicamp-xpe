var inputWeight = document.querySelector('#input-weight');
var inputHeight = document.querySelector('#input-height');

function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateImc(weight, heigth) {
    return weight / (heigth * heigth);
}

function handleButtonClick() {
    var imcResult = document.querySelector('#imc-result');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);  
    var formattedImc = imc.toFixed(2).replace('.', ',');

    imcResult.textContent = formattedImc;
}

start();