/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
const prompt = require("prompt-sync")({sigint:true});

const input = prompt("Digite um valor:");
const value = parseInt(input);
if (!isNaN(value)) {
    for(let i = 0; i < 10; i++) {
        console.log(value);
    }
} else {
    console.log("Valor inválido! Digite um número.");
}