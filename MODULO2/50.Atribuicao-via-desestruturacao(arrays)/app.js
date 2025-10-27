let a = 'A';  // COMO INVERTER O VALOR PARA B
let b = 'B';  // COMO INVERTER O VALOR PARA C
let c = 'C';  // COMO INVERTER O VALOR PARA A


//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

//[a, b ,c] = [1, 2, 3];  REATRIBUINDO OS VALORES DAS VARIÁVEIS a, b, c

const valores = [b, c, a];

[a, b, c] = valores;

//console.log(a, b, c); // 1 2 3

//INDICES
//               0  1  2  3  4  5  6 -> INDICES                
const numeros = [1, 2, 3, 4, 5, 6, 7]

const [primeiroNumero, segundoNumero, ...resto] = numeros; // primeiroNumero = 1 e segundoNumero = 2 resto = [3, 4, 5, 6, 7] -> ... operador rest/spread

console.log(primeiroNumero, segundoNumero);
console.log(resto);

const [primeiro, , terceiro, , quinto] = numeros; // espaços vazios pulam o valor

console.log(primeiro, terceiro, quinto); // 1 3 5