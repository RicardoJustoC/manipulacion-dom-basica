const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.getElementsByClassName("parrafito    ");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(h1, p, parrafito, pid, input);
console.log({ h1, p, parrafito, pid, input });

h1.innerHTML='parrafo <br> parrafon';
h1.innerText='esto es un texto';
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
h1.classList.toggle('verde');
h1.classList.contains('verde');

input.value = '1235555';

const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png');
pid.innerHTML='';
pid.appendChild(img);