
let num = parseInt(prompt("Digite um número para descobrir se ele é Primo"));

while (num < 2) {

    alert("Digite um número maior que 1")
    num = parseInt(prompt("Digite um número para descobrir se ele é Primo"));
}


let resultado = document.querySelector("#resultado");

let isPrime = true;
let raizQuadradaDoNumero = Math.sqrt(num);

for (let i = 2; i < num; i++) {
    if (num % raizQuadradaDoNumero == 0) {
        isPrime = false
        break;
    }
}

resultado.innerHTML = `O ${num} é primo ? ${isPrime}`;











