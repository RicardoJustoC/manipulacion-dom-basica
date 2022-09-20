const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const pResult = document.getElementById('result');
const btnCalcular = document.querySelector('#btnCalcular');

form.addEventListener('submit', sumarValues);
function sumarValues(e) {
    e.preventDefault();
    console.log(e);
    const suma = valor1.value +valor2.value;
    pResult.innerText = 'Result: '+suma;
    
}

