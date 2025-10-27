/**
 * A soma de dois números de ponto flutuante são imprecisos em JavaScript.
 * Isso ocorre devido à forma como os números de ponto flutuante são representados na memória do computador.
 */

console.log(0.1 + 0.7); // 0.7999999999999999

/**
 * Para resolver esse problema, você pode usar o método toFixed() para arredondar o resultado para um número fixo de casas decimais.
 * O método toFixed() retorna uma string, então você pode usar o operador unário + para convertê-la de volta para um número.
 */     

console.log(+(0.1 + 0.7).toFixed(2)); // 0.8

// Outra forma de resolver esse problema é multiplicar os números por uma potência de 100, realizar a operação e depois dividir o resultado pela mesma potência de 100.

let num1 = 0.1;
let num2 = 0.7; 

soma = (num1 * 100 + num2 * 100) / 100;
console.log(soma); // 0.8
