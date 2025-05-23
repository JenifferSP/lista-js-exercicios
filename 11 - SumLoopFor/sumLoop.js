/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/
const prompt = require("prompt-sync")({sigint:true});


console.log("-------------------");
console.log("Programa de soma");
console.log("-------------------");

let totalSum = 0;

for(i = 0; i < 5; i++){
const input = prompt(`Digite o ${i+1}º número: `);
    const number = parseFloat(input);
    
    if(!isNaN(number)) {
        totalSum += number;
    } else {
        console.log("Valor inválido! Digite apenas números.");
        i--
    }
}

console.log(`\nA soma total é: ${totalSum}`);
