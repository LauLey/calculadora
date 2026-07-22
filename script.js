let value1 = 0;
let value2 = 0;
let resultado = 0;
const numero = document.querySelectorAll(".numero");
const operador = document.querySelectorAll(".operador");
const AC = document.querySelector(".AC");
const DEL = document.querySelector
(".DEL");
const pantalla = document.querySelector("#pantalla");

function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    if (a===0||b===0) return "jaja gracioso";
    else return a/b;
}

function operate (a,op,b) {
    
}

numero.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        pantalla.textContent += e.target.textContent;
    })
})

AC.addEventListener("click", () => {
    pantalla.textContent = "";
    value1 = 0;
    value2 = 0;
    resultado = 0;
})