/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/ 
const prompt = require("prompt-sync")({sigint:true});

console.log("----------------------");
console.log("Programa de Tabuada");
console.log("----------------------");

const input = prompt("Digite um valor inteiro: ");
const number = parseInt(input);

if(isNaN(number)) {
    console.log("Valor inválido! Digite um número inteiro.");
} else {
    console.log("----------------------");
    console.log(`Tabuada do ${number}`);
    console.log("----------------------");

    for(let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}