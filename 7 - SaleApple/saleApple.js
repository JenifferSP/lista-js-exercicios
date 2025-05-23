/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require("prompt-sync")({sigint:true});

const apple = 0.30;
const apple2 = 0.25;

console.log("------------------");
console.log("Venda De Maçãs");
console.log("------------------");

const input = prompt("Quantas maças deseja comprar?");
const saleApple = parseInt(input)

if(!isNaN(saleApple) && saleApple <= 0){
    console.log("Valor invalido!")
}else{
    if(saleApple < 12){
        console.log(`O valor da sua compra é: ${(apple * saleApple).toFixed(2)}`);
    }else{
        console.log(`O valor da sua compra é: ${(apple2 * saleApple).toFixed(2)}`);
         console.log(`Volte sempre`);
    };
};
