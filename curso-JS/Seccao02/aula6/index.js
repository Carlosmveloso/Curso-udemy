//* Variáveis

// 1-Não podemos criar variáveis com palavras reservadas
// 2-Variáveis precisam ter nomes significativos
// 3-Não pode começar o nome de uma variável com número
// 4-Não podem conter espaços ou traços
// 5-Utilizamos camelCase
// 6-Case-sensitive
// Não podemos redeclarar variáveis com let

let nome = 'Carlos';

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.')

let nome1;
nome1 = 'Carlos';
console.log(nome1);
nome1 = 'Rachel';
console.log(nome1)