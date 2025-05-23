/*Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const prompt = require("prompt-sync")({sigint:true});

console.log("-------------------------");
console.log("Classificação de notas");
console.log("-------------------------");

while(true){
    const input = prompt("Qual é a nota? ");
    
    
    if(!/^\d*\.?\d+$/.test(input)) {  
        console.log("Por favor, digite um valor valido!");
        continue;
    }
    
    const note = parseFloat(input);
    
    if(note < 0 || note > 10) {
        console.log("A nota deve estar entre 0 e 10!");
        continue;
    }

   
    if(note >= 6) {
        console.log("Aprovado!!");
    }
    else if(note >= 5) {
        console.log("Em recuperação!");
    }
    else {
        console.log("Reprovado!");
    }

    
    let runOn
    do {
        runOn = prompt("Deseja adicionar mais uma nota? (s/n) ").toUpperCase();
    } while(runOn !== 'S' && runOn !== 'N');
    
    if(runOn === 'N'){
        console.log("Até mais!");
        break;
    }
}