//* Atribuição via desestruturação (Arrays)

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras // [a, b, c] => [B, C, A]

console.log(a, b, c);


const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, ...resto] = numeros; //Pega pelo índice o array
console.log(primeiroNumero, segundoNumero, resto);

// O operador ... pode ser usado de duas maneiras 'rest' para poder pegar o resto de alguma coisa e 'spread' para espanhar, desbribuir alguma coisa

//                             0          1          2
//                          0  1  2    0  1  2    0  1  2
const arrayDentroArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = arrayDentroArray;
console.log(lista1[2]);
console.log(arrayDentroArray[1][2]);
