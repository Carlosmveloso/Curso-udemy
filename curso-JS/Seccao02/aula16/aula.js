//* Falando sobre o objeto Math()

let n1 = 9.72;
let n2 = Math.floor(n1); // Arredonda para baixo
let n3 = Math.ceil(n1); // Arredonda para cima
let n4 = Math.round(n1); // Arredonda para o mais próximo ou pra baixo ou para cima

console.log(n2);
console.log(n3);
console.log(n4);

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Retorna o maior número entre os listados
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Retorna o menor número entre os listados

console.log(Math.random().toFixed(2)); // Gera um número aleatório entre 0 e 1, porém o 1 não está incluso.

console.log(Math.round(Math.random() * (10 - 5) + 5));





