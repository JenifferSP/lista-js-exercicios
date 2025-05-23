/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/
const prompt = require("prompt-sync")({ sigint: true });

const input1 = parseFloat(prompt('Digite o primeiro valor: '));
const input2 = parseFloat(prompt('Digite o segundo valor: '));


if (input1 === input2) {
    console.log("Os valores não podem ser iguais!");
} 

else if (input1 < input2) {
    console.log(`Valores em ordem crescente: ${input1}, ${input2}`);
} 
else {
    console.log(`Valores em ordem crescente: ${input2}, ${input1}`);
}