//* Estrutura de repetição WHILE e DO WHILE

let i = 0;

//* WHILE
// O While checa a condição e depois executa o código
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

function randomNumber(min, max) {
    const n = Math.random() * (max - min) + min;
    return Math.floor(n);
}

const min = 1;
const max = 50;

let rand = randomNumber(min, max);

while (rand !== 10) {
    rand = randomNumber(min, max);
    console.log(rand)
}

//* DO WHILE
//Vai executar o código depois confere a condição

do {
    rand = randomNumber(min, max);
    console.log(rand)
} while (rand !== 10)