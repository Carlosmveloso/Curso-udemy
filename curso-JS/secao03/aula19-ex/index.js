//* Escreva uma função que recebe 2 números e retorne o maior entre eles

function saberMaiorNumero (num1, num2) {
    if (num1 < num2) {
        return `O maior número é o ${num2}`;
    } else {
        return `O maior número é o ${num1}`;
    }
}

let num1 = 10;
let num2 = 5;

console.log(saberMaiorNumero(num1,num2));