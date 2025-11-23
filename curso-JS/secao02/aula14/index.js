//* Um pouco sobre strings em JavaScript

// let umaString = "Uma \"string\""; //* Usar a \ como caracter de escape
// console.log(umaString);

//*              01234567
let umaString = 'Um texto';
console.log(umaString[3]);

console.log(umaString.charAt(3));// Fala para a gente o tá escrito no índice 3, parecido com o exemplo de cima.

console.log(umaString.indexOf('texto'));// Procura em qual índice começa a palavra texto.

console.log(umaString.lastIndexOf('Um'));// Faz a mesma cois que o de cima porém começa do final para o início.

console.log(umaString.length);// Mostra a quantidade de caracteres que vai ter nessa string.
console.log(umaString.slice(3, 8));// Corta uma parte da sua string, indicando onde começa o corte e onde termina.
console.log(umaString.slice(-3));

console.log(umaString.split(' ', 2));// Divide a string onde tiver o termo inserido e quantas vezes também.







