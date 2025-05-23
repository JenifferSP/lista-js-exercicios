/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt = require("prompt-sync")({ sigint: true });

console.log("----------------------");
console.log("  Calculo Fatorial");
console.log("----------------------");

const input = prompt("Digite um número inteiro positivo: ");
const number = parseInt(input);

if (isNaN(number) || number < 0) {
    console.log("Erro: Digite apenas números inteiros positivos!");
} else {
    let factorial = 1;
    
    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }

    console.log(`\n${number}! = ${factorial}`);
}