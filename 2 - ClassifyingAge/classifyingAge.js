/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/
const prompt = require("prompt-sync")({sigint:true});

console.log("-----------------------");
console.log("Classificando idades");
console.log("-----------------------");



while(true){
    const input = prompt("Adicione uma idade: ");
    const age = parseInt(input);
    
         if (isNaN(age)) {
        console.log("Erro: Digite um número válido!");
        continue; 
    }

    if (age <= 12) {
        console.log("É criança!");
    } else if (age <= 18) {
        console.log("É adolescente!");
    } else if (age <= 50) { 
        console.log("É adulto!");
    } else { 
        console.log("É idoso!");
    }
    
    const runOn = prompt("Deseja continuar? (s/n) ").toUpperCase();
    if (runOn === "N") {
        console.log("Até mais!");
        break;
    }
}