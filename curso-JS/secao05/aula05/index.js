//* Filtrando arrays

//* Map
//Vai alterar valores do array, vai receber o mesmo array só que com valores alterados.

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeros2x = numeros.map((numero) => {
  return 2 * numero;
});
// console.log(numeros2x);

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Carlos", idade: 19 },
  { nome: "Maria", idade: 20 },
  { nome: "Fernanda", idade: 20 },
  { nome: "Eduardo", idade: 19 },
  { nome: "Rachel", idade: 40 },
  { nome: "Luiz", idade: 21 },
];

const nomes = pessoas.map((pessoa) => {
  return pessoa.nome;
});

const ids = pessoas.map((pessoa, id) => {
  return `id: ${id + 1} = ${pessoa.nome}, ${pessoa.idade} anos`;
});

const idades = pessoas.map((pessoa) => {
  delete pessoa.nome;
  return pessoa;
});

console.log(nomes);
console.log(ids);
console.log(idades);
