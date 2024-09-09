var input = require('readline-sync');

console.log(`----------------------------------------`);
console.log(`EXERCICIO 2`);
console.log(`----------------------------------------`);

/**
 * 2) Escreva um programa que verifique, em uma string, a existência da letra 
 * ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em
 * que ela ocorre.
 */

//Declaração da função que faz a contagem da frase.
function countLetters(text) {
  // Converte a string para minúsculas para simplificar a contagem
  text = text.toLowerCase();

  // Usa uma expressão regular para contar a ocorrência da letra 'a'
  let matches = text.match(/a/g);

  // Conta o número de ocorrências, se matches for null, então a letra não foi encontrada
  let count = matches ? matches.length : 0;

  // Exibe o resultado
  if (count > 0) {
    console.log(`A letra 'a' ocorre ${count} vezes.`);
  } else {
    console.log("A letra 'a' não foi encontrada.");
  }
}

// Função para validar a entrada
function getValidInput() {
  let inputText;
  do {
    inputText = input.question('Digite uma frase (deve ser informada apenas letras e espacos):');

    // Verifica se a entrada contém apenas letras e espaços
    if (/^[a-zA-Z\s]+$/.test(inputText)) {
      return inputText;
    } else {
      console.log("Entrada inválida. Por favor, insira apenas letras e espacos.");
    }
  } while (true);
}

// Obtém e valida a entrada do usuário
let string = getValidInput();
countLetters(string);
