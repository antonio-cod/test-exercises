var input = require('readline-sync');

console.log(`----------------------------------------`);
console.log(`EXERCICIO 3`);
console.log(`----------------------------------------`);

/**
 * Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto
    K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
 */
//Declaração de variaveis
let counter = 12;
let sum = 0;
let number = 1;

//Laço de repetição
while (number < counter) {
  number = number + 1;   // Incrementa o valor de number com mais 1
  sum = sum + number;   // Adiciona valor de number ao sum
 
}

console.log("Valor final é",sum);   // Imprime o valor final da soma
