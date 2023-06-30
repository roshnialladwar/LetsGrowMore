let result = document.getElementById('result');
let expression = '';

function appendValue(value) {
    expression += value;
    result.value = expression;
}

function clearResult() {
    expression = '';
    result.value = '';
}

function calculateResult() {
    try {
        let calculatedResult = eval(expression);
        result.value = calculatedResult;
        expression = '';
    } catch (error) {
        result.value = 'Error';
    }
}
