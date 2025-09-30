//* Um pouco mais sobre number em javascript

let num1 = 10;
//* Converter um number para string
num1 = num1.toString();
console.log(typeof num1);

//* Saber se o número é inteiro, vai retornar um valor booleano
let num2 = 19;
console.log(Number.isInteger(num2));
let num3 = 19.9;
console.log(Number.isInteger(num3));

let temp = num3 * "Olá";
console.log(Number.isNaN(temp));

//* Um problema do JavaScript
// Padrão do JavaScript => IEEE 754-2008;
let n1 = 0.7;
let n2 = 0.1;

n1 += n2; // 0.8
n1 += n2; // 0.8
n1 += n2; // 0.8

n1 = Number(n1.toFixed(2));

console.log(n1);
console.log(Number.isInteger(n1));

