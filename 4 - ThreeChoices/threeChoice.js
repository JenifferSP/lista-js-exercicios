/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
const prompt = require("prompt-sync")({sigint:true});

let option;
do {
    console.log("----------------------------");
    console.log("Menu interativo com Switch");
    console.log("----------------------------");
    console.log("1. Verifica se o numero é par ou impar");
    console.log("2. Converte temperatura");
    console.log("3. Descubra qual é o dobro do numero");
    console.log("4. Sair");
    
    option = prompt("Escolha uma opção: ");

    switch(option) {
        case "1":
            const numberInput = prompt("Digite um numero inteiro: ");
            const number = parseInt(numberInput);
            
            if (!isNaN(number)) {
                console.log(number % 2 === 0 ? "É par!!" : "É impar!");
            } else {
                console.log("Valor inválido!");
            }
            break;

        case "2":
            const tempInput = prompt("Digite a temperatura em Celsius: ");
            const temperature = parseFloat(tempInput);
            
            if (!isNaN(temperature)) {
                console.log(`${temperature}°C = ${(temperature * 9/5 + 32).toFixed(1)}°F`);
            } else {
                console.log("Valor inválido!");
            }
            break;

        case "3":
            const doubleInput = prompt("Digite um valor: ");
            const double = parseFloat(doubleInput);
            
            if (!isNaN(double)) {
                console.log(`O dobro de ${double} é ${double * 2}`);
            } else {
                console.log("Valor inválido!");
            }
            break;

        case "4":
            console.log("Até mais!");
            break;

        default:
            console.log("Opção inválida! Digite");
    }

    if (option !== "4") {
        prompt("Pressione Enter para continuar...");
    }
} while (option !== "4");