var input = require('readline-sync');

console.log(`----------------------------------------`);
console.log(`EXERCICIO 5`);
console.log(`----------------------------------------`);

/* 5) Você está em uma sala com três interruptores, cada um conectado a uma
lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que
está, mas pode ligar e desligar os interruptores quantas vezes quiser. 
Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você 
faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, 
qual interruptor controla cada lâmpada? 
*/

// Array de objetos lambadas
let lamps = [
 { id: 1, on: false, warm: false }, // Lâmpada 1
 { id: 2, on: false, warm: false }, // Lâmpada 2
 { id: 3, on: false, warm: false }  // Lâmpada 3
];

// Função para ligar uma lâmpada e aquecê-la se ela ficar ligada por algum tempo
function turnOnLamp(lamp, duration) {
 lamp.on = true;
 if (duration > 0) {
   setTimeout(() => {
     lamp.warm = true; // Se ligada por mais de 1 segundo, ela fica quente
   }, duration * 1000);
 }
}

// Função para desligar a lâmpada
function turnOffLamp(lamp) {
 lamp.on = false;
}

// Função principal para descobrir qual interruptor controla qual lâmpada
function discoverSwitches() {
 // 1. Liga o primeiro interruptor (lâmpada 1) por alguns segundos (aquecendo-a)
 console.log('Ligando o primeiro interruptor...');
 turnOnLamp(lamps[0], 3); // Lâmpada aquece por 3 segundos

 // 2. Desliga o primeiro interruptor e liga o segundo interruptor (lâmpada 2)
 setTimeout(() => {
   console.log('Desligando o primeiro interruptor e ligando o segundo...');
   turnOffLamp(lamps[0]); // Desligando a lâmpada 1
   turnOnLamp(lamps[1], 0); // Ligando a lâmpada 2, mas sem deixar tempo para aquecer

   // 3. Agora simula a ida à sala das lâmpadas para verificar o estado
   setTimeout(() => {
     console.log('Verificando as lâmpadas...');

     lamps.forEach((lamp, index) => {
       if (lamp.on) {
         console.log(`Lâmpada ${lamp.id} está acesa: Interruptor ${index + 1}`);
       } else if (lamp.warm) {
         console.log(`Lâmpada ${lamp.id} está apagada mas quente: Interruptor ${index + 1}`);
       } else {
         console.log(`Lâmpada ${lamp.id} está apagada e fria: Interruptor ${index + 1}`);
       }
     });
   }, 1000); // Simula a ida até a sala
 }, 4000); // Espera até a lâmpada 1 ficar quente antes de desligar e ligar a lâmpada 2
}

// Inicia o processo
discoverSwitches();