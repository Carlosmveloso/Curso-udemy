//* Revisão do básico em arrays
//São valores por referência

let pessoas = ["Carlos", "Eduardo", "Marques"];
console.log(pessoas);

pessoas[2] = "Veloso"; // Adiciona um item no array no índice indicado
console.log(pessoas);

pessoas.pop();// Remove um item do final do array
console.log(pessoas);

//PS: Se o array for muito grande pode trazer problemas de performance
pessoas.shift();// Remove um item do ínicio do array
console.log(pessoas);

const removidos = pessoas.pop();
console.log(pessoas, removidos);

pessoas.push('Carlinhos');// Adiciona um item do final do array
console.log(pessoas);

//PS: Se o array for muito grande pode trazer problemas de performance
pessoas.unshift('Carlão');// Adiciona um item no ínicio do array
console.log(pessoas);

//Transforma uma string em uma array
const nome = 'Carlos Eduardo Marques Veloso';
console.log(nome)
const nomes = nome.split(' ')// Nessa caso ele está cortando a string quando tiver um espaço
console.log(nomes);


//Tranforma uma array em uma string
const nome2 = ['Carlos', 'Eduardo', "Marques"];
console.log(nome2);
const nomes2 = nome2.join(' ');// Basicamente a mesma coisa que o split só que mudando os fatores
console.log(nomes2);

