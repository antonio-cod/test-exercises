var input = require('readline-sync')


/**1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
 * sempre será a soma dos 2 valores anteriores 
 * (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
 * linguagem que desejar onde, informado um número, ele calcule a sequência de 
 * Fibonacci e retorne uma mensagem avisando se o número informado pertence ou 
 * não a sequência. */

//Imprime um cabeçalho no terminal.
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     EXERCICIO 1   `)
  console.log(`------------------------------`)
}
/**
 * Gera a sequência de Fibonacci. Começa com primaryValue e secondValue e calcula
   os próximos valores da sequência.
 */
function fibonacci(primaryValue, secondValue){
  let result = " " //variavel iniciada vazia.
  let sum = 0 //variavel que inicia com valor 0.

  //Laço de repetição que determina quantas vezes vai ser calculado
  for(let counter = 0; counter < 10; counter++){
    sum = primaryValue + secondValue
    primaryValue = secondValue
    secondValue = sum
    result += sum + " "
  }

  return result //retorna o resultado da soma
}

//declaração de variáveis
let primaryValue = 0 
let secondValue = 0
let myFibonacci = ""

cabecalho()
//entrada de dados
/**
 * O loop do...while continua pedindo um valor válido. 
 */
do {
  primaryValue = Number(input.question('Digite o primeiro valor (deve ser maior ou igual a 0): '));

  // Verifica se o valor informado pelo usuário e uma string.
  if (isNaN(primaryValue)) {
    console.log('Por favor, insira um número válido.');
    
  } else if (primaryValue < 0) {// verifica se é menor que 0.
    console.log('O número deve ser maior que ou igual a 0. Tente novamente.');
  }
}// condição do loop
 while (isNaN(primaryValue) || primaryValue < 0);

 /**
 loop do...while continua pedindo um valor até que um número válido e maior que
 o primaryValue seja fornecido
  */
do {
  secondValue = Number(input.question('Digite o segundo valor (deve ser maior que o primeiro valor): '));

  if (isNaN(secondValue)) {
    console.log('Por favor, insira um número válido.');
  } else if (secondValue <= primaryValue) {
    console.log(`O segundo valor deve ser maior que o primeiro (${primaryValue}). Tente novamente.`);
  }
} //Condição do loop
while (isNaN(secondValue) || secondValue <= primaryValue);

/**
 * processamento de dados
 * myFibonacci Inicia recebimento os valores, primaryValue e secondValue,
    seguidos pela sequência de Fibonacci gerada pela função fibonacci
  */ 
myFibonacci = primaryValue + " " + secondValue 
myFibonacci += fibonacci(primaryValue, secondValue)

//saída de dados
console.clear()
cabecalho()
console.log("È uma sequencia de fibonaci",myFibonacci)
console.log(`------------------------------`)