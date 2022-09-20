const h1 = document.querySelector("h1");
const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');

const btnCalcular = document.querySelector('#btnCalcular');
pResult = document.getElementById('result');
function onClick() {
    const suma = valor1.value +valor2.value;
    pResult.innerText = 'Result: '+suma;
    
}
