const numberButton = document.getElementsByName('number');
const operationButton = document.getElementsByName('operation');
const equalButton = document.getElementsByName('equal')[0];
const deleteButton = document.getElementsByName('delete')[0];

var operadorHistorial = document.getElementById("operadorHistorial");
var numeroAHistorial = document.getElementById("numeroAHistorial");
var numeroBHistorial = document.getElementById("numeroBHistorial");

var valorA = 0;
var valorB = 0;
var resultado = 0;

var result = document.getElementById('result');
var operationActual = '';
var operationAnterior = '';
var operation = undefined;

numberButton.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText)
    })
});

operationButton.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText);
    })
});
//eventos
equalButton.addEventListener('click', function(){
    calcular();
    updateDisplay();
});

deleteButton.addEventListener('click', function(){
    clear();
    updateDisplay();
})

function selectOperation(op) {
    if(operationActual === '') return;
    if(operationAnterior !== ''){
        calcular();
    }
    operation = op.toString();
    operationAnterior = operationActual;
    operationActual = '';
}
//operaciones
function calcular() {
    var calculo;
    const anterior = parseFloat(operationAnterior);
    const actual = parseFloat(operationActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch (operation) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "*":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    
    operationActual = calculo;
    operation = undefined;
    operationAnterior = '';
}

function addNumber(num) {
   if ( num == '.' && operationActual.toString().includes('.'))
   return;
   operationActual = operationActual.toString() + num.toString();
   updateDisplay();
}

function clear() {
    operationActual = '';
    operationAnterior = '';
    operation = undefined;
}

function updateDisplay() {
    result.value = operationActual;
}