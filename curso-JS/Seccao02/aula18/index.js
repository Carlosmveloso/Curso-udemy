//* Funções
function primeiraFuncao() {
  console.log("Oi, estou estudando funções");
}
primeiraFuncao();

// Função com parametros
function funcaoComParametro(nome) {
  console.log(`Oi ${nome}, como vai ?`);
}
funcaoComParametro("Carlos");

//Return da função
function funcaoComRetorno(nome) {
  console.log(`Meu nome é ${nome}`);
  return nome;
  //O return indica o encerramento da função, nada que esta abaixo será executado
}
let nomeInserido = funcaoComRetorno("Carlos");
console.log(nomeInserido);

// Função que faz a soma de dois valores
function somar(n1 = 1, n2 = 1) {
  // Quando não declarado os parametros ele assume esse valores que você declarou
  return n1 + n2;
}
console.log(somar(1, 2));

// Função anônima
const raizQuadrada = function (n) {
  return n ** 0.5;
};
console.log(raizQuadrada(49));

//Arrow function
//Veio para simplificar a função
const raiz = (n) => {
  return n ** 0.5;
};
console.log(raiz(36));
