/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/
const prompt = require("prompt-sync")({sigint:true});

while(true){
    const input = Number(prompt("Adicione um numero inteiro:"));
    const number = parseInt(input)

        if(isNaN(number)){
            console.log("Digite um número válido");
            continue;
        }
            if(number % 2 == 0){
                console.log(`${number} é PAR!`);
            }else(
                console.log(`${number} é IMPAR!`)
            )
    

     const runOn = prompt("Deseja continuar? (s/n)").toUpperCase()
     if(runOn === "N"){
        console.log("Ate a proxima!")
        break;
     }
}