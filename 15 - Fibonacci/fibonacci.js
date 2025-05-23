/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

let firstTerm = 1;
let secondTerm = 1;
let sequence = [firstTerm, secondTerm]

console.log("---------------------------");
console.log("Sequencia de Fibonacci.");
console.log("---------------------------");

for (let i = 2; i < 10; i++){
    const next = firstTerm + secondTerm;
    sequence.push(next);

    firstTerm = secondTerm;
    secondTerm = next;
}

console.log(sequence.join(", "));