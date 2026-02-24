//* Escreva uma função que recebe um número e retorne o seguinte
//* Número é divisível por 3 = Fizz
//* Número é divisível por 5 = Buzz
//* Número é divisível por 3 e 5 = FizzBuzz
//* Número NÃO é divísel por 3 e 5 = Retorna o próprio número
//* Checar se o número é realmente um número = Retorna o próprio número
//* Use a função com números de 0 a 100

function gerarNumero(min, max) {
  const n = Math.random() * (max - min) + min;
  return Math.floor(n);
}

const min = 0;
const max = 100;

let numero = gerarNumero(min, max);

const verificarDivisor = (n) => {
  if (Number.isNaN(n)) {      
    return "Não é um número";
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 !== 0 && n % 5 !== 0) {
    return "Não é divisível";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  }
};

console.log(`Numero: ${numero} ${verificarDivisor(numero)}`);

for (let i = 0; i <= 100; i++) {
  console.log(i, verificarDivisor(i))
}
