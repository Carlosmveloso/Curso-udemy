//* Concatenando arrays

const n1 = [1, 2, 3];
const n2 = [4, 5, 6];
const n3 = n1.concat(n2); //Função para concatenar arrays
//Outra forma de fazer a concatenação é usando o SPREAD
const n4 = [...n1, ...n2];// Ele espalha todos os elementos que existem no n1 e n2.

console.log(n3);

