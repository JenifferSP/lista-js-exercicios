/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

const prompt = require("prompt-sync")({sigint:true});

while(true){

    const input = prompt("Qual é o seu peso?");
    const input2 = prompt("Qual é a sua altura? (Ex: 1.65)");
    const inputWeight  = parseFloat(input);
    const inputHeight  = parseFloat(input2);

    const imc = (inputWeight / (inputHeight ** 2)).toFixed(1);
    if(imc < 18.5){
        console.log("Cuidado! Voce esta abaixo do peso!");
    }
    else if (imc > 18.5 && imc < 24.9){
        console.log("Parabens! Seu peso esta normal!");
    }
    else if (imc > 25 && imc < 29.9){
        console.log("Voce esta com sobrepeso!");
    }
    else{
        console.log("Cuidado! Voce esta com obesidade!");
    };

    let runOn
    do{
        runOn = prompt("Deseja continuas? (s/n)").toUpperCase();
    }
    while(runOn !== 'S' && runOn !== 'N'){
        if(runOn === 'N'){
            console.log("Ate logo");
            break;
        };
    };
};



