//* Filtrando arrays

//* Reduce
// Reduz todo o array a um único elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//* Diferente do filter e map, tem que colocar um valor inicial
const total = numeros.reduce((numInicial, numero) => {
  return (numInicial += numero);
}, 0);
//* Colocamos o valor inicial aqui, se colocarmos nada ele pega o primeiro elemento do array
console.log(total);

//Retorne a pessoa mais velha
const pessoas = [
  { nome: "Carlos", idade: 19 },
  { nome: "Maria", idade: 20 },
  { nome: "Fernanda", idade: 20 },
  { nome: "Eduardo", idade: 19 },
  { nome: "Rachel", idade: 40 },
  { nome: "Luiz", idade: 21 },
];

const maisVelha = pessoas.reduce((pessoaMv, pessoa) => {
    if (pessoaMv.idade > pessoa.idade) {
        return pessoaMv;
    };
    return pessoa
});
console.log(maisVelha);
