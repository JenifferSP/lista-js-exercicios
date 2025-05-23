/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/
const prompt = require("prompt-sync")({sigint:true});

console.log("-------------------------------");
console.log("Programa de Media Aritmética");
console.log("Para sair digite 0...");
console.log("-------------------------------");

 let total = 0
 let numbers
 let amount = 0

do{

    const input = prompt("Digite um numero:");
    numbers = parseFloat(input);

    if(numbers !== 0 && !isNaN(numbers)){
        total += numbers;
        amount++;
    }else if(isNaN(numbers)){
        console.log("Valor inválido! Digite apenas números.")
    }

        }while( numbers !== 0){
            
            if (amount > 0){

                const media = total / amount
                console.log(`A media aritmetica é ${media.toFixed(2)}`)
            
        }
}
console.log("Até mais!");