/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/

const prompt = require("prompt-sync")({sigint:true});

console.log("--------------------------");
console.log("Verificado de triangulo");
console.log("--------------------------");

while(true){
    const input1 = prompt("Qual é o 1° do triangulo?");
    const input2 = prompt("Qual é o 2° do triangulo?");
    const input3 = prompt("Qual é o 3° do triangulo?");
    const sideA = parseFloat(input1);
    const sideB = parseFloat(input2);
    const sideC = parseFloat(input3);

    if(sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB){

            if(sideA==sideB || sideA==sideC || sideB==sideC){
                console.log("O triangulo é um isósceles");
            }
            else if( sideA !== sideB && sideB !== sideC){
                console.log("O triangulo é um escaleno");
            }
            else if(sideA === sideB && sideB === sideC){
                console.log("O triangulo é um eqüilátero");
            }
       
    }else{
        console.log("Não é possivel formar um triangulo!");
    }
   
    let runOn;

    do{
        runOn = prompt("Deseja criar mais um triangulo?(s/n)").toUpperCase();
    }while(runOn !== 'S' && runOn !== "N"){
        if(runOn === 'N'){
            console.log("Ate");
            break;
        }
    }
}